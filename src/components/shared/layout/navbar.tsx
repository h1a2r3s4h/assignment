"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/cart-context";
import { useWishlist } from "@/context/wishlist-context";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // 👈 only for hydration
  }, []);

  // ✅ NO TIMER → only mount-based
  const loading = !mounted;

  const total = cart?.reduce((t, i) => t + i.qty, 0) || 0;

  return (
    <header className="w-full border-b border-[#E8E0D8] bg-white">
      <div className="mx-auto flex h-[80px] max-w-[1440px] items-center justify-between px-[54px]">

        {/* Logo */}
        {loading ? (
          <div className="flex items-center gap-[8px]">
            <Skeleton className="h-[50px] w-[50px] rounded-full bg-gray-300" />
            <Skeleton className="h-[32px] w-[120px] bg-gray-300" />
          </div>
        ) : (
          <Link href="/" className="flex items-center gap-[8px]">
            <Image
              src="/images/logo/Meubel House_Logos-05.svg"
              alt="Furniro logo"
              width={50}
              height={50}
              priority
            />
            <span className="text-[32px] font-bold text-black">
              Furniro
            </span>
          </Link>
        )}

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-[60px]">
          {loading ? (
            <>
              <Skeleton className="h-[16px] w-[50px] bg-gray-300" />
              <Skeleton className="h-[16px] w-[50px] bg-gray-300" />
              <Skeleton className="h-[16px] w-[60px] bg-gray-300" />
              <Skeleton className="h-[16px] w-[70px] bg-gray-300" />
            </>
          ) : (
            navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[15px] font-bold text-black hover:opacity-60"
              >
                {item.label}
              </Link>
            ))
          )}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-[36px]">
          {loading ? (
            <>
              <Skeleton className="h-6 w-6 rounded-full bg-gray-300" />
              <Skeleton className="h-6 w-6 rounded-full bg-gray-300" />
              <Skeleton className="h-6 w-6 rounded-full bg-gray-300" />
              <Skeleton className="h-6 w-6 rounded-full bg-gray-300" />
            </>
          ) : (
            <>
              <Link href="/login">
                <Image src="/images/icons/mdi_account-alert-outline.svg" alt="" width={24} height={24} />
              </Link>

              <button>
                <Image src="/images/icons/akar-icons_search.svg" alt="" width={24} height={24} />
              </button>

              <div className="relative">
                <Image src="/images/icons/akar-icons_heart.svg" alt="" width={24} height={24} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#B88E2F] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                    {wishlist.length}
                  </span>
                )}
              </div>

              <Link href="/cart" className="relative">
                <Image src="/images/icons/ant-design_shopping-cart-outlined.svg" alt="" width={24} height={24} />
                {total > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#B88E2F] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                    {total}
                  </span>
                )}
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}