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

type Category = {
  id: number;
  name: string;
  status: boolean;
};

export default function CategoryTable({ data }: { data: Category[] }) {
  const [tableData, setTableData] = useState<Category[]>([]);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const toggleStatus = (id: number) => {
    setTableData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item,
      ),
    );
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
        <h2 className="text-lg font-semibold mb-4">Category List</h2>

        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 border-b border-gray-200">
              <TableHead>ID</TableHead>
              <TableHead>LOGO</TableHead>
              <TableHead>CATEGORY NAME</TableHead>
              <TableHead>STATUS</TableHead>
              <TableHead>ACTION</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {tableData.map((item) => (
              <TableRow
                key={item.id}
                className="hover:bg-gray-50 border-b border-gray-200 last:border-0"
              >
                <TableCell>{item.id}</TableCell>

                <TableCell>
                  <div className="w-10 h-10 rounded-md border bg-gray-100 flex items-center justify-center">
                    📦
                  </div>
                </TableCell>

                <TableCell className="font-medium">{item.name}</TableCell>

                <TableCell>
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
                </TableCell>

                <TableCell>
                  <div className="flex items-center gap-4">
                    <Pencil className="w-4 h-4 cursor-pointer text-gray-600" />

                    <Switch
                      checked={item.status}
                      onCheckedChange={() => toggleStatus(item.id)}
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
            Showing 1 to {tableData.length} of {tableData.length} categories
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
    </div>
  );
}
