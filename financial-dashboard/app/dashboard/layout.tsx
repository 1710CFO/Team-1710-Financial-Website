"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Coffee, DollarSign, Handshake, History, LogOut, Menu } from "lucide-react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const pathname = usePathname()
  const router = useRouter()

  // Handle window resize to automatically close sidebar on small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false)
      } else {
        setSidebarOpen(true)
      }
    }

    // Set initial state
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleLogout = () => {
    router.push("/")
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const navigation = [
    { name: "Financial Data", href: "/dashboard", icon: DollarSign },
    { name: "Coffee Data", href: "/dashboard/coffee", icon: Coffee },
    { name: "Current Sponsor Data", href: "/dashboard/sponsors", icon: Handshake },
    { name: "Historical Sponsor Data", href: "/dashboard/historical-sponsors", icon: History },
  ]

  return (
    <div className="flex h-screen bg-background">
      {/* Desktop sidebar */}
      <div
        className={`hidden md:flex md:flex-col md:fixed md:inset-y-0 transition-all duration-300 ease-in-out ${
          sidebarOpen ? "md:w-64" : "md:w-0"
        }`}
      >
        <div className="flex flex-col flex-grow border-r border-muted bg-muted/50 overflow-y-auto">
          <SidebarContent navigation={navigation} pathname={pathname} handleLogout={handleLogout} />
        </div>
      </div>

      <div
        className={`flex flex-col flex-1 transition-all duration-300 ease-in-out ${
          sidebarOpen ? "md:pl-64" : "md:pl-0"
        }`}
      >
        {/* Blue Header */}
        <header className="bg-blue-600 text-white h-14 flex items-center justify-between px-4 shadow-md">
          <div className="flex items-center">
            {/* Mobile menu trigger */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="md:hidden mr-4">
                <Button variant="ghost" size="icon" className="text-white hover:bg-blue-700">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-64 p-0 bg-muted/50 overflow-hidden max-h-screen"
                style={{ position: "fixed", top: 0, bottom: 0, height: "100%" }}
              >
                <div className="h-full flex flex-col overflow-hidden">
                  <SidebarContent
                    navigation={navigation}
                    pathname={pathname}
                    handleLogout={handleLogout}
                    setOpen={setOpen}
                  />
                </div>
              </SheetContent>
            </Sheet>

            {/* Desktop sidebar toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="hidden md:flex text-white hover:bg-blue-700 mr-4"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle sidebar</span>
            </Button>

            <h1 className="text-xl font-semibold">Financial Dashboard</h1>
          </div>

          {/* Logo image */}
          <div className="h-10 w-10 rounded-full overflow-hidden">
            <Image src="/images/logo.png" alt="Team 1710 Logo" width={40} height={40} className="object-cover" />
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-full mx-auto">{children}</div>
        </main>
      </div>
    </div>
  )
}

function SidebarContent({
  navigation,
  pathname,
  handleLogout,
  setOpen,
}: {
  navigation: { name: string; href: string; icon: any }[]
  pathname: string
  handleLogout: () => void
  setOpen?: (open: boolean) => void
}) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center h-16 flex-shrink-0 px-4 border-b border-muted">
        <h1 className="text-xl font-semibold">Financial Dashboard</h1>
      </div>
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <nav className="mt-5 flex-1 px-2 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen?.(false)}
                className={`${
                  isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
              >
                <item.icon
                  className={`${
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                  } mr-3 flex-shrink-0 h-5 w-5`}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>
      <div className="flex-shrink-0 flex border-t border-muted p-4">
        <button
          onClick={handleLogout}
          className="flex-shrink-0 w-full group block text-muted-foreground hover:text-foreground"
        >
          <div className="flex items-center">
            <div>
              <LogOut className="inline-block h-5 w-5 mr-3" />
            </div>
            <div className="text-sm font-medium">Logout</div>
          </div>
        </button>
      </div>
    </div>
  )
}
