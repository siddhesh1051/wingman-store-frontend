import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Metric {
  title: string
  value: string | number
  change: number
  changeType: "increase" | "decrease"
}

const metrics: Metric[] = [
  {
    title: "Consultations",
    value: "24",
    change: 15,
    changeType: "increase",
  },
  {
    title: "Orders Placed",
    value: "12",
    change: 15,
    changeType: "decrease",
  },
  {
    title: "Conversion",
    value: "50%",
    change: 15,
    changeType: "decrease",
  },
  {
    title: "Total Sales Value",
    value: "$2,400",
    change: 15,
    changeType: "increase",
  },
  {
    title: "Avg Order Value",
    value: "$240",
    change: 15,
    changeType: "increase",
  },
  {
    title: "Commission Paid",
    value: "$240",
    change: 15,
    changeType: "increase",
  },
]

export function Metrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p
              className={cn(
                "flex items-center text-xs",
                metric.changeType === "increase" ? "text-green-500" : "text-red-500"
              )}
            >
              {metric.changeType === "increase" ? (
                <ArrowUpIcon className="mr-1 h-4 w-4" />
              ) : (
                <ArrowDownIcon className="mr-1 h-4 w-4" />
              )}
              {metric.change}% {metric.changeType}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

