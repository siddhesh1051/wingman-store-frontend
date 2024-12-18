"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const weeklyData = [
  { day: "Mon", incoming: 32, answered: 28, experts: 10 },
  { day: "Tue", incoming: 35, answered: 30, experts: 12 },
  { day: "Wed", incoming: 38, answered: 32, experts: 15 },
  { day: "Thu", incoming: 42, answered: 35, experts: 18 },
  { day: "Fri", incoming: 40, answered: 34, experts: 15 },
  { day: "Sat", incoming: 38, answered: 32, experts: 12 },
  { day: "Sun", incoming: 35, answered: 30, experts: 10 },
]

const compareData = [
  { name: "This week", consultations: 20, orders: 15 },
  { name: "Last week", consultations: 15, orders: 10 },
]

export function Insights() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">CONSULTATIONS</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              incoming: {
                label: "Incoming",
                color: "#8884d8",
              },
              answered: {
                label: "Answered",
                color: "#26A69A",
              },
              experts: {
                label: "Experts online",
                color: "#FFE0B2",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="expertsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FFE0B2" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#FFE0B2" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" vertical={false} />
                <XAxis 
                  dataKey="day" 
                  stroke="#888888" 
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  yAxisId="left"
                  stroke="#888888" 
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <YAxis 
                  yAxisId="right"
                  orientation="right"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="incoming" 
                  stroke="#8884d8" 
                  strokeWidth={2}
                  dot={false}
                  strokeDasharray="5 5"
                />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="answered" 
                  stroke="#26A69A" 
                  strokeWidth={2}
                  dot={false}
                />
                <Area
                  yAxisId="right"
                  type="monotone"
                  dataKey="experts"
                  stroke="none"
                  fill="url(#expertsGradient)"
                  fillOpacity={1}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">VS PAST PERIOD</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              consultations: {
                label: "Consultations",
                color: "#B2DFDB",
              },
              orders: {
                label: "Orders closed",
                color: "#0F4C3A",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={compareData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#888888" 
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  stroke="#888888" 
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar 
                  dataKey="consultations" 
                  fill="#B2DFDB" 
                  barSize={40} 
                  radius={[4, 4, 0, 0]}
                />
                <Bar 
                  dataKey="orders" 
                  fill="#0F4C3A" 
                  barSize={40} 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}

