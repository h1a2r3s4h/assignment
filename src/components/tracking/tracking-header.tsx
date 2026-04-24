"use client";

import { useEffect, useState } from "react";

export default function TrackingHeader({ order }: any) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Skeleton (fully replaces UI)
  if (!mounted) {
    return (
      <div className="mb-6">
        <div className="h-[20px] w-[180px] bg-gray-300 rounded" />
        <div className="h-[14px] w-[120px] bg-gray-300 rounded mt-2" />
      </div>
    );
  }

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold">Track Your Order</h2>
      <p className="text-gray-500 text-sm">
        Order #{order.id}
      </p>
    </div>
  );
}