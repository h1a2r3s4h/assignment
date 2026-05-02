import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { CartProvider } from "@/context/cart-context";
import { WishlistProvider } from "@/context/wishlist-context";
import { OrderProvider } from "@/context/order-context";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Furniro",
  description: "Modern furniture eCommerce website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <TooltipProvider delayDuration={0}>
          <CartProvider>
            <WishlistProvider>
              <OrderProvider>
                {children}
                <Toaster position="top-right" richColors />
              </OrderProvider>
            </WishlistProvider>
          </CartProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}