import ProductTable from "@/components/products/ProductTable"
import ProductFilters from "@/components/products/ProductFilters"

export default function ProductsPage() {
  return (
    <div className="p-6 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6">
        
        <h1 className="text-2xl font-semibold">In House Products</h1>

        <ProductFilters />

        <ProductTable />

      </div>
    </div>
  )
}