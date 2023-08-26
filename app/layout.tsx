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
    <html lang="en" style={{height: '100%'}}>
      <body style={{margin: '0px'}}>{children}</body>
    </html>
  )
}
