"use client";

import { useState } from "react";
import { ChevronRight, Filter, FileText, Upload, CircleAlert, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Types ───────────────────────────────────────────────────────────────────
interface Category {
  id: string;
  name: string;
  identifier: string;
  subcategories?: Category[];
}

// ─── Data ────────────────────────────────────────────────────────────────────
const CATEGORIES: Category[] = [
  {
    id: "1",
    name: "Electronics",
    identifier: "CAT-001",
    subcategories: [
      { id: "1-1", name: "Smartphones", identifier: "CAT-001-01" },
      { id: "1-2", name: "Laptops", identifier: "CAT-001-02" },
      { id: "1-3", name: "Accessories", identifier: "CAT-001-03" },
    ],
  },
  {
    id: "2",
    name: "Fashion",
    identifier: "CAT-002",
    subcategories: [
      { id: "2-1", name: "Men's Clothing", identifier: "CAT-002-01" },
      { id: "2-2", name: "Women's Clothing", identifier: "CAT-002-02" },
    ],
  },
  {
    id: "3",
    name: "Home & Garden",
    identifier: "CAT-003",
    subcategories: [
      { id: "3-1", name: "Furniture", identifier: "CAT-003-01" },
      { id: "3-2", name: "Gardening Tools", identifier: "CAT-003-02" },
    ],
  },
  {
    id: "4",
    name: "Sports & Outdoors",
    identifier: "CAT-004",
    subcategories: [
      { id: "4-1", name: "Fitness Equipment", identifier: "CAT-004-01" },
      { id: "4-2", name: "Outdoor Gear", identifier: "CAT-004-02" },
    ],
  },
];

const STEPS = [
  {
    number: 1,
    title: "Step 1 :",
    subtitle: "DOWNLOAD TEMPLATE",
    instructions: [
      "Download the format file to get the correct structure.",
      "Follow the example file for data input guidance.",
      "Supported formats: .xlsx or .xls",
    ],
  },
  {
    number: 2,
    title: "Step 2 :",
    subtitle: "FILL PRODUCT DATA",
    instructions: [
      "Ensure all mandatory fields (*) are complete.",
      "ID fields should match the reference table below.",
      "Check numeric fields like price and stock.",
    ],
  },
  {
    number: 3,
    title: "Step 3 :",
    subtitle: "UPLOAD & VALIDATE",
    instructions: [
      "Select your completed file using the upload tool.",
      "The system will check for errors automatically.",
      "Click Import to finalize the product creation.",
    ],
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function StepCard({ step }: { step: (typeof STEPS)[0] }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex-1 min-w-0">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">{step.title}</h2>
          <p className="text-xs font-semibold text-gray-400 tracking-widest mt-0.5">
            {step.subtitle}
          </p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
          <FileText className="w-5 h-5 text-blue-500" />
        </div>
      </div>

      {/* Instructions */}
      <div className="flex items-center gap-1.5 mb-3">
        <CircleAlert className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-xs font-semibold text-gray-400 tracking-widest">INSTRUCTIONS</span>
      </div>
      <ul className="space-y-2">
        {step.instructions.map((instruction, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
            <span className="text-gray-400 mt-0.5 flex-shrink-0">·</span>
            <span>{instruction}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CategoryRow({ category }: { category: Category }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between py-4 border-b border-gray-100 hover:bg-gray-50/50 transition-colors px-1 rounded"
      >
        <div className="flex items-center gap-3">
          <ChevronRight
            className={cn(
              "w-4 h-4 text-gray-400 transition-transform duration-200",
              expanded && "rotate-90"
            )}
          />
          <span className="font-bold text-gray-800 italic">{category.name}</span>
        </div>
        <span className="text-sm font-bold text-gray-500 italic tracking-wide">
          {category.identifier}
        </span>
      </button>

      {expanded && category.subcategories && (
        <div className="ml-8 border-l border-gray-100">
          {category.subcategories.map((sub) => (
            <div
              key={sub.id}
              className="flex items-center justify-between py-3 px-4 border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
            >
              <span className="text-sm text-gray-600">{sub.name}</span>
              <span className="text-xs font-semibold text-gray-400 tracking-wide">
                {sub.identifier}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function DownloadSection() {
  const [selected, setSelected] = useState<"with" | "without">("without");

  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-2 mb-5">
        <Upload className="w-5 h-5 text-gray-500" />
        <h3 className="text-xl font-bold text-gray-900">Download Spreadsheet Template</h3>
      </div>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setSelected("with")}
          className={cn(
            "px-6 py-2.5 rounded-lg border text-sm font-semibold transition-all",
            selected === "with"
              ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
              : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
          )}
        >
          With Existing Data
        </button>
        <button
          onClick={() => setSelected("without")}
          className={cn(
            "px-6 py-2.5 rounded-lg border text-sm font-semibold transition-all",
            selected === "without"
              ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
              : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
          )}
        >
          Without Any Data
        </button>
      </div>
    </div>
  );
}

function UploadSection() {
  const [dragOver, setDragOver] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) setFileName(file.name);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 text-center mb-5">Import items file?</h3>
      <label
        className={cn(
          "block border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all",
          dragOver
            ? "border-indigo-400 bg-indigo-50"
            : "border-gray-200 bg-gray-50/50 hover:border-gray-300"
        )}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept=".xlsx,.xls,.csv"
          className="hidden"
          onChange={handleFileChange}
        />
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
            <Upload className="w-5 h-5 text-gray-400" />
          </div>
          {fileName ? (
            <div className="flex items-center gap-2 text-indigo-600 font-semibold">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">{fileName}</span>
            </div>
          ) : (
            <>
              <p className="font-bold text-gray-800">Drag & drop file or browse file</p>
              <p className="text-xs font-semibold text-gray-400 tracking-widest">
                SUPPORTS: .XLSX, .XLS, .CSV
              </p>
            </>
          )}
        </div>
      </label>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ProductImportPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Steps Section */}
      <div className="px-6 py-8 bg-gray-100">
        <div className="max-w-6xl mx-auto flex gap-4">
          {STEPS.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </div>
      </div>

      {/* Category Reference Table */}
      <div className="px-6 pb-8">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-4 h-4 text-blue-500" />
            <h2 className="text-sm font-bold text-gray-700 tracking-widest">
              CATEGORY REFERENCE TABLE
            </h2>
          </div>

          {/* Table Header */}
          <div className="flex items-center justify-between pb-3 mb-1">
            <span className="text-xs font-bold text-gray-400 tracking-widest">CATEGORY DETAIL</span>
            <span className="text-xs font-bold text-gray-400 tracking-widest">IDENTIFIER ID</span>
          </div>

          {/* Category Rows */}
          <div>
            {CATEGORIES.map((cat) => (
              <CategoryRow key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </div>

      {/* Upload Panel */}
      <div className="px-6 pb-10">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <DownloadSection />
          <hr className="border-gray-100 mb-8" />
          <UploadSection />

          {/* Submit Button */}
          <button className="w-full py-3.5 rounded-xl bg-indigo-400 hover:bg-indigo-500 text-white font-bold flex items-center justify-center gap-2 transition-colors">
            <CheckCircle className="w-5 h-5" />
            Submit Data
          </button>
        </div>
      </div>
    </div>
  );
}
