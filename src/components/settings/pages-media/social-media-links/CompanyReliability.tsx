"use client";

import { Save } from "lucide-react";
import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import SettingsHeader from "../../shared/SettingsHeader";
import SettingsTabs from "../../shared/SettingsTabs";

const items = [
  {
    title: "Delivery Info",
    value: "Fast Delivery Across the country",
  },
  {
    title: "Safe Payment",
    value: "100% Secure Payment",
  },
  {
    title: "Return Policy",
    value: "7 Days Return Policy",
  },
  {
    title: "Authentic Product",
    value: "100% Authentic Products",
  },
];

export default function CompanyReliability() {
  const [enabled, setEnabled] = useState(items.map(() => true));

  return (
    <div className="space-y-4">
      <SettingsHeader title="Site Settings" />

      {/* Tabs */}
      <SettingsTabs
        items={[
          {
            label: "Banner Setup",
            href: "/dashboard/settings/pages-media/social-media-links",
            value: "Banner Setup",
          },
          {
            label: "Announcement",
            href: "/dashboard/settings/pages-media/social-media-links/announcements",
            value: "announcements",
          },
          {
            label: "Company Reliability",
            href: "/dashboard/settings/pages-media/social-media-links/company-reliability",
            value: "company-reliability",
          },
          {
            label: "Trusted By",
            href: "/dashboard/settings/pages-media/social-media-links/trusted-by",
            value: "trusted-by",
          },
        ]}
      />
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold">Company Reliability</h2>

        <p className="text-muted-foreground">
          Manage your company reliability badges and information.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-5 lg:grid-cols-4">
        {items.map((item, index) => (
          <Card key={item.title}>
            <CardContent className="space-y-5 p-6">
              {/* Top */}
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <Switch
                  className="cursor-pointer"
                  checked={enabled[index]}
                  onCheckedChange={(checked) => {
                    const updated = [...enabled];
                    updated[index] = checked;
                    setEnabled(updated);
                  }}
                />
              </div>

              {/* Input */}
              <div className="space-y-2">
                <Label>Title</Label>

                <Input defaultValue={item.value} />
              </div>

              {/* Upload */}
              <Button variant="outline" className="w-full">
                Upload Icon
              </Button>

              {/* Save */}
              <Button className="w-full cursor-pointer gap-2">
                <Save className="h-4 w-4" />
                Save
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
