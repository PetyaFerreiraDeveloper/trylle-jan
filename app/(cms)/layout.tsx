import React from "react"

export const metadata = {
  title: 'Trylle Jan Studio',
  description: 'CMS for tryllejan.dk',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
