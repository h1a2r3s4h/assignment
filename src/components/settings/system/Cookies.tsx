"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";

import "quill/dist/quill.snow.css";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

import { Save, Loader2 } from "lucide-react";

import SettingsHeader from "../shared/SettingsHeader";
import SettingsTabs from "../shared/SettingsTabs";

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
});

export default function CookiesSettingsPage() {
  const [enabled, setEnabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const [value, setValue] = useState(
    "<p>About Single Vendor.</p>"
  );

  const modules = useMemo(
    () => ({
      toolbar: [
        [{ font: [] }],
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        ["blockquote", "code-block"],
        ["link", "image"],
        [{ align: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ color: [] }, { background: [] }],
        ["clean"],
      ],
    }),
    []
  );

  const handleSave = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // existing logic
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <SettingsHeader title="System Setup" />

      {/* Tabs */}
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

      {/* Card */}
      <Card className="rounded-2xl border shadow-sm">
        <CardContent className="p-6 space-y-6">
          {/* Top */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/cookie-icon.png"
                alt="cookie"
                className="w-8 h-8"
              />

              <h2 className="text-3xl font-semibold">
                Cookies Settings
              </h2>
            </div>

            <Switch
              checked={enabled}
              onCheckedChange={setEnabled}
            />
          </div>

          {/* Editor */}
          <div className="overflow-hidden ">
            <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
              modules={modules}
              placeholder="Write here..."
              className="min-h-[32px]"
            />
          </div>

          {/* Button */}
          <div className="flex justify-end border-t pt-5">
            <Button
              className="gap-2"
              onClick={handleSave}
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Save className="h-4 w-4" />
              )}
              Save Information
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}