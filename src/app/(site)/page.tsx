import type { Metadata } from "next";
import HeroSection from "@/components/home/hero-section";
import BrowseRangeSection from "@/components/home/browse-range-section";
import HomeProductsSection from "@/components/home/home-products-section";
import InspirationSection from "@/components/home/inspiration-section";
import FurnitureGallerySection from "@/components/home/furniture-gallery-section";

export const metadata: Metadata = {
  title: "Furniro - Modern Furniture for Your Home",
  description:
    "Discover stylish modern furniture collections. Explore sofas, chairs, and home decor designed for comfort and elegance.",
  openGraph: {
    title: "Furniro - Modern Furniture",
    description: "Explore our latest furniture collection",
    url: "https://assignment-zu7v.vercel.app/",
    images: [
      {
        url: "https://assignment-zu7v.vercel.app/images/home/modern-furniture.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <BrowseRangeSection />
      <HomeProductsSection />
      <InspirationSection />
      <FurnitureGallerySection />
    </main>
  );
}