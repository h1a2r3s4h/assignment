"use client";

import { useCart } from "@/context/cart-context";
import Image from "next/image";
import Link from "next/link";
import { Heart, Share2, ArrowLeftRight } from "lucide-react";

import type { Product } from "@/types/product";
import { toast } from "sonner";

import { useWishlist } from "@/context/wishlist-context";
const toastStyle = {
  style: {
    background: "#fff",
    color: "#000",
    border: "1px solid #e5e5e5",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  },
};
type ProductCardProps = {
  product: Product;
  className?: string;
};

export default function ProductCard({ product, className }: ProductCardProps) {
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

  const { addToCart } = useCart();
  const { wishlist, addToWishlist } = useWishlist();
  const isLiked = wishlist.some((item) => item.id === product.id);
  return (
    <article className="group relative w-full overflow-hidden bg-[#F4F5F7]">
      {/* ✅ FULL CARD CLICK */}
      <Link href={`/product/${slug}`} className="absolute inset-0 z-0" />

      {/* IMAGE */}
      <div className="relative h-[301px] w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
        />

        {/* ✅ OVERLAY (ONLY IMAGE) */}
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#3A3A3A]/72 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex w-full max-w-[252px] flex-col items-center px-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();

                addToCart({
                  id: product.id,
                  name: product.name,
                  price: Number(String(product.price).replace(/[^\d]/g, "")),
                  image: product.image,
                });

                toast.success("Added to cart 🛒", toastStyle);
              }}
              className="flex h-[48px] w-full items-center justify-center bg-white text-[16px] font-semibold text-[#B88E2F] cursor-pointer"
            >
              Add to cart
            </button>

            <div className="mt-6 flex w-full items-center justify-between gap-2 text-white">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();

                  const url = `${window.location.origin}/product/${slug}`;
                  navigator.clipboard.writeText(url);
                  toast.success("Link copied 🔗", toastStyle);
                }}
                className="flex items-center gap-1 cursor-pointer text-[14px] font-semibold"
              >
                <Share2 className="h-4 w-4" />
                Share
              </button>

              <Link
                href="/compare"
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="flex items-center gap-1 cursor-pointer text-[14px] font-semibold"
              >
                <ArrowLeftRight className="h-4 w-4" />
                Compare
              </Link>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();

                  addToWishlist({
                    id: product.id,
                    name: product.name,
                    price: Number(product.price), // ✅ FIXED
                    image: product.image,
                  });

                  if (isLiked) {
                    toast.success(`${product.name} Removed ❌`, toastStyle);
                  } else {
                    toast.success(`${product.name} Added ❤️`, toastStyle);
                  }
                }}
                className="flex items-center gap-1 cursor-pointer text-[14px] font-semibold"
              >
                <Heart
                  className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`}
                />
                Like
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-4 pb-[30px] pt-4">
        <h3 className="text-[24px] font-semibold text-[#3A3A3A]">{name}</h3>

        <p className="mt-2 text-[16px] text-[#898989]">{shortDescription}</p>

        <div className="mt-2 flex gap-4">
          <span className="text-[20px] font-semibold text-[#3A3A3A]">
            {price}
          </span>

          {originalPrice && (
            <span className="text-[16px] text-[#B0B0B0] line-through">
              {originalPrice}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
