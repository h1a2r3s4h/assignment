'use client'
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Save, Cookie } from "lucide-react"
import SettingsTabs from "../shared/SettingsTabs"
import SettingsHeader from "../shared/SettingsHeader"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

export default function CookiesSettings() {
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

      <Card className="rounded-2xl border ">
        <CardContent className="p-6 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
                <Cookie className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">
              Cookie Settings
            </h2>
          </div>

          <div className="grid gap-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                    <Label className="text-base">Enable Cookie Consent</Label>
                    <p className="text-sm text-muted-foreground">
                        Show a cookie consent banner to visitors.
                    </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Cookie Policy Text</Label>
              <Textarea 
                placeholder="Enter your cookie policy description here..." 
                className="min-h-[100px]"
                defaultValue="We use cookies to improve your experience on our site. By using our site, you consent to cookies."
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Cookie Consent Position</Label>
                <Select defaultValue="bottom-right">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bottom-right">Bottom Right</SelectItem>
                    <SelectItem value="bottom-left">Bottom Left</SelectItem>
                    <SelectItem value="top-right">Top Right</SelectItem>
                    <SelectItem value="top-left">Top Left</SelectItem>
                    <SelectItem value="bottom-center">Bottom Center</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Cookie Duration (Days)</Label>
                <Select defaultValue="30">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7">7 Days</SelectItem>
                    <SelectItem value="30">30 Days</SelectItem>
                    <SelectItem value="90">90 Days</SelectItem>
                    <SelectItem value="365">1 Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 border-t pt-5">
            <Button variant="outline">
              Reset
            </Button>
            <Button className="gap-2">
              <Save className="h-4 w-4" />
              Save Cookie Settings
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
