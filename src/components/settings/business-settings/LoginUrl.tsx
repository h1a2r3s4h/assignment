"use client"

import { Copy } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import SettingsHeader from "../shared/SettingsHeader"
import SettingsTabs from "../shared/SettingsTabs"

const loginPages = [
  {
    title: "Admin Login Page",
    description: "Use this URL to access the admin dashboard.",
    url: "https://single-vendor.com/login/admin",
  },
  {
    title: "Employee Login Page",
    description: "Use this URL for employee access.",
    url: "https://single-vendor.com/login/employee",
  },
]

export default function LoginUrls() {
  return (
    <div className="space-y-5">
        <SettingsHeader title="Business Setup" />

        <SettingsTabs
  
  items={[
    {
      label: "General",
      href: "/dashboard/settings/business-settings",
      value: "general",
    },
    {
      label: "Payment Options",
      href: "/dashboard/settings/business-settings/payment-options",
      value: "payment",
    },
    {
      label: "Priority Setup",
      href: "/dashboard/settings/business-settings/priority-setup",
      value: "priority",
    },
    {
      label: "OTP & Login Settings",
      href: "/dashboard/settings/business-settings/login-settings",
      value: "otp-login",
    },
    {
      label: "Login URL",
      href: "/dashboard/settings/business-settings/login-url",
      value: "login-url",
    },
  ]}
/>
      {loginPages.map((item) => (
        <Card
          key={item.title}
          className="rounded-2xl border border-gray-200 shadow-sm"
        >
          <CardContent className="space-y-5 p-6">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h2>

              <p className="text-sm text-gray-500">
                {item.description}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Input
                readOnly
                value={item.url}
                className="h-12 rounded-xl text-base"
              />

              <Button
                size="icon"
                variant="outline"
                className="h-12 w-12 rounded-xl"
              >
                <Copy className="h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}