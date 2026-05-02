"use client";

import { useEffect, useState } from "react";
import SuccessHeader from "@/components/order/success-header";
import OrderInfo from "@/components/order/order-info";
import OrderItems from "@/components/order/order-items";
import OrderSummary from "@/components/order/order-summary";
import AddressPayment from "@/components/order/address-payment";
import ActionButtons from "@/components/order/action-buttons";

export default function Page() {
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    const data = localStorage.getItem("order");
    if (data) setOrder(JSON.parse(data));
  }, []);

  if (!order) return null;

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-16">
      <div className="max-w-[800px] mx-auto bg-white p-8 rounded-2xl border border-[#E5E5E5]">

        <SuccessHeader email="john@email.com" />

        <OrderInfo order={order} />

        <OrderItems items={order.items} />

        <OrderSummary total={order.total} />

        <AddressPayment />

        <ActionButtons />

      </div>
    </div>
  );
}