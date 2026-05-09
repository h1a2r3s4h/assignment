"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Switch } from "@/components/ui/switch"

import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6"

import {
  Pencil,
  Trash2,
  Link as LinkIcon,
  Save,
  Loader2,
} from "lucide-react"
import { useState } from "react"



export default function SocialMediaSettings() {
    const [socialLinks, setSocialLinks] = useState([
  {
    id: 1,
    name: "Facebook",
    icon: <FaFacebookF />,
    link: "https://facebook.com/mybusiness",
    enabled: true,
  },
  {
    id: 2,
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://instagram.com/mybusiness_official",
    enabled: true,
  },
  {
    id: 3,
    name: "X",
    icon: <FaXTwitter />,
    link: "https://x.com/mybusiness_news",
    enabled: false,
  },
])
  const [loading, setLoading] = useState(false);
  const [loadingId, setLoadingId] = useState<number | null>(null);

  const handleSave = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // logic
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    setLoadingId(id);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // logic
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Add Social Media */}
      <Card>
        <CardHeader>
          <CardTitle>Add Social Media Link</CardTitle>

          <CardDescription>
            Add or update social media links for your store.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Platform</Label>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a platform" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="facebook">
                    Facebook
                  </SelectItem>

                  <SelectItem value="instagram">
                    Instagram
                  </SelectItem>

                  <SelectItem value="x">
                    X
                  </SelectItem>

                  <SelectItem value="linkedin">
                    LinkedIn
                  </SelectItem>

                  <SelectItem value="youtube">
                    YouTube
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Link URL</Label>

              <div className="relative">
                <LinkIcon className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />

                <Input
                  placeholder="https://..."
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button onClick={handleSave} disabled={loading}>
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Save className="h-4 w-4" />
              )}
              Save Link
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Social Media List */}
      <Card>
        <CardHeader>
          <CardTitle>Social Media List</CardTitle>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>S.No.</TableHead>

                <TableHead>Platform</TableHead>

                <TableHead>Link</TableHead>

                <TableHead>Status</TableHead>

                <TableHead className="text-right">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {socialLinks.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>

                  <TableCell>
                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground">
                        {item.icon}
                      </span>

                      <span>{item.name}</span>
                    </div>
                  </TableCell>

                  <TableCell className="text-muted-foreground">
                    {item.link}
                  </TableCell>

                  <TableCell>
                    <Switch
                    
  checked={item.enabled}
  onCheckedChange={(checked) => {
    setSocialLinks((prev) =>
      prev.map((social) =>
        social.id === item.id
          ? { ...social, enabled: checked }
          : social
      )
    )
  }}
  className="data-[state=checked]:bg-primary cursor-pointer"
/>
                  </TableCell>

                  <TableCell>
                    <div className="flex justify-end gap-2">
                      <Button
  variant="ghost"
  size="icon"
  className="text-green-600 cursor-pointer hover:text-green-700"
>
  <Pencil className="h-4 w-4" />
</Button>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-600 cursor-pointer hover:text-red-700"
                        onClick={() => handleDelete(item.id)}
                        disabled={loadingId === item.id}
                      >
                        {loadingId === item.id ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Trash2 className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}