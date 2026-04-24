"use client";

import { useEffect, useState } from "react";
import { SlidersHorizontal, LayoutGrid, Rows3 } from "lucide-react";

type ShopToolbarProps = {
  totalResults?: number;
  visibleResults?: number;
};

export default function ShopToolbar({
  totalResults = 32,
  visibleResults = 16,
}: ShopToolbarProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="w-full bg-[#F9F1E7]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-4 py-5 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-[100px] lg:py-[22px]">
          
          {/* LEFT SKELETON */}
          <div className="flex flex-wrap items-center gap-4 lg:gap-6">
            <div className="h-5 w-[80px] bg-gray-300" />
            <div className="h-5 w-5 bg-gray-300" />
            <div className="h-5 w-5 bg-gray-300" />
            <div className="hidden h-[37px] w-px bg-gray-300 md:block" />
            <div className="h-4 w-[220px] bg-gray-300" />
          </div>

          {/* RIGHT SKELETON */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <div className="flex items-center gap-3">
              <div className="h-4 w-[40px] bg-gray-300" />
              <div className="h-[55px] w-[55px] bg-gray-300" />
            </div>

            <div className="flex items-center gap-3">
              <div className="h-4 w-[60px] bg-gray-300" />
              <div className="h-[55px] w-[188px] bg-gray-300" />
            </div>
          </div>

        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-[#F9F1E7]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-4 py-5 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-[100px] lg:py-[22px]">
        
        {/* left */}
        <div className="flex flex-wrap items-center gap-4 lg:gap-6">
          <button className="flex items-center gap-2 text-[16px] font-normal leading-[150%] text-black transition-opacity hover:opacity-70">
            <SlidersHorizontal className="h-[20px] w-[20px]" strokeWidth={1.8} />
            <span>Filter</span>
          </button>

          <button className="transition-opacity hover:opacity-70">
            <LayoutGrid className="h-[20px] w-[20px] text-black" strokeWidth={1.8} />
          </button>

          <button className="transition-opacity hover:opacity-70">
            <Rows3 className="h-[20px] w-[20px] text-black" strokeWidth={1.8} />
          </button>

          <div className="hidden h-[37px] w-px bg-[#9F9F9F] md:block" />

          <p className="text-[14px] font-normal leading-[150%] text-black md:text-[16px]">
            Showing 1–{visibleResults} of {totalResults} results
          </p>
        </div>

        {/* right */}
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <div className="flex items-center gap-3">
            <span className="text-[16px] font-normal leading-[150%] text-black">
              Show
            </span>
            <div className="flex h-[55px] w-[55px] items-center justify-center bg-white text-[20px] font-normal leading-[150%] text-[#9F9F9F]">
              {visibleResults}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[16px] font-normal leading-[150%] text-black">
              Sort by
            </span>
            <div className="flex h-[55px] min-w-[188px] items-center bg-white px-6 text-[20px] font-normal leading-[150%] text-[#9F9F9F]">
              Default
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}