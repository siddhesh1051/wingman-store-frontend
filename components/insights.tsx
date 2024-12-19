"use client";
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import Forecast from "./forecast";
import Image from "next/image";
import ChatIcon from "@/assets/ChatTeardrop.svg";
import BarGraphIcon from "@/assets/ChartBar.svg";

const weeklyData = [
  { day: "Mon", incoming: 28, answered: 22, experts: 6 },
  { day: "Tue", incoming: 30, answered: 24, experts: 7 },
  { day: "Wed", incoming: 35, answered: 29, experts: 8 },
  { day: "Thu", incoming: 40, answered: 35, experts: 6 },
  { day: "Fri", incoming: 38, answered: 33, experts: 7 },
  { day: "Sat", incoming: 45, answered: 40, experts: 8 },
  { day: "Sun", incoming: 50, answered: 44, experts: 9 },
  { day: "Mon", incoming: 32, answered: 26, experts: 5 },
  { day: "Tue", incoming: 42, answered: 36, experts: 7 },
  { day: "Wed", incoming: 48, answered: 41, experts: 9 },
  { day: "Thu", incoming: 52, answered: 45, experts: 6 },
  { day: "Fri", incoming: 50, answered: 43, experts: 8 },
  { day: "Sat", incoming: 55, answered: 49, experts: 9 },
  { day: "Sun", incoming: 60, answered: 53, experts: 10 },
  // Third week
  { day: "Mon", incoming: 34, answered: 28, experts: 6 },
  { day: "Tue", incoming: 38, answered: 32, experts: 7 },
  { day: "Wed", incoming: 42, answered: 36, experts: 8 },
  { day: "Thu", incoming: 48, answered: 40, experts: 7 },
  { day: "Fri", incoming: 45, answered: 38, experts: 6 },
  { day: "Sat", incoming: 50, answered: 44, experts: 9 },
  { day: "Sun", incoming: 55, answered: 48, experts: 10 },
];

const comparisonData = [
  { period: "This week", consultations: 25, orders: 20 },
  { period: "Last week", consultations: 18, orders: 12 },
];

export default function Insights() {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-7 bg-white py-6 rounded-3xl border-[0.5px] drop-shadow-sm px-2">
          <div className="flex items-center gap-2 mb-6 px-6">
            <Image src={ChatIcon} alt="icon" width={12} height={12} />
            <p className="text-xs text-labelText uppercase tracking-wider">
              CONSULTATIONS
            </p>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={weeklyData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#F1F5F9"
                />
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  dy={10}
                  tick={{ fill: "#94A3B8", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  dx={-10}
                  tick={{ fill: "#94A3B8", fontSize: 12 }}
                  ticks={[10, 20, 30, 40, 50, 60]}
                  domain={[0, 60]}
                  yAxisId="left"
                  label={{
                    value: "CONSULTATIONS",
                    angle: -90,
                    position: "insideLeft",
                    style: {
                      textAnchor: "middle",
                      fill: "#94A3B8",
                      fontSize: 8,
                      opacity: 0.7,
                    },
                  }}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  axisLine={false}
                  tickLine={false}
                  dx={10}
                  tick={{ fill: "#94A3B8", fontSize: 12 }}
                  domain={[0, 20]}
                  tickFormatter={() => "10"}
                  label={{
                    value: "EXPERTS ONLINE",
                    angle: -90,
                    position: "insideRight",
                    style: {
                      textAnchor: "middle",
                      fill: "#94A3B8",
                      fontSize: 8,
                      opacity: 0.7,
                    },
                  }}
                />
                <Bar
                  dataKey="experts"
                  fill="#FEF9C3"
                  yAxisId="right"
                  barSize={20}
                  radius={[4, 4, 0, 0]}
                />
                <Line
                  type="monotone"
                  dataKey="incoming"
                  stroke="#94A3B8"
                  strokeWidth={2}
                  dot={false}
                  strokeDasharray="5 5"
                  yAxisId="left"
                />
                <Line
                  type="monotone"
                  dataKey="answered"
                  stroke="#15B79E"
                  strokeWidth={2}
                  dot={false}
                  yAxisId="left"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center gap-6 mt-4 border-t-[1px] mx-6 pt-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 rounded-sm bg-[#94A3B8]"></div>
              <span className="text-sm text-gray-600">Incoming</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 rounded-sm bg-[#15B79E]"></div>
              <span className="text-sm text-gray-600">Answered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 rounded-sm bg-[#FEF9C3] "></div>
              <span className="text-sm text-gray-600">Experts online</span>
            </div>
          </div>
        </div>

        <div className="col-span-3 bg-white py-8 rounded-3xl border-[0.5px] drop-shadow-sm">
          <div className="flex items-center gap-2 mb-6 px-6">
            <Image src={BarGraphIcon} alt="icon" width={12} height={12} />

            <p className="text-xs text-labelText uppercase tracking-wider">
              VS PAST PERIOD
            </p>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={comparisonData}
                margin={{ top: 5, right: 30, left: 0, bottom: 25 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#F1F5F9"
                  horizontalPoints={comparisonData.map((_, index) => index)}
                />
                <XAxis
                  dataKey="period"
                  axisLine={false}
                  tickLine={false}
                  interval={0}
                  tick={{ fontSize: 12 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12 }}
                />
                <Bar
                  dataKey="consultations"
                  fill="#CCFBEF"
                  barSize={30}
                  radius={[5, 5, 0, 0]}
                />
                <Bar
                  dataKey="orders"
                  fill="#115E59"
                  barSize={30}
                  radius={[5, 5, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center gap-6  border-t-[1px] mx-6 pt-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 rounded-sm bg-[#CCFBEF] "></div>
              <span className="text-sm text-gray-600">Consultations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 rounded-sm bg-[#115E59] "></div>
              <span className="text-sm text-gray-600">Orders closed</span>
            </div>
          </div>
        </div>
        <Forecast />
      </div>
    </>
  );
}
