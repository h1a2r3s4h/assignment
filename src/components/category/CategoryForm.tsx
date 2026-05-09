"use client";

import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"

import type {
  CategoryType,
  CategoryImage,
} from "@/app/(dashboard)/dashboard/categories/page";

export default function CategoryForm({
  onCreate,
}: {
  onCreate: (category: Omit<CategoryType, "id">) => void;
}) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [previews, setPreviews] = useState<CategoryImage[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    if (!files.length) return;
    const images = files.map((f) => ({
      url: URL.createObjectURL(f),
      name: f.name,
    }));
    setPreviews(images);
  };

  const handleReset = () => {
    setName("");
    setPreviews([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleCreate = async () => {
    if (!previews.length) return;

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      onCreate({
        name,
        status: true,
        images: previews,
      });

      handleReset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full rounded-2xl border bg-white p-8">
      {/* Header */}
      <h2 className="mb-10 flex items-center gap-3 text-[20px] font-semibold text-slate-700">
        <span className="text-[28px] font-light text-blue-600">+</span>
        Add New Category
      </h2>

      {/* Main Layout */}
      <div className="grid grid-cols-2 gap-12 items-stretch">
        {/* Left Side */}
        <div className="space-y-8">
          {/* Category Name */}
          <div>
            <label className="mb-3 block text-[15px] font-semibold text-slate-700">
              Category Name <span className="text-red-500">*</span>
            </label>

            <Input
              type="text"
              placeholder="e.g. Electronics"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-12 rounded-xl border-slate-200 text-[15px]"
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="mb-3 block text-[15px] font-semibold text-slate-700">
              Category Logo <span className="text-red-500">*</span>
              <span className="ml-2 text-sm font-medium text-slate-400">
                (Ratio 1:1, 500x500px — multiple allowed)
              </span>
            </label>

            


  <Field>
  <Input
    ref={fileInputRef}
    id="picture"
    type="file"
    accept="image/*"
    multiple
    onChange={handleImage}
    className="h-12 py-2"
  />
</Field>


          </div>
        </div>

        {/* Right Side — Preview only */}
        <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-6 flex flex-col items-center justify-center h-full">
          {previews.length > 0 ? (
            <>
              <div className="flex flex-wrap gap-3 w-full justify-center">
                {previews.map((img, i) => (
                  <div
                    key={i}
                    className="w-[100px] h-[100px] rounded-xl overflow-hidden border bg-white shadow-sm flex-shrink-0"
                  >
                    <img
                      src={img.url}
                      alt={img.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-500">
                {previews.length} image{previews.length > 1 ? "s" : ""} selected
              </p>
            </>
          ) : (
            <>
              <div className="flex h-40 w-40 items-center justify-center rounded-2xl border bg-white shadow-sm border-dashed">
                <span className="text-slate-300 text-lg">Preview</span>
              </div>
              <p className="mt-5 text-base text-slate-500">Logo Preview</p>
            </>
          )}
        </div>
      </div>

      {/* Divider */}
      <hr className="mt-10 border-slate-200" />

      {/* Buttons — bottom right of card */}
      <div className="flex justify-end gap-4 mt-6">
        <Button
          type="button"
          variant="outline"
          onClick={handleReset}
          className="h-12 rounded-xl px-6 text-base"
        >
          Reset
        </Button>

        <Button
          type="button"
          onClick={handleCreate}
          disabled={!name || !previews.length || loading}
          className="h-12 rounded-xl bg-indigo-600 px-7 text-base hover:bg-indigo-700"
        >
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Create Category
        </Button>
      </div>
    </div>
  );
}
