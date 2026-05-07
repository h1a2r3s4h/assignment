"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

type TabItem = {
  label: string;
  href: string;
  value: string;
};

type Props = {
  items: TabItem[];
};

export default function SettingsTabs({ items }: Props) {
  const pathname = usePathname();

  const activeTab =
    items.find((item) => item.href === pathname)?.value || items[0].value;

  return (
    <Tabs value={activeTab} className="w-fit">
      <TabsList className="h-12 rounded-full border bg-white">
        {items.map((item) => (
          <TabsTrigger
            key={item.value}
            value={item.value}
            asChild
            className="h-full px-4 text-sm font-medium rounded-full data-[state=active]:bg-[#4C3AED] data-[state=active]:text-white"
          >
            <Link href={item.href}>{item.label}</Link>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}