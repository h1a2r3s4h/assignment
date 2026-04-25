"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function CompareHeader() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // 🔴 SKELETON (FULL REPLACEMENT)
  if (!mounted) {
    return (
      <div className="relative w-full h-[300px] animate-pulse">
        {/* Background */}
        <div className="absolute inset-0 bg-gray-300" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-10 h-10 bg-gray-300 rounded mb-3" />
          <div className="h-8 w-40 bg-gray-300 rounded mb-2" />
          <div className="h-4 w-48 bg-gray-300 rounded" />
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
        <Image
          src="/images/compare/2727769ba74736d502746301ed573ed8940fc322.png"
          alt="Logo"
          width={40}
          height={40}
          className="mb-3"
        />

        <h1 className="text-4xl font-semibold text-black">Checkout</h1>

        <p className="mt-2 text-gray-700 text-sm flex items-center gap-2">
          <span>Home</span>
          <span>&gt;</span>
          <span className="text-black font-medium">Checkout</span>
        </p>
      </div>
    </div>
  );
}
