"use client";

import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";

const ranges = [
  {
    id: 1,
    title: "Dining",
    image: "/images/home/dining-room-furniture.png",
  },
  {
    id: 2,
    title: "Living",
    image: "/images/home/living-room-furniture.png",
  },
  {
    id: 3,
    title: "Bedroom",
    image: "/images/home/dining-room-furniture.png",
  },
];

export default function BrowseRangeSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const loading = !mounted;

  return (
    <div className="w-full bg-white">
      <section className="mx-auto max-w-[1440px] px-[131px] pb-[56px] pt-[56px]">
        <div className="mx-auto">
          {/* Heading */}
          <div className="text-center">
            {loading ? (
              <>
                <Skeleton className="mx-auto h-[32px] w-[250px] bg-gray-300" />
                <Skeleton className="mx-auto mt-3 h-[20px] w-[400px] bg-gray-300" />
              </>
            ) : (
              <>
                <h2 className="text-[32px] font-bold text-[#333333]">
                  Browse The Range
                </h2>
                <p className="mt-3 text-[20px] text-[#666666]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </>
            )}
          </div>

          {/* Cards */}
          <div className="mt-[62px] grid grid-cols-3 gap-x-5">
            {loading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="text-center">
                    <Skeleton className="h-[480px] w-full rounded-[10px] bg-gray-300" />
                    <Skeleton className="mx-auto mt-[30px] h-[24px] w-[120px] bg-gray-300" />
                  </div>
                ))
              : ranges.map((item) => (
                  <div key={item.id} className="text-center">
                    <div className="relative h-[480px] w-full overflow-hidden rounded-[10px]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-[30px] text-[24px] font-semibold text-[#333333]">
                      {item.title}
                    </h3>
                  </div>
                ))}
          </div>
        </div>
      </section>
    </div>
  );
}
