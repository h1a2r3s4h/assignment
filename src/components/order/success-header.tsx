"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";

export default function SuccessHeader({ email }: any) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Skeleton (fully replaces UI)
  if (!mounted) {
    return (
      <div className="text-center mb-8">

        {/* Circle */}
        <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-gray-300" />

        {/* Title */}
        <div className="h-[20px] w-[140px] bg-gray-300 rounded mx-auto" />

        {/* Sub text */}
        <div className="h-[14px] w-[180px] bg-gray-300 rounded mx-auto mt-3" />

        <div className="h-[12px] w-[200px] bg-gray-300 rounded mx-auto mt-2" />

      </div>
    );
  }

  return (
    <div className="text-center mb-8">

      {/* Circle */}
      <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 bg-[#D1FADF]">
        <Check className="w-8 h-8 text-[#16A34A] stroke-[3]" />
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800">
        Order Confirmed!
      </h2>

      {/* Text */}
      <p className="mt-2 text-[#404040]">
        Thank you for your purchase
      </p>

      <p className="text-sm mt-1 text-[#525252]">
        Confirmation sent to {email}
      </p>

    </div>
  );
}