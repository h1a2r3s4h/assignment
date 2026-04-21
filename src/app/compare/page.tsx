import CompareHeader from "@/components/compare/compare-header";
import CompareProducts from "@/components/compare/compare-products";
import CompareTable from "@/components/compare/compare-table";
import FeaturesBar from "@/components/compare/features-bar";
export default function ComparePage() {
  return (
    <div>
      <CompareHeader />
      <CompareProducts />
      <CompareTable />
      <FeaturesBar />
    </div>
  );
}