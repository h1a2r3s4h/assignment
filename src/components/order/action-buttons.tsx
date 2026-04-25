"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ActionButtons() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // 🔹 Skeleton (fully replaces UI)
  if (!mounted) {
    return (
      <div className="flex gap-4 mt-6">
        <div className="flex-1 h-[44px] bg-gray-300 rounded-xl" />
        <div className="flex-1 h-[44px] bg-gray-300 rounded-xl" />
      </div>
    );
  }

  return (
    <div className="flex gap-4 mt-6">
      {/* PRIMARY BUTTON */}
      <Link
        href="/order-tracking"
        className="flex-1 h-[44px] bg-black text-white rounded-xl text-[14px] font-medium flex items-center justify-center"
      >
        Track Order
      </Link>

      {/* SECONDARY BUTTON */}
      <Link
        href="/"
        className="flex-1 h-[44px] border border-[#E5E5E5] rounded-xl text-[14px] font-medium text-[#171717] flex items-center justify-center bg-white"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
