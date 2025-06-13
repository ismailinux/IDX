"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const data = [
  { month: "Jan", value: 35 },
  { month: "Feb", value: 42 },
  { month: "Mar", value: 25 },
  { month: "Apr", value: 55 },
  { month: "May", value: 62 },
  { month: "Jun", value: 18 },
  { month: "Jul", value: 12 },
  { month: "Aug", value: 78 },
  { month: "Sep", value: 45 },
  { month: "Oct", value: 68 },
  { month: "Nov", value: 15 },
  { month: "Dec", value: 32 },
]

export function BarChartCard() {
  return (
    <Card className="w-full shadow-[0_4px_4px_0px_#3636FF24]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <h3 className="text-sm font-medium text-muted-foreground">Signup rate</h3>
        <Select defaultValue="last-year">
          <SelectTrigger className="w-[100px] sm:w-[120px] h-8 text-xs sm:text-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="last-year">Last year</SelectItem>
            <SelectItem value="this-year">This year</SelectItem>
            <SelectItem value="last-month">Last month</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="w-full">
          {/* Y-axis labels */}
          <div className="flex">
            <div className="w-8 flex flex-col justify-between h-70 text-xs text-gray-500 pr-2">
              <span>90</span>
              <span>70</span>
              <span>50</span>
              <span>30</span>
              <span>10</span>
              <span>00</span>
            </div>

            {/* Chart area */}
            <div className="flex-1 relative">
              {/* Reference line */}
              <div
                className="absolute w-full border-t border-dashed border-purple-400 opacity-60"
                style={{ top: "22%" }}
              ></div>

              {/* Bars container */}
              <div className="h-70 flex items-end justify-between gap-1">
                {data.map((item, index) => (
                  <div key={index} className="flex flex-col items-center flex-1 max-sm:w-3">
                    <div
                      className={`w-full max-w-[28px]  mx-auto rounded-t-sm ${
                        item.month === "Aug" ? "bg-[#6976EB]" : "bg-[#6976EB52]"
                      }`}
                      style={{
                        height: `${Math.max((item.value / 90) * 192, 8)}px`, // 192px = h-48, minimum 8px
                      }}
                    ></div>
                    <span className="mt-2 text-xs max-sm:text-[9px] text-gray-500">{item.month}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
