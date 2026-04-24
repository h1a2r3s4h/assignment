"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function CompareHeader() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 🔴 SKELETON (FULL REPLACEMENT)
  if (!mounted) {
    return (
      <div className="relative w-full h-[300px]">
        {/* Background */}
        <Skeleton className="absolute inset-0 w-full h-full bg-gray-300" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <Skeleton className="w-10 h-10 mb-3 bg-gray-300" />
          <Skeleton className="h-10 w-64 bg-gray-300" />
          <Skeleton className="mt-2 h-4 w-48 bg-gray-300" />
        </div>
      </div>
    );
  }

  // 🟢 ORIGINAL UI
  return (
    <div className="relative w-full h-[300px]">
      {/* Background Image */}
      <Image
        src="/images/compare/1461f3d6ff74c027a1888544144abe4be6e02cbf.jpg"
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        {/* Logo */}
        <Image
          src="/images/compare/2727769ba74736d502746301ed573ed8940fc322.png"
          alt="Logo"
          width={40}
          height={40}
          className="mb-3"
        />

        {/* Title */}
        <h1 className="text-4xl font-semibold text-black">
          Product Comparison
        </h1>

        {/* Breadcrumb */}
        <p className="mt-2 text-gray-700 text-sm flex items-center gap-2">
          <span>Home</span>
          <span>&gt;</span>
          <span className="text-black font-medium">Comparison</span>
        </p>
      </div>
    </div>
  );
}