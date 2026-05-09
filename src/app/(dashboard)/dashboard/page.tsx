import { DashboardCards } from "@/components/dashboard/dashboard-cards"
import { DashboardCharts } from "@/components/dashboard/dashboard-charts"
import  TableDemo from "@/components/dashboard/orders-table"

export default function Page() {
  return (
    <div className="space-y-6 bg-muted/40 min-h-screen">
      
      {/* Top Cards */}
      <DashboardCards />

      {/* Charts Section */}
      <DashboardCharts />

      {/* Orders Table */}
      <TableDemo />

    </div>
  )
}