"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Search,
  Filter,
  Info,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    id: 1,
    name: "Modern Wooden Sofa",
    type: "Physical",
    category: "Living Room",
    image: "/images/sofa.jpg",
    thumbnails: [
      "/images/sofa.jpg",
      "/images/sofa-2.jpg",
    ],
  },
  {
    id: 2,
    name: "Luxury King Size Bed",
    type: "Physical",
    category: "Bedroom",
    image: "/images/bed.jpg",
    thumbnails: [
      "/images/bed.jpg",
      "/images/bed-2.jpg",
    ],
  },
  {
    id: 3,
    name: "Dining Table Premium",
    type: "Physical",
    category: "Dining",
    image: "/images/dining-table.jpg",
    thumbnails: [
      "/images/dining-table.jpg",
      "/images/dining-table-2.jpg",
    ],
  },
  {
    id: 4,
    name: "Office Chair Comfort",
    type: "Physical",
    category: "Office Furniture",
    image: "/images/chair.jpg",
    thumbnails: [
      "/images/chair.jpg",
      "/images/chair-2.jpg",
    ],
  },
]

export default function ProductGallery() {
  const [search, setSearch] = useState("")

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen p-6 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold text-gray-900">
            Product Gallery
          </h1>

          <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-200 rounded-full px-3 py-1 text-sm">
            {filteredProducts.length}
          </Badge>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative w-full lg:w-[340px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

            <Input
              placeholder="Search by product name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 h-12 rounded-xl border-gray-200 bg-white"
            />
          </div>

          <Button
            variant="outline"
            className="h-12 rounded-xl border-gray-200 px-5"
          >
            <Filter className="w-5 h-5 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      {/* Info Box */}
      <div className="flex items-center gap-3 rounded-2xl border border-blue-200 bg-blue-50 px-5 py-4">
        <Info className="w-5 h-5 text-blue-600" />

        <p className="text-sm font-medium text-blue-700">
          You can use any furniture product information to create a new product.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {filteredProducts.map((product) => (
          <Card
  key={product.id}
  className="rounded-2xl border border-gray-200 shadow-sm"
>
  <CardContent className="p-5">
    
    <div className="flex flex-col md:flex-row gap-5">
      
      {/* Images */}
      <div className="space-y-3">
        <div className="w-24 h-40 rounded-xl border border-gray-200 overflow-hidden bg-gray-50 relative">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex items-center gap-2">
          {product.thumbnails.map((thumb, index) => (
            <div
              key={index}
              className="w-10 h-10 rounded-lg border border-gray-200 overflow-hidden bg-gray-50 relative"
            >
              <Image
                src={thumb}
                alt="thumbnail"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h2 className="text-xl font-bold uppercase text-gray-900">
          {product.name}
        </h2>

        <div className="mt-5">
          <h3 className="text-base font-semibold text-gray-900 mb-4">
            General Information
          </h3>

          <div className="space-y-3">
            <div className="flex items-center">
              <span className="w-32 text-gray-500 text-sm">
                Product Type
              </span>

              <span className="font-semibold text-gray-900 text-sm">
                : {product.type}
              </span>
            </div>

            <div className="flex items-center">
              <span className="w-32 text-gray-500 text-sm">
                Category
              </span>

              <span className="font-semibold text-gray-900 text-sm">
                : {product.category}
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 mt-6">
          <Button
            variant="outline"
            className="rounded-lg border-gray-300 h-9 px-4 text-sm"
          >
            View Details
          </Button>

          <Button className="rounded-lg bg-indigo-600 hover:bg-indigo-700 h-9 px-4 text-sm">
            Use product info
          </Button>
        </div>
      </div>
    </div>

  </CardContent>
</Card>
        ))}
      </div>
    </div>
  )
}