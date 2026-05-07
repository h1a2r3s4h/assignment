
"use client"

import Link from "next/link"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Upload,
  ChevronDown,
} from "lucide-react"

export default function GeneralSettings() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Business Setup
        </h1>
      </div>

      <Tabs defaultValue="general" className="w-fit">
        <TabsList className="h-12 rounded-lg border bg-white p-0">
          <TabsTrigger
            value="general"
            className="rounded-none px-6 data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
          >
            General
          </TabsTrigger>

          <Link href="/dashboard/settings/business-settings/payment-options">
            <Button
              variant="ghost"
              className="h-12 rounded-none border-l px-6"
            >
              Payment Options
            </Button>
          </Link>

          <Link href="/dashboard/settings/business-settings/priority-setup">
            <Button
              variant="ghost"
              className="h-12 rounded-none border-l px-6"
            >
              Priority Setup
            </Button>
          </Link>

          <Button
            variant="ghost"
            className="h-12 rounded-none border-l px-6"
          >
            Login Settings
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </TabsList>
      </Tabs>

      <Card className="rounded-2xl border border-gray-200 shadow-sm">
        <CardContent className="space-y-8 p-8">
          <div>
            <h2 className="text-2xl font-semibold">
              Company Information
            </h2>
            <p className="mt-1 text-gray-500">
              Update your company details and contact information.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Company Name
              </label>
              <Input defaultValue="Dobby" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                Phone
              </label>
              <Input defaultValue="+91-9999999999" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                Email
              </label>
              <Input defaultValue="info@dobby.com" />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Country
              </label>
              <Input defaultValue="India" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                Time zone
              </label>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="UTC+05:30" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="india">
                    UTC+05:30
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                Language
              </label>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="English" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="english">
                    English
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Address
            </label>
            <Input defaultValue="Connaught Place, New Delhi" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Latitude
              </label>
              <Input defaultValue="28.6139" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                Longitude
              </label>
              <Input defaultValue="77.2090" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Company Copyright Text
            </label>
            <Input defaultValue="© 2024 Dobby. All rights reserved." />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <LogoUpload title="Website Header Logo" />
            <LogoUpload title="Website Footer Logo" />
            <LogoUpload title="Website Favicon" />
            <LogoUpload title="Loading GIF" />
          </div>

          <div className="flex justify-end">
            <Button className="rounded-lg bg-indigo-600 hover:bg-indigo-700">
              Save Information
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function LogoUpload({ title }: { title: string }) {
  return (
    <div className="space-y-3">
      <label className="text-sm font-semibold">
        {title}
        <span className="ml-1 text-xs text-gray-500">
          (1000 x 308 px)
        </span>
      </label>

      <div className="flex gap-4">
        <div className="flex h-24 w-24 items-center justify-center rounded-md border bg-gray-50 text-sm text-gray-400">
          Preview
        </div>

        <Button
          variant="outline"
          className="h-12 flex-1 justify-center gap-2"
        >
          <Upload className="h-4 w-4" />
          Choose Image
        </Button>
      </div>
    </div>
  )
}



