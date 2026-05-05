"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CategoryForm() {
  const [preview, setPreview] = useState<string | null>(null);
  const [name, setName] = useState("");

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleReset = () => {
    setName("");
    setPreview(null);
  };

  return (
    <div className="w-full bg-white rounded-xl border border-gray-200 p-8">
      {/* TITLE */}
      <h2 className="text-lg font-semibold text-gray-700 mb-8 flex items-center gap-2">
        <span className="text-indigo-600 text-xl">+</span>
        Add New Category
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* LEFT */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Category Name <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              placeholder="e.g. Electronics"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-11 rounded-lg border-gray-200 focus:border-gray-300 focus:ring-0"
            />
          </div>

          {/* Upload */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-700">
              Category Logo <span className="text-red-500">*</span>
              <span className="text-gray-400 text-xs font-normal ml-2">
                (1:1 • 500×500px)
              </span>
            </label>

            <div className="flex items-center gap-4">
              <label className="flex items-center justify-center w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 bg-gray-50">
                <span className="text-xs text-gray-400 text-center px-2">
                  Upload
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                  className="hidden"
                />
              </label>

              {preview && (
                <div className="w-24 h-24 rounded-lg border bg-gray-100 overflow-hidden">
                  <img
                    src={preview}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-center w-full">
          {/* Preview Card */}
          <div className="w-full border border-dashed border-gray-200 rounded-xl bg-gray-50 p-6 flex flex-col items-center">
            <div className="w-44 h-44 rounded-xl border bg-white shadow-sm flex items-center justify-center overflow-hidden">
              {preview ? (
                <img
                  src={preview}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-300 text-sm font-medium">
                  Preview
                </span>
              )}
            </div>

            <p className="text-xs text-gray-400 mt-3">Logo Preview</p>
          </div>

          {/* BUTTON GROUP */}
          <div className="mt-5 flex w-full justify-end gap-3">
            <Button className="h-10 px-6 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white">
              Create Category
            </Button>

            <Button
              variant="outline"
              onClick={handleReset}
              className="h-10 px-6 rounded-lg border-gray-200 text-gray-700 hover:bg-gray-100"
            >
              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
