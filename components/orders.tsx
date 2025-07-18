"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp, ArrowUpRight } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

type SortConfig = {
  key: string;
  direction: "asc" | "desc" | null;
};

export function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: "",
    direction: null,
  });
  const itemsPerPage = 4;

  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSort = (key: string) => {
    let direction: "asc" | "desc" | null = "asc";

    if (sortConfig.key === key) {
      if (sortConfig.direction === "asc") {
        direction = "desc";
      } else if (sortConfig.direction === "desc") {
        direction = null;
      }
    }

    setSortConfig({ key, direction });
  };

  const getSortedProducts = () => {
    if (!sortConfig.key || !sortConfig.direction) {
      return products;
    }

    return [...products].sort((a, b) => {
      let aValue = a[sortConfig.key as keyof Product];
      let bValue = b[sortConfig.key as keyof Product];

      // Handle special cases for derived values
      if (sortConfig.key === "commission") {
        aValue = a.price * 0.1;
        bValue = b.price * 0.1;
      }

      if (sortConfig.direction === "asc") {
        return aValue > bValue ? 1 : -1;
      }
      return aValue < bValue ? 1 : -1;
    });
  };

  const sortedProducts = getSortedProducts();
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const SortIndicator = ({ columnKey }: { columnKey: string }) => {
    if (sortConfig.key !== columnKey) {
      return <ArrowDown className="ml-1 h-4 w-4 inline-block opacity-30" />;
    }
    return sortConfig.direction === "asc" ? (
      <ArrowUp className="ml-1 h-4 w-4 inline-block" />
    ) : (
      <ArrowDown className="ml-1 h-4 w-4 inline-block" />
    );
  };

  return (
    <Card className="border-none shadow-none">
      <CardHeader className="px-0">
        <h2 className="text-2xl md:text-3xl font-medium tracking-[-2%]">Orders</h2>
      </CardHeader>
      <CardContent className="p-0">
        {products.length === 0 ? (
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#15B79E]"></div>
          </div>
        ) : (
          <div>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <Table className="min-w-full">
                <TableHeader>
                  <TableRow className="bg-[#F9FAFB] py-2">
                    <TableHead
                      className="text-xs font-medium text-muted-foreground cursor-pointer min-w-[200px]"
                      onClick={() => handleSort("title")}
                    >
                      Product
                      <SortIndicator columnKey="title" />
                    </TableHead>
                    <TableHead
                      className="text-xs font-medium text-muted-foreground cursor-pointer min-w-[120px]"
                      onClick={() => handleSort("date")}
                    >
                      Date
                    </TableHead>
                    <TableHead className="text-xs font-medium text-muted-foreground min-w-[100px]">
                      Time spent
                    </TableHead>
                    <TableHead
                      className="text-xs font-medium text-muted-foreground cursor-pointer min-w-[120px]"
                      onClick={() => handleSort("price")}
                    >
                      Order Value
                      <SortIndicator columnKey="price" />
                    </TableHead>
                    <TableHead
                      className="text-xs font-medium text-muted-foreground cursor-pointer min-w-[120px]"
                      onClick={() => handleSort("commission")}
                    >
                      Commission
                      <SortIndicator columnKey="commission" />
                    </TableHead>
                    <TableHead className="text-right text-xs font-medium text-muted-foreground min-w-[120px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedProducts.map((product, index) => (
                    <TableRow key={product.id} className="hover:bg-transparent">
                      <TableCell className="py-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="h-10 w-10 rounded-full object-cover bg-muted flex-shrink-0"
                          />
                          <span className="font-medium truncate max-w-[150px] md:max-w-[200px]">
                            {product.title}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="font-medium text-sm">
                            {24 + index} Apr 2024
                          </span>
                          <span className="text-xs text-muted-foreground">
                            10:24 AM
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium text-sm">2h 5m</TableCell>
                      <TableCell className="font-medium text-sm">
                        ${product.price.toFixed(2)}
                      </TableCell>
                      <TableCell className="font-bold text-sm">
                        ${(product.price * 0.1).toFixed(2)}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          className="h-8 px-2 text-muted-foreground hover:text-foreground text-xs"
                        >
                          <span className="hidden sm:inline">View Chat</span>
                          <span className="sm:hidden">View</span>
                          <ArrowUpRight className="ml-1 h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-4">
              <Button
                variant="outline"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="text-sm"
              >
                Previous
              </Button>
              <span className="text-sm text-muted-foreground text-center">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="text-sm"
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
