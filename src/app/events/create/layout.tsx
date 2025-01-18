import { CreateEventSidebar } from '@/components/create-event-sidebar/create-event-sidebar.component'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="w-full flex">
    <div className="w-248px">
      <CreateEventSidebar/>
    </div>
    <div className="w-full">{children}</div>
  </div>
}
