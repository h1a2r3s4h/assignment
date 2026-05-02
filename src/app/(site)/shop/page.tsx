import PageHero from "@/components/shared/common/page-hero";
import FeatureStrip from "@/components/shared/common/feature-strip";
import ShopPagination from "@/components/shop/shop-pagination";
import ShopProductsGrid from "@/components/shop/shop-products-grid";
import ShopToolbar from "@/components/shop/shop-toolbar";
import { products } from "@/data/products";

const shopProducts = [
  ...products,
  ...products,
  ...products,
  ...products,
];

export default function ShopPage() {
  return (
    <main className="bg-white">
      <PageHero
        title="Shop"
        backgroundImage="/images/shop/Rectangle 1.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Shop" },
        ]}
      />

      <ShopToolbar totalResults={32} visibleResults={16} />

      <ShopProductsGrid products={shopProducts} />

      <ShopPagination currentPage={1} totalPages={3} />

      <FeatureStrip />
    </main>
  );
}