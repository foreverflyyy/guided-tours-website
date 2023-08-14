import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {ReactNode} from "react";
import Header from "@/common/components/UI/Header";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Экскурсии в Калининграде',
  description: 'Посетите экскурсии в Калининграде от прекрасного экскурсовода!',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
