"use client";

import { useEffect, useState } from "react";
import { Truck } from "lucide-react";

export default function OrderInfo({ order }: any) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Skeleton (fully replaces UI)
  if (!mounted) {
    return (
      <div className="border border-[#E5E5E5] rounded-2xl p-6 bg-white">
        
        {/* TOP ROW SKELETON */}
        <div className="flex justify-between mb-4">
          <div>
            <div className="h-[12px] w-[90px] bg-gray-300 rounded" />
            <div className="h-[14px] w-[110px] bg-gray-300 rounded mt-2" />
          </div>

          <div className="text-right">
            <div className="h-[12px] w-[90px] bg-gray-300 rounded ml-auto" />
            <div className="h-[14px] w-[110px] bg-gray-300 rounded mt-2 ml-auto" />
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-[1px] bg-[#E5E5E5] my-4" />

        {/* DELIVERY SKELETON */}
        <div>
          <div className="h-[12px] w-[120px] bg-gray-300 rounded" />

          <div className="flex items-center gap-2 mt-[8px]">
            <div className="w-[16px] h-[16px] bg-gray-300 rounded" />
            <div className="h-[14px] w-[140px] bg-gray-300 rounded" />
          </div>
        </div>

      </div>
    );
  }

  return (
    <div className="border border-[#E5E5E5] rounded-2xl p-6 bg-white">
      
      {/* TOP ROW */}
      <div className="flex justify-between mb-4">
        
        <div>
          <p className="text-[12px] text-[#737373]">Order Number</p>
          <p className="text-[14px] font-medium text-[#171717] mt-[2px]">
            {order.id}
          </p>
        </div>

        <div className="text-right">
          <p className="text-[12px] text-[#737373]">Order Date</p>
          <p className="text-[14px] font-medium text-[#171717] mt-[2px]">
            {order.date}
          </p>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="h-[1px] bg-[#E5E5E5] my-4" />

      {/* DELIVERY */}
      <div>
        <p className="text-[12px] text-[#737373]">
          Estimated Delivery
        </p>

        <div className="flex items-center gap-2 mt-[4px]">
          <Truck className="w-[16px] h-[16px] text-[#737373]" strokeWidth={2} />
          <p className="text-[14px] font-medium text-[#171717]">
            Nov 8–10, 2025
          </p>
        </div>
      </div>

    </div>
  );
}