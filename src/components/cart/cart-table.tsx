"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useCart } from "@/context/cart-context";

export default function CartTable() {
  const { cart, updateQty, removeFromCart } = useCart();

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="bg-white">
      <div className="max-w-[1280px] mx-auto px-[100px] py-12">
        <div className="flex gap-[80px] items-start">

          {/* LEFT SIDE */}
          <div className="flex-1">

            {/* HEADER */}
            <div className="grid grid-cols-[2.5fr_1.2fr_1fr_1.3fr] bg-[#F9F1E7] px-8 py-5 text-[15px] font-medium text-gray-700">
              <p>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>

            {/* ✅ DYNAMIC ROWS */}
            {cart.length === 0 ? (
              <p className="p-8 text-gray-500">Your cart is empty</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-[2.5fr_1.2fr_1fr_1.3fr] items-center px-8 py-12 gap-10"
                >
                  {/* PRODUCT */}
                  <div className="flex items-center gap-8">
                    <div className="bg-[#F9F1E7] rounded-xl w-[130px] h-[130px] flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={115}
                        height={115}
                        className="object-contain"
                      />
                    </div>

                    <p className="text-gray-500 text-[15px]">
                      {item.name}
                    </p>
                  </div>

                  {/* PRICE */}
                  <p className="text-gray-400 text-[15px]">
                    Rs. {item.price}
                  </p>

                  {/* QUANTITY */}
                  <input
                    type="number"
                    value={item.qty}
                    onChange={(e) =>
                      updateQty(item.id, Number(e.target.value))
                    }
                    className="w-[65px] h-[45px] border border-gray-300 rounded-md text-center text-[15px]"
                  />

                  {/* SUBTOTAL */}
                  <div className="flex items-center justify-between pr-4">
                    <p className="font-medium text-[15px]">
                      Rs. {item.price * item.qty}
                    </p>

                    <Trash2
                      size={22}
                      onClick={() => removeFromCart(item.id)}
                      className="text-yellow-700 cursor-pointer ml-8"
                    />
                  </div>
                </div>
              ))
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-[#F9F1E7] w-[400px] shrink-0 px-10 py-12 flex flex-col">

            <h2 className="text-[28px] font-semibold mb-10">
              Cart Totals
            </h2>

            <div className="space-y-6 mb-12">
              <div className="flex justify-between text-gray-500 text-[15px]">
                <span>Subtotal</span>
                <span>Rs. {subtotal}</span>
              </div>

              <div className="flex justify-between text-[18px] font-semibold text-[#B88E2F]">
                <span>Total</span>
                <span>Rs. {subtotal}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="block w-full text-center border cursor-pointer border-black py-4 rounded-xl text-[15px] hover:bg-black hover:text-white transition"
            >
              Check Out
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}