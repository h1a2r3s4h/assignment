"use client";

import { useEffect, useState } from "react";

export default function OrderSummary({ total }: any) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Skeleton (fully replaces UI)
  if (!mounted) {
    return (
      <div className="border border-[#E5E5E5] rounded-2xl p-6 bg-white mb-6">
        
        {/* TITLE */}
        <div className="h-[16px] w-[130px] bg-gray-300 rounded mb-5" />

        {/* ROWS */}
        <div className="space-y-3">
          <div className="flex justify-between">
            <div className="h-[14px] w-[80px] bg-gray-300 rounded" />
            <div className="h-[14px] w-[60px] bg-gray-300 rounded" />
          </div>

          <div className="flex justify-between">
            <div className="h-[14px] w-[80px] bg-gray-300 rounded" />
            <div className="h-[14px] w-[40px] bg-gray-300 rounded" />
          </div>

          <div className="flex justify-between">
            <div className="h-[14px] w-[50px] bg-gray-300 rounded" />
            <div className="h-[14px] w-[40px] bg-gray-300 rounded" />
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-[1px] bg-[#E5E5E5] my-4" />

        {/* TOTAL */}
        <div className="flex justify-between">
          <div className="h-[14px] w-[50px] bg-gray-300 rounded" />
          <div className="h-[14px] w-[60px] bg-gray-300 rounded" />
        </div>

      </div>
    );
  }

  return (
    <div className="border border-[#E5E5E5] rounded-2xl p-6 bg-white mb-6">
      
      {/* TITLE */}
      <p className="text-[16px] font-medium text-[#171717] mb-5">
        Order Summary
      </p>

      {/* ROWS */}
      <div className="space-y-3">
        
        <div className="flex justify-between text-[14px] text-[#737373]">
          <span>Subtotal</span>
          <span>₹{total}</span>
        </div>

        <div className="flex justify-between text-[14px] text-[#737373]">
          <span>Shipping</span>
          <span>₹0</span>
        </div>

        <div className="flex justify-between text-[14px] text-[#737373]">
          <span>Tax</span>
          <span>₹0</span>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="h-[1px] bg-[#E5E5E5] my-4" />

      {/* TOTAL */}
      <div className="flex justify-between text-[14px] font-medium text-[#171717]">
        <span>Total</span>
        <span>₹{total}</span>
      </div>

    </div>
  );
}