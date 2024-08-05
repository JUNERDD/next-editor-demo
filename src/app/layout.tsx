import type { Metadata } from 'next'
import { Noto_Sans_SC } from 'next/font/google'
import './globals.css'

const Noto = Noto_Sans_SC({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '在线编辑器',
  description: '这是一个在线编辑器的demo'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={Noto.className}>{children}</body>
    </html>
  )
}
