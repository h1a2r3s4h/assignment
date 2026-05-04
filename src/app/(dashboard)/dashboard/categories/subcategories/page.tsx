import SubCategoryForm from "@/components/category/SubCategoryForm"
import SubCategoryTable from "@/components/category/SubCategoryTable"
import { categories, subcategories } from "@/lib/category-data"

export default function SubCategoriesPage() {
  return (
    <div className="space-y-6">
      <SubCategoryForm categories={categories} />
      <SubCategoryTable data={subcategories} />
    </div>
  )
}