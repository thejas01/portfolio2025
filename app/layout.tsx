import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}

