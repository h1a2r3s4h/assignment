"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

const images = [
  "/images/products/Group 95.png",
  "/images/products/Stuart sofa 1.png",
  "/images/products/Outdoor sofa set_2 1 (1).png",
  "/images/products/Outdoor sofa set_2 1.png",
];

const BASE_PRICE = 250000;

export default function ProductDetails() {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [qty, setQty] = useState(1);
  const [openCart, setOpenCart] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const totalPrice = BASE_PRICE * qty;

  const formatPrice = (price: number) =>
    `Rs. ${price.toLocaleString("en-IN")}.00`;

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-12">
        {/* LEFT SIDE */}
        <div className="flex gap-6">
          {/* Thumbnails */}
          <div className="flex flex-col gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 rounded-lg cursor-pointer border 
                ${selectedImage === img ? "border-black" : "border-transparent"}`}
              >
                <Image
                  src={img}
                  alt="thumb"
                  width={50}
                  height={50}
                  className="object-cover w-full h-full rounded-lg bg-[#F9F1E7]"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="w-[400px] h-[400px] bg-[#F9F1E7] rounded-lg flex items-center justify-center">
            <Image
              src={selectedImage}
              alt="product"
              width={350}
              height={350}
              className="object-contain"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 space-y-5">
          <h1 className="text-[32px] font-semibold">Asgaard sofa</h1>

          <p className="text-[20px] text-[#9F9F9F]">{formatPrice(totalPrice)}</p>

          <div className="flex items-center gap-3 text-sm text-gray-500">
            <div className="text-yellow-500">★★★★★</div>
            <span>|</span>
            <span>5 Customer Review</span>
          </div>

          <p className="text-[13px] leading-relaxed max-w-md">
            Setting the bar as one of the loudest speakers in its class...
          </p>

          {/* Size */}
          <div>
            <p className="text-sm text-[#9F9F9F] mb-2">Size</p>
            <div className="flex gap-3">
              {["L", "XL", "XS"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-8 h-8 border rounded-md text-sm transition-colors
                    ${selectedSize === size
                      ? "bg-black text-white border-black"
                      : "hover:bg-black hover:text-white"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color */}
          <div>
            <p className="text-sm text-[#9F9F9F] mb-2">Color</p>
            <div className="flex gap-3">
              {[
                { name: "purple", bg: "bg-purple-500" },
                { name: "black", bg: "bg-black" },
                { name: "yellow", bg: "bg-yellow-600" },
              ].map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-6 h-6 rounded-full ${color.bg} transition-all
                    ${selectedColor === color.name
                      ? "ring-2 ring-offset-2 ring-black scale-110"
                      : ""
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Quantity + Buttons */}
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center border rounded-md">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="px-3 py-2"
              >
                -
              </button>
              <span className="px-4">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="px-3 py-2">
                +
              </button>
            </div>

            <button
              onClick={() => setOpenCart(true)}
              className="px-8 py-3 border rounded-md hover:bg-black hover:text-white"
            >
              Add To Cart
            </button>

            <button
              onClick={() => router.push("/compare")}
              className="px-8 py-3 border rounded-md hover:bg-black hover:text-white"
            >
              + Compare
            </button>
          </div>

          <hr className="my-6" />

          <div className="text-sm text-[#9F9F9F] space-y-2">
            <p>
              <span className="text-black">SKU:</span> SS001
            </p>
            <p>
              <span className="text-black">Category:</span> Sofas
            </p>
            <p>
              <span className="text-black">Tags:</span> Sofa, Chair, Home, Shop
            </p>
          </div>
        </div>
      </div>

      {/* 🛒 CART SIDEBAR */}
      <Sheet open={openCart} onOpenChange={setOpenCart}>
        <SheetContent
          side="right"
          className="w-[417px] p-0 bg-white border-none flex flex-col max-h-[80vh]"
        >
          {/* TOP */}
          <div className="flex-1 overflow-y-auto px-[30px] pt-[28px]">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-[20px] font-semibold text-black">
                Shopping Cart
              </h2>

              <SheetClose asChild>
                <button className="w-[28px] h-[28px] flex items-center justify-center text-gray-400 hover:text-black">
                  ✕
                </button>
              </SheetClose>
            </div>

            {/* Divider */}
            <div className="mt-[22px] mb-[28px] h-[1px] bg-[#E5E5E5]" />

            {/* Items */}
            <div className="flex flex-col gap-[20px]">
              {/* ITEM 1 */}
              <div className="flex items-center gap-[16px]">
                <div className="w-[76px] h-[76px] bg-[#F9F1E7] rounded-[10px] flex items-center justify-center">
                  <Image src={images[0]} alt="" width={60} height={60} />
                </div>

                <div className="flex-1">
                  <p className="text-[16px] font-medium text-black">
                    Asgaard sofa
                  </p>

                  <p className="text-[14px] text-[#9F9F9F] mt-[4px]">
                    {qty} <span className="mx-[6px]">x</span>
                    <span className="text-[#B88E2F] font-medium">
                      {formatPrice(BASE_PRICE)}
                    </span>
                  </p>
                </div>

                <button className="w-[22px] h-[22px] rounded-full bg-[#D9D9D9] flex items-center justify-center text-[12px]">
                  ✕
                </button>
              </div>

              {/* ITEM 2 */}
              <div className="flex items-center gap-[16px]">
                <div className="w-[76px] h-[76px] bg-[#F9F1E7] rounded-[10px] flex items-center justify-center">
                  <Image src={images[1]} alt="" width={60} height={60} />
                </div>

                <div className="flex-1">
                  <p className="text-[16px] font-medium text-black">
                    Casaliving Wood
                  </p>

                  <p className="text-[14px] text-[#9F9F9F] mt-[4px]">
                    1 <span className="mx-[6px]">x</span>
                    <span className="text-[#B88E2F] font-medium">
                      Rs. 270,000.00
                    </span>
                  </p>
                </div>

                <button className="w-[22px] h-[22px] rounded-full bg-[#D9D9D9] flex items-center justify-center text-[12px]">
                  ✕
                </button>
              </div>
            </div>
          </div>

          {/* BOTTOM FIXED */}
          <div className="px-[30px] pb-[28px]">
            {/* Divider */}
            <div className="h-[1px] bg-[#E5E5E5] mb-[22px]" />

            {/* Subtotal */}
            <div className="flex justify-between items-center mb-[22px]">
              <span className="text-[16px] text-black">Subtotal</span>

              <span className="text-[16px] font-semibold text-[#B88E2F]">
                {formatPrice(totalPrice + 270000)}
              </span>
            </div>

            {/* Buttons */}
            <div className="flex gap-[12px]">
              <button className="flex-1 h-[40px] border border-black rounded-full text-[14px]">
                Cart
              </button>

              <button className="flex-1 h-[40px] border border-black rounded-full text-[14px]">
                Checkout
              </button>

              <button className="flex-1 h-[40px] border border-black rounded-full text-[14px]">
                Comparison
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}