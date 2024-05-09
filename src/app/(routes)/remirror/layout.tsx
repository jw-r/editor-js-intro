import 'remirror/styles/all.css'

export default function RemirrorLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div
      style={{
        position: 'relative',
        margin: 'auto',
        height: '100vh',
        maxWidth: '800px',
        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      }}
    >
      {children}
    </div>
  )
}
