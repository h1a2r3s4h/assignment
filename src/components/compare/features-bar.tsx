"use client";

import { Trophy, ShieldCheck, Truck, Headphones } from "lucide-react";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function FeaturesBar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 🔴 SKELETON (FULL REPLACEMENT)
  if (!mounted) {
    return (
      <div className="bg-[#F9F1E7] border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-10 grid grid-cols-4 gap-10">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-4">
              <Skeleton className="w-10 h-10 bg-gray-300" />

              <div className="space-y-2">
                <Skeleton className="h-5 w-32 bg-gray-300" />
                <Skeleton className="h-4 w-28 bg-gray-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 🟢 ORIGINAL UI
  return (
    <div className="bg-[#F9F1E7] border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6 py-10 grid grid-cols-4 gap-10">
        {/* Item 1 */}
        <div className="flex items-center gap-4">
          <Trophy size={40} className="text-black" />

          <div>
            <p className="font-semibold text-lg text-black">
              High Quality
            </p>
            <p className="text-gray-500 text-sm">
              crafted from top materials
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-center gap-4">
          <ShieldCheck size={40} className="text-black" />

          <div>
            <p className="font-semibold text-lg text-black">
              Warranty Protection
            </p>
            <p className="text-gray-500 text-sm">
              Over 2 years
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-center gap-4">
          <Truck size={40} className="text-black" />

          <div>
            <p className="font-semibold text-lg text-black">
              Free Shipping
            </p>
            <p className="text-gray-500 text-sm">
              Order over 150 $
            </p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex items-center gap-4">
          <Headphones size={40} className="text-black" />

          <div>
            <p className="font-semibold text-lg text-black">
              24 / 7 Support
            </p>
            <p className="text-gray-500 text-sm">
              Dedicated support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}