"use client";

import Image from "next/image";
import { Plus, Pencil, Trash2, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SettingsHeader from "../../shared/SettingsHeader";
import SettingsTabs from "../../shared/SettingsTabs";
import { useState } from "react";

const bannerData = [
  {
    id: 1,
    image: "/banner.jpg",
    type: "Main Section Banner",
    published: true,
  },
  {
    id: 2,
    image: "/banner.jpg",
    type: "Footer Banner",
    published: false,
  },
];

const sliderData = [
  {
    id: 1,
    image: "/slider.jpg",
    title: "Summer Sale",
    published: true,
  },
];

export default function BannerSliderPage() {
  const [banners, setBanners] = useState(bannerData);
  const [sliders, setSliders] = useState(sliderData);
  const [loadingType, setLoadingType] = useState<string | null>(null);
  const [loadingId, setLoadingId] = useState<number | null>(null);

  const handleAdd = async (type: string) => {
    setLoadingType(type);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // logic
    } finally {
      setLoadingType(null);
    }
  };

  const handleDelete = async (id: number, type: string) => {
    setLoadingId(id);
    setLoadingType(type);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // logic
    } finally {
      setLoadingId(null);
      setLoadingType(null);
    }
  };

  return (
    <div className="space-y-5">
      <SettingsHeader title="Site Settings" />

      {/* Tabs */}
      <SettingsTabs
        items={[
            {
            label: "Banner Setup",
            href: "/dashboard/settings/pages-media/social-media-links",
            value: "Banner Setup",
          },
          {
            label: "Announcement",
            href: "/dashboard/settings/pages-media/social-media-links/announcements",
            value: "announcements",
          },
          {
            label: "Company Reliability",
            href: "/dashboard/settings/pages-media/social-media-links/company-reliability",
            value: "company-reliability",
          },
          {
            label: "Trusted By",
            href: "/dashboard/settings/pages-media/social-media-links/trusted-by",
            value: "trusted-by",
          },
        ]}
      />
      {/* Banner Table */}
      <Card>
      <CardHeader className="flex flex-row items-center justify-between p-4">
        <h2 className="text-xl font-semibold">Banner Table</h2>

        <Button
          size="sm"
          className="cursor-pointer"
          disabled={loadingType === "add_banner"}
          onClick={() => handleAdd("add_banner")}
        >
          {loadingType === "add_banner" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
          Add Banner
        </Button>
      </CardHeader>

      <CardContent className="p-4">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead>S.NO.</TableHead>
              <TableHead>IMAGE</TableHead>
              <TableHead>BANNER TYPE</TableHead>
              <TableHead>PUBLISHED</TableHead>
              <TableHead>ACTION</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {banners.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="py-3 text-sm">
                  {item.id}
                </TableCell>

                <TableCell className="py-3">
                  <Image
                    src={item.image}
                    alt="Banner"
                    width={50}
                    height={30}
                    className="rounded"
                  />
                </TableCell>

                <TableCell className="py-3 text-sm">
                  {item.type}
                </TableCell>

                <TableCell className="py-3">
                  <Switch
                  className="cursor-pointer"
                    checked={item.published}
                    onCheckedChange={(checked) =>
                      setBanners((prev) =>
                        prev.map((banner) =>
                          banner.id === item.id
                            ? { ...banner, published: checked }
                            : banner
                        )
                      )
                    }
                  />
                </TableCell>

                <TableCell className="py-3">
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="cursor-pointer">
                      <Pencil className="h-4 w-4 text-blue-600" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="cursor-pointer"
                      disabled={loadingId === item.id && loadingType === "del_banner"}
                      onClick={() => handleDelete(item.id, "del_banner")}
                    >
                      {loadingId === item.id && loadingType === "del_banner" ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Trash2 className="h-4 w-4 text-red-500" />
                      )}
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="mt-4 flex items-center justify-end gap-2">
          <Button variant="outline" size="icon" className="cursor-pointer">
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <span className="text-sm">Page 1 of 1</span>

          <Button variant="outline" size="icon" className="cursor-pointer">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader className="flex flex-row items-center justify-between p-4">
        <h2 className="text-xl font-semibold">Slider Table</h2>

        <Button
          size="sm"
          className="cursor-pointer"
          disabled={loadingType === "add_slider"}
          onClick={() => handleAdd("add_slider")}
        >
          {loadingType === "add_slider" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
          Add Slider
        </Button>
      </CardHeader>

      <CardContent className="p-4">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead>S.NO.</TableHead>
              <TableHead>IMAGE</TableHead>
              <TableHead>TITLE</TableHead>
              <TableHead>PUBLISHED</TableHead>
              <TableHead>ACTION</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {sliders.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="py-3 text-sm">
                  {item.id}
                </TableCell>

                <TableCell className="py-3">
                  <Image
                    src={item.image}
                    alt="Slider"
                    width={50}
                    height={30}
                    className="rounded"
                  />
                </TableCell>

                <TableCell className="py-3 text-sm">
                  {item.title}
                </TableCell>

                <TableCell className="py-3">
                  <Switch
                  className="cursor-pointer"
                    checked={item.published}
                    onCheckedChange={(checked) =>
                      setSliders((prev) =>
                        prev.map((slider) =>
                          slider.id === item.id
                            ? { ...slider, published: checked }
                            : slider
                        )
                      )
                    }
                  />
                </TableCell>

                <TableCell className="py-3">
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="cursor-pointer">
                      <Pencil className="h-4 w-4  text-blue-600" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="cursor-pointer"
                      disabled={loadingId === item.id && loadingType === "del_slider"}
                      onClick={() => handleDelete(item.id, "del_slider")}
                    >
                      {loadingId === item.id && loadingType === "del_slider" ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Trash2 className="h-4 w-4 text-red-500" />
                      )}
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="mt-4 flex items-center justify-end gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <span className="text-sm">Page 1 of 1</span>

          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
    </div>
  );
}
