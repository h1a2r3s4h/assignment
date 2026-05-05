"use client";

import { useState } from "react";
import { useEffect, useRef } from "react";
import "quill/dist/quill.snow.css";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Quote,
  Code,
  Link,
  Image as ImageIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Subscript,
  Superscript,
  ImagePlus,
  X,
  Info,
  ChevronDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


// ─── Section Wrapper ────────────────────────────────────────────────────────

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-200">
        <h2 className="text-base font-semibold text-gray-900">{title}</h2>
        {description && (
          <p className="mt-0.5 text-sm text-gray-500">{description}</p>
        )}
      </div>
      <div className="px-6 py-6">{children}</div>
    </div>
  );
}

// ─── Field Label ─────────────────────────────────────────────────────────────

function FieldLabel({
  label,
  required,
  hint,
}: {
  label?: string;
  required?: boolean;
  hint?: string;
}) {
  return (
    <div className="flex items-center gap-1.5 mb-1.5">
      <Label className="text-sm font-medium text-gray-800">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </Label>
      {hint && <Info className="w-3.5 h-3.5 text-gray-400 cursor-help" />}
    </div>
  );
}

// ─── Image Upload Box ─────────────────────────────────────────────────────────

function ImageUploadBox({ hint, tall }: { hint?: string; tall?: boolean }) {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full">
      <input
        type="file"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
      />
      <div
        onClick={() => fileInputRef.current?.click()}
        className={`border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-gray-300 hover:bg-gray-50 transition-colors bg-white relative overflow-hidden ${
          tall ? "min-h-[330px]" : "min-h-[200px]"
        }`}
      >
        {preview ? (
          <Image
            src={preview}
            alt="Preview"
            fill
            className="object-contain p-2"
            unoptimized
          />
        ) : (
          <div className="flex flex-col items-center p-4">
            <div className="bg-blue-50 rounded-xl p-5 mb-4 shadow-sm border border-blue-100">
              <ImageIcon
                className="w-10 h-10 text-blue-500"
                strokeWidth={1.5}
              />
            </div>
            <p className="text-sm font-semibold text-blue-600 mb-1">
              Click To Upload
            </p>
            <p className="text-xs text-gray-400">Or Drag And Drop</p>
          </div>
        )}
      </div>
      {hint && (
        <p className="text-[10px] text-gray-400 mt-3 text-center leading-relaxed font-medium uppercase tracking-wider">
          {hint}
        </p>
      )}
    </div>
  );
}

// ─── Rich Text Toolbar ────────────────────────────────────────────────────────



// ─── Main Page ────────────────────────────────────────────────────────────────

export default function AddProductPage() {
  const quillRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (!quillRef.current) return;

  const Quill = require("quill").default;

  new Quill(quillRef.current, {
    theme: "snow",
    placeholder: "Type here...",
  });
}, []);
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [variationEnabled, setVariationEnabled] = useState(false);
  const [shippingMultiply, setShippingMultiply] = useState(false);
  const [discountType, setDiscountType] = useState("flat");
  const [productType, setProductType] = useState("Physical");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [unit, setUnit] = useState("kg");
  const [unitPrice, setUnitPrice] = useState("");
  const [minOrderQty, setMinOrderQty] = useState("1");
  const [currentStockQty, setCurrentStockQty] = useState("0");
  const [discountAmount, setDiscountAmount] = useState("0");
  const [shippingCost, setShippingCost] = useState("0");

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput("");
    }
  };

  const removeTag = (tag: string) => setTags(tags.filter((t) => t !== tag));

  return (
    <div className="min-h-scree">
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-5">
        {/* ── Basic Setup ── */}
        <Section
          title="Basic Setup"
          description="Here you can setup the product information for website."
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left: Name + Description */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <FieldLabel label="Product Name" required />
                <Input
                  placeholder="New product"
                  className="border-gray-200 text-gray-800 placeholder:text-gray-400 focus-visible:ring-gray-300 h-10 rounded-lg shadow-sm"
                />
              </div>

              <div>
                <FieldLabel label="Product Description" />
                <div className="bg-white border border-gray-200 rounded-lg">
  <div ref={quillRef} className="min-h-[380px]" />
</div>
              </div>
            </div>

            {/* Right: Thumbnail */}
            <div className="lg:col-span-1 flex flex-col items-center">
              <div className="flex flex-col items-center mb-5">
                <FieldLabel label="Product Thumbnail" required />
                <p className="text-[10px] text-gray-400 -mt-1 font-medium">
                  Upload image
                </p>
              </div>
              <ImageUploadBox
                tall
                hint="JPEG, PNG, JPG, GIF, WEBP Image size : Max 1MB Ratio 1:1 (500 x 500 px)"
              />
            </div>
          </div>
        </Section>

        {/* ── General Setup ── */}
        {/* ── General Setup ── */}
{/* ── General Setup ── */}
{/* ── General Setup ── */}
<Section
  title="General Setup"
  description="Here you can setup the foundational details required for product creation."
>
  <div className="space-y-5">
    {/* Row 1 */}
    <div className="grid grid-cols-3 gap-5">
      {/* Product Type (Dropdown Fixed) */}
      <div className="w-full">
  {/* Label */}
  <label className="block text-sm font-medium text-gray-800 mb-1.5">
    Product Type <span className="text-red-500">*</span>
  </label>

  {/* Select */}
  <Select>
    <SelectTrigger className="w-full h-11 rounded-lg border border-gray-300 bg-white px-3 text-sm">
      <SelectValue placeholder="Select product type" />
    </SelectTrigger>

    <SelectContent>
      <SelectGroup>
        <SelectLabel>Product Type </SelectLabel>
        <SelectItem value="digital">Digital</SelectItem>
        <SelectItem value="physical">Physical</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</div>

      {/* Category */}
      <div>
        <div className="flex items-center gap-1.5 mb-1.5">
          <Label className="text-sm font-medium text-gray-800">
            Category <span className="text-red-500">*</span>
          </Label>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className={`w-full justify-between border-gray-200 h-10 bg-white hover:bg-gray-50 font-normal shadow-sm ${
                category ? "text-gray-800" : "text-gray-500"
              }`}
            >
              {category || "Select category"} <ChevronDown className="w-4 h-4 text-gray-400" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="z-50 min-w-[160px] bg-white border border-gray-200 rounded-lg shadow-xl p-1">
            <DropdownMenuItem 
              className="cursor-pointer hover:bg-gray-50 focus:bg-gray-100 px-3 py-2 text-sm rounded-md transition-colors"
              onClick={() => setCategory("Electronics")}
            >
              Electronics
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="cursor-pointer hover:bg-gray-50 focus:bg-gray-100 px-3 py-2 text-sm rounded-md transition-colors"
              onClick={() => setCategory("Clothing")}
            >
              Clothing
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="cursor-pointer hover:bg-gray-50 focus:bg-gray-100 px-3 py-2 text-sm rounded-md transition-colors"
              onClick={() => setCategory("Food")}
            >
              Food
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Sub Category */}
      <div>
        <div className="flex items-center gap-1.5 mb-1.5">
          <Label className="text-sm font-medium text-gray-800">
            Sub Category
          </Label>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className={`w-full justify-between border-gray-200 h-10 bg-white hover:bg-gray-50 font-normal shadow-sm ${
                subCategory ? "text-gray-800" : "text-gray-500"
              }`}
            >
              {subCategory || "Select Sub Category"} <ChevronDown className="w-4 h-4 text-gray-400" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="z-50 min-w-[160px] bg-white border border-gray-200 rounded-lg shadow-xl p-1">
            <DropdownMenuItem 
              className="cursor-pointer hover:bg-gray-50 focus:bg-gray-100 px-3 py-2 text-sm rounded-md transition-colors"
              onClick={() => setSubCategory("Mobile")}
            >
              Mobile
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="cursor-pointer hover:bg-gray-50 focus:bg-gray-100 px-3 py-2 text-sm rounded-md transition-colors"
              onClick={() => setSubCategory("Laptop")}
            >
              Laptop
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>

    {/* Row 2 */}
    <div className="grid grid-cols-3 gap-5">
      {/* Brand */}
      <div>
        <div className="flex items-center gap-1.5 mb-1.5">
          <Label className="text-sm font-medium text-gray-800">
            Brand
          </Label>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className={`w-full justify-between border-gray-200 h-10 bg-white hover:bg-gray-50 font-normal shadow-sm ${
                brand ? "text-gray-800" : "text-gray-500"
              }`}
            >
              {brand || "Select Brand"} <ChevronDown className="w-4 h-4 text-gray-400" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="z-50 min-w-[160px] bg-white border border-gray-200 rounded-lg shadow-xl p-1">
            <DropdownMenuItem 
              className="cursor-pointer hover:bg-gray-50 focus:bg-gray-100 px-3 py-2 text-sm rounded-md transition-colors"
              onClick={() => setBrand("Samsung")}
            >
              Samsung
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="cursor-pointer hover:bg-gray-50 focus:bg-gray-100 px-3 py-2 text-sm rounded-md transition-colors"
              onClick={() => setBrand("Apple")}
            >
              Apple
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* SKU */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1.5">
            <Label className="text-sm font-medium text-gray-800">
              Product SKU <span className="text-red-500">*</span>
            </Label>
            <Info className="w-3.5 h-3.5 text-gray-400" />
          </div>
          <button className="text-xs text-blue-500 font-medium hover:underline">
            Generate Code
          </button>
        </div>
        <Input
          defaultValue="123412"
          className="w-full border-gray-200 text-gray-800 h-10 focus-visible:ring-gray-300"
        />
      </div>

      {/* Unit */}
      <div>
        <div className="flex items-center gap-1.5 mb-1.5">
          <Label className="text-sm font-medium text-gray-800">
            Unit <span className="text-red-500">*</span>
          </Label>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-between border-gray-200 h-10 text-gray-800 bg-white hover:bg-gray-50 font-normal shadow-sm"
            >
              {unit} <ChevronDown className="w-4 h-4 text-gray-400" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="z-50 min-w-[100px] bg-white border border-gray-200 rounded-lg shadow-xl p-1">
            <DropdownMenuItem 
              className="cursor-pointer hover:bg-gray-50 focus:bg-gray-100 px-3 py-2 text-sm rounded-md transition-colors"
              onClick={() => setUnit("kg")}
            >
              kg
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="cursor-pointer hover:bg-gray-50 focus:bg-gray-100 px-3 py-2 text-sm rounded-md transition-colors"
              onClick={() => setUnit("pcs")}
            >
              pcs
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="cursor-pointer hover:bg-gray-50 focus:bg-gray-100 px-3 py-2 text-sm rounded-md transition-colors"
              onClick={() => setUnit("ltr")}
            >
              ltr
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>

    {/* Row 3 */}
    <div className="grid grid-cols-3 gap-5">
      <div className="col-span-2">
        <div className="flex items-center gap-1.5 mb-1.5">
          <Label className="text-sm font-medium text-gray-800">
            Search Tags
          </Label>
          <Info className="w-3.5 h-3.5 text-gray-400" />
        </div>

        <div className="w-full border border-gray-200 rounded-md px-3 py-2 min-h-10 flex flex-wrap gap-2 focus-within:ring-1 focus-within:ring-gray-300 bg-white">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-gray-100 text-gray-700 text-xs flex items-center gap-1 pl-2 pr-1"
            >
              {tag}
              <button
                onClick={() => removeTag(tag)}
                className="hover:text-gray-900"
              >
                <X className="w-3 h-3" />
              </button>
            </Badge>
          ))}

          <input
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagKeyDown}
            placeholder={tags.length === 0 ? "Enter tag" : ""}
            className="outline-none text-sm text-gray-800 placeholder:text-gray-400 flex-1 min-w-[100px]"
          />
        </div>
      </div>
    </div>
  </div>
</Section>
  
        {/* ── Pricing & Others ── */}
        <Section
          title="Pricing & Others"
          description="Here you can setup the price and other information for the product."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Unit Price */}
            <div>
              <FieldLabel label="Unit Price ($)" required hint="Price per unit" />
              <Input
                type="number"
                placeholder="Unit price"
                value={unitPrice}
                onChange={(e) => setUnitPrice(e.target.value)}
                className="border-gray-200 text-gray-800 placeholder:text-gray-400 focus-visible:ring-gray-300 h-10 rounded-lg shadow-sm"
              />
            </div>

            {/* Minimum Order Qty */}
            <div>
              <FieldLabel label="Minimum Order Qty" required hint="Minimum quantity per order" />
              <Input
                type="number"
                value={minOrderQty}
                onChange={(e) => setMinOrderQty(e.target.value)}
                className="border-gray-200 text-gray-800 focus-visible:ring-gray-300 h-10 rounded-lg shadow-sm"
              />
            </div>

            {/* Current Stock Qty */}
            <div>
              <FieldLabel label="Current Stock Qty" required hint="Available stock quantity" />
              <Input
                type="number"
                value={currentStockQty}
                onChange={(e) => setCurrentStockQty(e.target.value)}
                className="border-gray-200 text-gray-800 focus-visible:ring-gray-300 h-10 rounded-lg shadow-sm"
              />
            </div>

            {/* Discount Amount */}
            <div>
              <FieldLabel label="Discount Amount ($)" required hint="Discount applied to product" />
              <div className="flex h-10 border border-gray-200 rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-gray-300 bg-white shadow-sm">
                <input
                  type="number"
                  value={discountAmount}
                  onChange={(e) => setDiscountAmount(e.target.value)}
                  className="flex-1 px-3 outline-none text-sm text-gray-800"
                />
                <div className="w-px bg-gray-200 h-full" />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="h-full px-3 text-sm text-gray-600 rounded-none hover:bg-gray-50  items-center gap-1.5 font-normal"
                    >
                      {discountType === "flat" ? "Flat" : "Percent"}
                      <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="z-50 bg-white border border-gray-200 shadow-xl p-1 min-w-[100px]">
                    <DropdownMenuItem
                      onClick={() => setDiscountType("flat")}
                      className="cursor-pointer hover:bg-gray-50 focus:bg-gray-100 rounded-md px-2.5 py-1.5 text-xs transition-colors"
                    >
                      Flat
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setDiscountType("percent")}
                      className="cursor-pointer hover:bg-gray-50 focus:bg-gray-100 rounded-md px-2.5 py-1.5 text-xs transition-colors"
                    >
                      Percent
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Shipping Cost */}
            <div>
              <FieldLabel label="Shipping Cost ($)" required hint="Cost for shipping" />
              <Input
                type="number"
                value={shippingCost}
                onChange={(e) => setShippingCost(e.target.value)}
                className="border-gray-200 text-gray-800 focus-visible:ring-gray-300 h-10 rounded-lg shadow-sm"
              />
            </div>

            {/* Shipping Cost Multiply */}
            <div>
              <FieldLabel label="Shipping Cost Multiply With Quantity" hint="If enabled, shipping cost will be multiplied by quantity" />
              <div className="flex items-center justify-between h-10 border border-gray-200 rounded-lg px-3 bg-white shadow-sm">
                <span className="text-sm text-gray-400">Status</span>
                <Switch
                  checked={shippingMultiply}
                  onCheckedChange={setShippingMultiply}
                  className="data-[state=checked]:bg-indigo-600 scale-90"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* ── Product Variation Setup ── */}
        <Section
          title="Product Variation Setup"
          description="Enable and manage different variations of a product."
        >
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              Enable product variations
            </span>
            <Switch
              checked={variationEnabled}
              onCheckedChange={setVariationEnabled}
              className="data-[state=checked]:bg-indigo-600"
            />
          </div>

          {variationEnabled && (
            <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-500 text-center">
              Variation options will appear here once enabled.
            </div>
          )}
        </Section>

        {/* ── Product Additional Images ── */}
        <Section
          title="Product Additional Images"
          description="Upload additional images for this product here. JPEG, PNG, JPG, WEBP  Image size : Max 1MB  Ratio 1:1 (500 x 500 px)"
        >
          <ImageUploadBox tall />
        </Section>

        {/* ── Product Video ── */}
        <Section
          title="Product Video"
          description="Add the Youtube video link here. Only the YouTube-embedded link is supported."
        >
          <div>
            <FieldLabel label="Youtube Video Link (Optional)" />
            <Input
              placeholder="Ex: https://www.youtube.com/embed/5R06LRdUCSE"
              className="border-gray-200 text-gray-800 placeholder:text-gray-400 focus-visible:ring-gray-300 h-10"
            />
            <p className="text-xs text-gray-400 mt-1.5">
              Please provide embed link not direct link.
            </p>
          </div>
        </Section>

        {/* ── SEO Section ── */}
        <Section
          title="Seo section"
          description="Add meta titles descriptions and images for products, This will help more people to find them on search engines and see the right details while sharing on other social platforms"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: Meta fields */}
            <div className="lg:col-span-2 space-y-5">
              <div>
                <FieldLabel label="Meta Title" />
                <Input
                  placeholder="Meta Title"
                  className="border-gray-200 text-gray-800 placeholder:text-gray-400 focus-visible:ring-gray-300 h-10"
                />
              </div>
              <div>
                <FieldLabel label="Meta Description" />
                <Textarea
                  placeholder="Meta Description"
                  rows={5}
                  className="border-gray-200 text-gray-800 placeholder:text-gray-400 focus-visible:ring-gray-300 resize-none"
                />
              </div>
            </div>

            {/* Right: Meta Image */}
            <div>
  <FieldLabel
    label="Meta Image"
    hint="JPEG, PNG, JPG, WEBP Image size : Max 1MB (Ratio 2:1)"
  />

  <ImageUploadBox />
</div>
          </div>
        </Section>

        {/* ── Action Buttons ── */}
        <div className="flex justify-end gap-3 pb-4">
          <Button
            variant="outline"
            className="border-gray-200 text-gray-700 hover:bg-gray-50 px-6"
          >
            Reset
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6">
            Submit Product
          </Button>
        </div>
      </div>
    </div>
  );
}
