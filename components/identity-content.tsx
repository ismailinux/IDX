"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Edit2, Download, RefreshCw, Upload, FileText, Plus, ArrowRight, ScanFace, IdCard } from "lucide-react"
import ProfileDetails from "./profile-details-modal"
import DocumentsModal from "./documents-modal"
import Image from 'next/image';


export default function IdentityContent() {
  const [showProfileDetails, setShowProfileDetails] = useState(false)
  const [showDocumentsModal, setShowDocumentsModal] = useState(false)

  return (
    <>
      <div className="space-y-6">
        {/* Profile Information and Biometrics Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Profile Information */}
          <Card className="bg-gray-50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle className="text-lg font-semibold">Profile Information</CardTitle>
              <Button
                variant="link"
                className="text-red-500 hover:text-red-600 p-0 h-auto"
                onClick={() => setShowProfileDetails(true)}
              >
                <Edit2 className="h-4 w-4 mr-1" />
                Edit / See all
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">Name:</span>
                <span className="text-gray-900">John Michael Doe</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">Date of Birth:</span>
                <span className="text-gray-900">1992-06-20</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">Nationality:</span>
                <span className="text-gray-900">Nigerian</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">Address:</span>
                <span className="text-gray-900">123 street 2000</span>
              </div>
            </CardContent>
          </Card>

          {/* Biometrics */}
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Biometrics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-[#EBEBFFCF] px-4 py-2 mb-4 flex items-center space-x-4 border border-red-500">
                <div className=" flex items-center justify-center">

                  <Image
                        src="avatar2.png"
                        alt="OneID Logo"
                        width={146}
                        height={94}
                        className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#272727]">Facial Verification</h3>
                  <p className="text-sm text-[#272727]">Passed on April 20, 2025</p>
                </div>
              </div>
              <Button variant="outline" className="max-w-fit border border-red-500">
                <ScanFace className="h-4 w-4 mr-2" />
                Re-Scan Face
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* My Documents */}
        <Card className="bg-gray-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-lg font-semibold">My Documents</CardTitle>
            <Button
              variant="link"
              className="text-blue-600 hover:text-blue-700 p-0 h-auto"
              onClick={() => setShowDocumentsModal(true)}
            >
              See All
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* BVN Document */}
              <Card className="bg-white border-2 border-purple-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="flex items-center justify-center h-14 w-14 bg-[#EBEBFFCF]">
                      <IdCard className="h-7 w-7 text-gray-600" />
                      </div>
                      <div className="flex flex-col h-14 border border-red-500 justify-between">
                      <p className="font-semibold">BVN</p>
                      <p className="text-sm text-gray-600">NG-P12345590</p>
                      </div>
                    </div>
                    <Badge className="bg-[#11580C] hover:bg-green-600">Approved</Badge>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">Expires: 2029-06-20</p>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <RefreshCw className="h-4 w-4 mr-1" />
                      Replace
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* NIN Document */}
              <Card className="bg-white border-2 border-purple-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center justify-center h-14 w-14 bg-[#EBEBFFCF]">
                      <IdCard className="h-7 w-7 text-gray-600" />
                      </div>
                      <span className="font-semibold">NIN</span>
                    </div>
                    <Badge className="bg-[#11580C] hover:bg-green-600">Approved</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">NG-P12345590</p>
                  <div className="bg-blue-100 border border-blue-300 rounded px-2 py-1 mb-3">
                    <p className="text-sm text-blue-800 font-medium">Expires: 2029-06-20</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <RefreshCw className="h-4 w-4 mr-1" />
                      Replace
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Add New Document */}
              <Card className="bg-white border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors cursor-pointer">
                <CardContent className="p-4 flex flex-col items-center justify-center h-full min-h-[200px]">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                    <Plus className="h-6 w-6 text-gray-600" />
                  </div>
                  <p className="text-gray-700 font-medium text-center">Add New Document</p>
                </CardContent>
              </Card>
            </div>

            {/* Upload From Device Button */}
            <div className="mt-6">
              <Button variant="outline" className="w-full">
                <Upload className="h-4 w-4 mr-2" />
                Upload From Device
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Profile Details Modal */}
      {showProfileDetails && <ProfileDetails onClose={() => setShowProfileDetails(false)} />}

      {/* Documents Modal */}
      {showDocumentsModal && <DocumentsModal onClose={() => setShowDocumentsModal(false)} />}
    </>
  )
}
