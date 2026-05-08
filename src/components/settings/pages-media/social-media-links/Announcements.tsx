"use client";

import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import SettingsHeader from "../../shared/SettingsHeader";
import SettingsTabs from "../../shared/SettingsTabs";

export default function TopBarSettings() {
  const [status, setStatus] = useState("active");

  const [backgroundColor, setBackgroundColor] = useState("#000000");
  const [textColor, setTextColor] = useState("#FFFFFF");

  const [text, setText] = useState(
    "Free listings for first 100 Shopkeepers"
  );

  const maxLength = 50;

  return (

    <div className="space-y-5">
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
    <Card>
      <CardContent className="space-y-6 p-6">
        {/* Header */}
        <div>
          <h2 className="text-xl font-semibold">Top Bar</h2>

          <p className="text-sm text-muted-foreground">
            Configure the topmost announcement bar.
          </p>
        </div>

        {/* Status */}
        <div className="space-y-3">
          <Label>Status</Label>

          <RadioGroup
          
            value={status}
            onValueChange={setStatus}
            className="flex gap-6"
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value="active" className="cursor-pointer" id="active" />

              <Label htmlFor="active">Active</Label>
            </div>

            <div className="flex items-center gap-2">
              <RadioGroupItem value="inactive" className="cursor-pointer" id="inactive" />

              <Label htmlFor="inactive">Inactive</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Colors */}
        <div className="flex gap-10">
          {/* Background */}
          <div className="space-y-3">
            <Label>Background Color</Label>

            <div className="space-y-2">
              <Input
                type="color"
                value={backgroundColor}
                onChange={(e) =>
                  setBackgroundColor(e.target.value)
                }
                className="h-20 w-24 p-1"
              />

              <p className="text-sm text-muted-foreground uppercase">
                {backgroundColor}
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-3">
            <Label>Text Color</Label>

            <div className="space-y-2">
              <Input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="h-20 w-24 p-1"
              />

              <p className="text-sm text-muted-foreground uppercase">
                {textColor}
              </p>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="space-y-3">
          <Label>Text</Label>

          <Textarea
            value={text}
            onChange={(e) =>
              setText(e.target.value.slice(0, maxLength))
            }
            className="min-h-28 resize-none"
          />

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p>Max character limit: {maxLength}</p>

            <p>
              {text.length}/{maxLength}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <Button variant="outline" className="cursor-pointer">Reset</Button>

          <Button className="cursor-pointer">Publish</Button>
        </div>
      </CardContent>
    </Card>
    </div>
  );
}