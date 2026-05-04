import OrdersStats from "@/components/orders/OrderStats"
import OrderTable from "@/components/orders/OrderTable"

type Props = {
  searchParams?: {
    status?: string
  }
}

export default async function OrdersPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>
}) {
  const { status } = await searchParams
  const currentStatus = status ?? "all"

  return (
    <div className="space-y-6 p-6">
      <OrdersStats />
      <OrderTable status={currentStatus} />
    </div>
  )
}