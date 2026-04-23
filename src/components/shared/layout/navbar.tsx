"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/cart-context";
import { useWishlist } from "@/context/wishlist-context";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const total = cart.reduce((t, i) => t + i.qty, 0);
  return (
    <header className="w-full border-b border-[#E8E0D8] bg-white">
      <div className="mx-auto flex h-[80px] max-w-[1440px] items-center justify-between px-[54px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-[8px] cursor-pointer">
          <Image
            src="/images/logo/Meubel House_Logos-05.svg"
            alt="Furniro logo"
            width={50}
            height={50}
            className="h-auto w-auto"
            priority
          />
          <span className="text-[32px] font-bold leading-none tracking-tight text-black">
            Furniro
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden items-center gap-[60px] md:flex cursor-pointer">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[15px] font-bold text-black transition-opacity hover:opacity-60"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-[36px]">
          {/* Account → /login */}
          <Link
            href="/login"
            aria-label="Account"
            className="transition-opacity hover:opacity-60 cursor-pointer"
          >
            <Image
              src="/images/icons/mdi_account-alert-outline.svg"
              alt="Account"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </Link>

          {/* Search */}
          <button
            type="button"
            aria-label="Search"
            className="transition-opacity hover:opacity-60 cursor-pointer"
          >
            <Image
              src="/images/icons/akar-icons_search.svg"
              alt="Search"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </button>

          {/* Wishlist */}
          <div className="relative">
            <Image
              src="/images/icons/akar-icons_heart.svg"
              alt="Wishlist"
              width={24}
              height={24}
              className="h-6 w-6 cursor-pointer"
            />

            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#B88E2F] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                {wishlist.length}
              </span>
            )}
          </div>

          {/* Cart → /cart */}
          <Link
            href="/cart"
            aria-label="Cart"
            className="relative transition-opacity hover:opacity-60 cursor-pointer"
          >
            <Image
              src="/images/icons/ant-design_shopping-cart-outlined.svg"
              alt="Cart"
              width={24}
              height={24}
              className="h-6 w-6"
            />

            {total > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#B88E2F] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                {total}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
