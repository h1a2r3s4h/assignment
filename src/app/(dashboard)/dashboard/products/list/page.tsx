import ProductTable from "@/components/products/ProductTable"
import ProductFilters from "@/components/products/ProductFilters"

export default function ProductsPage() {
  return (
    <div className="space-y-4 p-4">
      <h1 className="text-xl font-semibold">In House Products</h1>

      <ProductFilters />

      <ProductTable />
    </div>
  )
}