"use client"

import { ChartBarDefault } from "@/components/chart-bar-default"
import { ChartPieDonutText } from "@/components/chart-pie-donut-text"

export function DashboardCharts() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 border-dashed rounded-xl border-2 border-gray-300 p-4">
      
      {/* Big Bar Chart */}
      <div className="col-span-2 border rounded-xl bg-white p-4">
        <ChartBarDefault />
      </div>

      {/* Donut Chart */}
       <div className=" border rounded-xl bg-white p-4">
      <ChartPieDonutText />
      </div>

    </div>
  )
}