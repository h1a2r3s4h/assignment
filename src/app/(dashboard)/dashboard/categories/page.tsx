import { Suspense } from "react"
import CategoryForm from "@/components/category/CategoryForm"
import CategoryTable from "@/components/category/CategoryTable"
import { categories } from "@/lib/category-data"

export default function CategoriesPage() {
  return (
    <div className="space-y-6">
      <CategoryForm />

      <Suspense fallback={<div>Loading...</div>}>
        <CategoryTable data={categories} />
      </Suspense>
    </div>
  )
}