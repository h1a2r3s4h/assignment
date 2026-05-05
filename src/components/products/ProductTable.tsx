"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, Pencil, Trash } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    type: "Physical",
    price: 2999,
    stock: 50,
    featured: true,
    status: true,
    image: "https://placehold.co/36x36",
  },
  {
    id: 2,
    name: "Cotton T-Shirt",
    type: "Digital",
    price: 499,
    stock: 50,
    featured: false,
    status: true,
    image: "https://placehold.co/36x36",
  },
  {
    id: 3,
    name: "Garden Tool Set",
    type: "Physical",
    price: 1599,
    stock: 50,
    featured: true,
    status: true,
    image: "https://placehold.co/36x36",
  },
  {
    id: 4,
    name: "Yoga Mat Premium",
    type: "Physical",
    price: 899,
    stock: 50,
    featured: false,
    status: true,
    image: "https://placehold.co/36x36",
  },
  {
    id: 5,
    name: "Programming Guide Book",
    type: "Physical",
    price: 799,
    stock: 50,
    featured: true,
    status: false,
    image: "https://placehold.co/36x36",
  },
];

export default function ProductTable() {
  return (
    <Card className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <CardHeader className="px-6 py-4 border-b border-gray-100">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          In House Product List
          <span className="text-xs font-normal bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
            {products.length}
          </span>
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table className="w-full">
            {/* Header */}
            <TableHeader>
              <TableRow className="bg-gray-50 border-b border-gray-200">
                <TableHead className="w-12 text-center">SL</TableHead>
                <TableHead className="min-w-[220px]">Product</TableHead>
                <TableHead className="w-28 text-center">Type</TableHead>
                <TableHead className="w-24 text-center">Price</TableHead>
                <TableHead className="w-20 text-center">Stock</TableHead>
                <TableHead className="w-24 text-center">Featured</TableHead>
                <TableHead className="w-24 text-center">Status</TableHead>
                <TableHead className="w-32 text-center">
  Action
</TableHead>
              </TableRow>
            </TableHeader>

            {/* Body */}
            <TableBody>
              {products.map((p) => (
                <TableRow
                  key={p.id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <TableCell className="text-center text-sm text-gray-500">
                    {p.id}
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-md overflow-hidden bg-gray-100 border border-gray-200">
                        <Image
                          src={p.image}
                          alt={p.name}
                          width={36}
                          height={36}
                          className="object-cover w-full h-full"
                          unoptimized
                        />
                      </div>
                      <span className="text-sm font-medium truncate max-w-[180px]">
                        {p.name}
                      </span>
                    </div>
                  </TableCell>

                  <TableCell className="text-center text-sm text-gray-600">
                    {p.type}
                  </TableCell>

                  <TableCell className="text-center text-sm font-medium">
                    ₹{p.price.toLocaleString()}
                  </TableCell>

                  <TableCell className="text-center text-sm">
                    {p.stock}
                  </TableCell>

                  <TableCell className="text-center">
  <div className="flex items-center justify-center h-full">
    <Checkbox
      checked={p.featured}
      className="pointer-events-none"
    />
  </div>
</TableCell>

                  <TableCell className="text-center">
  <div className="flex justify-center">
    <Switch
      checked={p.status}
      className="pointer-events-none data-[state=checked]:bg-gray-900 data-[state=unchecked]:bg-gray-200"
    />
  </div>
</TableCell>

                  <TableCell className="w-32 text-center">
  <div className="flex items-center justify-center gap-3">
    <Button variant="ghost" size="icon" className="h-8 w-8">
      <Eye size={16} />
    </Button>

    <Button variant="ghost" size="icon" className="h-8 w-8">
      <Pencil size={16} />
    </Button>

    <Button
      variant="ghost"
      size="icon"
      className="h-8 w-8 text-red-500"
    >
      <Trash size={16} />
    </Button>
  </div>
</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 text-sm text-gray-500 border-t border-gray-100 bg-gray-50">
          <span>
            Showing {products.length} of {products.length} products
          </span>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 p-0 border-gray-200"
            >
              {"<"}
            </Button>
            <Button size="sm" className="h-8 w-8 p-0 bg-gray-900 text-white">
              1
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 p-0 border-gray-200"
            >
              {">"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
