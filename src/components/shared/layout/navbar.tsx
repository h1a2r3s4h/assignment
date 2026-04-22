"use client";

import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="w-full border-b border-[#E8E0D8] bg-white">
      <div className="mx-auto flex h-[80px] max-w-[1440px] items-center justify-between px-[54px]">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-[8px]">
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
        <nav className="hidden items-center gap-[60px] md:flex">
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
            className="transition-opacity hover:opacity-60"
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
            className="transition-opacity hover:opacity-60"
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
          <button
            type="button"
            aria-label="Wishlist"
            className="transition-opacity hover:opacity-60"
          >
            <Image
              src="/images/icons/akar-icons_heart.svg"
              alt="Wishlist"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </button>

          {/* Cart → /cart */}
          <Link
            href="/cart"
            aria-label="Cart"
            className="transition-opacity hover:opacity-60"
          >
            <Image
              src="/images/icons/ant-design_shopping-cart-outlined.svg"
              alt="Cart"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </Link>

        </div>
      </div>
    </header>
  );
}