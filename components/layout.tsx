"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import HouseIcon from "@/assets/HouseGreen.svg";
import ChatIcon from "@/assets/ChatIcon.svg";
import SalesIcon from "@/assets/UsersGroupIcon.svg";
import SettingsIcon from "@/assets/SettingsIcon.svg";
import ChatTextIcon from "@/assets/ChatTeardropText.svg";
import PieChartIcon from "@/assets/ChartPieSlice.svg";
import TagIcon from "@/assets/Tag.svg";

const sidebarLinks = [
  {
    title: "Home",
    icon: HouseIcon,
    href: "/",
  },
  {
    title: "Chats",
    icon: ChatIcon,
    href: "/chats",
  },
  {
    title: "Sales",
    icon: SalesIcon,
    href: "/sales",
  },
];

const topNavLinks = [
  { title: "Summary", icon: PieChartIcon, href: "/" },
  { title: "Sales", icon: TagIcon, href: "/sales" },
  { title: "Chats", icon: ChatTextIcon, href: "/chats" },
];

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      <aside className="fixed left-0 top-0 z-30 flex h-screen w-[60px] pb-4 flex-col justify-center items-center bg-primaryGreen">
        <div className="flex h-16 items-center justify-center">
          <Link href="/" className="text-white text-2xl font-bold">
            <Image src={Logo} alt="logo" width={33} height={33} />
          </Link>
        </div>
        <div className="border-t border-t-white my-8 px-[13.4px]" />
        <nav className="flex-1 space-y-6  flex flex-col justify-start items-center">
          {sidebarLinks.map((link) => (
            <button
              key={link.href}
              className={cn(
                "w-full justify-center text-white p-2 hover:bg-white/10 rounded-lg duration-300",
                pathname === link.href && "bg-white"
              )}
            >
              <Link href={link.href}>
                <Image src={link.icon} alt="icon" width={20} height={20} />
                <span className="sr-only">{link.title}</span>
              </Link>
            </button>
          ))}
        </nav>
        <div className="mt-auto">
          <button className="w-full justify-center text-white hover:bg-white/10">
            <Link href="/settings">
              <Image src={SettingsIcon} alt="icon" width={20} height={20} />
              <span className="sr-only">Settings</span>
            </Link>
          </button>
        </div>
      </aside>
      <main className="flex-1 pl-[60px]">
        <div className="border-b">
          <div className="flex gap-4 py-6 px-10 items-center">
            {topNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium",
                  pathname === link.href
                    ? "text-primaryText rounded-[50px] bg-mutedGreen p-3"
                    : "text-disabledText"
                )}
              >
                <div className="flex gap-2 items-center justify-center">
                  <Image src={link.icon} alt="icon" width={20} height={20} />
                  {link.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
        {children}
      </main>
    </div>
  );
}
