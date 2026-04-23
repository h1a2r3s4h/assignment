"use client";

import { useCart } from "@/context/cart-context";

export default function OrderSummary({ isValid }: any) {
  const { cart } = useCart();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

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
              <span className="text-black font-medium">
                × {item.qty}
              </span>
            </span>
            <span className="text-gray-600">
              Rs. {item.price * item.qty}
            </span>
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
          <span className="font-semibold text-black">
            privacy policy
          </span>.
        </p>
      </div>

      <button
        type="submit"
        form="checkout-form"
        disabled={cart.length === 0 || !isValid}
        className="mt-6 w-full border border-black py-3 rounded-lg
        disabled:opacity-50 disabled:cursor-not-allowed
        hover:bg-black hover:text-white cursor-pointer"
      >
        Place order
      </button>
    </div>
  );
}