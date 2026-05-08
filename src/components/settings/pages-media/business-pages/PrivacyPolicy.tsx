"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";

import "quill/dist/quill.snow.css";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Save } from "lucide-react";

import SettingsHeader from "../../shared/SettingsHeader";
import SettingsTabs from "../../shared/SettingsTabs";

// Quill
const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
});

export default function PrivacyPolicyPage() {
  const [value, setValue] = useState("<p>Privacy Policy.</p>");

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

  return (
    <div className="space-y-5">
      {/* Header */}
      <SettingsHeader title="Business Pages" />

      {/* Tabs */}
      <SettingsTabs
        items={[
          {
            label: "About Us",
            href: "/dashboard/settings/pages-media/business-pages",
            value: "about-us",
          },
          {
            label: "Cancellation Policy",
            href: "/dashboard/settings/pages-media/business-pages/cancellation-policy",
            value: "cancellation-policy",
          },
          {
            label: "FAQ",
            href: "/dashboard/settings/pages-media/business-pages/FAQ",
            value: "faq",
          },
          {
            label: "Privacy Policy",
            href: "/dashboard/settings/pages-media/business-pages/privacy-policy",
            value: "privacy-policy",
          },
          {
            label: "Refund Policy",
            href: "/dashboard/settings/pages-media/business-pages/refund-policy",
            value: "refund-policy",
          },
          {
            label: "Return Policy",
            href: "/dashboard/settings/pages-media/business-pages/return-policy",
            value: "return-policy",
          },
          {
            label: "Shipping Policy",
            href: "/dashboard/settings/pages-media/business-pages/shipping-policy",
            value: "shipping-policy",
          },
          {
            label: "Terms & Conditions",
            href: "/dashboard/settings/pages-media/business-pages/terms-conditions",
            value: "terms-conditions",
          },
        ]}
      />

      {/* Content */}
      <Card className="rounded-2xl">
        <CardContent className="p-5">
          {/* Heading */}
          <div className="mb-5">
            <h2 className="text-3xl font-bold">
              Privacy Policy
            </h2>

            <p className="mt-2 text-base text-muted-foreground">
              Update your company's Privacy Policy page content.
            </p>
          </div>

          {/* Editor */}
          <div className="overflow-hidden rounded-xl border">
            <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
              modules={modules}
              className="privacy-editor"
            />
          </div>

          {/* Button */}
          <div className="mt-5 flex justify-end border-t pt-5">
            <Button className="gap-2">
              <Save className="h-4 w-4" />
              Save Information
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quill Styling */}
      <style jsx global>{`
        .privacy-editor .ql-toolbar {
          border: 0;
          border-bottom: 1px solid #e5e7eb;
          padding: 12px;
        }

        .privacy-editor .ql-container {
          border: 0;
          min-height: 220px;
        }

        .privacy-editor .ql-editor {
          min-height: 220px;
          padding: 16px;
          font-size: 15px;
        }
      `}</style>
    </div>
  );
}