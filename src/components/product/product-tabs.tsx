"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductTabs() {
  const [active, setActive] = useState("desc");

  const descImages = [
    "/images/products/Cloud sofa three seater + ottoman_1 1.png",
    "/images/products/Cloud sofa three seater + ottoman_2 1.png",
  ];

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
              ${active === tab.id ? "text-black font-semibold" : "text-gray-400"}`}
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