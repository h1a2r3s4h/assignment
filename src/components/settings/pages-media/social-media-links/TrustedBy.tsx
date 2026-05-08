"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import SettingsHeader from "../../shared/SettingsHeader";
import SettingsTabs from "../../shared/SettingsTabs";

const logos = [
  {
    image: "/logo.png",
    active: true,
  },
  {
    image: "/logo.png",
    active: true,
  },
  {
    image: "/logo.png",
    active: false,
  },
  {
    image: "/logo.png",
    active: false,
  },
];

export default function TrustedByLogos() {
  const [items, setItems] = useState(logos);

  const toggleSwitch = (index: number) => {
    const updated = [...items];

    updated[index].active = !updated[index].active;

    setItems(updated);
  };

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
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">
          Trusted By Logos
        </h2>

        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Logo
        </Button>
      </div>

      {/* Cards */}
      <div className="grid gap-5 lg:grid-cols-4">
        {items.map((item, index) => (
          <Card key={index}>
            <CardContent className="space-y-5 p-6">
              {/* Top */}
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">
                  Logo
                </h3>

                <Switch
                className="cursor-pointer"
                  checked={item.active}
                  onCheckedChange={() =>
                    toggleSwitch(index)
                  }
                />
              </div>

              {/* Logo Preview */}
              <div className="flex h-52 items-start rounded-lg border border-dashed p-4">
                <Image
                  src={item.image}
                  alt="Logo"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>

              {/* Save */}
              <Button className="w-full cursor-pointer gap-2">
                Save
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}