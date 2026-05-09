"use client";

import { useState } from "react";
import CategoryForm from "@/components/category/CategoryForm";
import CategoryTable from "@/components/category/CategoryTable";
import { categories } from "@/lib/category-data";

export type CategoryImage = {
  url: string;
  name: string;
};

export type CategoryType = {
  id: number;
  name: string;
  status: boolean;
  images: CategoryImage[];
};

export default function CategoriesPage() {
  const [categoryData, setCategoryData] = useState<CategoryType[]>(categories);

  const handleAddCategory = (category: Omit<CategoryType, "id">) => {
    setCategoryData((prev) => {
      const newCategory: CategoryType = {
        ...category,
        id: prev.length > 0 ? Math.max(...prev.map((item) => item.id)) + 1 : 1,
      };
      // Add new item then sort by id descending — highest (newest) id first
      return [...prev, newCategory].sort((a, b) => b.id - a.id);
    });
  };

  const handleToggleStatus = (id: number) => {
    setCategoryData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

  return (
    <div className="space-y-6 bg-muted/40 min-h-screen">
      <h1 className="text-2xl font-semibold tracking-tight">Category Setup</h1>
      <CategoryForm onCreate={handleAddCategory} />
      <CategoryTable data={categoryData} onToggleStatus={handleToggleStatus} />
    </div>
  );
}
