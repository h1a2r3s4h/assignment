"use client";

import { useState, useEffect } from "react";
import { Pencil, Trash } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import type { CategoryType } from "@/app/(dashboard)/dashboard/categories/page";

export default function CategoryTable({
  data,
  onToggleStatus,
}: {
  data: CategoryType[];
  onToggleStatus: (id: number) => void;
}) {
  const [page, setPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

 const ITEMS_PER_PAGE = 10;

  const sortedData = [...data].sort((a, b) =>
    sortOrder === "desc" ? b.id - a.id : a.id - b.id
  );

  const totalPages = Math.ceil(sortedData.length / ITEMS_PER_PAGE);

  const paginatedData = sortedData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages || 1);
    }
  }, [data, page, totalPages]);

  return (
    <div className="w-full">
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 w-full">
        <h2 className="text-lg font-semibold mb-4">Category List</h2>

        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 border-b border-gray-200">
              <TableHead
                className="cursor-pointer select-none"
                onClick={() => {
                  setSortOrder((prev) => (prev === "desc" ? "asc" : "desc"));
                  setPage(1);
                }}
              >
                ID {sortOrder === "desc" ? "↓" : "↑"}
              </TableHead>
              <TableHead>LOGO</TableHead>
              <TableHead>CATEGORY NAME</TableHead>
              <TableHead>STATUS</TableHead>
              <TableHead>ACTION</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {paginatedData.map((item) => (
              <TableRow
                key={item.id}
                className="hover:bg-gray-50 border-b border-gray-200 last:border-0"
              >
                <TableCell>{item.id}</TableCell>

                <TableCell>
                  <div className="flex items-center gap-2">
                    {item.images.slice(0, 3).map((img, index) => (
                      <div
                        key={index}
                        className="w-10 h-10 rounded-md border bg-gray-100 overflow-hidden"
                      >
                        <img
                          src={img.url}
                          alt={img.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}

                    {item.images.length > 3 && (
                      <span className="text-xs text-gray-500">
                        +{item.images.length - 3}
                      </span>
                    )}
                  </div>
                </TableCell>

                <TableCell className="font-medium">{item.name}</TableCell>

                <TableCell>
                  <Badge
                    variant="outline"
                    className={`w-[90px] justify-center flex ${
                      item.status
                        ? "text-green-600 border-green-300"
                        : "text-red-500 border-red-300"
                    }`}
                  >
                    {item.status ? "Active" : "Inactive"}
                  </Badge>
                </TableCell>

                <TableCell>
                  <div className="flex items-center gap-4">
                    <Pencil className="w-4 h-4 cursor-pointer text-gray-600" />

                    <Switch
                      className="cursor-pointer"
                      checked={item.status}
                      onCheckedChange={() => onToggleStatus(item.id)}
                    />

                    <Trash className="w-4 h-4 text-red-500 cursor-pointer" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
          <p>
            {data.length === 0
              ? "No categories found"
              : `Showing ${(page - 1) * ITEMS_PER_PAGE + 1} to ${Math.min(
                  page * ITEMS_PER_PAGE,
                  sortedData.length
                )} of ${sortedData.length} categories`}
          </p>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={page === 1}
              onClick={() => setPage((prev) => prev - 1)}
            >
              Previous
            </Button>

            <Button size="sm" className="bg-indigo-600 text-white">
              {page}
            </Button>

            <Button
              variant="outline"
              size="sm"
              disabled={page === totalPages || totalPages === 0}
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
