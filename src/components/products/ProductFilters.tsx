"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, RefreshCcw, Search } from "lucide-react"

export default function ProductFilters() {
  return (
    <div className="flex items-center gap-3 w-full bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">

      {/* Search */}
      <div className="relative flex-1">
        {/* <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" /> */}
        <Input
          placeholder="Search Products..."
          className="pl-9 h-10 bg-white border border-gray-200 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>

      {/* Category */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="h-10 px-4 justify-between min-w-[160px] bg-white border border-gray-200 hover:bg-gray-50"
          >
            All Categories
            <ChevronDown className="w-4 h-4 ml-2 text-gray-400" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          <DropdownMenuItem>Electronics</DropdownMenuItem>
          <DropdownMenuItem>Clothing</DropdownMenuItem>
          <DropdownMenuItem>Books</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Status */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="h-10 px-4 justify-between min-w-[140px] bg-white border border-gray-200 hover:bg-gray-50"
          >
            All Status
            <ChevronDown className="w-4 h-4 ml-2 text-gray-400" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          <DropdownMenuItem>Active</DropdownMenuItem>
          <DropdownMenuItem>Inactive</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Refresh */}
      <Button
        variant="outline"
        className="h-10 px-4 flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50"
      >
        <RefreshCcw className="w-4 h-4 text-gray-500" />
        Refresh
      </Button>

    </div>
  )
}