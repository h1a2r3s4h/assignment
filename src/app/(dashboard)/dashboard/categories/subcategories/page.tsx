"use client"

import { useState } from "react"
import SubCategoryForm from "@/components/category/SubCategoryForm"
import SubCategoryTable from "@/components/category/SubCategoryTable"
import { categories, subcategories } from "@/lib/category-data"

export type SubCategoryType = {
  id: number
  name: string
  category: string
}

export default function SubCategoriesPage() {
  const [data, setData] =
    useState<SubCategoryType[]>(subcategories)

  const [editingItem, setEditingItem] =
    useState<SubCategoryType | null>(null)

  const handleAddOrUpdateSubCategory = (
    name: string,
    categoryId: string
  ) => {
    const selectedCategory = categories.find(
      (cat) => String(cat.id) === categoryId
    )

    if (!selectedCategory) return

    // UPDATE
    if (editingItem) {
      setData((prev) =>
        prev.map((item) =>
          item.id === editingItem.id
            ? {
                ...item,
                name,
                category: selectedCategory.name,
              }
            : item
        )
      )

      setEditingItem(null)
      return
    }

    // CREATE
    const newSubCategory: SubCategoryType = {
      id:
        data.length > 0
          ? Math.max(...data.map((i) => i.id)) + 1
          : 1,
      name,
      category: selectedCategory.name,
    }

    setData((prev) => [newSubCategory, ...prev])
  }

  const handleDelete = (id: number) => {
    setData((prev) =>
      prev.filter((item) => item.id !== id)
    )
  }

  return (
    <div className="space-y-6 bg-muted/40 min-h-screen">
      <h1 className="text-2xl font-semibold tracking-tight">
        Subcategory Setup
      </h1>

      <SubCategoryForm
        categories={categories}
        onAddSubCategory={
          handleAddOrUpdateSubCategory
        }
        editingItem={editingItem}
        onCancelEdit={() =>
          setEditingItem(null)
        }
      />

      <SubCategoryTable
        data={data}
        onDelete={handleDelete}
        onEdit={(item) =>
          setEditingItem(item)
        }
      />
    </div>
  )
}