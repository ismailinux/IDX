"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { X, Upload, Download, RefreshCw, FileText, ArrowLeft } from "lucide-react"

interface DocumentsModalProps {
  onClose: () => void
}

export default function DocumentsModal({ onClose }: DocumentsModalProps) {
  // Sample document data - in real app this would come from props or API
  const documents = Array(9).fill({
    type: "NIN",
    number: "NG-P12345590",
    expires: "2029-06-20",
    status: "Valid",
    processingStatus: "Pending",
  })

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-lg w-full max-w-xs sm:max-w-4xl lg:max-w-6xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 border-b space-y-3 sm:space-y-0">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">My Documents</h2>
          <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto">
            <Button className="bg-purple-600 hover:bg-purple-700 flex-1 sm:flex-none mr-5">
              <Upload className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Upload From Device</span>
              <span className="sm:hidden">Upload</span>
            </Button>
            {/* <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button> */}
             <Button variant="link" className="text-purple-600 hover:text-purple-700 p-0 h-auto" onClick={onClose}>
            <ArrowLeft className="h-4 w-4" />
              Go Back
          </Button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-auto max-h-[calc(95vh-120px)] sm:max-h-[calc(90vh-100px)] p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {documents.map((doc, index) => (
              <Card key={index} className="bg-white border border-gray-200">
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded flex items-center justify-center">
                        <FileText className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                        <span className="font-semibold text-gray-900 text-sm sm:text-base">{doc.type}</span>
                        {index === 0 && (
                          <Badge className="bg-blue-600 hover:bg-blue-700 text-xs mt-1 sm:mt-0 w-fit">
                            Full-passport
                          </Badge>
                        )}
                      </div>
                    </div>
                    <Badge className="bg-green-600 hover:bg-green-700 text-white text-xs">{doc.status}</Badge>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 mb-1">{doc.number}</p>
                  <p className="text-xs sm:text-sm text-gray-500 mb-3">Expires: {doc.expires}</p>

                  <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-xs sm:text-sm text-gray-600">{doc.processingStatus}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <Button variant="outline" size="sm" className="flex-1 text-xs sm:text-sm py-2">
                      <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 text-xs sm:text-sm py-2">
                      <RefreshCw className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      Replace
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
