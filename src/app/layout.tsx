import "./globals.css"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kubitabi Accessories",
  description: "Kubitabi Accessories resmi portföy sitesi",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-background text-textPrimary min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}
