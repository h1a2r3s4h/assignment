import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="w-full bg-white">
      <section className="mx-auto max-w-[1440px]">
        <div className="relative h-[716px] w-full overflow-hidden">
          <Image
            src="/images/home/modern-furniture-hero.jpg"
            alt="Modern interior furniture"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute right-[58px] top-[153px] w-[643px] rounded-[10px] bg-[#FFF3E3] px-[43px] pb-[37px] pt-[62px]">
            <p className="text-base font-semibold tracking-[3px] text-[#333333]">
              New Arrival
            </p>
            <h1 className="mt-1 max-w-[420px] text-[52px] font-bold leading-[65px] text-[#B88E2F]">
              Discover Our
              <br />
              New Collection
            </h1>
            <p className="mt-[17px] max-w-[546px] text-[18px] font-medium leading-[24px] text-[#333333]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <Link
              href="/shop"
              className="mt-[46px] inline-flex h-[74px] w-[222px] items-center justify-center bg-[#B88E2F] text-base font-bold uppercase text-white transition hover:opacity-90"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}