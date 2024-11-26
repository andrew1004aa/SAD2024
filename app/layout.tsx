import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import Navbar from '@/components/Navbar'
import { AppProvider } from '@/contexts/AppContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '活動報名系統',
  description: '大學活動報名和管理系統',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>
        <AppProvider>
          <Navbar />
          <main className="container mx-auto p-4">
            {children}
          </main>
          <Toaster />
        </AppProvider>
      </body>
    </html>
  )
}

