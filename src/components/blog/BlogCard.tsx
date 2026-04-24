"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types/blog";
import { Button } from "@/components/ui/button";

export default function BlogCard({ blog }: { blog: Blog }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // SKELETON (FULL REPLACEMENT)
  if (!mounted) {
    return (
      <div className="space-y-5">

        {/* IMAGE */}
        <div className="w-full h-[420px] bg-gray-300 rounded-2xl" />

        {/* META */}
        <div className="flex items-center gap-5">
          <div className="h-[14px] w-[80px] bg-gray-300 rounded" />
          <div className="h-[14px] w-[100px] bg-gray-300 rounded" />
          <div className="h-[14px] w-[90px] bg-gray-300 rounded" />
        </div>

        {/* TITLE */}
        <div className="h-[24px] w-[70%] bg-gray-300 rounded" />

        {/* DESCRIPTION */}
        <div className="space-y-2">
          <div className="h-[15px] w-[90%] bg-gray-300 rounded" />
          <div className="h-[15px] w-[80%] bg-gray-300 rounded" />
        </div>

        {/* BUTTON */}
        <div className="h-[18px] w-[100px] bg-gray-300 rounded" />

      </div>
    );
  }

  return (
    <div className="space-y-5">

      {/* IMAGE */}
      <div className="w-full h-[420px] relative rounded-2xl overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover"
        />
      </div>

      {/* META */}
      <div className="flex items-center gap-5 text-sm text-gray-400">
        
        {/* USER */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/icons/user.svg"
            alt="user"
            width={16}
            height={16}
          />
          <span>Admin</span>
        </div>

        {/* DATE */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/icons/calender1.svg"
            alt="calendar"
            width={16}
            height={16}
          />
          <span>{blog.date}</span>
        </div>

        {/* CATEGORY */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/icons/tag.svg"
            alt="tag"
            width={16}
            height={16}
          />
          <span>{blog.category}</span>
        </div>

      </div>

      {/* TITLE */}
      <h2 className="text-[24px] font-semibold text-black leading-snug">
        {blog.title}
      </h2>

      {/* DESCRIPTION */}
      <p className="text-[15px] text-gray-500 leading-relaxed max-w-[90%]">
        {blog.description}
      </p>

      {/* READ MORE */}
      <Button
        asChild
        variant="link"
        className="p-0 h-auto text-black text-[15px] font-medium underline underline-offset-4 hover:text-[#B88E2F]"
      >
        <Link href={`/blog/${blog.slug}`}>
          Read more
        </Link>
      </Button>

    </div>
  );
}