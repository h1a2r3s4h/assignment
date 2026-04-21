// src/app/product/[slug]/page.tsx

interface PageProps {
  params: { slug: string };
}

export default function ProductPage({ params }: PageProps) {
  return (
    <div>
      <h1>Product: {params.slug}</h1>
    </div>
  );
}