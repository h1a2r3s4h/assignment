"use client";

import { Trophy, BadgeCheck, Package, Headphones } from "lucide-react";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const features = [
  {
    id: 1,
    title: "High Quality",
    description: "crafted from top materials",
    icon: Trophy,
  },
  {
    id: 2,
    title: "Warranty Protection",
    description: "Over 2 years",
    icon: BadgeCheck,
  },
  {
    id: 3,
    title: "Free Shipping",
    description: "Order over 150 $",
    icon: Package,
  },
  {
    id: 4,
    title: "24 / 7 Support",
    description: "Dedicated support",
    icon: Headphones,
  },
];

export default function FeatureStrip() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 🔴 SKELETON (FULL REPLACEMENT)
  if (!mounted) {
    return (
      <section className="w-full bg-[#FAF3EA]">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-y-8 px-4 py-10 sm:grid-cols-2 sm:gap-x-8 md:px-8 md:py-14 lg:grid-cols-4 lg:px-[53px] lg:py-[96px]">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-4 lg:justify-center">
              <Skeleton className="h-[48px] w-[48px] md:h-[52px] md:w-[52px] bg-gray-300" />

              <div className="space-y-2">
                <Skeleton className="h-6 w-32 bg-gray-300" />
                <Skeleton className="h-4 w-36 bg-gray-300" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // 🟢 ORIGINAL UI
  return (
    <section className="w-full bg-[#FAF3EA]">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-y-8 px-4 py-10 sm:grid-cols-2 sm:gap-x-8 md:px-8 md:py-14 lg:grid-cols-4 lg:px-[53px] lg:py-[96px]">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.id}
              className="flex items-center gap-4 lg:justify-center"
            >
              <Icon
                className="h-[48px] w-[48px] shrink-0 text-[#242424] md:h-[52px] md:w-[52px]"
                strokeWidth={1.8}
              />

              <div>
                <h3 className="text-[20px] font-semibold leading-[120%] text-[#242424] md:text-[24px]">
                  {feature.title}
                </h3>
                <p className="mt-1 text-[16px] font-medium leading-[150%] text-[#898989] md:text-[18px]">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}