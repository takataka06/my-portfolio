import { User, Home, Send, Dumbbell, BicepsFlexed } from "lucide-react"
import React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "About me",
    url: "/about",
    icon: User,
  },
  {
    title: "Works",
    url: "/works",
    icon: BicepsFlexed,
  },
  {
    title: "Contacts",
    url: "/contacts",
    icon: Send,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="bg-black/100 text-white ">
      <SidebarContent>
        <SidebarGroup>
          
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span >{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}