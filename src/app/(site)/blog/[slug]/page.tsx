import { blogs } from "@/lib/data";
import { notFound } from "next/navigation";

export default function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-[400px] object-cover rounded-xl"
      />

      <h1 className="text-3xl font-bold mt-6">
        {blog.title}
      </h1>

      <p className="text-gray-500 mt-2">
        {blog.date} • {blog.category}
      </p>

      <p className="mt-6 text-gray-700">
        {blog.description}
      </p>
    </div>
  );
}