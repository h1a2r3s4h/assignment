"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  "/images/products/Maya sofa three seater (1) 1.png",
  "/images/products/Mask group (1).png",
  "/images/products/Mask group.png",
  "/images/products/Maya sofa three seater (1) 1.png",
  "/images/products/Asgaard sofa 3.png", // ✅ add this
];

export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [qty, setQty] = useState(1);

  return (
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
                width={80}
                height={80}
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
        
        {/* Title */}
        <h1 className="text-[32px] font-semibold text-[#000]">
          Asgaard sofa
        </h1>

        {/* Price */}
        <p className="text-[20px] text-[#9F9F9F]">
          Rs. 250,000.00
        </p>

        {/* Rating */}
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <div className="text-yellow-500">★★★★★</div>
          <span>|</span>
          <span>5 Customer Review</span>
        </div>

        {/* Description */}
        <p className="text-[13px] text-[#000] leading-relaxed max-w-md">
          Setting the bar as one of the loudest speakers in its class, 
          the Kilburn is a compact, stout-hearted hero with a well-balanced 
          audio which boasts a clear midrange and extended highs for a sound.
        </p>

        {/* Size */}
        <div>
          <p className="text-sm text-[#9F9F9F] mb-2">Size</p>
          <div className="flex gap-3">
            {["L", "XL", "XS"].map((size) => (
              <button
                key={size}
                className="w-8 h-8 flex items-center justify-center border rounded-md text-sm hover:bg-black hover:text-white transition"
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
            <div className="w-6 h-6 rounded-full bg-purple-500 cursor-pointer" />
            <div className="w-6 h-6 rounded-full bg-black cursor-pointer" />
            <div className="w-6 h-6 rounded-full bg-yellow-600 cursor-pointer" />
          </div>
        </div>

        {/* Quantity + Buttons */}
        <div className="flex items-center gap-4 mt-4">
          
          {/* Quantity */}
          <div className="flex items-center border rounded-md overflow-hidden">
            <button
              onClick={() => setQty(Math.max(1, qty - 1))}
              className="px-3 py-2"
            >
              -
            </button>
            <span className="px-4">{qty}</span>
            <button
              onClick={() => setQty(qty + 1)}
              className="px-3 py-2"
            >
              +
            </button>
          </div>

          {/* Add to Cart */}
          <button className="px-8 py-3 border rounded-md hover:bg-black hover:text-white transition">
            Add To Cart
          </button>

          {/* Compare */}
          <button className="px-8 py-3 border rounded-md hover:bg-black hover:text-white transition">
            + Compare
          </button>
        </div>

        {/* Divider */}
        <hr className="my-6" />

        {/* Meta Info */}
        <div className="text-sm text-[#9F9F9F] space-y-2">
          <p><span className="text-black">SKU:</span> SS001</p>
          <p><span className="text-black">Category:</span> Sofas</p>
          <p><span className="text-black">Tags:</span> Sofa, Chair, Home, Shop</p>
        </div>

        {/* Share */}
        <div className="flex items-center gap-4 mt-3">
          <span className="text-sm text-[#9F9F9F]">Share:</span>
          <div className="flex gap-3 text-black">
            <span>FB</span>
            <span>IN</span>
            <span>TW</span>
          </div>
        </div>
      </div>
    </div>
  );
}