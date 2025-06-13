"use client"

import { useState } from "react"
import { Home, User, Share2, Activity, Shield, HelpCircle, LogOut, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import DashboardContent from "@/components/dashboard-content"
import IdentityContent from "@/components/identity-content"
import PlaceholderContent from "@/components/placeholder-content"
import Image from 'next/image';


export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activePage, setActivePage] = useState("dashboard")

  const navigationItems = [
    { id: "dashboard", icon: Home, label: "Dashboard Overview", active: activePage === "dashboard" },
    { id: "identity", icon: User, label: "My Identity", active: activePage === "identity" },
    { id: "sharing", icon: Share2, label: "Data Sharing", active: activePage === "sharing" },
    { id: "logs", icon: Activity, label: "Activity Logs", active: activePage === "logs" },
    { id: "security", icon: Shield, label: "Security Center", active: activePage === "security" },
    { id: "support", icon: HelpCircle, label: "Help & Support", active: activePage === "support" },
  ]

  // Data for dashboard components
  const verificationItems = [
    { label: "Document Upload", progress: 60 },
    { label: "Document Upload", progress: 60 },
    { label: "Document Upload", progress: 60 },
  ]

  const notifications = [
    { text: "You have shared key with 3 platforms.", action: "Revoke Access", time: "2 minutes ago", type: "info" },
    { text: "You have shared key with 3 platforms.", action: "Revoke Access", time: "5 minutes ago", type: "info" },
    { text: "Privacy baseline expires in 3 days", action: "Update Now", time: "1 hour ago", type: "warning" },
    { text: "You have shared key with 3 platforms.", action: "Revoke Access", time: "2 hours ago", type: "info" },
  ]

  const activityLogs = [
    { action: "Login from San Francisco, CA", time: "Apr 25, 2024 08:17 PM", status: "Verified", provider: "Cozypay", timeAgo: "40 Minutes Ago" },
    { action: "Login from San Francisco, CA", time: "Apr 24, 2024 08:17 PM", status: "Verified", provider: "Cozypay", timeAgo: "40 Minutes Ago" },
    { action: "Login from San Francisco, CA", time: "Apr 23, 2024 08:17 PM", status: "Verified", provider: "Cozypay", timeAgo: "40 Minutes Ago" },
    { action: "Login from San Francisco, CA", time: "Apr 22, 2024 08:17 PM", status: "Verified", provider: "Cozypay", timeAgo: "40 Minutes Ago" },
  ]

  const chartData = [
    { month: "Jan", value: 20 },
    { month: "Feb", value: 35 },
    { month: "Mar", value: 25 },
    { month: "Apr", value: 45 },
    { month: "May", value: 30 },
    { month: "Jun", value: 55 },
    { month: "Jul", value: 40 },
    { month: "Aug", value: 35 },
    { month: "Sep", value: 25 },
    { month: "Oct", value: 30 },
    { month: "Nov", value: 20 },
    { month: "Dec", value: 25 },
  ]

  const getPageTitle = () => {
    switch (activePage) {
      case "dashboard":
        return "Home"
      case "identity":
        return "My Identity"
      case "sharing":
        return "Data Sharing"
      case "logs":
        return "Activity Logs"
      case "security":
        return "Security Center"
      case "support":
        return "Help & Support"
      default:
        return "Home"
    }
  }

  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return (
          <DashboardContent
            verificationItems={verificationItems}
            notifications={notifications}
            activityLogs={activityLogs}
            chartData={chartData}
          />
        )
      case "identity":
        return <IdentityContent />
      default:
        return <PlaceholderContent pageName={activePage} />
    }
  }

  // Hide scrollbar styles
  const hideScrollbarStyle = `
  .hide-scrollbar {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
  }
  .hide-scrollbar::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
  }
`

  return (
    <>
      <style jsx global>
        {hideScrollbarStyle}
      </style>
      <div className="flex h-screen bg-gray-50">
        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Sidebar */}
        <div
          className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#1E1E8C] text-white transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform duration-300 ease-in-out overflow-y-auto hide-scrollbar rounded-tr-3xl rounded-br-3xl`}
        >
          <div className="px-3">

          <div className="flex items-center justify-between px-5 pt-5 pb-3.5 mb-16 border-b border-[#FFFFFF91]">
            <div className="flex items-center space-x-2 mt-6">
              <Image
                    src="OneId-logo-2.png"
                    alt="OneID Logo"
                    width={120}
                    height={40}
                    className="object-contain"
              />
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white hover:bg-purple-700"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          </div>

          <nav className="px-4 space-y-12">
            {navigationItems.map((item, index) => (
              <Button
                key={index}
                variant={item.active ? "secondary" : "ghost"}
                className={`w-full justify-start text-left text-lg ${
                  item.active
                    ? "bg-white/20 text-white hover:bg-white/30"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
                onClick={() => setActivePage(item.id)}
              >
                {/* <item.icon className="mr-3 h-4 w-4" /> */}
                {item.label}
              </Button>
            ))}
          </nav>

          <div className="absolute bottom-4 left-4 right-4 mb-10">
            <Button variant="ghost" className="bg-white w-full justify-start text-lg text-black/80 hover:bg-white/10 hover:text-black">
              <LogOut className="mr-3 h-4 w-4" />
              Log Out
            </Button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-7 shadow-[0_4px_4px_0px_#3636FF24]">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
                  <Menu className="h-5 w-5" />
                </Button>
                <h1 className="text-2xl font-semibold text-gray-900">{getPageTitle()}</h1>
              </div>
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="avatar.png" alt="John Michael" />
                  <AvatarFallback>JM</AvatarFallback>
                </Avatar>
                <span className="hidden sm:inline text-lg font-medium text-[#000000]">John Michael</span>
              </div>
            </div>
          </header>

          {/* Content */}
          <main className="flex-1 overflow-auto p-3 lg:p-5 hide-scrollbar">{renderContent()}</main>
        </div>
      </div>
    </>
  )
}
