"use client";

import { useEffect, useState } from "react";

export default function TrackingItems({ items }: any) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Skeleton (fully replaces UI)
  if (!mounted) {
    return (
      <div className="border border-[#E5E5E5] rounded-2xl p-6 bg-white">
        
        {/* TITLE */}
        <div className="h-[16px] w-[200px] bg-gray-300 rounded mb-5" />

        {/* ITEMS */}
        <div className="space-y-5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex justify-between items-center">

              {/* LEFT */}
              <div className="flex gap-3 items-center">
                
                {/* IMAGE */}
                <div className="w-[56px] h-[56px] bg-gray-300 rounded-lg" />

                {/* INFO */}
                <div className="space-y-2">
                  <div className="h-[14px] w-[140px] bg-gray-300 rounded" />
                  <div className="h-[12px] w-[80px] bg-gray-300 rounded" />
                </div>
              </div>

              {/* PRICE */}
              <div className="h-[14px] w-[60px] bg-gray-300 rounded" />

            </div>
          ))}
        </div>

      </div>
    );
  }

  return (
    <div className="border border-[#E5E5E5] rounded-2xl p-6 bg-white">
      
      {/* TITLE */}
      <p className="text-[16px] font-medium text-[#171717] mb-5">
        Items in this shipment
      </p>

      {/* ITEMS */}
      <div className="space-y-5">
        {items.map((item: any) => (
          <div key={item.id} className="flex justify-between items-center">

            {/* LEFT */}
            <div className="flex gap-3 items-center">
              
              {/* IMAGE */}
              <div className="w-[56px] h-[56px] bg-[#F5F5F5] rounded-lg" />

              {/* INFO */}
              <div>
                <p className="text-[14px] font-medium text-[#171717] leading-[20px]">
                  {item.name}
                </p>

                <p className="text-[12px] text-[#737373] mt-[2px]">
                  Qty: {item.qty}
                </p>
              </div>
            </div>

            {/* PRICE */}
            <p className="text-[14px] font-medium text-[#171717]">
              ₹{item.price}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
}