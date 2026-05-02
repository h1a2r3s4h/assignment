import BlogHero from "@/components/blog/BlogHero";
import BlogCard from "@/components/blog/BlogCard";
import Sidebar from "@/components/blog/Sidebar";
import { blogs } from "@/lib/data";
import FeaturesBar from "@/components/compare/features-bar";

export default function BlogPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">

      {/* HERO */}
      <BlogHero />

      {/* MAIN CONTENT */}
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 py-14">
        
        <div className="grid grid-cols-1 lg:grid-cols-[820px_360px] gap-[60px]">

          {/* LEFT - BLOG */}
          <div className="space-y-14">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          {/* RIGHT - SIDEBAR */}
          <div>
            <Sidebar />
          </div>

        </div>

      </div>

      {/* PAGINATION (FULL CENTER) */}
      <div className="flex justify-center pb-16">
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 bg-[#B88E2F] text-white rounded-md">
            1
          </button>
          <button className="w-10 h-10 bg-white border rounded-md hover:bg-gray-50">
            2
          </button>
          <button className="w-10 h-10 bg-white border rounded-md hover:bg-gray-50">
            3
          </button>
          <button className="px-4 h-10 bg-white border rounded-md hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>

      {/* FEATURES */}
      <FeaturesBar />

    </div>
  );
}