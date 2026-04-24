"use client";

import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  items?: string[];
};

export default function BreadcrumbNav({ items = [] }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 🔴 SKELETON (FULL REPLACEMENT)
  if (!mounted) {
    return (
      <div className="flex items-center gap-2">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-4 w-12 bg-gray-300" />
        ))}
      </div>
    );
  }

  // 🟢 ORIGINAL UI
  return (
    <div className="text-sm text-gray-500">
      {items.map((item, index) => (
        <span key={index}>
          {item}
          {index < items.length - 1 && " > "}
        </span>
      ))}
    </div>
  );
}