"use client"

import { useEffect, useState } from "react"
import { ExternalLink } from 'lucide-react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Product {
  id: number
  title: string
  price: number
  image: string
}

export function Orders() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=4')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time spent</TableHead>
              <TableHead>Order Value</TableHead>
              <TableHead>Commission</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <img src={product.image} alt={product.title} className="h-8 w-8 rounded object-cover" />
                    <span className="truncate">{product.title}</span>
                  </div>
                </TableCell>
                <TableCell>{new Date().toLocaleDateString()}</TableCell>
                <TableCell>2h 5m</TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
                <TableCell>${(product.price * 0.1).toFixed(2)}</TableCell>
                <TableCell className="text-right">
                  <ExternalLink className="inline-block h-4 w-4 cursor-pointer" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

