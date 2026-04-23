import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/layout/navbar";
import Footer from "@/components/shared/layout/footer";
import { CartProvider } from "@/context/cart-context";
import { Toaster } from "@/components/ui/sonner";
import { WishlistProvider } from "@/context/wishlist-context";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Furniro",
  description: "Modern furniture eCommerce website",
  keywords: ["furniture", "interior", "home decor", "ecommerce", "furniro"],
  openGraph: {
    title: "Furniro",
    description: "Modern furniture eCommerce website",
    url: "https://your-domain.com",
    siteName: "Furniro",
    images: [
      {
        url: "/og/default-og.jpg",
        width: 1200,
        height: 630,
        alt: "Furniro",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Furniro",
    description: "Modern furniture eCommerce website",
    images: ["/og/default-og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
  className={`${poppins.className} min-h-screen bg-[#FFFFFF] text-[#111111] antialiased`}
>
        <CartProvider>
          <WishlistProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Toaster position="top-right" richColors/>
            <Footer />

  
          </div>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
