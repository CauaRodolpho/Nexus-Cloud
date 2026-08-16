import { DashboardSidebar } from '@/components/dashboard'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <div id="main-content" className="flex min-w-0 flex-1 flex-col">
        {children}
      </div>
    </div>
  )
}
