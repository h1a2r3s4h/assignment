import Image from "next/image";

const images = [
  {
    id: 1,
    src: "/images/home/wooden-shelf-decor.png",
    alt: "Wooden wall shelf with home decor",
    style: {
      position: "absolute" as const,
      left: 0,
      top: 126,
      width: 78,
      height: 382,
    },
  },
  {
    id: 2,
    src: "/images/home/modern-desk-setup.png",
    alt: "Modern desk setup with chair and workspace",
    style: {
      position: "absolute" as const,
      left: 94,
      top: 210,
      width: 451,
      height: 312,
    },
  },
  {
    id: 3,
    src: "/images/home/dining-room-interior.png",
    alt: "Minimal dining room interior design",
    style: {
      position: "absolute" as const,
      left: 553,
      top: 278,
      width: 295,
      height: 392,
    },
  },
  {
    id: 4,
    src: "/images/home/bedroom-interior-design.png",
    alt: "Modern bedroom interior with furniture",
    style: {
      position: "absolute" as const,
      left: 864,
      top: 154,
      width: 290,
      height: 348,
    },
  },
  {
    id: 5,
    src: "/images/home/dining-area-furniture.png",
    alt: "Dining area with modern furniture setup",
    style: {
      position: "absolute" as const,
      left: 1170,
      top: 86,
      width: 270,
      height: 433,
    },
  },
  {
    id: 6,
    src: "/images/home/wooden-chair.png",
    alt: "Wooden chair furniture design",
    style: {
      position: "absolute" as const,
      left: 0,
      top: 524,
      width: 177,
      height: 256,
    },
  },
  {
    id: 7,
    src: "/images/home/vase-home-decor.png",
    alt: "Decorative vase for home styling",
    style: {
      position: "absolute" as const,
      left: 199,
      top: 538,
      width: 344,
      height: 242,
    },
  },
  {
    id: 8,
    src: "/images/home/test.png",
    alt: "Wall frame decor for modern interiors",
    style: {
      position: "absolute" as const,
      left: 864,
      top: 518,
      width: 178,
      height: 242,
    },
  },
  {
    id: 9,
    src: "/images/home/modern-kitchen-decor.png",
    alt: "Modern kitchen decor setup",
    style: {
      position: "absolute" as const,
      left: 1058,
      top: 538,
      width: 258,
      height: 196,
    },
  },
];

export default function FurnitureGallerySection() {
  return (
    <div style={{ width: "100%", backgroundColor: "#FCF8F3" }}>
      <section style={{ overflow: "hidden", paddingTop: 55, paddingBottom: 50 }}>
        <div style={{ margin: "0 auto", maxWidth: 1440 }}>
          {/* Header */}
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                fontSize: 20,
                fontWeight: 600,
                lineHeight: "150%",
                color: "#616161",
                margin: 0,
              }}
            >
              Share your setup with
            </p>
            <h2
              style={{
                fontSize: 40,
                fontWeight: 700,
                lineHeight: "120%",
                color: "#3A3A3A",
                margin: "2px 0 0 0",
              }}
            >
              #FuniroFurniture
            </h2>
          </div>

          {/* Collage Grid */}
          <div
            style={{
              position: "relative",
              margin: "43px auto 0",
              height: 780,
              width: 1440,
            }}
          >
            {images.map((image) => (
              <div
                key={image.id}
                style={{ ...image.style, overflow: "hidden" }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 1440px) 100vw, 1440px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
