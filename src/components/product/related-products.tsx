"use client";

import { useState, useEffect } from "react";
import ProductCard from "@/components/shared/cards/product-card";

const products = [
  {
    id: 1,
    slug: "asgaard-sofa",
    name: "Asgaard Sofa",
    shortDescription: "Stylish and comfortable sofa",
    price: "Rs. 250,000",
    originalPrice: "Rs. 300,000",
    image: "/images/products/Images.png",
    badge: "-30%",
    badgeType: "discount" as const,
    isNew: false,
  },
  {
    id: 2,
    slug: "modern-chair",
    name: "Modern Chair",
    shortDescription: "Minimal chair design",
    price: "Rs. 50,000",
    image: "/images/products/Images (2).png",
    isNew: true,
  },
  {
    id: 3,
    slug: "wood-table",
    name: "Wood Table",
    shortDescription: "Solid wood table",
    price: "Rs. 80,000",
    image: "/images/products/Images (1).png",
  },
  {
    id: 4,
    slug: "lamp",
    name: "Stylish Lamp",
    shortDescription: "Warm light lamp",
    price: "Rs. 15,000",
    image: "/images/products/image 2.png",
  },
] as const satisfies readonly any[];

export default function RelatedProducts() {
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
      <div className="animate-pulse">
        <div className="h-6 w-48 bg-gray-300 mx-auto mb-6 rounded" />

        <div className="grid grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-3">
              <div className="w-full h-[300px] bg-gray-300 rounded-xl" />
              <div className="h-4 w-3/4 bg-gray-300 rounded" />
              <div className="h-4 w-1/2 bg-gray-300 rounded" />
              <div className="h-4 w-1/3 bg-gray-300 rounded" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 🟢 ORIGINAL UI
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-6">
        Related Products
      </h2>

      <div className="grid grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
