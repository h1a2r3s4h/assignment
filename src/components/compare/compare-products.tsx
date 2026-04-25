"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Compare() {
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
      <div className="grid grid-cols-4 gap-10 px-16 py-14 bg-white items-start">
        {/* Left Text */}
        <div className="pt-6">
          <Skeleton className="h-8 w-48 bg-gray-300" />
          <Skeleton className="h-8 w-40 mt-2 bg-gray-300" />

          <Skeleton className="mt-6 h-5 w-24 bg-gray-300" />
        </div>

        {/* Product 1 */}
        <div>
          <Skeleton className="h-[220px] w-full rounded-xl bg-gray-300" />

          <Skeleton className="mt-5 h-5 w-40 bg-gray-300" />
          <Skeleton className="mt-2 h-4 w-32 bg-gray-300" />

          <div className="flex items-center gap-2 mt-3">
            <Skeleton className="h-4 w-6 bg-gray-300" />
            <Skeleton className="h-4 w-24 bg-gray-300" />
            <Skeleton className="h-4 w-20 bg-gray-300" />
          </div>
        </div>

        {/* Product 2 */}
        <div>
          <Skeleton className="h-[220px] w-full rounded-xl bg-gray-300" />

          <Skeleton className="mt-5 h-5 w-40 bg-gray-300" />
          <Skeleton className="mt-2 h-4 w-32 bg-gray-300" />

          <div className="flex items-center gap-2 mt-3">
            <Skeleton className="h-4 w-6 bg-gray-300" />
            <Skeleton className="h-4 w-24 bg-gray-300" />
            <Skeleton className="h-4 w-20 bg-gray-300" />
          </div>
        </div>

        {/* Add Product */}
        <div className="pt-6">
          <Skeleton className="h-5 w-32 mb-4 bg-gray-300" />
          <Skeleton className="h-[48px] w-full rounded-md bg-gray-300" />
        </div>
      </div>
    );
  }

  // 🟢 ORIGINAL UI
  return (
    <div className="grid grid-cols-4 gap-10 px-16 py-14 bg-white items-start">
      {/* Left Text */}
      <div className="pt-6">
        <p className="text-2xl font-semibold leading-snug">
          Go to Product page for more Products
        </p>

        <button className="mt-6 border-b border-gray-400 text-gray-600 hover:text-black">
          View More
        </button>
      </div>

      {/* Product 1 */}
      <div>
        <div className="bg-[#F9F1E7] rounded-xl p-6 flex justify-center items-center h-[220px]">
          <Image
            src="/images/compare/Group 156.png"
            alt="Asgaard Sofa"
            width={300}
            height={200}
            className="object-cover w-[90%] h-full"
          />
        </div>

        <h3 className="mt-5 text-lg font-semibold">Asgaard Sofa</h3>
        <p className="text-gray-700 mt-1">Rs. 250,000.00</p>

        <div className="flex items-center gap-2 mt-2">
          <span className="font-medium">4.7</span>

          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>

          <span className="text-gray-400 text-sm">| 204 Review</span>
        </div>
      </div>

      {/* Product 2 */}
      <div>
        <div className="bg-[#F9F1E7] rounded-xl p-6 flex justify-center items-center h-[220px]">
          <Image
            src="/images/compare/e8e6980ec9e9224b3002d53824688ecee9c882c5.png"
            alt="Outdoor Sofa"
            width={300}
            height={200}
            className="object-cover w-[90%] h-full"
          />
        </div>

        <h3 className="mt-5 text-lg font-semibold">Outdoor Sofa Set</h3>
        <p className="text-gray-700 mt-1">Rs. 224,000.00</p>

        <div className="flex items-center gap-2 mt-2">
          <span className="font-medium">4.2</span>

          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>

          <span className="text-gray-400 text-sm">| 145 Review</span>
        </div>
      </div>

      {/* Add Product */}
      <div className="pt-6">
        <p className="text-lg font-semibold mb-4">Add A Product</p>

        <button className="bg-[#B88E2F] text-white px-5 py-3 rounded-md flex justify-between items-center w-full">
          Choose a Product
          <span className="ml-2">⌄</span>
        </button>
      </div>
    </div>
  );
}
