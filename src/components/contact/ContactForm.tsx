"use client";

import { useState, useEffect } from "react";

export default function ContactForm() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 🔴 SKELETON (FULL REPLACEMENT)
  if (!mounted) {
    return (
      <div className="flex flex-col gap-6 animate-pulse">
        {/* NAME */}
        <div className="space-y-2">
          <div className="h-4 w-24 bg-gray-300 rounded" />
          <div className="w-full h-[55px] bg-gray-300 rounded-lg" />
        </div>

        {/* EMAIL */}
        <div className="space-y-2">
          <div className="h-4 w-32 bg-gray-300 rounded" />
          <div className="w-full h-[55px] bg-gray-300 rounded-lg" />
        </div>

        {/* SUBJECT */}
        <div className="space-y-2">
          <div className="h-4 w-24 bg-gray-300 rounded" />
          <div className="w-full h-[55px] bg-gray-300 rounded-lg" />
        </div>

        {/* MESSAGE */}
        <div className="space-y-2">
          <div className="h-4 w-24 bg-gray-300 rounded" />
          <div className="w-full h-[140px] bg-gray-300 rounded-lg" />
        </div>

        {/* BUTTON */}
        <div className="mt-4 w-[220px] h-[55px] bg-gray-300 rounded-lg" />
      </div>
    );
  }

  // 🟢 ORIGINAL UI
  return (
    <form className="flex flex-col gap-6">
      {/* NAME */}
      <div>
        <label className="text-sm font-medium text-gray-800">
          Your name
        </label>
        <input
          placeholder="Abc"
          className="w-full h-[55px] mt-2 px-4 rounded-lg border border-gray-300 outline-none focus:border-black transition"
        />
      </div>

      {/* EMAIL */}
      <div>
        <label className="text-sm font-medium text-gray-800">
          Email address
        </label>
        <input
          placeholder="Abc@def.com"
          className="w-full h-[55px] mt-2 px-4 rounded-lg border border-gray-300 outline-none focus:border-black transition"
        />
      </div>

      {/* SUBJECT */}
      <div>
        <label className="text-sm font-medium text-gray-800">
          Subject
        </label>
        <input
          placeholder="This is an optional"
          className="w-full h-[55px] mt-2 px-4 rounded-lg border border-gray-300 outline-none focus:border-black transition"
        />
      </div>

      {/* MESSAGE */}
      <div>
        <label className="text-sm font-medium text-gray-800">
          Message
        </label>
        <textarea
          placeholder="Hi! i’d like to ask about"
          className="w-full h-[140px] mt-2 px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-black resize-none transition"
        />
      </div>

      {/* BUTTON */}
      <button className="mt-4 w-[220px] h-[55px] bg-[#B88E2F] text-white rounded-lg font-medium hover:opacity-90 transition">
        Submit
      </button>
    </form>
  );
}