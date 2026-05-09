"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { useRef, useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Upload,
  FileText,
  Download,
  ChevronDown,
  Loader2,
} from "lucide-react"


const categories = [
  {
    name: "Furniture",
    id: "CAT-001",
    subs: [
      { name: "Sofas", id: "SUB-101" },
      { name: "Beds", id: "SUB-102" },
      { name: "Dining Tables", id: "SUB-103" },
    ],
  },
  {
    name: "Home Decor",
    id: "CAT-002",
    subs: [
      { name: "Wall Art", id: "SUB-201" },
      { name: "Lighting", id: "SUB-202" },
      { name: "Curtains", id: "SUB-203" },
    ],
  },
  {
    name: "Office Furniture",
    id: "CAT-003",
    subs: [
      { name: "Office Chairs", id: "SUB-301" },
      { name: "Office Desks", id: "SUB-302" },
      { name: "Cabinets", id: "SUB-303" },
    ],
  },
]

export default function ProductBulkImportPage() {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [fileName, setFileName] = useState("")
  const [loading, setLoading] = useState(false)

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0]

    if (file) {
      setFileName(file.name)
    }
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      // existing logic
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen space-y-6">

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          {
            step: "Step 1",
            title: "DOWNLOAD TEMPLATE",
            points: [
              "Download the format file.",
              "Follow sample guidance.",
              "Supported formats: .xlsx or .xls",
            ],
          },
          {
            step: "Step 2",
            title: "FILL PRODUCT DATA",
            points: [
              "Ensure all mandatory fields are complete.",
              "ID fields should match reference table.",
              "Check price and stock values.",
            ],
          },
          {
            step: "Step 3",
            title: "UPLOAD & VALIDATE",
            points: [
              "Select completed file.",
              "System checks automatically.",
              "Click import to finalize.",
            ],
          },
        ].map((item) => (
          <Card
            key={item.step}
            className="rounded-2xl border border-gray-200 shadow-sm"
          >
            <CardContent className="p-6 space-y-5">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {item.step} :
                  </h2>

                  <p className="text-xs font-semibold text-gray-500 mt-1">
                    {item.title}
                  </p>
                </div>

                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-indigo-600" />
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase text-gray-400">
                  Instructions
                </p>

                {item.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <span className="mt-1 text-indigo-500">•</span>
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Category Table */}
 <Card className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
  <CardHeader className="border-b border-gray-100 bg-gray-50 px-6 py-5">
    <CardTitle className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-700">
      Category Reference Table
    </CardTitle>
  </CardHeader>

  <CardContent className="p-0">
    {/* Table Header */}
    <div className="grid grid-cols-[1fr_auto] items-center px-8 py-4 bg-gray-50 border-b border-gray-100">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
        Category Detail
      </span>

      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
        Identifier ID
      </span>
    </div>

    <Accordion type="single" collapsible className="w-full">
      {categories.map((category) => (
        <AccordionItem
          key={category.id}
          value={category.id}
          className="border-b border-gray-100 last:border-none"
        >
          <AccordionTrigger className="px-8 py-5 hover:no-underline">
            <div className="flex items-center justify-between w-full">
              <span className="text-base font-semibold italic text-slate-800">
  {category.name}
</span>

              <span className="px-3 py-1.5 rounded-md text-xs font-semibold italic bg-gray-100 text-gray-600 border border-gray-200">
                {category.id}
              </span>
            </div>
          </AccordionTrigger>

          <AccordionContent className="px-8 pb-5">
            <Table>
              <TableBody>
                {category.subs.map((sub) => (
                  <TableRow key={sub.id}>
                    <TableCell className="text-sm text-gray-600">
                      {sub.name}
                    </TableCell>

                    <TableCell className="text-right text-sm font-semibold text-indigo-600">
                      {sub.id}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </CardContent>
</Card>

      {/* Upload Section */}
      <Card className="rounded-2xl border border-gray-200 shadow-sm">
      <CardContent className="flex flex-col items-center justify-center py-14 px-6">
        
        {/* Download Section */}
        <div className="flex items-center gap-2 mb-6">
          <Download className="w-5 h-5 text-indigo-500" />

          <h2 className="text-lg font-semibold text-gray-900">
            Download Spreadsheet Template
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <Button
            variant="outline"
            className="rounded-xl border-gray-300 h-11 px-5 text-sm font-medium"
          >
            With Existing Data
          </Button>

          <Button className="rounded-xl bg-indigo-600 hover:bg-indigo-700 h-11 px-5 text-sm font-medium">
            Without Any Data
          </Button>
        </div>

        <div className="w-full max-w-md h-px bg-gray-200 mb-10" />

        {/* Upload Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-8">
          Import Items File?
        </h3>

        {/* Hidden Input */}
        <input
          type="file"
          accept=".xlsx,.xls,.csv"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />

        {/* Upload Box */}
        <div
          onClick={() => fileInputRef.current?.click()}
          className="w-full max-w-sm border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50 hover:bg-gray-100 transition cursor-pointer p-10 flex flex-col items-center justify-center text-center"
        >
          <div className="w-16 h-16 rounded-full border border-gray-200 bg-white flex items-center justify-center mb-5 shadow-sm">
            <Upload className="w-7 h-7 text-gray-500" />
          </div>

          <p className="text-sm font-semibold text-gray-800">
            Drag & drop file or browse file
          </p>

          <p className="text-xs text-gray-400 mt-2 uppercase tracking-wide">
            Supports: .xlsx, .xls, .csv
          </p>

          {fileName && (
            <div className="mt-4 text-sm font-medium text-indigo-600 break-all">
              {fileName}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <Button
          className="mt-8 bg-indigo-600 hover:bg-indigo-700 rounded-xl px-10 h-11 text-sm font-medium"
          onClick={handleSubmit}
          disabled={!fileName || loading}
        >
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Submit Data
        </Button>
      </CardContent>
    </Card>
    </div>
  )
}