import { LeftMenu } from "@/components/left-menu/LeftMenu"



export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-screen h-screen items-center justify-center flex flex-row">
      <LeftMenu />
      {children}
    </div>
  )
}
