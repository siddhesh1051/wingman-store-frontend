import { DashboardLayout } from "@/components/layout";
import { Metrics } from "@/components/metrics";
import Insights from "@/components/insights";
import { Orders } from "@/components/orders";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex-1 space-y-4 p-8 mt-9 pt-6 rounded-xl mx-6 shadow-[0px_0px_0px_1px_#0000000F]">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-medium tracking-[-2%]">At a glance</h2>
          <Select>
            <SelectTrigger className="rounded-md border border-gray-300 bg-white px-2 py-1 text-sm -ml-2 w-[100px]">
              <SelectValue placeholder="7 days" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7-days">7 days</SelectItem>
              <SelectItem value="30-days">30 days</SelectItem>
              <SelectItem value="3-months">3 months</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Metrics />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-7 px-0">
            <CardHeader className="px-0">
              <CardTitle className="text-3xl font-medium tracking-[-2%]">
                Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <Insights />
            </CardContent>
          </Card>
        </div>
        <Orders />
      </div>
    </DashboardLayout>
  );
}
