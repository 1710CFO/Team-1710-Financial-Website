import type React from "react"
import { Oswald } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const oswald = Oswald({ subsets: ["latin"] })

export const metadata = {
  title: "Team 1710 Financial Dashboard",
  description: "Financial dashboard for Team 1710",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${oswald.className} min-h-screen bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
