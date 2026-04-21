import Link from "next/link";

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
  return (
    <footer className="w-full border-t border-[#D9D9D9] bg-white">
      <div className="mx-auto max-w-[1440px] px-[100px] pb-[38px] pt-[48px]">
        <div className="grid grid-cols-[2fr_1fr_1fr_1.4fr] gap-x-[72px] border-b border-[#D9D9D9] pb-[48px]">
          <div>
            <h2 className="text-2xl font-bold text-black">Furniro.</h2>
            <p className="mt-[50px] max-w-[285px] text-base leading-[24px] text-[#9F9F9F]">
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>

          <div>
            <p className="text-base font-medium text-[#9F9F9F]">Links</p>
            <div className="mt-[55px] flex flex-col gap-[46px]">
              {footerLinks.links.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-base font-medium text-black transition-opacity hover:opacity-70"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-base font-medium text-[#9F9F9F]">Help</p>
            <div className="mt-[55px] flex flex-col gap-[46px]">
              {footerLinks.help.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-base font-medium text-black transition-opacity hover:opacity-70"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-base font-medium text-[#9F9F9F]">Newsletter</p>

            <form className="mt-[53px] flex items-start gap-[11px]">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-[200px] border-b border-black bg-transparent pb-[3px] text-sm text-black outline-none placeholder:text-sm placeholder:text-[#9F9F9F]"
              />
              <button
                type="submit"
                className="border-b border-black pb-[3px] text-sm font-medium uppercase text-black transition-opacity hover:opacity-70"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <p className="pt-[35px] text-base text-black">
          2023 furino. All rights reverved
        </p>
      </div>
    </footer>
  );
}