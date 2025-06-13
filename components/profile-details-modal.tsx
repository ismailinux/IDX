"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { X, Edit2, ArrowLeft, User } from "lucide-react"

interface ProfileDetailsProps {
  onClose: () => void
}

export default function ProfileDetails({ onClose }: ProfileDetailsProps) {
  const profileData = [
    { label: "Name", value: "John Michael Doe", status: "Active", showIcon: true },
    { label: "Date of Birth", value: "1992-06-20", status: "Active" },
    { label: "Nationality", value: "Nigerian", status: "Active" },
    { label: "State of Origin", value: "Imo State", status: "Active" },
    { label: "LGA", value: "AMAC", status: "Active" },
    { label: "Gender", value: "Male", status: "Active" },
    { label: "Marital Status", value: "Single", status: "Active" },
    { label: "Country", value: "Nigeria", status: "Active" },
  ]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-lg w-full max-w-xs sm:max-w-2xl lg:max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden">
        {/* Mobile Header */}
        <div className=" flex items-center justify-between p-4 border-b bg-white">
          <h2 className="text-lg font-semibold text-gray-900">Profile Information</h2>
          <Button variant="link" className="text-purple-600 hover:text-purple-700 p-0 h-auto" onClick={onClose}>
            <ArrowLeft className="h-4 w-4 mr-1" />
            Go Back
          </Button>
        </div>

        {/* Desktop Header */}
        {/* <div className="hidden sm:flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Profile Information</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div> */}

        {/* Content */}
        <div className="overflow-auto max-h-[calc(95vh-80px)] sm:max-h-[calc(90vh-80px)]">
          <div className="p-4 sm:p-6">
            {/* Mobile Card Layout */}
            <div className="sm:hidden space-y-3">
              {profileData.map((item, index) => (
                <Card key={index} className="bg-white border border-gray-200">
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{item.label}</span>
                        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 h-auto p-1">
                          <Edit2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center space-x-2">
                        {item.showIcon && (
                          <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                            <User className="h-4 w-4 text-blue-600" />
                          </div>
                        )}
                        <span className="font-medium text-gray-900">{item.value}</span>
                      </div>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-200 w-fit">{item.status}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Desktop Table Header - Hidden on mobile */}
            <div className="hidden sm:grid grid-cols-4 gap-4 p-4 bg-purple-100 rounded-t-lg border-b">
              <div className="font-medium text-gray-700">Label</div>
              <div className="font-medium text-gray-700">Value</div>
              <div className="font-medium text-gray-700">Status</div>
              <div className="font-medium text-gray-700">Action</div>
            </div>

            {/* Desktop Table Rows */}
            <div className="hidden sm:block border border-t-0 rounded-b-lg">
              {profileData.map((item, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-4 gap-4 p-4 border-b last:border-b-0 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <div className="text-gray-700 font-medium">{item.label}</div>
                  <div className="text-gray-900 flex items-center space-x-2">
                    {item.showIcon && (
                      <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                        <User className="h-4 w-4 text-blue-600" />
                      </div>
                    )}
                    <span>{item.value}</span>
                  </div>
                  <div>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">{item.status}</Badge>
                  </div>
                  <div>
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                      <Edit2 className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
