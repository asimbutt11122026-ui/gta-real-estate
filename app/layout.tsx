import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "GTA Real Estate",
  description: "Professional real estate website",
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
