"use client"

import { Card, CardContent } from "@/components/ui/card"
import { User } from "lucide-react"

export  function RadialProgress() {
  const score = 70
  const rating = "Excellent"

  // Calculate the stroke-dasharray and stroke-dashoffset for the progress circle
  const radius = 80
  const circumference = 2 * Math.PI * radius
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (score / 100) * circumference

  return (
    <div className="flex items-center justify-center">
      {/* <Card className="w-full max-w-sm bg-white shadow-lg">
        <CardContent className="p-8 "> */}
          {/* <h2 className="text-lg font-semibold text-gray-700 text-center mb-8">Overall Security Score</h2> */}

          <div className="relative flex items-center justify-center ">
            {/* Background circle */}
            <svg width="200" height="200" viewBox="0 0 200 200" className="absolute">
              <defs>
                <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1595D5" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#3636FF" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="80" fill="none" stroke="url(#backgroundGradient)" strokeWidth="12" />
            </svg>

            {/* Progress circle with gradient */}
            <svg width="200" height="200" viewBox="0 0 200 200" className="absolute transform -rotate-90">
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1595D5" />
                  <stop offset="100%" stopColor="#3636FF" />
                </linearGradient>
              </defs>
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="url(#progressGradient)"
                strokeWidth="20"
                strokeLinecap="round"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-1000 ease-out"
              />
            </svg>

            {/* Progress indicator dot */}
            {/* <div
              className="absolute w-6 h-6 bg-white border-4 rounded-full shadow-lg"
              style={{
                borderImage: "linear-gradient(135deg, #1595D5, #3636FF) 1",
                borderColor: "#1595D5",
                transform: `rotate(${(score / 100) * 360 - 90}deg) translateY(-86px)`,
                transformOrigin: "50% 86px",
              }}
            /> */}

            {/* Center content */}
            <div className="relative z-10 text-center border-black">
              <div className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
                  <path d="M27.4464 27.2985C24.9507 27.2985 22.8143 26.4099 21.037 24.6326C19.2598 22.8554 18.3712 20.7189 18.3712 18.2232C18.3712 15.7275 19.2598 13.591 21.037 11.8138C22.8143 10.0366 24.9507 9.14795 27.4464 9.14795C29.9421 9.14795 32.0786 10.0366 33.8558 11.8138C35.6331 13.591 36.5217 15.7275 36.5217 18.2232C36.5217 20.7189 35.6331 22.8554 33.8558 24.6326C32.0786 26.4099 29.9421 27.2985 27.4464 27.2985ZM9.2959 40.9114V39.0963C9.2959 37.8107 9.62677 36.629 10.2885 35.5513C10.9502 34.4736 11.8294 33.6512 12.926 33.084C15.2705 31.9117 17.6527 31.0326 20.0728 30.4465C22.4929 29.8604 24.9507 29.5673 27.4464 29.5673C29.9421 29.5673 32.4 29.8604 34.8201 30.4465C37.2402 31.0326 39.6224 31.9117 41.9669 33.084C43.0635 33.6512 43.9426 34.4736 44.6044 35.5513C45.2661 36.629 45.597 37.8107 45.597 39.0963V40.9114C45.597 42.1592 45.1527 43.2275 44.264 44.1161C43.3754 45.0047 42.3072 45.449 41.0593 45.449H13.8335C12.5857 45.449 11.5174 45.0047 10.6288 44.1161C9.74021 43.2275 9.2959 42.1592 9.2959 40.9114Z" fill="url(#paint0_linear_1123_7050)"/>
                  <defs>
                  <linearGradient id="paint0_linear_1123_7050" x1="27.4464" y1="9.14795" x2="27.4464" y2="45.449" gradientUnits="userSpaceOnUse">
                 <stop stop-color="#1595D5"/>
                 <stop offset="1" stop-color="#3636FF"/>
                 </linearGradient>
                 </defs>
                 </svg>
              </div>
              <div className="text-sm font-bold text-gray-800 mb-1">{score}</div>
              <div className="text-sm font-medium text-gray-600">{rating}</div>
            </div>
          </div>
        {/* </CardContent>
      </Card> */}
    </div>
  )
}
