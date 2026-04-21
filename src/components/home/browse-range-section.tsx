import Image from "next/image";

const ranges = [
  {
    id: 1,
    title: "Dining",
    image: "/images/home/dining-room-furniture.png",
  },
  {
    id: 2,
    title: "Living",
    image: "/images/home/living-room-furniture.png",
  },
  {
    id: 3,
    title: "Bedroom",
    image: "/images/home/dining-room-furniture.png",
  },
];

export default function BrowseRangeSection() {
  return (
    <div className="w-full bg-white">
      <section className="mx-auto max-w-[1440px] px-[131px] pb-[56px] pt-[56px]">
        <div className="mx-auto">
          <div className="text-center">
            <h2 className="text-[32px] font-bold leading-none text-[#333333]">
              Browse The Range
            </h2>
            <p className="mt-3 text-[20px] font-normal leading-none text-[#666666]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="mt-[62px] grid grid-cols-3 gap-x-5">
            {ranges.map((item) => (
              <div key={item.id} className="text-center">
                <div className="relative h-[480px] w-full overflow-hidden rounded-[10px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-[30px] text-[24px] font-semibold leading-none text-[#333333]">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}