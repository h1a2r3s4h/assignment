"use client";
import { createContext, useContext, useState } from "react";

const OrderContext = createContext<any>(null);

export function OrderProvider({ children }: any) {
  const [order, setOrder] = useState<any>(null);

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export const useOrder = () => useContext(OrderContext);