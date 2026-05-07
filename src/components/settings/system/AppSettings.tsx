import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Save } from "lucide-react"
import SettingsHeader from "../shared/SettingsHeader"
import SettingsTabs from "../shared/SettingsTabs"

export default function AppVersionControl() {
  return (
   <div className="space-y-4">
    
        <SettingsHeader title="System Setup" />
    
    <SettingsTabs
      items={[
        {
          label: "General",
          href: "/dashboard/settings/system",
          value: "general",
        },
        {
          label: "App Settings",
          href: "/dashboard/settings/system/app-settings",
          value: "app-settings",
        },
        {
          label: "Cookies",
          href: "/dashboard/settings/system/cookies",
          value: "cookies",
        },
      ]}
    />
    <Card className="rounded-2xl border">
      <CardContent className="p-6 space-y-8">
        <div className="flex items-center gap-3">
          <img
            src="/version.svg"
            alt="version"
            className="h-7 w-7"
          />

          <h2 className="text-2xl font-semibold">
            User App Version Control
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/android.svg"
                alt="android"
                className="h-6 w-6"
              />

              <h3 className="text-xl font-semibold">
                For Android
              </h3>
            </div>

            <div className="space-y-2">
              <Label>Minimum Customer App Version</Label>

              <Input defaultValue="14.1" />
            </div>

            <div className="space-y-2">
              <Label>Download URL for customer app</Label>

              <Input defaultValue="https://play.google.com/store/apps" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/apple.svg"
                alt="ios"
                className="h-6 w-6"
              />

              <h3 className="text-xl font-semibold">
                For iOS
              </h3>
            </div>

            <div className="space-y-2">
              <Label>Minimum Customer App Version</Label>

              <Input defaultValue="14.1" />
            </div>

            <div className="space-y-2">
              <Label>Download URL for customer app</Label>

              <Input defaultValue="https://www.apple.com/app-store" />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 border-t pt-5">
          <Button variant="outline">
            Reset
          </Button>

          <Button className="gap-2">
            <Save className="h-4 w-4" />
            Save Information
          </Button>
        </div>
      </CardContent>
    </Card>
    </div>
  )
}