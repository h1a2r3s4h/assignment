"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { GalleryVerticalEndIcon, AudioLinesIcon, TerminalIcon, TerminalSquareIcon, BotIcon, BookOpenIcon, Settings2Icon, FrameIcon, PieChartIcon, MapIcon } from "lucide-react"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: (
        <GalleryVerticalEndIcon
        />
      ),
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: (
        <AudioLinesIcon
        />
      ),
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: (
        <TerminalIcon
        />
      ),
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: <TerminalSquareIcon />,
    },

    // ORDER MANAGEMENT
    {
  title: "Order Management",
  icon: <BotIcon />,
  items: [
    {
      title: "Orders",
      items: [
        { title: "All", url: "/dashboard/orders?status=all" },
{ title: "Pending", url: "/dashboard/orders?status=pending" },
{ title: "Confirmed", url: "/dashboard/orders?status=confirmed" },
{ title: "Packing", url: "/dashboard/orders?status=packing" },
{ title: "Out for delivery", url: "/dashboard/orders?status=out" },
{ title: "Delivered", url: "/dashboard/orders?status=delivered" },
{ title: "Returned", url: "/dashboard/orders?status=returned" },
{ title: "Cancelled", url: "/dashboard/orders?status=cancelled" },
      ],
    },
    {
      title: "Refund Requests",
      items: [
        { title: "All", url: "/dashboard/refunds?status=all" },
        { title: "Pending", url: "/dashboard/refunds?status=pending" },
        { title: "Approved", url: "/dashboard/refunds?status=approved" },
        { title: "Refunded", url: "/dashboard/refunds?status=refunded" },
        { title: "Rejected", url: "/dashboard/refunds?status=rejected" },
      ],
    },
  ],
},

    // CATEGORY SETUP
    {
      title: "Category Setup",
      icon: <Settings2Icon />,
      items: [
        { title: "Categories", url: "/dashboard/categories" },
        { title: "Sub Categories", url: "/dashboard/categories/subcategories" },
      ],
    },


    // PRODUCT MANAGEMENT
    {
      title: "Product Management",
      icon: <BookOpenIcon />,
      items: [
        { title: "In House Products", url: "/products/inhouse" },
        { title: "Product Gallery", url: "/products/gallery" },
        { title: "Product Attribute Set", url: "/products/attributes" },
      ],
    },

    // SYSTEM SETTINGS
    {
      title: "System Settings",
      icon: <Settings2Icon />,
      items: [
        {
          title: "Business Setup",
          items: [
            { title: "Business Settings", url: "/settings/business" },
            { title: "System Setup", url: "/settings/system" },
          ],
        },
        {
          title: "Pages & Media",
          items: [
            { title: "Business Pages", url: "/pages/business" },
            { title: "Social Media Links", url: "/pages/social" },
            { title: "Site Settings", url: "/pages/site" },
            { title: "Email Templates", url: "/pages/email" },
          ],
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: (
        <FrameIcon
        />
      ),
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: (
        <PieChartIcon
        />
      ),
    },
    {
      name: "Travel",
      url: "#",
      icon: (
        <MapIcon
        />
      ),
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
