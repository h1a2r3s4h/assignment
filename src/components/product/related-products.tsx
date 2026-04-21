import ProductCard from "@/components/shared/cards/product-card";

const products = [
  {
    id: 1,
    slug: "asgaard-sofa",
    name: "Asgaard Sofa",
    shortDescription: "Stylish and comfortable sofa",
    price: "Rs. 250,000",
    originalPrice: "Rs. 300,000",
    image: "/images/products/Images.png",
    badge: "-30%",
    badgeType: "discount",
    isNew: false,
  },
  {
    id: 2,
    slug: "modern-chair",
    name: "Modern Chair",
    shortDescription: "Minimal chair design",
    price: "Rs. 50,000",
    image: "/images/products/Images (2).png",
    isNew: true,
  },
  {
    id: 3,
    slug: "wood-table",
    name: "Wood Table",
    shortDescription: "Solid wood table",
    price: "Rs. 80,000",
    image: "/images/products/Images (1).png",
  },
  {
    id: 4,
    slug: "lamp",
    name: "Stylish Lamp",
    shortDescription: "Warm light lamp",
    price: "Rs. 15,000",
    image: "/images/products/image 2.png",
  },
];

export default function RelatedProducts() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-6">
        Related Products
      </h2>

      <div className="grid grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}