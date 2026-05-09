"use client";

import { User, Info, ChevronDown } from "lucide-react";

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SettingsHeader from "../settings/shared/SettingsHeader";
import SettingsTabs from "../settings/shared/SettingsTabs";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
export default function AdminProfilePage() {
  const [phone, setPhone] = useState("");
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

      {/* Cover */}
      <div className="relative rounded-2xl bg-muted">
        <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2">
          <Avatar className="h-24 w-24 rounded-full border-4 border-white">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
            <AvatarBadge className="bg-green-600 dark:bg-green-800" />
          </Avatar>
        </div>
      </div>

      {/* Form Card */}
      <div className="max-h-full overflow-visible">
        <Card className="max-h-full overflow-visible">
          <CardContent className="space-y-6 p-5">
            {/* Heading */}
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />

              <h2 className="text-xl font-semibold">Basic Information</h2>
            </div>

            {/* Fields */}
            <div className="grid gap-5 lg:grid-cols-3">
              {/* Full Name */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5">
                  <Label className="font-medium">Full name</Label>

                  <span className="text-red-500">*</span>

                  <Info className="h-4 w-4 text-muted-foreground" />
                </div>

                <Input defaultValue="Albert" className="h-10" />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5">
                  <Label className="font-medium">Phone Number</Label>

                  <span className="text-red-500">*</span>
                </div>

                <PhoneInput
                  country={"in"}
                  value={phone}
                  onChange={(phone: string) => setPhone(phone)}
                  containerClass="!w-full"
                  inputClass="!w-full !h-10"
                  dropdownClass="!z-50"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5">
                  <Label className="font-medium">Email</Label>

                  <span className="text-red-500">*</span>

                  <Info className="h-4 w-4 text-muted-foreground" />
                </div>

                <Input defaultValue="albert@example.com" className="h-10" />
              </div>
            </div>
            {/* Button */}
            <div className="flex justify-end">
              <Button className="h-10 px-6">Save Changes</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
