import { DashboardLayout } from "@/components/layout"
import { Metrics } from "@/components/metrics"
import { Insights } from "@/components/insights"
import { Orders } from "@/components/orders"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpIcon } from 'lucide-react'

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">At a glance</h2>
          <select className="rounded-md border border-gray-300 bg-white px-2 py-1 text-sm">
            <option>7 days</option>
            <option>30 days</option>
            <option>3 months</option>
          </select>
        </div>
        <Metrics />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <Insights />
            </CardContent>
          </Card>
          <Card className="col-span-3 overflow-hidden">
            <CardHeader>
              <CardTitle>Forecasts</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-8 bg-gradient-to-br from-[#26A69A] to-[#69F0AE] p-6 text-white">
                <div>
                  <div className="flex items-center">
                    <ArrowUpIcon className="mr-2 h-4 w-4" />
                    <span className="text-4xl font-bold">+15%</span>
                  </div>
                  <p className="mt-1 text-sm">forecasted increase in your sales closed by the end of the current month</p>
                </div>
                <div>
                  <div className="flex items-center">
                    <ArrowUpIcon className="mr-2 h-4 w-4" />
                    <span className="text-4xl font-bold">+20%</span>
                  </div>
                  <p className="mt-1 text-sm">forecasted increase in consultations by the end of the current month</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <Orders />
      </div>
    </DashboardLayout>
  )
}

