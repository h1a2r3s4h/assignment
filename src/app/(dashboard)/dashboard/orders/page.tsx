import OrdersStats from "@/components/orders/OrderStats"
import OrderTable from "@/components/orders/OrderTable"

export default async function OrdersPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>
}) {
  const { status } = await searchParams
  const currentStatus = status ?? "all"

  return (
    <div className="p-6  min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6">
        
        <OrdersStats />
        
        <OrderTable status={currentStatus} />

      </div>
    </div>
  )
}