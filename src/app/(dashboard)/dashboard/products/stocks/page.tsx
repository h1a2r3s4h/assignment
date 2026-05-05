import ProductStock from "@/components/products/ProductStock"

export default function Page() {
  return (
    <div className="p-6 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6">
        <ProductStock />
      </div>
    </div>
  )
}