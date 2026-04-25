"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/context/cart-context";

export default function OrderSummary({ isValid }: any) {
  const [mounted, setMounted] = useState(false);
  const { cart } = useCart();

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  // 🔴 SKELETON (FULL REPLACEMENT)
  if (!mounted) {
    return (
      <div className="max-w-[420px] ml-auto animate-pulse">
        {/* Header */}
        <div className="flex justify-between mb-6">
          <div className="h-4 w-24 bg-gray-300 rounded" />
          <div className="h-4 w-24 bg-gray-300 rounded" />
        </div>

        {/* Items */}
        <div className="space-y-3 mb-4">
          {[1, 2].map((i) => (
            <div key={i} className="flex justify-between">
              <div className="h-4 w-40 bg-gray-300 rounded" />
              <div className="h-4 w-20 bg-gray-300 rounded" />
            </div>
          ))}
        </div>

        {/* Subtotal */}
        <div className="flex justify-between mb-3">
          <div className="h-4 w-24 bg-gray-300 rounded" />
          <div className="h-4 w-20 bg-gray-300 rounded" />
        </div>

        {/* Total */}
        <div className="flex justify-between items-center mb-6">
          <div className="h-5 w-20 bg-gray-300 rounded" />
          <div className="h-6 w-24 bg-gray-300 rounded" />
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gray-300 my-6" />

        {/* Payment Options */}
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-4 h-4 bg-gray-300 rounded-full" />
              <div className="h-4 w-40 bg-gray-300 rounded" />
            </div>
          ))}

          <div className="h-3 w-full bg-gray-300 rounded mt-2" />
        </div>

        {/* Button */}
        <div className="mt-6 w-full h-[48px] bg-gray-300 rounded-lg" />
      </div>
    );
  }

  // 🟢 ORIGINAL UI
  return (
    <div className="max-w-[420px] ml-auto">
      <div className="flex justify-between text-[16px] font-medium mb-6">
        <span>Product</span>
        <span>Subtotal</span>
      </div>

      {cart.length === 0 ? (
        <p className="text-gray-500 mb-4">No items in cart</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex justify-between text-sm mb-3">
            <span className="text-gray-600">
              {item.name}{" "}
              <span className="text-black font-medium">× {item.qty}</span>
            </span>
            <span className="text-gray-600">Rs. {item.price * item.qty}</span>
          </div>
        ))
      )}

      <div className="flex justify-between text-sm mb-3">
        <span className="text-gray-600">Subtotal</span>
        <span className="text-gray-600">Rs. {total}</span>
      </div>

      <div className="flex justify-between items-center mb-6">
        <span className="font-medium">Total</span>
        <span className="text-[#B88E2F] font-semibold text-lg">
          Rs. {total}
        </span>
      </div>

      <div className="border-t my-6"></div>

      <div className="space-y-4 text-sm">
        <label className="flex items-start gap-3">
          <input type="radio" defaultChecked className="mt-1" />
          <div>
            <p className="font-medium">Direct Bank Transfer</p>
            <p className="text-gray-500 text-xs mt-1">
              Make your payment directly into our bank account.
            </p>
          </div>
        </label>

        <label className="flex items-center gap-3">
          <input type="radio" />
          Direct Bank Transfer
        </label>

        <label className="flex items-center gap-3">
          <input type="radio" />
          Cash On Delivery
        </label>

        <p className="text-xs text-gray-500 pt-2">
          Your personal data will be used according to our{" "}
          <span className="font-semibold text-black">privacy policy</span>.
        </p>
      </div>

      <button
        type="button"
        disabled={cart.length === 0 || !isValid}
        className="mt-6 w-full border border-black py-3 rounded-lg
        disabled:opacity-50 disabled:cursor-not-allowed
        hover:bg-black hover:text-white cursor-pointer"
        onClick={() => {
          const orderData = {
            id: "ORD-" + Math.floor(Math.random() * 100000),
            items: cart,
            total,
            date: new Date().toLocaleString(),
            status: "delivery",
          };

          localStorage.setItem("order", JSON.stringify(orderData));
          window.location.href = "/order-confirmation";
        }}
      >
        Place order
      </button>
    </div>
  );
}
