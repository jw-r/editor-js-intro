import '../../globals.css'

export default function TailwindLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="relative m-auto h-screen max-w-[800px] shadow-lg shadow-slate-300">
      {children}
    </div>
  )
}
