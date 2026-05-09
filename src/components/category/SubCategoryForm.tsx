"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Category = {
  id: number;
  name: string;
};

type EditingItem = {
  id: number;
  name: string;
  category: string;
};

export default function SubCategoryForm({
  categories,
  onAddSubCategory,
  editingItem,
  onCancelEdit,
}: {
  categories: Category[];
  onAddSubCategory: (
    name: string,
    categoryId: string
  ) => void;
  editingItem: EditingItem | null;
  onCancelEdit: () => void;
}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editingItem) {
      setName(editingItem.name);

      const matchedCategory = categories.find(
        (cat) =>
          cat.name === editingItem.category
      );

      if (matchedCategory) {
        setCategory(String(matchedCategory.id));
      }
    }
  }, [editingItem, categories]);

  const handleSubmit = async () => {
    if (!name || !category) return;

    setLoading(true);

    try {
      await new Promise((resolve) =>
        setTimeout(resolve, 800)
      );

      onAddSubCategory(name, category);

      setName("");
      setCategory("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
        <span className="text-indigo-600 text-xl">
          +
        </span>

        {editingItem
          ? "Edit Sub-Category"
          : "Add New Sub-Category"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">
            Sub-Category Name{" "}
            <span className="text-red-500">*</span>
          </label>

          <Input
            placeholder="e.g. Sofa, Chair"
            value={name}
            onChange={(e) =>
              
              setName(e.target.value)
            }
            className="h-9 border-gray-200 rounded-lg focus:border-gray-300 focus:ring-0 shadow-none"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">
            Main Category{" "}
            <span className="text-red-500">*</span>
          </label>

          <Select
            value={category}
            onValueChange={setCategory}
          >
            <SelectTrigger  className="h-16 w-full rounded-lg border border-gray-200 bg-white px-3 text-sm shadow-none focus:ring-0 focus:border-black">
  <SelectValue  placeholder="Select Main Category" />
</SelectTrigger>

            <SelectContent>
              {categories.map((cat) => (
                <SelectItem
                  key={cat.id}
                  value={String(cat.id)}
                >
                  {cat.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="border-t border-gray-100 my-6" />

      <div className="flex justify-end gap-3">
        <Button
          variant="outline"
          className="h-10 px-6 rounded-lg border-gray-200 text-gray-700 hover:bg-gray-50"
          onClick={() => {
            setName("");
            setCategory("");
            onCancelEdit();
          }}
        >
          {editingItem ? "Cancel" : "Reset"}
        </Button>

        <Button
          className="h-10 px-6 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white"
          onClick={handleSubmit}
          disabled={!name || !category || loading}
        >
          {loading && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          )}

          {editingItem
            ? "Update Sub-Category"
            : "Create Sub-Category"}
        </Button>
      </div>
    </div>
  );
}