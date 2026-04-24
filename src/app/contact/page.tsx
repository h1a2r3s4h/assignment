"use client";

import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import FeaturesBar from "@/components/compare/features-bar";

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 🔴 SKELETON (FULL PAGE REPLACEMENT)
  if (!mounted) {
    return (
      <div>
        {/* HERO */}
        <Skeleton className="w-full h-[300px] bg-gray-300" />

        {/* TITLE + DESC */}
        <div className="text-center max-w-[600px] mx-auto mt-16 px-4 space-y-4">
          <Skeleton className="h-8 w-64 mx-auto bg-gray-300" />
          <Skeleton className="h-4 w-full bg-gray-300" />
          <Skeleton className="h-4 w-5/6 mx-auto bg-gray-300" />
        </div>

        {/* MAIN CONTENT */}
        <section className="max-w-[1100px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* LEFT (INFO) */}
          <div className="space-y-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start gap-5">
                <Skeleton className="w-6 h-6 bg-gray-300 mt-1" />
                <div className="space-y-2">
                  <Skeleton className="h-5 w-28 bg-gray-300" />
                  <Skeleton className="h-4 w-56 bg-gray-300" />
                  <Skeleton className="h-4 w-44 bg-gray-300" />
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT (FORM) */}
          <div className="space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-[52px] w-full bg-gray-300" />
            ))}
            <Skeleton className="h-[120px] w-full bg-gray-300" />
            <Skeleton className="h-[50px] w-40 bg-gray-300" />
          </div>
        </section>

        {/* FEATURES BAR */}
        <div className="bg-[#F9F1E7] border-t border-gray-200">
          <div className="max-w-[1200px] mx-auto px-6 py-10 grid grid-cols-4 gap-10">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-4">
                <Skeleton className="w-10 h-10 bg-gray-300" />
                <div className="space-y-2">
                  <Skeleton className="h-5 w-32 bg-gray-300" />
                  <Skeleton className="h-4 w-28 bg-gray-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 🟢 ORIGINAL UI
  return (
    <div>
      <ContactHero />

      {/* TITLE */}
      <div className="text-center max-w-[600px] mx-auto mt-16 px-4">
        <h2 className="text-[32px] font-semibold">
          Get In Touch With Us
        </h2>

        <p className="text-gray-400 mt-4 leading-7 text-[15px]">
          For More Information About Our Product & Services. Please Feel Free To Drop Us
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      {/* MAIN CONTENT */}
      <section className="max-w-[1100px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-20">
        <ContactInfo />
        <ContactForm />
      </section>

      <FeaturesBar />
    </div>
  );
}