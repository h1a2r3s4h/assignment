import { Suspense } from "react"
import CategoryForm from "@/components/category/CategoryForm"
import CategoryTable from "@/components/category/CategoryTable"
import { categories } from "@/lib/category-data"

export default function CategoriesPage() {
  return (
    <div className="p-6 space-y-6 bg-muted/40 min-h-screen">
      <h1 className="text-2xl font-semibold tracking-tight">
        Category Setup
      </h1>

      <CategoryForm />

      <Suspense fallback={<div>Loading...</div>}>
        <CategoryTable data={categories} />
      </Suspense>
    </div>
  )
}