"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

export default function TrackingHistory() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const history = [
    {
      title: "Out for delivery",
      location: "Local delivery facility",
      time: "Today, 8:30 AM",
      active: true,
    },
    {
      title: "In transit",
      location: "Regional sorting center",
      time: "Nov 3, 6:45 PM",
    },
    {
      title: "Shipped",
      location: "Warehouse - New York",
      time: "Nov 2, 2:15 PM",
    },
    {
      title: "Order processed",
      location: "Fulfillment center",
      time: "Nov 2, 10:00 AM",
    },
    {
      title: "Order placed",
      location: "Online",
      time: "Nov 1, 3:22 PM",
    },
  ];

  // Skeleton (fully replaces UI)
  if (!mounted) {
    return (
      <div className="border border-[#E5E5E5] rounded-2xl p-6 bg-white mb-10">
        
        {/* TITLE */}
        <div className="h-[16px] w-[160px] bg-gray-300 rounded mb-6" />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[4.5px] top-[6px] bottom-[6px] w-[1px] bg-[#E5E5E5]" />

          <div className="space-y-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex gap-3 items-start">

                {/* DOT */}
                <div className="w-[10px] h-[10px] rounded-full bg-gray-300 shrink-0 mt-[5px]" />

                {/* CONTENT */}
                <div className="space-y-2">
                  <div className="h-[14px] w-[140px] bg-gray-300 rounded" />
                  <div className="h-[13px] w-[180px] bg-gray-300 rounded" />
                  <div className="h-[12px] w-[120px] bg-gray-300 rounded" />
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-[#E5E5E5] rounded-2xl p-6 bg-white mb-10">
      <p className="text-[16px] font-medium text-[#171717] mb-6">
        Tracking History
      </p>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-[4.5px] top-[6px] bottom-[6px] w-[1px] bg-[#E5E5E5]" />
        
        <div className="space-y-8">
          {history.map((item, i) => (
            <div key={i} className="flex gap-3 items-start relative">

              {/* Dot */}
              <div
                className={`w-[10px] h-[10px] rounded-full shrink-0 mt-[5px] ${
                  item.active ? "bg-black" : "bg-[#D4D4D4]"
                }`}
              />

              {/* Content */}
              <div>
                <p className="text-[14px] font-medium text-[#171717] leading-[20px]">
                  {item.title}
                </p>

                <p className="text-[13px] text-[#737373] mt-[1px] leading-[16px]">
                  {item.location}
                </p>

                <div className="flex items-center gap-1 mt-[2px] text-[12px] text-[#A3A3A3]">
                  <Clock size={12} strokeWidth={1.5} />
                  <span>{item.time}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}