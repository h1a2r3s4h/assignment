"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Gift,
  Store,
  Clock,
  IndianRupee,
  Package,
  CheckCircle,
  Truck,
  XCircle,
  RotateCcw,
} from "lucide-react"

export function DashboardCards() {
  return (
    <div className="space-y-6">

      {/* TOP CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <TopCard icon={Gift} title="Total Vendors" value="154" change="↗ 12.5% vs last month" />
        <TopCard icon={Store} title="Active Shops" value="89" change="↗ 5.2% vs last month" />
        <TopCard icon={Clock} title="Pending Orders" value="23" change="↘ 2.1% vs last month" />
        <TopCard icon={IndianRupee} title="Daily Turnover" value="₹ 1,25,000"/>
      </div>

      {/* STATUS CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <SmallCard icon={Clock} label="Pending" value="1250" />
        <SmallCard icon={CheckCircle} label="Confirmed" value="15" />
        <SmallCard icon={Package} label="Packing" value="42" />
        <SmallCard icon={Truck} label="Out for delivery" value="1250" />
        <SmallCard icon={Package} label="Delivered" value="1250" />
        <SmallCard icon={XCircle} label="Cancelled" value="15" />
        <SmallCard icon={RotateCcw} label="Returned" value="42" />
        <SmallCard icon={XCircle} label="Failed to deliver" value="1250" />
      </div>

    </div>
  )
}

function TopCard({ icon: Icon, title, value, change }: any) {
  return (
    <Card className="rounded-xl border border-gray-300 bg-white shadow-sm hover:shadow-md transition-all duration-200 h-[130px]">
      <CardContent className="p-5 h-full flex flex-col justify-between">

        {/* Header */}
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-gray-800">
            {title}
          </p>

          <div className="p-2 rounded-lg bg-gray-100">
            <Icon className="w-5 h-5 text-gray-700" />
          </div>
        </div>

        {/* Value + Change */}
        <div className="flex items-end justify-between">

          {/* FIX: prevent ₹ breaking */}
          <h2 className="text-3xl font-bold text-gray-900 leading-none whitespace-nowrap">
            {value}
          </h2>

          <p className="text-sm text-gray-600 font-medium whitespace-nowrap">
            {change}
          </p>

        </div>

      </CardContent>
    </Card>
  )
}
function SmallCard({ icon: Icon, label, value }: any) {
  return (
    <Card className="rounded-lg border border-gray-300 bg-white shadow-sm hover:shadow-md transition-all duration-200">
      <CardContent className="flex items-center justify-between p-3">

        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-md bg-gray-200">
            <Icon className="w-4 h-4 text-gray-700" />
          </div>

          <span className="text-sm font-semibold text-gray-800">
            {label}
          </span>
        </div>

        <span className="text-base font-bold text-gray-900">
          {value}
        </span>

      </CardContent>
    </Card>
  )
}