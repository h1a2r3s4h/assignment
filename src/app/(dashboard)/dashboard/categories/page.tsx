import { Suspense } from "react"
import CategoryForm from "@/components/category/CategoryForm"
import CategoryTable from "@/components/category/CategoryTable"
import { categories } from "@/lib/category-data"

export default function CategoriesPage() {
  return (
    <div className="space-y-6">
      {/* Heading */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Category Setup
        </h1>
        {/* <p className="text-sm text-muted-foreground">
          Manage your categories and subcategories here.
        </p> */}
      </div>

      <CategoryForm />

      <Suspense fallback={<div>Loading...</div>}>
        <CategoryTable data={categories} />
      </Suspense>
    </div>
  )
}