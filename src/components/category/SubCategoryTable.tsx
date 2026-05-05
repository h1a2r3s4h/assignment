"use client"

import { useState } from "react"
import { Pencil, Trash2 } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

type SubCategory = {
  id: number
  name: string
  category: string
  status?: boolean
}

export default function SubCategoryTable({
  data: initialData,
}: {
  data: SubCategory[]
}) {
  const [subCategories, setSubCategories] = useState(
    initialData.map((item) => ({
      ...item,
      status: item.status ?? true,
    }))
  )

  const toggleStatus = (id: number) => {
    setSubCategories((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    )
  }

  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl p-6">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Sub-Category List
        </h2>

        <Badge className="bg-gray-100 text-gray-600 border-gray-200">
          {subCategories.length}
        </Badge>
      </div>

      {/* TABLE */}
      <Table>
        <TableHeader>
  <TableRow className="bg-gray-50 border-b border-gray-200">
    <TableHead>ID</TableHead>
    <TableHead>SUB-CATEGORY</TableHead>
    <TableHead>CATEGORY</TableHead>
    <TableHead>STATUS</TableHead>
    <TableHead className="text-center">ACTION</TableHead>
  </TableRow>
</TableHeader>

<TableBody>
  {subCategories.map((item) => (
    <TableRow
      key={item.id}
      className="hover:bg-gray-50 border-b border-gray-200 last:border-0"
    >

              {/* ID */}
              <TableCell>{item.id}</TableCell>

              {/* NAME */}
              <TableCell className="font-medium">
                {item.name}
              </TableCell>

              {/* CATEGORY */}
              <TableCell>
                <Badge
                  variant="outline"
                  className="text-blue-600 border-blue-200"
                >
                  {item.category}
                </Badge>
              </TableCell>

              {/* STATUS */}
              <TableCell>
                <div className="flex items-center gap-3">
                  <Badge
                    variant="outline"
                    className={
                      item.status
                        ? "text-green-600 border-green-300"
                        : "text-red-500 border-red-300"
                    }
                  >
                    {item.status ? "Active" : "Inactive"}
                  </Badge>

                  <Switch
                    checked={item.status}
                    onCheckedChange={() => toggleStatus(item.id)}
                  />
                </div>
              </TableCell>

              {/* ACTION */}
              <TableCell>
                <div className="flex items-center justify-center gap-4">
                  <Pencil className="w-4 h-4 cursor-pointer text-gray-600" />
                  <Trash2 className="w-4 h-4 text-red-500 cursor-pointer" />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* FOOTER */}
      <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
        <p>
          Showing 1 to {subCategories.length} of {subCategories.length}
        </p>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Previous
          </Button>

          <Button size="sm" className="bg-indigo-600 text-white">
            1
          </Button>

          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>

    </div>
  )
}