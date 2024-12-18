"use client"

import { Home, BarChart2, MessageSquare, Settings } from 'lucide-react'
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const sidebarLinks = [
  {
    title: "Home",
    icon: Home,
    href: "/",
  },
  {
    title: "Sales",
    icon: BarChart2,
    href: "/sales",
  },
  {
    title: "Chats",
    icon: MessageSquare,
    href: "/chats",
  },
]

const topNavLinks = [
  { title: "Summary", href: "/" },
  { title: "Sales", href: "/sales" },
  { title: "Chats", href: "/chats" },
]

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen">
      <aside className="fixed left-0 top-0 z-30 flex h-screen w-16 flex-col bg-[#0F4C3A]">
        <div className="flex h-16 items-center justify-center">
          <Link href="/" className="text-white text-2xl font-bold">β</Link>
        </div>
        <nav className="flex-1 space-y-2 p-2">
          {sidebarLinks.map((link) => (
            <Button
              key={link.href}
              asChild
              variant="ghost"
              className={cn(
                "w-full justify-center text-white hover:bg-white/10",
                pathname === link.href && "bg-white/10"
              )}
            >
              <Link href={link.href}>
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.title}</span>
              </Link>
            </Button>
          ))}
        </nav>
        <div className="p-2 mt-auto">
          <Button
            asChild
            variant="ghost"
            className="w-full justify-center text-white hover:bg-white/10"
          >
            <Link href="/settings">
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Link>
          </Button>
        </div>
      </aside>
      <main className="flex-1 pl-16">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            {topNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium",
                  pathname === link.href
                    ? "text-[#0F4C3A] border-b-2 border-[#0F4C3A]"
                    : "text-gray-500 hover:text-gray-700"
                )}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        {children}
      </main>
    </div>
  )
}

