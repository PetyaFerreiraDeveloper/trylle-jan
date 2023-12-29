import type { Metadata } from "next"
import { Josefin_Sans } from "next/font/google"
import "./globals.css"
import { Header } from "./components/Header"

const josefinSans = Josefin_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Trylle Jan",
  description:
    "TrylleJan.dk – Lad mig lave dit næste arrangement fortryllende!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>
        <Header />
        <main className="mt-10 mx-auto px-5 md:px-10 lg:px-20 xl:px-36 pb-10">
          {children}
        </main>
      </body>
    </html>
  )
}
