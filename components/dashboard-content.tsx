import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Activity, User, SquareCheckBig, AlertTriangle, LogIn, BarChart } from "lucide-react"
import { RadialProgress } from "./RadialProgress"
import { BarChartCard } from "./BarChartCard"
// import { SquareCheckBig, AlertTriangle, LogIn } from 'lucide-react';


interface DashboardContentProps {
  verificationItems: Array<{ label: string; progress: number }>
  notifications: Array<{ text: string; action: string; time: string; type: string }>
  activityLogs: Array<{ action: string; time: string; status: string, provider: string, timeAgo: string }>
  chartData: Array<{ month: string; value: number }>
}

export default function DashboardContent({
  verificationItems,
  notifications,
  activityLogs,
  chartData,
}: DashboardContentProps) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
      {/* Left content - spans 3 columns on xl screens */}
      <div className="xl:col-span-3 space-y-6">
        {/* Welcome section */}
        <div className="bg-white rounded-lg p-6 shadow-[0_4px_4px_0px_#3636FF24]">
          <h2 className="text-2xl font-semibold text-[#272727] mb-2">Hello, John 👋 Your identity is secured with AI.</h2>
          <p className="text-lg text-[#272727]">Verified on: April 12, 2024</p>
        </div>

        {/* Verification Progress and Security Score */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Verification Progress */}
          <Card className="shadow-[0_4px_4px_0px_#3636FF24]">
            <CardHeader>
              <CardTitle className="text-lg">Verification Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {verificationItems.map((item, index) => (
                <div key={index} className="space-y-2 flex justify-between items-center">
                  <div className="flex justify-between text-sm">
                    <span className="font-[400] text-gray-600">{item.label}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-semibold">{item.progress}%</span>
                  <Progress value={item.progress} className="h-[4px] w-[73px]" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Security Score */}
          <Card className="flex flex-col justify-center items-center pb-14 shadow-[0_4px_4px_0px_#3636FF24]">
            <CardHeader>
              <CardTitle className="text-lg">Overall Security Score</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center mt-10">
              <RadialProgress/>
            </CardContent>
          </Card>
        </div>

        {/* Chart */}
        {/* <Card className="shadow-[0_4px_4px_0px_#3636FF24] border border-blue-500">
          <CardHeader>
            <CardTitle className="text-lg">Signup rate - Last year</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between space-x-2">
              {chartData.map((item, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 flex-1">
                  <div className="bg-purple-500 w-full rounded-t" style={{ height: `${(item.value / 60) * 100}%` }} />
                  <span className="text-xs text-gray-500">{item.month}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card> */}
        <BarChartCard />
      </div>

      {/* Right sidebar */}
      <div className="space-y-6">
        {/* Notifications */}
        <Card className="shadow-[0_4px_4px_0px_#3636FF24]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg">Notifications</CardTitle>
            <Button variant="ghost" size="sm" className="text-gray-500 hover:text-blue-700">
              See all
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {notifications.map((notification, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-start space-x-3">
                  <div className=" mt-2" >
                      {notification.type === "warning" ? (
                        <div className="flex items-center justify-center rounded-sm">
                          <AlertTriangle className="h-5 w-5 text-yellow-500" />
                        </div>
                      ) : (
                        <div className="flex items-center justify-center rounded-sm">
                          <SquareCheckBig className="h-5 w-5 text-gray-800" />
                        </div>
                      )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">{notification.text}</p>
                    {notification.action && (
                      <Button variant="link" size="sm"
                      className={` font-medium ${
                            notification.type === "warning" ? "text-yellow-500" : "text-green-500"
                          }`}
                      >
                        {notification.action}
                      </Button>
                    )}
                    {/* <p className="text-xs text-gray-500 mt-1">{notification.time}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Activity Logs */}
        <Card className="shadow-[0_4px_4px_0px_#3636FF24]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg">Activity Logs</CardTitle>
            <Button variant="ghost" size="sm" className="text-gray-500 hover:text-blue-700">
              See all
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            {activityLogs.map((log, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  {/* <Activity className="h-4 w-4 text-gray-600" /> */}
                  <LogIn className="h-4 w-4 text-gray-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{log.action}</p>
                  <p className="text-xs text-gray-500 text-nowrap">{log.time}</p>
                  {/* <Badge variant="secondary" className="mt-1 text-xs">
                    {log.status}
                  </Badge> */}
                </div>
                <div className="text-right">
                    <p className="text-xs text-gray-900">{log.provider}</p>
                    <p className="text-xs text-gray-500">{log.timeAgo}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
