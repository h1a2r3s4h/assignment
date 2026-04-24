"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function InspirationSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full bg-[#FCF8F3]">
        <section className="mx-auto max-w-[1440px] px-[100px] py-[44px]">
          <div className="grid min-h-[670px] grid-cols-[422px_404px_372px] items-center gap-x-6">
            
            {/* Left Content Skeleton */}
            <div className="max-w-[422px]">
              <div className="h-[96px] w-full bg-gray-300" />
              <div className="mt-[7px] h-[48px] w-[368px] bg-gray-300" />
              <div className="mt-[25px] h-12 w-[176px] bg-gray-300" />
            </div>

            {/* Middle Image Skeleton */}
            <div className="relative h-[582px] w-[404px] overflow-hidden bg-gray-300">
              <div className="absolute bottom-6 left-6 flex items-end">
                <div className="bg-gray-300/70 px-8 py-8 backdrop-blur-sm">
                  <div className="h-4 w-[120px] bg-gray-300" />
                  <div className="mt-2 h-6 w-[160px] bg-gray-300" />
                </div>
                <div className="h-12 w-12 bg-gray-300" />
              </div>
            </div>

            {/* Right Side Skeleton */}
            <div className="relative flex h-[486px] flex-col justify-between">
              <div className="relative h-[486px] w-[372px] overflow-hidden bg-gray-300" />
              
              <div className="absolute right-[20px] top-1/2 z-20 h-12 w-12 -translate-y-1/2 rounded-full bg-gray-300" />

              <div className="mt-[40px] flex items-center gap-5">
                <div className="h-[11px] w-[11px] rounded-full bg-gray-300" />
                <div className="h-[11px] w-[11px] rounded-full bg-gray-300" />
                <div className="h-[11px] w-[11px] rounded-full bg-gray-300" />
                <div className="h-[11px] w-[11px] rounded-full bg-gray-300" />
              </div>
            </div>

          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#FCF8F3]">
      <section className="mx-auto max-w-[1440px] px-[100px] py-[44px]">
        <div className="grid min-h-[670px] grid-cols-[422px_404px_372px] items-center gap-x-6">
          
          <div className="max-w-[422px]">
            <h2 className="text-[40px] font-bold leading-[120%] text-[#3A3A3A]">
              50+ Beautiful rooms inspiration
            </h2>
            <p className="mt-[7px] max-w-[368px] text-base font-medium leading-[150%] text-[#616161]">
              Our designer already made a lot of beautiful prototipe of rooms that
              inspire you
            </p>
            <Link
              href="/shop"
              className="mt-[25px] inline-flex h-12 w-[176px] items-center justify-center bg-[#B88E2F] text-base font-semibold text-white transition hover:opacity-90"
            >
              Explore More
            </Link>
          </div>

          <div className="relative h-[582px] w-[404px] overflow-hidden">
            <Image
              src="/images/home/Rectangle 24.png"
              alt="Beautiful room inspiration"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-6 left-6 flex items-end">
              <div className="bg-white/72 px-8 py-8 backdrop-blur-sm">
                <p className="text-base font-medium leading-[150%] text-[#616161]">
                  01{" "}
                  <span className="mx-2 inline-block h-px w-[27px] bg-[#616161] align-middle" />{" "}
                  Bed Room
                </p>
                <h3 className="mt-2 text-[28px] font-semibold leading-[120%] text-[#3A3A3A]">
                  Inner Peace
                </h3>
              </div>
              <button
                type="button"
                className="flex h-12 w-12 items-center justify-center bg-[#B88E2F] text-white"
                aria-label="Next inspiration"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="relative flex h-[486px] flex-col justify-between">
            <div className="relative h-[486px] w-[372px] overflow-hidden">
              <Image
                src="/images/home/Rectangle 25.png"
                alt="Room inspiration side preview"
                fill
                className="object-cover"
              />
            </div>
            <button
              type="button"
              className="absolute right-[20px] top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#B88E2F] shadow-[0px_4px_14px_rgba(0,0,0,0.16)]"
              aria-label="Slide next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="mt-[40px] flex items-center gap-5">
              <span className="h-[11px] w-[11px] rounded-full bg-[#B88E2F]" />
              <span className="h-[11px] w-[11px] rounded-full border border-[#B88E2F] bg-transparent" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#D8D8D8]" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#D8D8D8]" />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}