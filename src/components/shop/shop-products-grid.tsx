"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/shared/cards/product-card";
import type { Product } from "@/types/product";

type ShopProductsGridProps = {
  products: Product[];
};

export default function ShopProductsGrid({ products }: ShopProductsGridProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 pb-[48px] pt-[46px] md:px-8 md:pb-[56px] lg:px-[100px] lg:pb-[70px] lg:pt-[63px]">
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 md:gap-y-8 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-10">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="w-full">
                <div className="w-full h-[300px] bg-gray-300 rounded-md" />
                <div className="mt-3 h-4 w-[70%] bg-gray-300" />
                <div className="mt-2 h-4 w-[40%] bg-gray-300" />
                <div className="mt-2 h-4 w-[50%] bg-gray-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-[48px] pt-[46px] md:px-8 md:pb-[56px] lg:px-[100px] lg:pb-[70px] lg:pt-[63px]">
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 md:gap-y-8 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-10">
          {products.map((product, index) => (
            <ProductCard
              key={`${product.id}-${index}`}
              product={product}
              className="max-w-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
