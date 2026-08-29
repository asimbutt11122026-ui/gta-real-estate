export const metadata = {
  title: "GTA Real Estate",
  description: "Professional real estate website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
