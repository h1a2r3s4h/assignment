import { Card, CardContent } from "@/components/ui/card"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function SettingsLayout({
  children,
}: Props) {
  return (
    <Card className="rounded-2xl border border-gray-200 shadow-sm">
      <CardContent className="space-y-8 p-8">
        {children}
      </CardContent>
    </Card>
  )
}