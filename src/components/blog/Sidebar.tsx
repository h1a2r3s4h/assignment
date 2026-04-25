"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

type Category = {
  name: string;
  count: number;
};

type Post = {
  title: string;
  date: string;
  image: string;
};

const categories: Category[] = [
  { name: "Crafts", count: 2 },
  { name: "Design", count: 8 },
  { name: "Handmade", count: 7 },
  { name: "Interior", count: 1 },
  { name: "Wood", count: 6 },
];

const posts: Post[] = [
  {
    title: "Going all-in with millennial design",
    date: "03 Aug 2022",
    image: "/images/posts/post1.png",
  },
  {
    title: "Exploring new ways of decorating",
    date: "03 Aug 2022",
    image: "/images/posts/post2.png",
  },
  {
    title: "Handmade pieces that took time to make",
    date: "03 Aug 2022",
    image: "/images/posts/post3.png",
  },
  {
    title: "Modern home in Milan",
    date: "03 Aug 2022",
    image: "/images/posts/post4.png",
  },
  {
    title: "Colorful office redesign",
    date: "03 Aug 2022",
    image: "/images/posts/post5.png",
  },
];

export default function Sidebar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // 🔴 SKELETON (FULL REPLACEMENT)
  if (!mounted) {
    return (
      <aside className="w-full max-w-[320px] ml-auto">
        {/* SEARCH */}
        <div className="relative mb-12">
          <Skeleton className="w-full h-[52px] rounded-xl bg-gray-300" />
        </div>

        {/* CATEGORIES */}
        <div className="mb-14">
          <Skeleton className="h-6 w-32 mb-8 bg-gray-300" />

          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex justify-between items-center">
                <Skeleton className="h-4 w-24 bg-gray-300" />
                <Skeleton className="h-4 w-6 bg-gray-300" />
              </div>
            ))}
          </div>
        </div>

        {/* RECENT POSTS */}
        <div>
          <Skeleton className="h-6 w-36 mb-6 bg-gray-300" />

          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex gap-4 items-start">
                {/* IMAGE */}
                <Skeleton className="w-[80px] h-[80px] rounded-xl bg-gray-300 flex-shrink-0" />

                {/* TEXT */}
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-full bg-gray-300" />
                  <Skeleton className="h-3 w-24 bg-gray-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    );
  }

  // 🟢 ORIGINAL UI
  return (
    <aside className="w-full max-w-[320px] ml-auto">
      {/* SEARCH */}
      <div className="relative mb-12">
        <input
          type="text"
          aria-label="Search posts"
          className="w-full h-[52px] rounded-xl border border-gray-300 px-4 pr-12 outline-none focus:ring-1 focus:ring-gray-400 transition"
        />
        <Search
          size={18}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-black"
        />
      </div>

      {/* CATEGORIES */}
      <div className="mb-14">
        <h3 className="text-[20px] font-semibold mb-8">Categories</h3>

        <ul className="space-y-6 text-[15px] text-gray-500">
          {categories.map((item) => (
            <li
              key={item.name}
              className="flex justify-between items-center cursor-pointer hover:text-black transition"
            >
              <span>{item.name}</span>
              <span className="text-gray-400">{item.count}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* RECENT POSTS */}
      <div>
        <h3 className="text-[20px] font-semibold mb-6">Recent Posts</h3>

        <div className="space-y-6">
          {posts.map((post, i) => (
            <div
              key={i}
              className="flex gap-4 items-start group cursor-pointer"
            >
              {/* IMAGE */}
              <div className="w-[80px] h-[80px] relative flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="80px"
                  className="object-cover rounded-xl"
                />
              </div>

              {/* TEXT */}
              <div className="flex-1">
                <p className="text-[15px] leading-snug text-black group-hover:text-[#B88E2F] transition">
                  {post.title}
                </p>

                <p className="text-[13px] text-gray-400 mt-1">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
