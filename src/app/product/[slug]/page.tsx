import BreadcrumbNav from "@/components/shared/common/breadcrumb-nav";
import ProductDetails from "@/components/product/product-details";
import ProductTabs from "@/components/product/product-tabs";
import RelatedProducts from "@/components/product/related-products";

export default function ProductPage() {
  return (
    <div className="container mx-auto px-6 py-10 space-y-10">
      <BreadcrumbNav items={["Home", "Shop", "Asgaard sofa"]}/>
      <ProductDetails />
      <ProductTabs />
      <RelatedProducts />
    </div>
  );
}