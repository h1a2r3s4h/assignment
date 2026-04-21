"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Share2, GitCompareArrows } from "lucide-react";
import { cn } from "../../../lib/utils";
import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
  className?: string;
};

export default function ProductCard({
  product,
  className,
}: ProductCardProps) {
  const {
    id,
    slug,
    name,
    shortDescription,
    price,
    originalPrice,
    image,
    badge,
    badgeType,
    isNew,
  } = product;

  const displayBadge = badge || (isNew ? "New" : "");
  const badgeStyles =
    badgeType === "discount"
      ? "bg-[#E97171] text-white"
      : "bg-[#2EC1AC] text-white";

  return (
    <article
      className={cn(
        "group relative w-full overflow-hidden bg-[#F4F5F7]",
        className
      )}
    >
      {/* image */}
      <Link href={`/product/${slug}`} className="block">
        <div className="relative h-[301px] w-full overflow-hidden sm:h-[320px] lg:h-[301px]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 285px"
          />

          {displayBadge && (
            <div
              className={cn(
                "absolute right-6 top-6 flex h-[48px] w-[48px] items-center justify-center rounded-full text-[16px] font-medium leading-none",
                badgeStyles
              )}
            >
              {displayBadge}
            </div>
          )}
        </div>
      </Link>

      {/* hover overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#3A3A3A]/72 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="flex w-full max-w-[252px] flex-col items-center px-4">
          <button className="flex h-[48px] w-full items-center justify-center bg-white text-[16px] font-semibold leading-[150%] text-[#B88E2F] transition-colors hover:bg-[#faf7f0]">
            Add to cart
          </button>

          <div className="mt-6 flex w-full items-center justify-between gap-2 text-white">
            <button className="flex items-center gap-1 text-[14px] font-semibold leading-[150%] transition-opacity hover:opacity-80">
              <Share2 className="h-4 w-4" strokeWidth={2} />
              <span>Share</span>
            </button>

            <button className="flex items-center gap-1 text-[14px] font-semibold leading-[150%] transition-opacity hover:opacity-80">
              <GitCompareArrows className="h-4 w-4" strokeWidth={2} />
              <span>Compare</span>
            </button>

            <button className="flex items-center gap-1 text-[14px] font-semibold leading-[150%] transition-opacity hover:opacity-80">
              <Heart className="h-4 w-4" strokeWidth={2} />
              <span>Like</span>
            </button>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="px-4 pb-[30px] pt-4">
        <Link href={`/product/${slug}`} className="block">
          <h3 className="text-[24px] font-semibold leading-[120%] text-[#3A3A3A]">
            {name}
          </h3>
        </Link>

        <p className="mt-2 text-[16px] font-medium leading-[150%] text-[#898989]">
          {shortDescription}
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-4">
          <span className="text-[20px] font-semibold leading-[150%] text-[#3A3A3A]">
            {price}
          </span>

          {originalPrice && (
            <span className="text-[16px] font-normal leading-[150%] text-[#B0B0B0] line-through">
              {originalPrice}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}