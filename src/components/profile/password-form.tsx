"use client"

import { useState } from "react"
import { Eye, EyeOff, Info, Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import SettingsHeader from "../settings/shared/SettingsHeader"
import SettingsTabs from "../settings/shared/SettingsTabs"

export default function ChangePassword() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="space-y-5">
      <SettingsHeader title="Profile Information" />

      <SettingsTabs
        items={[
          {
            label: "Basic Information",
            href: "/dashboard/profile",
            value: "information",
          },
          {
            label: "Password",
            href: "/dashboard/profile/password",
            value: "password",
          },
        ]}
      />

      <Card>
        <CardContent className="space-y-6 p-5">
          {/* Heading */}
          <div className="flex items-center gap-2">
            <Lock className="h-5 w-5" />

            <h2 className="text-2xl font-semibold">
              Change Password
            </h2>
          </div>

          {/* Fields */}
          <div className="grid grid-cols-2 gap-5">
            {/* New Password */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label className="font-medium">
                  New password
                </Label>

                <span className="text-red-500">*</span>

                <Info className="h-4 w-4" />
              </div>

              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  className="h-11 pr-10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <Eye className="h-5 w-5" />
                  ) : (
                    <EyeOff className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label className="font-medium">
                  Confirm password
                </Label>

                <span className="text-red-500">*</span>
              </div>

              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter confirm password"
                  className="h-11 pr-10"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showConfirmPassword ? (
                    <Eye className="h-5 w-5" />
                  ) : (
                    <EyeOff className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-end">
            <Button className="h-11 px-6">
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}