"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CirclePlus,
  Package2,
} from "lucide-react";

const initialProducts = [
  {
    id: 1,
    name: "Cotton T-Shirt",
    image: "/images/cotton-tshirt.jpg",
    price: 499,
    verifyStatus: "Approved",
    quantity: 3,
    orders: 45,
    active: true,
  },
  {
    id: 2,
    name: "Garden Tool Set",
    image: "/images/garden-tool.jpg",
    price: 1599,
    verifyStatus: "Approved",
    quantity: 0,
    orders: 12,
    active: true,
  },
];

export default function ProductList() {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("Default");

  const toggleActive = (id: number) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, active: !p.active } : p
      )
    );
  };

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Package2 className="w-5 h-5 text-gray-500" />
          <h2 className="text-lg font-semibold text-gray-900">
            Product List
          </h2>
          <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-0.5 rounded-full">
            {filtered.length}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Input
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-72 h-10 border-gray-200 text-sm focus-visible:ring-gray-300"
          />
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white h-10 px-5 text-sm">
            Search
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="border-gray-200 text-gray-700 h-10 px-4 text-sm font-normal flex items-center"
              >
                {sortBy}
                <ChevronDown className="w-4 h-4 ml-2 text-gray-400" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-36 border-gray-200">
              {["Default", "Price: Low-High", "Price: High-Low", "Newest"].map(
                (opt) => (
                  <DropdownMenuItem
                    key={opt}
                    onSelect={() => setSortBy(opt)}
                    className="text-sm text-gray-700"
                  >
                    {opt}
                  </DropdownMenuItem>
                )
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50 border-b border-gray-200">
            <TableHead className="pl-6 w-16 text-xs font-semibold text-gray-500 uppercase">
              SL
            </TableHead>
            <TableHead className="text-xs font-semibold text-gray-500 uppercase">
              Product Name
            </TableHead>
            <TableHead className="text-xs font-semibold text-gray-500 uppercase">
              Unit Price
            </TableHead>
            <TableHead className="text-xs font-semibold text-gray-500 uppercase">
              Verify Status
            </TableHead>
            <TableHead className="text-xs font-semibold text-gray-500 uppercase">
              Quantity
            </TableHead>
            <TableHead className="text-xs font-semibold text-gray-500 uppercase">
              Orders
            </TableHead>
            <TableHead className="text-xs font-semibold text-gray-500 uppercase text-center">
              Active Status
            </TableHead>
            <TableHead className="pr-6 text-xs font-semibold text-gray-500 uppercase text-center">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filtered.map((product) => (
            <TableRow
              key={product.id}
              className="border-b border-gray-100 hover:bg-gray-50"
            >
              <TableCell className="pl-6 text-sm text-gray-700 align-middle">
                {product.id}
              </TableCell>

              <TableCell className="align-middle">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 border border-gray-200 rounded-md bg-gray-50 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-800">
                    {product.name}
                  </span>
                </div>
              </TableCell>

              <TableCell className="text-sm font-medium text-gray-800 align-middle">
                ₹{product.price.toLocaleString("en-IN")}
              </TableCell>

              <TableCell className="align-middle">
                <span className="px-3 py-1 text-xs font-semibold text-green-600 border border-green-400 rounded">
                  {product.verifyStatus}
                </span>
              </TableCell>

              <TableCell className="text-sm font-semibold text-orange-500 align-middle">
                {product.quantity}
              </TableCell>

              <TableCell className="text-sm font-semibold text-orange-500 align-middle">
                {product.orders}
              </TableCell>

              {/* FIXED SWITCH CENTER */}
              <TableCell className="text-center align-middle">
                <div className="flex justify-center">
                  <Switch
                    checked={product.active}
                    onCheckedChange={() => toggleActive(product.id)}
                    className="data-[state=checked]:bg-indigo-600"
                  />
                </div>
              </TableCell>

              {/* FIXED ACTION CENTER */}
              <TableCell className="pr-6 align-middle text-center">
                <button className="text-indigo-500 hover:text-indigo-700">
                  <CirclePlus className="w-6 h-6 mx-auto" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Footer */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          Showing 1 to {filtered.length} of {filtered.length} items
        </p>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-gray-600">
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>

          <Button className="w-8 h-8 p-0 bg-indigo-600 text-white text-sm rounded">
            1
          </Button>

          <Button variant="ghost" size="sm" className="text-gray-600">
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}