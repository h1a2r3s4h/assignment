"use client";

import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const specs = [
  {
    title: "General",
    items: [
      ["Sales Package", "1 sectional sofa", "1 Three Seater, 2 Single Seater"],
      ["Model Number", "TFCBLIGRBL6SRHS", "DTUBLIGRBL568"],
      ["Secondary Material", "Solid Wood", "Solid Wood"],
      ["Configuration", "L-shaped", "L-shaped"],
      ["Upholstery Material", "Fabric + Cotton", "Fabric + Cotton"],
      ["Upholstery Color", "Bright Grey & Lion", "Bright Grey & Lion"],
    ],
  },
  {
    title: "Product",
    items: [
      ["Filling Material", "Foam", "Matte"],
      ["Finish Type", "Bright Grey & Lion", "Bright Grey & Lion"],
      ["Adjustable Headrest", "No", "yes"],
      ["Maximum Load Capacity", "280 KG", "300 KG"],
      ["Origin of Manufacture", "India", "India"],
    ],
  },
  {
    title: "Dimensions",
    items: [
      ["Width", "265.32 cm", "265.32 cm"],
      ["Height", "76 cm", "76 cm"],
      ["Depth", "167.76 cm", "167.76 cm"],
      ["Weight", "45 KG", "65 KG"],
      ["Seat Height", "41.52 cm", "41.52 cm"],
      ["Leg Height", "5.46 cm", "5.46 cm"],
    ],
  },
  {
    title: "Warranty",
    items: [
      [
        "Warranty Summary",
        "1 Year Manufacturing Warranty",
        "1.2 Year Manufacturing Warranty",
      ],
      [
        "Warranty Service Type",
        "For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com",
        "For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com",
      ],
      [
        "Covered in Warranty",
        "Warranty Against Manufacturing Defect",
        "Warranty of the product is limited to manufacturing defects only.",
      ],
      [
        "Not Covered in Warranty",
        "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
        "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
      ],
      ["Domestic Warranty", "1 Year", "3 Months"],
    ],
  },
];

export default function CompareTable() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // 🔴 SKELETON (FULL REPLACEMENT)
  if (!mounted) {
    return (
      <div className="max-w-4xl mx-auto pb-20 bg-white">
        <div className="border-t border-gray-200">
          {[1, 2, 3, 4].map((section) => (
            <div key={section}>
              {/* Section Title */}
              <div className="grid grid-cols-[180px_1fr_1fr] pt-8 pb-5">
                <Skeleton className="h-5 w-24 ml-4 bg-gray-300" />
                <div />
                <div />
              </div>

              {/* Rows */}
              {[1, 2, 3, 4, 5].map((row) => (
                <div
                  key={row}
                  className="grid grid-cols-[180px_1fr_1fr] border-b border-gray-100"
                >
                  <div className="py-4 pl-4 pr-3">
                    <Skeleton className="h-4 w-28 bg-gray-300" />
                  </div>

                  <div className="py-4 px-8 border-l border-gray-200">
                    <Skeleton className="h-4 w-full bg-gray-300" />
                  </div>

                  <div className="py-4 px-8 border-l border-gray-200">
                    <Skeleton className="h-4 w-full bg-gray-300" />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-[180px_1fr_1fr] mt-10">
          <div />
          <div className="px-8">
            <Skeleton className="w-full h-[44px] rounded bg-gray-300" />
          </div>
          <div className="px-8">
            <Skeleton className="w-full h-[44px] rounded bg-gray-300" />
          </div>
        </div>
      </div>
    );
  }

  // 🟢 ORIGINAL UI
  return (
    <div className="max-w-4xl mx-auto pb-20 bg-white">
      <div className="border-t border-gray-200">
        {specs.map((section, i) => (
          <div key={i}>
            {/* Section Title */}
            <div className="grid grid-cols-[180px_1fr_1fr] pt-8 pb-5">
              <h2 className="text-lg font-semibold text-gray-900 pl-4">
                {section.title}
              </h2>
              <div />
              <div />
            </div>

            {/* Rows */}
            {section.items.map((row, j) => (
              <div
                key={j}
                className="grid grid-cols-[180px_1fr_1fr] border-b border-gray-100"
              >
                {/* Label */}
                <div className="py-4 pl-4 pr-3 text-sm text-gray-600 leading-relaxed">
                  {row[0]}
                </div>

                {/* Product 1 */}
                <div className="py-4 px-8 text-sm text-gray-700 leading-relaxed border-l border-gray-200">
                  {row[1]}
                </div>

                {/* Product 2 */}
                <div className="py-4 px-8 text-sm text-gray-700 leading-relaxed border-l border-gray-200">
                  {row[2]}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Add To Cart Buttons */}
      <div className="grid grid-cols-[180px_1fr_1fr] mt-10">
        <div />
        <div className="px-8">
          <button className="w-full py-3 bg-[#B88E2F] text-white text-sm font-medium rounded cursor-pointer">
            Add To Cart
          </button>
        </div>
        <div className="px-8">
          <button className="w-full py-3 bg-[#B88E2F] text-white text-sm font-medium rounded cursor-pointer">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
