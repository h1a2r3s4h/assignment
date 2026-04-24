"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ProductTabs() {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState("desc");

  useEffect(() => {
    setMounted(true);
  }, []);

  const descImages = [
    "/images/products/Cloud sofa three seater + ottoman_1 1.png",
    "/images/products/Cloud sofa three seater + ottoman_2 1.png",
  ];

  // 🔴 SKELETON (FULL REPLACEMENT)
  if (!mounted) {
    return (
      <div className="max-w-[1000px] mx-auto px-4 py-6 font-sans animate-pulse">
        {/* Tabs */}
        <div className="flex gap-8 border-b border-gray-200 mb-7">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-4 w-32 bg-gray-300 rounded" />
          ))}
        </div>

        {/* Text */}
        <div className="space-y-3 mb-6">
          <div className="h-4 w-full bg-gray-300 rounded" />
          <div className="h-4 w-[95%] bg-gray-300 rounded" />
          <div className="h-4 w-[90%] bg-gray-300 rounded" />
          <div className="h-4 w-[85%] bg-gray-300 rounded" />
        </div>

        <div className="space-y-3 mb-6">
          <div className="h-4 w-full bg-gray-300 rounded" />
          <div className="h-4 w-[92%] bg-gray-300 rounded" />
          <div className="h-4 w-[88%] bg-gray-300 rounded" />
        </div>

        {/* Images */}
        <div className="grid grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="rounded-xl h-[260px] bg-gray-300"
            />
          ))}
        </div>
      </div>
    );
  }

  // 🟢 ORIGINAL UI
  return (
    <div className="max-w-[1000px] mx-auto px-4 py-6 font-sans">
      {/* Tabs */}
      <div className="flex gap-8 border-b border-gray-200 mb-7">
        {[
          { id: "desc", label: "Description" },
          { id: "info", label: "Additional Information" },
          { id: "reviews", label: "Reviews [5]" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`relative pb-3 text-sm transition 
              ${
                active === tab.id
                  ? "text-black font-semibold"
                  : "text-gray-400"
              }`}
          >
            {tab.label}

            {active === tab.id && (
              <span className="absolute left-0 right-0 -bottom-[1.5px] h-[2px] bg-black rounded-t" />
            )}
          </button>
        ))}
      </div>

      {/* DESCRIPTION */}
      {active === "desc" && (
        <div>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable
            active stereo speaker takes the unmistakable look and sound of Marshall,
            unplugs the chords, and takes the show on the road.
          </p>

          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage
            styled engineering. Setting the bar as one of the loudest speakers in its
            class, the Kilburn is a compact, stout-hearted hero with a well-balanced
            audio which boasts a clear midrange and extended highs for a sound that is
            both articulate and pronounced.
          </p>

          {/* Images */}
          <div className="grid grid-cols-2 gap-6">
            {descImages.map((src, i) => (
              <div
                key={i}
                className="bg-[#F9F1E7] rounded-xl h-[260px] flex items-center justify-center"
              >
                <Image
                  src={src}
                  alt={`sofa-${i}`}
                  width={600}
                  height={400}
                  className="object-contain max-h-[220px] w-auto"
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}