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

const orders = [
  {
    id: 1,
    orderId: "ORD-1001",
    customer: "Alice Cooper",
    amount: "₹1,200",
    date: "Jun 20, 2025",
    status: "Delivered",
  },
  {
    id: 2,
    orderId: "ORD-1002",
    customer: "Bob Marley",
    amount: "₹850",
    date: "Jun 19, 2025",
    status: "Processing",
  },
  {
    id: 3,
    orderId: "ORD-1003",
    customer: "Charlie Chaplin",
    amount: "₹2,500",
    date: "Jun 18, 2025",
    status: "Shipped",
  },
  {
    id: 4,
    orderId: "ORD-1004",
    customer: "David Bowie",
    amount: "₹500",
    date: "Jun 17, 2025",
    status: "Pending",
  },
  {
    id: 5,
    orderId: "ORD-1005",
    customer: "Elton John",
    amount: "₹3,000",
    date: "Jun 16, 2025",
    status: "Cancelled",
  },
]

const statusStyles = {
  Delivered: "bg-green-100 text-green-700 border-green-200",
  Processing: "bg-yellow-100 text-yellow-700 border-yellow-200",
  Shipped: "bg-purple-100 text-purple-700 border-purple-200",
  Pending: "bg-blue-100 text-blue-700 border-blue-200",
  Cancelled: "bg-red-100 text-red-700 border-red-200",
}

export default function TableDemo () {
  return (
    <Card className="rounded-2xl border shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold">
          Recent Orders
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
            {orders.map((order) => (
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
                    className={`px-3 py-1 rounded-md text-xs font-medium ${statusStyles[order.status as keyof typeof statusStyles]}`}
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