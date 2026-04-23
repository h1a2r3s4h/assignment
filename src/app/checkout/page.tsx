"use client";

import { useState } from "react";
import CheckoutHeader from "@/components/checkout/checkout-header";
import CheckoutForm from "@/components/checkout/checkout-form";
import OrderSummary from "@/components/checkout/order-summary";

export default function CheckoutPage() {
  const [isValid, setIsValid] = useState(false);

  return (
    <div className="bg-[#FAFAFA] min-h-screen">

      {/* HEADER */}
      <CheckoutHeader />

      {/* CONTENT */}
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-[1fr_420px] gap-12">
          <CheckoutForm setIsValid={setIsValid} />
          <OrderSummary isValid={isValid} />
        </div>
      </div>
    </div>
  );
}