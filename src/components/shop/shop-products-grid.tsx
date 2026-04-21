import ProductCard from "@/components/shared/cards/product-card";
import type { Product } from "@/types/product";

type ShopProductsGridProps = {
  products: Product[];
};

export default function ShopProductsGrid({
  products,
}: ShopProductsGridProps) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-[48px] pt-[46px] md:px-8 md:pb-[56px] lg:px-[100px] lg:pb-[70px] lg:pt-[63px]">
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 md:gap-y-8 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-10">
          {products.map((product, index) => (
            <ProductCard
              key={`${product.id}-${index}`}
              product={product}
              className="max-w-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}