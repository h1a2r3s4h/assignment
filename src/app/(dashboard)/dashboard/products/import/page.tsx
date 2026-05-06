import ProductBulkImportPage from "@/components/products/ProductImport"

export default function ProductsPage() {
  return (
    <div className="p-6 space-y-6 bg-muted/40 min-h-screen">
      <h1 className="text-2xl font-semibold">Product Bulk Import</h1>

      <ProductBulkImportPage />
    </div>
  )
}