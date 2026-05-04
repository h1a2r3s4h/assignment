import RefundStats from "@/components/refunds/RefundStats"
import RefundTable from "@/components/refunds/RefundTable"


type Props = {
  searchParams?: {
    status?: string
  }
}

export default async function RefundPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>
}) {
  const { status } = await searchParams
  const currentStatus = status ?? "all"

  return (
    <div className="space-y-6">
      <RefundStats />
      <RefundTable status={currentStatus} />
    </div>
  )
}