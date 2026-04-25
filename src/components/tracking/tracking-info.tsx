"use client";

import { useEffect, useState } from "react";

export default function TrackingInfo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Skeleton (fully replaces UI)
  if (!mounted) {
    return (
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Delivery Address */}
        <div className="border border-[#E5E5E5] rounded-2xl p-4 bg-white">
          <div className="h-[16px] w-[140px] bg-gray-300 rounded mb-3" />

          <div className="space-y-2">
            <div className="h-[14px] w-[120px] bg-gray-300 rounded" />
            <div className="h-[14px] w-[160px] bg-gray-300 rounded" />
            <div className="h-[14px] w-[140px] bg-gray-300 rounded" />
          </div>
        </div>

        {/* Carrier Info */}
        <div className="border border-[#E5E5E5] rounded-2xl p-4 bg-white">
          <div className="h-[16px] w-[160px] bg-gray-300 rounded mb-3" />

          <div className="space-y-2">
            <div className="h-[14px] w-[140px] bg-gray-300 rounded" />
            <div className="h-[14px] w-[180px] bg-gray-300 rounded" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      {/* Delivery Address */}
      <div className="border border-[#E5E5E5] rounded-2xl p-4 bg-white">
        <p className="text-[16px] font-medium text-[#171717] mb-2">
          Delivery Address
        </p>

        <p className="text-[14px] text-[#737373] leading-[20px]">
          John Doe <br />
          123 Main Street <br />
          Phone: 9999999999
        </p>
      </div>

      {/* Carrier Info */}
      <div className="border border-[#E5E5E5] rounded-2xl p-4 bg-white">
        <p className="text-[16px] font-medium text-[#171717] mb-2">
          Carrier Information
        </p>

        <p className="text-[14px] text-[#737373] leading-[20px]">
          Express Shipping <br />
          Tracking: 123456789
        </p>
      </div>
    </div>
  );
}
