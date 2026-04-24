"use client";

import { useState, useEffect } from "react";
import { MapPin, Phone, Clock } from "lucide-react";

export default function ContactInfo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 🔴 SKELETON (FULL REPLACEMENT)
  if (!mounted) {
    return (
      <div className="flex flex-col gap-12 pt-4 animate-pulse">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-start gap-5">
            <div className="w-6 h-6 bg-gray-300 rounded mt-1" />

            <div className="space-y-2">
              <div className="h-5 w-28 bg-gray-300 rounded" />
              <div className="h-4 w-56 bg-gray-300 rounded" />
              <div className="h-4 w-44 bg-gray-300 rounded" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  // 🟢 ORIGINAL UI
  return (
    <div className="flex flex-col gap-12 pt-4">
      {/* ADDRESS */}
      <div className="flex items-start gap-5">
        <MapPin className="w-6 h-6 mt-1" />

        <div>
          <h3 className="text-lg font-semibold mb-1">Address</h3>
          <p className="text-[15px] text-gray-500 leading-6 max-w-[240px]">
            236 5th SE Avenue, New York NY10000, United States
          </p>
        </div>
      </div>

      {/* PHONE */}
      <div className="flex items-start gap-5">
        <Phone className="w-6 h-6 mt-1" />

        <div>
          <h3 className="text-lg font-semibold mb-1">Phone</h3>
          <p className="text-[15px] text-gray-500 leading-6">
            Mobile: (+84) 546-6789 <br />
            Hotline: (+84) 456-6789
          </p>
        </div>
      </div>

      {/* WORKING TIME */}
      <div className="flex items-start gap-5">
        <Clock className="w-6 h-6 mt-1" />

        <div>
          <h3 className="text-lg font-semibold mb-1">Working Time</h3>
          <p className="text-[15px] text-gray-500 leading-6">
            Monday-Friday: 9:00 - 22:00 <br />
            Saturday-Sunday: 9:00 - 21:00
          </p>
        </div>
      </div>
    </div>
  );
}