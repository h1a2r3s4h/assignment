import BreadcrumbNav from "@/components/shared/common/breadcrumb-nav";
import ProductDetails from "@/components/product/product-details";
import ProductTabs from "@/components/product/product-tabs";
import RelatedProducts from "@/components/product/related-products";

async function getProduct(slug: string) {
  return {
    name: "Asgaard sofa",
    price: 25000,
    image: "/sofa.jpg",
    description: "Comfortable modern sofa",
    slug,
  };
}

export default async function ProductPage({ params }: any) {
  const { slug } = await params;
  const product = await getProduct(slug);

  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: product.image,
    description: product.description,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <div className="container mx-auto px-6 py-10 space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <BreadcrumbNav items={["Home", "Shop", product.name]} />
      <ProductDetails product={product} />
      <ProductTabs />
      <RelatedProducts />
    </div>
  );
}