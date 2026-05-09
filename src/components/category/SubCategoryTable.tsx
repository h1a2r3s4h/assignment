"use client";

import { useMemo, useState } from "react";
import {
  Pencil,
  Trash2,
  ArrowUpDown,
} from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type SubCategory = {
  id: number;
  name: string;
  category: string;
};

export default function SubCategoryTable({
  data,
  onDelete,
  onEdit,
}: {
  data: SubCategory[];
  onDelete: (id: number) => void;
  onEdit: (item: SubCategory) => void;
}) {
  const [sortAsc, setSortAsc] = useState(true);
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 10;

  // SORT BY ID
  const sortedData = useMemo(() => {
    return [...data].sort((a, b) =>
      sortAsc ? a.id - b.id : b.id - a.id
    );
  }, [data, sortAsc]);

  const totalPages = Math.ceil(
    sortedData.length / ITEMS_PER_PAGE
  );

  const paginatedData = sortedData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl p-6">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Sub-Category List
        </h2>

        <Badge className="bg-gray-100 text-gray-600 border-gray-200">
          {data.length}
        </Badge>
      </div>

      {/* TABLE */}
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50 border-b border-gray-200">
            {/* SORTING ON ID */}
            <TableHead>
              <button
                onClick={() => setSortAsc(!sortAsc)}
                className="flex items-center gap-2 font-semibold"
              >
                ID
                <ArrowUpDown className="w-4 h-4" />
              </button>
            </TableHead>

            <TableHead>SUB-CATEGORY</TableHead>

            <TableHead>CATEGORY</TableHead>

            <TableHead className="text-center">
              ACTION
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {paginatedData.map((item) => (
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

              {/* ACTION */}
              <TableCell>
                <div className="flex items-center justify-center gap-4">
                  <Pencil
                    className="w-4 h-4 cursor-pointer text-gray-600"
                    onClick={() => onEdit(item)}
                  />

                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 cursor-pointer"
                    onClick={() =>
                      onDelete(item.id)
                    }
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* FOOTER */}
      <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
        <p>
          Showing {(page - 1) * ITEMS_PER_PAGE + 1} to{" "}
          {Math.min(
            page * ITEMS_PER_PAGE,
            sortedData.length
          )}{" "}
          of {sortedData.length}
        </p>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={page === 1}
            onClick={() =>
              setPage((prev) => prev - 1)
            }
          >
            Previous
          </Button>

          {Array.from(
            { length: totalPages },
            (_, index) => (
              <Button
                key={index}
                size="sm"
                variant={
                  page === index + 1
                    ? "default"
                    : "outline"
                }
                className={
                  page === index + 1
                    ? "bg-indigo-600 text-white"
                    : ""
                }
                onClick={() =>
                  setPage(index + 1)
                }
              >
                {index + 1}
              </Button>
            )
          )}

          <Button
            variant="outline"
            size="sm"
            disabled={page === totalPages}
            onClick={() =>
              setPage((prev) => prev + 1)
            }
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}