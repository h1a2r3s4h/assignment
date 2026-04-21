import Image from "next/image";
import Link from "next/link";

export default function ShopHero() {
  return (
    <section className="relative h-[188px] w-full overflow-hidden sm:h-[220px] md:h-[260px] lg:h-[316px]">
      <Image
        src="/images/shop/shop-hero.png"
        alt="Shop banner"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-white/50" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col items-center justify-center px-4 text-center">
        <h1 className="text-[32px] font-medium leading-tight text-black md:text-[40px] lg:text-[48px]">
          Shop
        </h1>

        <div className="mt-2 flex items-center gap-2 text-sm text-black">
          <Link href="/" className="font-medium">
            Home
          </Link>
          <span>{">"}</span>
          <span>Shop</span>
        </div>
      </div>
    </section>
  );
}