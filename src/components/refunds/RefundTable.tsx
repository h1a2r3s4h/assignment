"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Eye } from "lucide-react"
import { orders } from "../../lib/orders-data"

const statusStyles = {
  Delivered: "bg-green-100 text-green-700 border-green-200",
  Processing: "bg-yellow-100 text-yellow-700 border-yellow-200",
  Shipped: "bg-purple-100 text-purple-700 border-purple-200",
  Pending: "bg-blue-100 text-blue-700 border-blue-200",
  Confirmed: "bg-indigo-100 text-indigo-700 border-indigo-200",
  Packing: "bg-orange-100 text-orange-700 border-orange-200",
  Cancelled: "bg-red-100 text-red-700 border-red-200",
  "Out for delivery": "bg-blue-100 text-blue-700 border-blue-200",
  Returned: "bg-gray-100 text-gray-700 border-gray-200",
}

const statusMap: Record<string, string> = {
  all: "All Refunds",
  pending: "Pending Refunds",
  approved: "Approved Refunds",
  refunded: "Refunded Items",
  rejected: "Rejected Requests",
}

export default function TableDemo({ status = "all" }: { status?: string }) {
  const displayStatus = statusMap[status.toLowerCase()] || status

  const filteredOrders =
    status === "all"
      ? orders
      : orders.filter((order) => {
          const orderStatus = order.status.toLowerCase()
          const targetStatus = status.toLowerCase()
          
          // Map refund statuses to existing order data for demonstration
          if (targetStatus === "approved") return orderStatus === "confirmed"
          if (targetStatus === "refunded") return orderStatus === "packing"
          if (targetStatus === "rejected") return orderStatus === "out for delivery"
          
          return orderStatus === targetStatus
        })

  return (
    <Card className="rounded-2xl border shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold">
          Order List: <span className="capitalize">{displayStatus}</span>
        </CardTitle>

        <Button variant="outline" size="sm" className="rounded-lg">
          View All
        </Button>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="text-muted-foreground">
              <TableHead>S.NO</TableHead>
              <TableHead>ORDER ID</TableHead>
              <TableHead>CUSTOMER</TableHead>
              <TableHead>TOTAL AMOUNT</TableHead>
              <TableHead>ORDER DATE</TableHead>
              <TableHead>ORDER STATUS</TableHead>
              <TableHead className="text-right">ACTION</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id} className="hover:bg-muted/40">
                <TableCell>{order.id}</TableCell>

                <TableCell className="font-medium">
                  {order.orderId}
                </TableCell>

                <TableCell>{order.customer}</TableCell>

                <TableCell>{order.amount}</TableCell>

                <TableCell>{order.date}</TableCell>

                <TableCell>
                  <Badge
                    variant="outline"
                    className={`px-3 py-1 rounded-md text-xs font-medium ${
                      statusStyles[
                        order.status as keyof typeof statusStyles
                      ]
                    }`}
                  >
                    {order.status}
                  </Badge>
                </TableCell>

                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <Eye className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}