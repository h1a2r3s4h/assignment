"use client"

import SettingsHeader from "@/components/settings/shared/SettingsHeader"
import SettingsTabs from "@/components/settings/shared/SettingsTabs"
import SettingsLayout from "@/components/settings/shared/SettingsLayout"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { Save } from "lucide-react"

export default function LoginSettings() {
  return (
    <div className="space-y-4 p-4">
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

      <SettingsLayout>
        <div className="space-y-1">
          <h2 className="text-lg font-semibold">
            OTP & Login Settings
          </h2>

          <p className="text-sm text-gray-500">
            Configure OTP limits and login block times.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <FormField
            label="Maximum OTP hit"
            value="3"
          />

          <FormField
            label="OTP resend time (Sec)"
            value="60"
          />

          <FormField
            label="Temporary block time (Sec)"
            value="21600"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            label="Maximum Login hit"
            value="3"
          />

          <FormField
            label="Temporary login block time (Sec)"
            value="21600"
          />
        </div>

        <div className="flex justify-end">
          <Button className="gap-2 bg-indigo-600 hover:bg-indigo-700">
            <Save className="h-4 w-4" />
            Save
          </Button>
        </div>
      </SettingsLayout>
    </div>
  )
}

type FormFieldProps = {
  label: string
  value: string
}

function FormField({
  label,
  value,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">
        {label}
      </label>

      <Input
        defaultValue={value}
        className="h-10"
      />
    </div>
  )
}