"use client";

import { useEffect, useState } from "react";
import TrackingHeader from "@/components/tracking/tracking-header";
import TrackingSteps from "@/components/tracking/tracking-steps";
import TrackingHistory from "@/components/tracking/tracking-history";
import TrackingInfo from "@/components/tracking/tracking-info";
import TrackingItems from "@/components/tracking/tracking-items";

export default function Page() {
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    const data = localStorage.getItem("order");
    if (data) setOrder(JSON.parse(data));
  }, []);

  if (!order) return null;

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-16">
      <div className="max-w-[900px] mx-auto bg-white p-8 rounded-2xl border border-[#E5E5E5] space-y-6">

        <TrackingHeader order={order} />

        <TrackingSteps status={order.status} />

        <TrackingHistory />

        <TrackingInfo />

        <TrackingItems items={order.items} />

      </div>
    </div>
  );
}