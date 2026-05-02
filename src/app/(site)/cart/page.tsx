import CartHeader from "@/components/cart/cart-header";
import CartTable from "@/components/cart/cart-table";
import FeaturesBar from "@/components/compare/features-bar";

export default function CartPage() {
  return (
    <div className="bg-[#F9F1E7]">

      <CartHeader />
      <CartTable />
      <FeaturesBar />

    </div>
  );
}