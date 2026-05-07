'use client'
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Save } from "lucide-react"
import SettingsTabs from "../shared/SettingsTabs"
import SettingsHeader from "../shared/SettingsHeader"

export default function EnvironmentInformation() {
    

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
          <img
            src="/environment.svg"
            alt="environment"
            className="h-7 w-7"
          />
          <h2 className="text-2xl font-semibold">
            Environment Information
          </h2>
        </div>

        <div className="space-y-2">
          <Label>App Name</Label>
          <Input defaultValue="Single Vendor" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-2">
            <Label>App Debug</Label>

            <Select defaultValue="false">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="false">False</SelectItem>
                <SelectItem value="true">True</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>App Mode</Label>

            <Select defaultValue="dev">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="dev">Dev</SelectItem>
                <SelectItem value="prod">Production</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>App URL</Label>
            <Input defaultValue="https://singlevendor.com" />
          </div>

          <div className="space-y-2">
            <Label>DB Connection</Label>
            <Input defaultValue="mongodb" />
          </div>

          <div className="space-y-2">
            <Label>DB Host</Label>
            <Input defaultValue="localhost" />
          </div>

          <div className="space-y-2">
            <Label>DB Port</Label>
            <Input defaultValue="27017" />
          </div>

          <div className="space-y-2">
            <Label>DB Database</Label>
            <Input defaultValue="singlevendor" />
          </div>

          <div className="space-y-2">
            <Label>DB Username</Label>
            <Input defaultValue="username" />
          </div>

          <div className="space-y-2">
            <Label>DB Password</Label>
            <Input type="password" defaultValue="password123" />
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