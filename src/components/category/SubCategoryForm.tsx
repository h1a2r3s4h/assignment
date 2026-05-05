"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Category = {
  id: number
  name: string
}

export default function SubCategoryForm({
  categories,
}: {
  categories: Category[]
}) {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")

  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl p-6">
      
      {/* TITLE */}
      <h2 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
        <span className="text-indigo-600 text-xl">+</span>
        Add New Sub-Category
      </h2>

      {/* FORM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* NAME */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">
            Sub-Category Name <span className="text-red-500">*</span>
          </label>

          <Input
            placeholder="e.g. Laptops, Smartphones..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-11 border-gray-200 rounded-lg focus:border-gray-300 focus:ring-0 shadow-none"
          />
        </div>

        {/* CATEGORY SELECT */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">
            Main Category <span className="text-red-500">*</span>
          </label>

          <div className="space-y-2">
  {/* <label className="text-sm font-semibold text-gray-700">
    Main Category <span className="text-red-500">*</span>
  </label> */}

  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <button className="w-full h-11 border border-gray-200 rounded-lg px-3 text-left text-sm text-gray-700 bg-white hover:bg-gray-50">
        {category
          ? categories.find((c) => String(c.id) === category)?.name
          : "Select Main Category"}
      </button>
    </DropdownMenuTrigger>

    <DropdownMenuContent className="w-full rounded-lg border-gray-200 shadow-md">
      {categories.map((cat) => (
        <DropdownMenuItem
          key={cat.id}
          onClick={() => setCategory(String(cat.id))}
          className="cursor-pointer"
        >
          {cat.name}
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
</div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-100 my-6" />

      {/* BUTTONS */}
      <div className="flex justify-end gap-3">
        <Button
          variant="outline"
          className="h-10 px-6 rounded-lg border-gray-200 text-gray-700 hover:bg-gray-50"
          onClick={() => {
            setName("")
            setCategory("")
          }}
        >
          Reset
        </Button>

        <Button className="h-10 px-6 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white">
          Create Sub-Category
        </Button>
      </div>
    </div>
  )
}