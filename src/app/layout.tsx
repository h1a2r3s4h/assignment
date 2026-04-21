import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/layout/navbar";
import Footer from "@/components/shared/layout/footer";

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
      <body className={`${poppins.variable} min-h-screen bg-[#FFFFFF] text-[#111111] antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}