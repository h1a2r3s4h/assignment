import { Suspense } from "react"
import CategoryForm from "@/components/category/CategoryForm"
import CategoryTable from "@/components/category/CategoryTable"
import { categories } from "@/lib/category-data"

export default function CategoriesPage() {
  return (
    <div className="w-full max-w-7xl pl-2 pr-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Category Setup
        </h1>
      </div>

      <CategoryForm />

      <Suspense fallback={<div>Loading...</div>}>
        <CategoryTable data={categories} />
      </Suspense>
    </div>
  )
}