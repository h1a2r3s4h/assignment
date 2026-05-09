"use client";

import { useState } from "react";
import { Save } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SettingsTabs from "../shared/SettingsTabs";
import SettingsHeader from "../shared/SettingsHeader";

type Props = {
  title: string;
  description: string;
  showAdvanced?: boolean;
  showDuration?: boolean;
};

export default function PrioritySetupCard({
  title,
  description,
  showAdvanced = false,
  showDuration = false,
}: Props) {
  const [customSort, setCustomSort] = useState(showAdvanced);

  return (
    <Card className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
      <CardContent className="p-0 h-full">
        <div className="flex h-full min-h-[280px] items-stretch">
          <div className="flex-1 border-r border-gray-200 p-5">
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>

            <p className="mt-2 max-w-4xl text-sm leading-6 text-gray-500">
              {description}
            </p>
          </div>

          <div className="w-[360px] bg-[#fafafa] self-stretch">
            <div className="flex h-full flex-col gap-5 p-0">
              <Card className="rounded-none border-0 shadow-sm">
                <CardContent className="flex items-start justify-between p-5">
                  <div>
                    <h3 className="text-[16px] font-semibold text-gray-900 leading-tight">
                      Use Default Sorting List
                    </h3>

                    <p className="mt-1 text-[12px] leading-tight text-gray-500">
                      Currently using system default sorting
                    </p>
                  </div>

                  <Switch defaultChecked />
                </CardContent>
              </Card>

              <Card className="rounded-none border-0 shadow-sm">
                <CardContent className="space-y-6 p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-[16px] font-semibold text-gray-900 leading-tight">
                        Use custom sorting list
                      </h3>

                      <p className="mt-1 text-[12px] leading-tight text-gray-500">
                        Override default behavior
                      </p>
                    </div>

                    <Switch
                      checked={customSort}
                      onCheckedChange={setCustomSort}
                    />
                  </div>

                  {customSort && (
                    <>
                      <div className="border-t" />

                      {showDuration && (
                        <div className="rounded-xl border bg-white p-4">
                          <h4 className="text-[16px] font-semibold">
                            Set duration
                          </h4>

                          <p className="mt-1 text-sm text-gray-500">
                            Products are considered as New arrival, If it is
                            added within X Days/Months
                          </p>

                          <Select defaultValue="7">
                            <SelectTrigger className="mt-4 h-12 rounded-lg">
                              <SelectValue />
                            </SelectTrigger>

                            <SelectContent>
                              <SelectItem value="7">7 Days</SelectItem>

                              <SelectItem value="15">15 Days</SelectItem>

                              <SelectItem value="30">30 Days</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}

                      <RadioGroup defaultValue="latest">
                        {[
                          "Sort by latest created",
                          "Sort by first created",
                          "Sort by most order",
                          "Sort by reviews count",
                          "Sort by average ratings",
                          "Sort by Alphabetical (A To Z)",
                          "Sort by Alphabetical (Z to A)",
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex items-center space-x-4"
                          >
                            <RadioGroupItem value={item} id={item} />

                            <Label
                              htmlFor={item}
                              className="text-[16px] font-normal"
                            >
                              {item}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>

                      {showAdvanced && (
                        <>
                          <div className="border-t" />

                          <RadioGroup defaultValue="none" className="space-y-5">
                            {[
                              "Show stock out products from the list",
                              "Remove stock out products from the list",
                              "None",
                            ].map((item) => (
                              <div
                                key={item}
                                className="flex items-center space-x-4"
                              >
                                <RadioGroupItem value={item} id={item} />

                                <Label
                                  htmlFor={item}
                                  className="text-[16px] font-normal"
                                >
                                  {item}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>

                          <div className="border-t" />

                          <RadioGroup
                            defaultValue="none2"
                            className="space-y-5"
                          >
                            {[
                              "Show product in the last if store is temporarily off",
                              "Remove product from the list if store is temporarily off",
                              "None",
                            ].map((item) => (
                              <div
                                key={item}
                                className="flex items-center space-x-4"
                              >
                                <RadioGroupItem value={item} id={item} />

                                <Label
                                  htmlFor={item}
                                  className="text-[16px] font-normal"
                                >
                                  {item}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="flex justify-end border-t bg-white px-6 py-5">
          <Button className="h-11 rounded-lg bg-indigo-600 px-6 text-sm hover:bg-indigo-700">
            <Save className="mr-2 h-4 w-4" />
            Save
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
