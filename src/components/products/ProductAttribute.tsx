"use client"

import { useState } from "react"
import { RotateCcw, Pencil, Trash2, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function ProductAttributeSetup() {
  const [attributeName, setAttributeName] = useState("")

  const attributes = [
    { id: 1, name: "size" },
    { id: 2, name: "type" },
  ]

  return (
    <div className="min-h-screen p-3 md:p-4 space-y-4">
      {/* Heading */}
      <div>
        <h1 className="text-[28px] font-bold tracking-tight text-[#111827]">
          Product Attribute Setup
        </h1>
      </div>

      {/* Form Card */}
      <Card className="rounded-2xl border border-gray-200 shadow-sm bg-white">
        <CardContent className="p-4 md:p-5">
          <div className="space-y-6">
            {/* Input */}
            <div className="space-y-2">
              <label className="text-[14px] font-semibold text-gray-700">
                Attribute Name{" "}
                <span className="text-red-500">*</span>
              </label>

              <Input
                placeholder="Enter Attribute Name"
                value={attributeName}
                onChange={(e) => setAttributeName(e.target.value)}
                className="h-10 rounded-lg border-gray-300 text-[14px] placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200" />

            {/* Buttons */}
            <div className="flex items-center justify-end gap-3">
              <Button
                variant="secondary"
                className="h-9 px-5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-[13px] font-medium shadow-none"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>

              <Button className="h-9 px-6 rounded-lg bg-[#4f46e5] hover:bg-[#4338ca] text-white text-[13px] font-medium">
                Submit
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Table Card */}
      <Card className="rounded-2xl border border-gray-200 shadow-sm bg-white overflow-hidden">
        {/* Header */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <h2 className="text-[18px] font-bold text-[#111827]">
              Attribute List
            </h2>

            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold">
              2
            </div>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-[320px]">
            <Input
              placeholder="Search by Attribute Name"
              className="h-10 rounded-lg border-gray-300 pr-10 text-[14px] placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
            />

            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          </div>
        </div>

        {/* Table */}
        <div className="border-t border-gray-200">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-b border-gray-200">
                <TableHead className="h-12 pl-5 text-[12px] font-bold uppercase text-gray-800">
                  SL
                </TableHead>

                <TableHead className="text-[12px] font-bold uppercase text-gray-800">
                  Attribute Name
                </TableHead>

                <TableHead className="text-right pr-5 text-[12px] font-bold uppercase text-gray-800">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {attributes.map((item, index) => (
                <TableRow
                  key={item.id}
                  className="h-14 border-b border-gray-200 hover:bg-transparent"
                >
                  <TableCell className="pl-5 text-[14px] font-medium text-gray-800">
                    {index + 1}
                  </TableCell>

                  <TableCell className="text-[14px] font-medium text-gray-800">
                    {item.name}
                  </TableCell>

                  <TableCell className="pr-5">
                    <div className="flex items-center justify-end gap-2">
                      {/* Edit */}
                      <button className="flex items-center justify-center w-9 h-9 rounded-lg border border-blue-200 hover:bg-blue-50 transition cursor-pointer">
                        <Pencil className="w-4 h-4 text-blue-500" />
                      </button>

                      {/* Delete */}
                      <button className="flex items-center justify-center w-9 h-9 rounded-lg border border-red-200 hover:bg-red-50 transition cursor-pointer">
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  )
}