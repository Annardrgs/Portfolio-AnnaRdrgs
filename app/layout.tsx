export const metadata = {
  title: 'Rdrgs',
  description: 'Anna Clara Rodrigues Portfolio',
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
