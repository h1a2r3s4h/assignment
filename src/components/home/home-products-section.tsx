"use client";

import { useCart } from "@/context/cart-context";
import Link from "next/link";
import Image from "next/image";
import { Share2, ArrowLeftRight, Heart } from "lucide-react";
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
type Product = {
  id: number;
  name: string;
  subtitle: string;
  price: string;
  oldPrice?: string;
  image: string;
  badge?: {
    text: string;
    type: "discount" | "new";
  };
  activeOverlay?: boolean;
};

const products: Product[] = [
  {
    id: 1,
    name: "Syltherine",
    subtitle: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    image: "/images/products/stylish-cafe-chair.png",
    badge: { text: "-30%", type: "discount" },
  },
  {
    id: 2,
    name: "Leviosa",
    subtitle: "Stylish cafe chair",
    price: "Rp 2.500.000",
    image: "/images/products/stylish-cafe-chair.png",
  },
  {
    id: 3,
    name: "Lolito",
    subtitle: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    image: "/images/products/luxury-big-sofa.png",
    badge: { text: "-50%", type: "discount" },
  },
  {
    id: 4,
    name: "Respira",
    subtitle: "Outdoor bar table and stool",
    price: "Rp 500.000",
    image: "/images/products/outdoor-bar-table.png",
    badge: { text: "New", type: "new" },
  },
  {
    id: 5,
    name: "Grifo",
    subtitle: "Night lamp",
    price: "Rp 1.500.000",
    image: "/images/products/modern-night-lamp.png",
  },
  {
    id: 6,
    name: "Muggo",
    subtitle: "Small mug",
    price: "Rp 150.000",
    image: "/images/products/small-ceramic-mug.png",
    badge: { text: "New", type: "new" },
  },
  {
    id: 7,
    name: "Pingky",
    subtitle: "Cute bed set",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    image: "/images/products/cute-bedroom-bedset.png",
    badge: { text: "-50%", type: "discount" },
  },
  {
    id: 8,
    name: "Potty",
    subtitle: "Minimalist flower pot",
    price: "Rp 500.000",
    image: "/images/products/minimal-flower-pot.png",
    badge: { text: "New", type: "new" },
  },
];

export default function HomeProductsSection() {
  const { addToCart } = useCart();

  const { wishlist, addToWishlist } = useWishlist();
  return (
    <div className="w-full bg-white">
      <section className="mx-auto max-w-[1440px] px-[102px] pb-[69px] pt-[56px]">
        <div className="mx-auto max-w-[1236px]">
          <h2 className="text-center text-[40px] font-bold leading-[120%] text-[#3A3A3A]">
            Our Products
          </h2>

          <div className="mt-8 grid grid-cols-4 gap-x-8 gap-y-8">
            {products.map((product) => {
              const isLiked = wishlist.some((item) => item.id === product.id);

              return (
                <article
                  key={product.id}
                  className="group relative overflow-hidden bg-[#F4F5F7] cursor-pointer"
                >
                  <Link
                    href={`/product/${product.id}`}
                    className="absolute inset-0 z-10"
                  />
                  <div className="relative h-[301px] w-full">
                    <Image
                      src={product.image}
                      alt={`${product.name} - ${product.subtitle}`}
                      fill
                      className="object-cover"
                    />

                    {product.badge && (
                      <div
                        className={`absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full text-sm font-medium text-white ${
                          product.badge.type === "discount"
                            ? "bg-[#E97171]"
                            : "bg-[#2EC1AC]"
                        }`}
                      >
                        {product.badge.text}
                      </div>
                    )}

                    <div
                      className={`absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#3A3A3A]/72 px-4 transition-opacity duration-300 ${
                        product.activeOverlay
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          addToCart({
                            id: product.id,
                            name: product.name,
                            price: Number(product.price.replace(/[^0-9]/g, "")),
                            image: product.image,
                          });
                          toast.success("Added to cart 🛒", toastStyle);
                          document.activeElement instanceof HTMLElement &&
                            document.activeElement.blur();
                        }}
                        className="flex h-12 w-[202px] items-center justify-center bg-white text-base font-semibold text-[#B88E2F] cursor-pointer transition-all duration-200 hover:bg-[#f8f8f8] hover:shadow-lg active:scale-95 active:shadow-inner"
                      >
                        Add to cart
                      </button>

                      <div className="mt-6 flex items-center gap-5 text-white">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            const url = `${window.location.origin}/product/${product.id}`;

                            if (navigator.share) {
                              navigator.share({
                                title: product.name,
                                text: product.subtitle,
                                url: url,
                              });
                            } else {
                              navigator.clipboard.writeText(url);
                              toast.success("Link copied 🔗", toastStyle);
                            }
                          }}
                          className="flex items-center gap-1 text-base font-semibold cursor-pointer"
                        >
                          <Share2 className="h-4 w-4" />
                          Share
                        </button>

                        <Link
                          href="/compare"
                          className="flex items-center gap-1 text-base font-semibold cursor-pointer"
                        >
                          <ArrowLeftRight className="h-4 w-4" />
                          Compare
                        </Link>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            const isLiked = wishlist.some(
                              (i) => i.id === product.id,
                            );

                            addToWishlist({
                              id: product.id,
                              name: product.name,
                              price: Number(product.price.replace(/[^0-9]/g, "")), // ✅ FIXED
                              image: product.image,
                            });

                            if (isLiked) {
                              toast.success(
                                `${product.name} Removed from wishlist ❌`,
                                toastStyle,
                              );
                            } else {
                              toast.success(
                                `${product.name} Added to wishlist ❤️`,
                                toastStyle,
                              );
                            }
                          }}
                          className="flex items-center cursor-pointer gap-1 text-base font-semibold"
                        >
                          <Heart
                            className={`h-4 w-4  ${
                              isLiked ? "fill-red-500 text-red-500" : ""
                            }`}
                          />
                          Like
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 pb-[30px] pt-4">
                    <h3 className="text-2xl font-semibold leading-[120%] text-[#3A3A3A]">
                      {product.name}
                    </h3>

                    <p className="mt-2 text-base font-medium leading-[150%] text-[#898989]">
                      {product.subtitle}
                    </p>

                    <div className="mt-2 flex items-center gap-4">
                      <span className="text-[20px] font-semibold leading-[150%] text-[#3A3A3A]">
                        {product.price}
                      </span>

                      {product.oldPrice && (
                        <span className="text-base font-normal leading-[150%] text-[#B0B0B0] line-through">
                          {product.oldPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/shop"
              className="flex h-12 w-[245px] items-center justify-center border border-[#B88E2F] bg-white text-base font-semibold text-[#B88E2F] transition hover:bg-[#B88E2F] hover:text-white"
            >
              Show More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
