"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { usePathname, useSearchParams } from "next/navigation"
import { ChevronRightIcon } from "lucide-react"

type NavItem = {
  title: string
  url?: string
  icon?: React.ReactNode
  isActive?: boolean
  items?: NavItem[]
}

export function NavMain({ items }: { items: NavItem[] }) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <RenderItem key={item.title} item={item} />
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}

function RenderItem({ item }: { item: NavItem }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const hasChildren = item.items && item.items.length > 0

  // Helper to check if a URL is active
  const checkActive = (url?: string) => {
    if (!url) return false
    const currentPath = pathname
    const currentQuery = searchParams.toString()
    const fullCurrentPath = `${currentPath}${currentQuery ? `?${currentQuery}` : ""}`
    
    // Exact match or matches without query if the item url has no query
    if (url === fullCurrentPath) return true
    if (url === currentPath && !url.includes('?')) return true
    
    return false
  }

  const active = checkActive(item.url)
  const isParentActive = hasChildren && item.items?.some(sub => checkActive(sub.url) || (sub.items?.some(s => checkActive(s.url))))

  const buttonContent = (
    <>
      {item.icon}
      <span>{item.title}</span>
      {hasChildren && (
        <ChevronRightIcon className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
      )}
    </>
  )

  return (
    <Collapsible
      asChild
      defaultOpen={item.isActive || isParentActive}
      className="group/collapsible"
    >
      <SidebarMenuItem>
        {hasChildren ? (
          <CollapsibleTrigger asChild>
            <SidebarMenuButton 
              tooltip={item.title}
              isActive={active}
              className={cn(
                active && "font-bold bg-sidebar-accent text-sidebar-accent-foreground shadow-sm"
              )}
            >
              {buttonContent}
            </SidebarMenuButton>
          </CollapsibleTrigger>
        ) : (
          <SidebarMenuButton 
            asChild 
            tooltip={item.title}
            isActive={active}
            className={cn(
              active && "font-bold bg-sidebar-accent text-sidebar-accent-foreground shadow-sm"
            )}
          >
            <Link href={item.url || '#'}>
              {buttonContent}
            </Link>
          </SidebarMenuButton>
        )}

        {hasChildren && (
          <CollapsibleContent>
            <SidebarMenuSub className="ml-4 border-l pl-2">
              {item.items!.map((subItem) => {
                const isSubActive = checkActive(subItem.url)
                
                return subItem.items ? (
                  <div key={subItem.title} className="ml-2">
                    <RenderItem item={subItem} />
                  </div>
                ) : (
                  <SidebarMenuSubItem key={subItem.title}>
                    <SidebarMenuSubButton 
                      asChild 
                      isActive={isSubActive}
                      className={cn(
                        isSubActive && "font-bold bg-sidebar-accent/50 text-sidebar-accent-foreground"
                      )}
                    >
                      <Link href={subItem.url || '#'}>
                        <span>{subItem.title}</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                )
              })}
            </SidebarMenuSub>
          </CollapsibleContent>
        )}
      </SidebarMenuItem>
    </Collapsible>
  )
}