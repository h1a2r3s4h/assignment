"use client"

import SettingsHeader from "@/components/settings/shared/SettingsHeader"
import SettingsTabs from "@/components/settings/shared/SettingsTabs"
import SettingsLayout from "@/components/settings/shared/SettingsLayout"
import SaveButton from "@/components/settings/shared/SaveButton"

import { Switch } from "@/components/ui/switch"

export default function PaymentOptions() {
  return (
    <div className="space-y-4 p-6">
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
            Payment Methods
          </h2>

          <p className="text-sm text-gray-500">
            Configure the payment methods available for your business.
          </p>
        </div>

        <div className="space-y-3">
          <PaymentCard
            title="Cash On Delivery"
            description="Enable cash on delivery option for your customers."
          />

          <PaymentCard
            title="Digital Payment"
            description="Enable digital payment methods (Credit Card, Net Banking, UPI)."
          />
        </div>

        <SaveButton />
      </SettingsLayout>
    </div>
  )
}

type PaymentCardProps = {
  title: string
  description: string
}

function PaymentCard({
  title,
  description,
}: PaymentCardProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-200 p-5">
      <div className="space-y-1">
        <h3 className="text-base font-semibold">
          {title}
        </h3>

        <p className="text-xs text-gray-500">
          {description}
        </p>
      </div>

      <Switch />
    </div>
  )
}