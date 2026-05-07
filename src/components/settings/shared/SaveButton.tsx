import { Button } from "@/components/ui/button"

export default function SaveButton() {
  return (
    <div className="flex justify-end">
      <Button className="rounded-lg bg-indigo-600 hover:bg-indigo-700">
        Save Information
      </Button>
    </div>
  )
}