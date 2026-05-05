import SubCategoryForm from "@/components/category/SubCategoryForm"
import SubCategoryTable from "@/components/category/SubCategoryTable"
import { categories, subcategories } from "@/lib/category-data"

export default function SubCategoriesPage() {
  return (
    <div className="p-6 space-y-6 bg-muted/40 min-h-screen">
      <h1 className="text-2xl font-semibold tracking-tight">
        Subcategory Setup
      </h1>

      <SubCategoryForm categories={categories} />
      <SubCategoryTable data={subcategories} />
    </div>
  )
}