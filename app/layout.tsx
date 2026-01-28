import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Royal Chai - Brew the Royal Tradition',
  description: 'Premium instant chai tea premix inspired by royal Indian households',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-b from-cream to-amber-50`}>
        {children}
      </body>
    </html>
  )
}