import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"
import logo from "@/public/logo.png"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Labridtech - Cutting-Edge Software Solutions",
  description: "Labridtech delivers innovative, high-performance software solutions for businesses of the future.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href={logo.src} sizes="32x32" />
      </head>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
          <MouseMoveEffect />
          {children}
      </body>
    </html>
  )
}

