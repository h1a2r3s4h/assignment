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
    <div className="space-y-6 p-6 bg-muted/40 min-h-screen">
      <RefundStats />
      <RefundTable status={currentStatus} />
    </div>
  )
}