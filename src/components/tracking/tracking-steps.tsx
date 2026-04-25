"use client";

import { useEffect, useState } from "react";
import { Check, Box, Truck, MapPin } from "lucide-react";

const steps = [
  { key: "placed", label: "Order Placed", icon: Check },
  { key: "processing", label: "Processing", icon: Box },
  { key: "shipped", label: "Shipped", icon: Truck },
  { key: "out_for_delivery", label: "Out for Delivery", icon: MapPin },
  { key: "delivered", label: "Delivered", icon: Check },
];

export default function TrackingSteps({ status }: any) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const current = steps.findIndex((s) => s.key === status);

  // Skeleton (fully replaces UI)
  if (!mounted) {
    return (
      <div className="border border-[#E5E5E5] rounded-2xl p-6 bg-white mb-10">
        {/* TOP */}
        <div className="flex justify-between mb-6">
          <div>
            <div className="h-[12px] w-[100px] bg-gray-300 rounded" />
            <div className="h-[14px] w-[140px] bg-gray-300 rounded mt-2" />
          </div>

          <div className="text-right">
            <div className="h-[12px] w-[120px] bg-gray-300 rounded ml-auto" />
            <div className="h-[14px] w-[100px] bg-gray-300 rounded mt-2 ml-auto" />
          </div>
        </div>

        {/* TRACK SKELETON */}
        <div className="relative flex items-center justify-between">
          {/* BASE LINE */}
          <div className="absolute top-[20px] left-0 right-0 h-[2px] bg-[#E5E5E5]" />

          <div className="absolute top-[20px] left-0 right-0 h-[2px] bg-gray-300 w-full" />

          {steps.map((_, i) => (
            <div
              key={i}
              className="flex flex-col items-center w-full relative z-10"
            >
              {/* CIRCLE */}
              <div className="w-[40px] h-[40px] rounded-full bg-gray-300" />

              {/* LABEL */}
              <div className="h-[11px] w-[70px] bg-gray-300 rounded mt-[8px]" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="border border-[#E5E5E5] rounded-2xl p-6 bg-white mb-10">
      {/* TOP */}
      <div className="flex justify-between mb-6">
        <div>
          <p className="text-[12px] text-[#737373]">Current Status</p>
          <p className="text-[14px] font-medium text-[#171717] mt-[2px]">
            {steps[current]?.label}
          </p>
        </div>

        <div className="text-right">
          <p className="text-[12px] text-[#737373]">Estimated Delivery</p>
          <p className="text-[14px] font-medium text-[#171717] mt-[2px]">
            Today, Nov 4
          </p>
        </div>
      </div>

      {/* TRACK */}
      <div className="relative flex items-center justify-between">
        {/* BASE LINE */}
        <div className="absolute top-[20px] left-0 right-0 h-[2px] bg-[#E5E5E5]" />

        {/* ACTIVE LINE */}
        <div
          className="absolute top-[20px] left-0 h-[2px] bg-black"
          style={{
            width: `${(current / (steps.length - 1)) * 100}%`,
          }}
        />

        {steps.map((step, i) => {
          const Icon = step.icon;
          const isCompleted = i < current;
          const isCurrent = i === current;

          return (
            <div
              key={step.key}
              className="flex flex-col items-center w-full relative z-10"
            >
              {/* CIRCLE */}
              <div
                className={`w-[40px] h-[40px] flex items-center justify-center rounded-full
                ${
                  isCompleted || isCurrent
                    ? "bg-black text-white"
                    : "bg-[#E5E5E5] text-[#A3A3A3]"
                }`}
              >
                {isCompleted ? (
                  <Check size={16} strokeWidth={2.5} />
                ) : (
                  <Icon size={16} strokeWidth={2} />
                )}
              </div>

              {/* LABEL */}
              <p className="text-[11px] mt-[8px] text-[#737373] text-center leading-[14px]">
                {step.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
