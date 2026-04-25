"use client";

import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";

const footerLinks = {
  links: [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  help: [
    { label: "Payment Options", href: "#" },
    { label: "Returns", href: "#" },
    { label: "Privacy Policies", href: "#" },
  ],
};

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 500); // 300–800ms is enough

    return () => clearTimeout(timer);
  }, []);

  const loading = !mounted;

  return (
    <footer className="w-full border-t border-[#D9D9D9] bg-white">
      <div className="mx-auto max-w-[1440px] px-[100px] pb-[38px] pt-[48px]">
        <div className="grid grid-cols-[2fr_1fr_1fr_1.4fr] gap-x-[72px] border-b border-[#D9D9D9] pb-[48px]">
          {/* Column 1 */}
          <div>
            {loading ? (
              <>
                <Skeleton className="h-6 w-[120px] bg-gray-300" />
                <div className="mt-[50px] space-y-2">
                  <Skeleton className="h-4 w-[250px] bg-gray-300" />
                  <Skeleton className="h-4 w-[220px] bg-gray-300" />
                </div>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-black">Furniro.</h2>
                <p className="mt-[50px] max-w-[285px] text-base leading-[24px] text-[#9F9F9F]">
                  400 University Drive Suite 200 Coral Gables,
                  <br />
                  FL 33134 USA
                </p>
              </>
            )}
          </div>

          {/* Column 2 */}
          <div>
            {loading ? (
              <>
                <Skeleton className="h-4 w-[60px] bg-gray-300" />
                <div className="mt-[55px] space-y-[46px]">
                  {footerLinks.links.map((_, i) => (
                    <Skeleton key={i} className="h-4 w-[80px] bg-gray-300" />
                  ))}
                </div>
              </>
            ) : (
              <>
                <p className="text-base font-medium text-[#9F9F9F]">Links</p>
                <div className="mt-[55px] flex flex-col gap-[46px]">
                  {footerLinks.links.map((item) => (
                    <Link key={item.label} href={item.href}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Column 3 */}
          <div>
            {loading ? (
              <>
                <Skeleton className="h-4 w-[60px] bg-gray-300" />
                <div className="mt-[55px] space-y-[46px]">
                  {footerLinks.help.map((_, i) => (
                    <Skeleton key={i} className="h-4 w-[120px] bg-gray-300" />
                  ))}
                </div>
              </>
            ) : (
              <>
                <p className="text-base font-medium text-[#9F9F9F]">Help</p>
                <div className="mt-[55px] flex flex-col gap-[46px]">
                  {footerLinks.help.map((item) => (
                    <Link key={item.label} href={item.href}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Column 4 */}
          <div>
            {loading ? (
              <>
                <Skeleton className="h-4 w-[90px] bg-gray-300" />
                <div className="mt-[53px] flex gap-[11px]">
                  <Skeleton className="h-5 w-[200px] bg-gray-300" />
                  <Skeleton className="h-5 w-[80px] bg-gray-300" />
                </div>
              </>
            ) : (
              <>
                <p className="text-base font-medium text-[#9F9F9F]">
                  Newsletter
                </p>
                <form className="mt-[53px] flex items-start gap-[11px]">
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="w-[200px] border-b border-black bg-transparent pb-[3px] text-sm text-black outline-none"
                  />
                  <button
                    type="submit"
                    className="border-b border-black pb-[3px] text-sm font-medium uppercase text-black"
                  >
                    Subscribe
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Bottom */}
        {loading ? (
          <Skeleton className="mt-[35px] h-4 w-[200px] bg-gray-300" />
        ) : (
          <p className="pt-[35px] text-base text-black">
            2023 furino. All rights reverved
          </p>
        )}
      </div>
    </footer>
  );
}
