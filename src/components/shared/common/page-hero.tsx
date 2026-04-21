import Image from "next/image";
import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  title: string;
  backgroundImage: string;
  breadcrumbs?: BreadcrumbItem[];
  heightClassName?: string;
};

export default function PageHero({
  title,
  backgroundImage,
  breadcrumbs = [],
  heightClassName = "h-[188px] md:h-[220px] lg:h-[316px]",
}: PageHeroProps) {
  return (
    <section className={`relative w-full overflow-hidden ${heightClassName}`}>
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* soft white overlay like figma */}
      <div className="absolute inset-0 bg-white/55" />

      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-[32px] font-medium leading-[120%] text-black md:text-[40px] lg:text-[48px]">
            {title}
          </h1>

          {breadcrumbs.length > 0 && (
            <nav
              aria-label="Breadcrumb"
              className="mt-2 flex flex-wrap items-center justify-center gap-2 text-[14px] font-medium leading-[150%] text-black"
            >
              {breadcrumbs.map((item, index) => {
                const isLast = index === breadcrumbs.length - 1;

                return (
                  <div key={`${item.label}-${index}`} className="flex items-center gap-2">
                    {item.href && !isLast ? (
                      <Link
                        href={item.href}
                        className="transition-opacity duration-200 hover:opacity-70"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className={isLast ? "font-light" : ""}>{item.label}</span>
                    )}

                    {!isLast && <span className="text-[14px] text-black">{">"}</span>}
                  </div>
                );
              })}
            </nav>
          )}
        </div>
      </div>
    </section>
  );
}