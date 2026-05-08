"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";

import "quill/dist/quill.snow.css";

import { Card, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import { Checkbox } from "@/components/ui/checkbox";

import { Switch } from "@/components/ui/switch";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import { Save, RotateCcw, Info } from "lucide-react";

// Quill
const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
});

export default function EmailTemplatesPage() {
  const [enabled, setEnabled] = useState(true);

  const [value, setValue] = useState(`
    <p>Hi {Admin Name},</p>
    <p>You have received a new shop request.</p>
    <p>Log in to Admin Panel</p>
  `);

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
        [{ color: [] }],
        ["clean"],
      ],
    }),
    [],
  );

  return (
    <>
      <div className="space-y-5">
        {/* Top */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Email Templates</h1>

          <div className="flex items-center gap-3">
            <Label>Template Type:</Label>

            <Select defaultValue="admin">
              <SelectTrigger className="w-[220px]">
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="admin">Admin mail template</SelectItem>
                <SelectItem value="custom">Custom mail template</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Main Card */}
        <Card className="rounded-2xl">
          <CardContent className="p-5 space-y-5">
            {/* Template Button */}
            <Button>Admin Mail Template</Button>

            {/* Notification */}
            <Card>
              <Card className="rounded-3xl border bg-background shadow-sm">
                <CardContent className="flex items-center justify-between p-0 md:p-5">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold tracking-tight">
                      Email Notifications
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      Get email notifications when a new request is received.
                    </p>
                  </div>

                  <Switch
                    checked={enabled}
                    onCheckedChange={setEnabled}
                    className="data-[state=checked]:bg-black"
                  />
                </CardContent>
              </Card>
            </Card>

            {/* Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Template Designer</h2>

              <Button variant="outline" className="gap-2">
                <Info className="h-4 w-4" />
                Read Instructions
              </Button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 gap-5">
              {/* Preview */}
              <div className="space-y-3">
                <h3 className="font-semibold text-muted-foreground">
                  Live Preview
                </h3>

                <Card className="min-h-[850px] border border-gray-200 rounded-2xl">
                  <CardContent className="p-10 space-y-8 text-center">
                    <img src="/logo.png" alt="Logo" className="mx-auto h-14" />

                    <div className="space-y-5">
                      <h2 className="text-2xl font-bold">
                        New Shop Request Received
                      </h2>

                      <p className="text-lg text-muted-foreground">
                        Hi {"{Admin Name}"},
                      </p>

                      <p className="text-lg text-muted-foreground">
                        You have received a new shop request.
                      </p>

                      <p className="pt-8 text-lg">Log in to Admin Panel</p>
                    </div>

                    <div className="border-t pt-8 text-left space-y-5">
                      <p className="text-muted-foreground">
                        This is a system generated email. Please do not reply to
                        this email.
                      </p>

                      <div className="flex gap-5 text-primary font-medium">
                        <span>Privacy Policy</span>

                        <span>Refund Policy</span>

                        <span>Contact Us</span>
                      </div>

                      <div className="flex flex-wrap items-center gap-5">
                        <div className="flex items-center gap-2 text-[#1877F2]">
                          <FaFacebook className="h-5 w-5" />
                          {/* <span className="text-sm font-medium">Facebook</span> */}
                        </div>

                        <div className="flex items-center gap-2 text-[#E4405F]">
                          <FaInstagram className="h-5 w-5" />
                          {/* <span className="text-sm font-medium">Instagram</span> */}
                        </div>

                        <div className="flex items-center gap-2 text-black dark:text-white">
                          <FaXTwitter className="h-5 w-5" />
                          {/* <span className="text-sm font-medium">X</span> */}
                        </div>

                        <div className="flex items-center gap-2 text-[#0A66C2]">
                          <FaLinkedin className="h-5 w-5" />
                          {/* <span className="text-sm font-medium">LinkedIn</span> */}
                        </div>

                        <div className="flex items-center gap-2 text-[#FF0000]">
                          <FaYoutube className="h-5 w-5" />
                          {/* <span className="text-sm font-medium">YouTube</span> */}
                        </div>
                      </div>

                      <p className="pt-6 text-center text-muted-foreground">
                        Copyright 2025 Dobby Mall. All rights reserved.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Settings */}
              <div className="space-y-3">
                <h3 className="font-semibold text-muted-foreground">
                  Editor Settings
                </h3>

                <Card className="rounded-2xl border border-gray-200">
                  <CardContent className="p-5 space-y-5">
                    {/* Logo */}
                    <div className="space-y-2">
                      <Label>Company Logo</Label>

                      <Input type="file" />
                    </div>

                    {/* Title */}
                    <div className="space-y-2">
                      <Label>Template Title</Label>

                      <Input defaultValue="New Shop Request Received" />
                    </div>

                    {/* Editor */}
                    <div className="space-y-2">
                      <Label>Email Content</Label>

                      <div className="overflow-hidden rounded-xl border">
                        <ReactQuill
                          theme="snow"
                          value={value}
                          onChange={setValue}
                          modules={modules}
                          className="email-editor"
                        />
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="space-y-2">
                      <Label>Footer Text</Label>

                      <Input defaultValue="This is a system generated email. Please do not reply to this email." />
                    </div>

                    {/* Links */}
                    <div className="space-y-3">
                      <Label>Included Page Links</Label>

                      <div className="grid grid-cols-2 gap-3">
                        {[
                          "Privacy Policy",
                          "Refund Policy",
                          "Cancellation Policy",
                          "Contact Us",
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 rounded-md border p-3"
                          >
                            <Checkbox defaultChecked />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Social */}
                    <div className="space-y-3">
                      <Label>Social Media Links</Label>

                      <div className="flex flex-wrap gap-3">
                        {[
                          "Facebook",
                          "Instagram",
                          "X (Twitter)",
                          "Linkedin",
                          "Youtube",
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 rounded-md border p-3"
                          >
                            <Checkbox defaultChecked />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Copyright */}
                    <div className="space-y-2">
                      <Label>Copyright Text</Label>

                      <Input defaultValue="Copyright 2025 Dobby Mall. All rights reserved." />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 pt-3">
                      <Button variant="outline">
                        <RotateCcw className="mr-2 h-4 w-4" />
                        Reset
                      </Button>

                      <Button>
                        <Save className="mr-2 h-4 w-4" />
                        Save Template
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quill Style */}
      <style jsx global>{`
        .email-editor .ql-toolbar {
          border: 0;
          border-bottom: 1px solid #e5e7eb;
          padding: 12px;
        }

        .email-editor .ql-container {
          border: 0;
          min-height: 250px;
        }

        .email-editor .ql-editor {
          min-height: 250px;
          padding: 16px;
          font-size: 15px;
        }
      `}</style>
    </>
  );
}
