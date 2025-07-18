"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import HouseIcon from "@/assets/HouseIcon.svg";
import HouseIconActive from "@/assets/HouseIconActive.svg";
import ChatIcon from "@/assets/ChatIcon.svg";
import ChatIconActive from "@/assets/ChatIconActive.svg";
import SalesIcon from "@/assets/UsersGroupIcon.svg";
import SalesIconActive from "@/assets/UsersGroupIconActive.svg";
import SettingsIcon from "@/assets/SettingsIcon.svg";
import ChatTextIcon from "@/assets/ChatTeardropText.svg";
import PieChartIcon from "@/assets/ChartPieSlice.svg";
import TagIcon from "@/assets/Tag.svg";

const sidebarLinks = [
  {
    title: "Home",
    icon: HouseIconActive,
    activeIcon: HouseIcon,
    href: "/",
  },
  {
    title: "Chats",
    icon: ChatIcon,
    activeIcon: ChatIconActive,
    href: "/chats",
  },
  {
    title: "Sales",
    icon: SalesIcon,
    activeIcon: SalesIconActive,
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 z-50 flex h-screen w-[60px] pb-4 flex-col justify-center items-center bg-primaryGreen transition-transform duration-300",
        "lg:translate-x-0", // Always visible on large screens
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0" // Hidden on mobile unless menu is open
      )}>
        <div className="flex h-16 items-center justify-center">
          <Link href="/" className="text-white text-2xl font-bold">
            <Image src={Logo} alt="logo" width={33} height={33} />
          </Link>
        </div>
        <div className="border-t border-t-[#0d4741] my-8 px-[13.4px]" />
        <nav className="flex-1 space-y-6  flex flex-col justify-start items-center">
          {sidebarLinks.map((link) => (
            <button
              key={link.href}
              className={cn(
                "w-full justify-center text-white p-2 rounded-lg duration-300",
                pathname === link.href && "bg-white"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link href={link.href}>
                {
                  <Image
                    src={pathname === link.href ? link.activeIcon : link.icon}
                    alt="icon"
                    width={20}
                    height={20}
                  />
                }
                <span className="sr-only">{link.title}</span>
              </Link>
            </button>
          ))}
        </nav>
        <div className="mt-auto">
          <button className="w-full justify-center text-white ">
            <Link href="/settings">
              <Image src={SettingsIcon} alt="icon" width={20} height={20} />
              <span className="sr-only">Settings</span>
            </Link>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:pl-[60px]">
        {/* Top Navigation */}
        <div className="border-b">
          <div className="flex gap-2 md:gap-4 py-4 md:py-6 px-4 md:px-10 items-center">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Navigation Links */}
            <div className="flex gap-2 md:gap-4 overflow-x-auto">
              {topNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-2 md:px-3 py-2 text-sm font-medium whitespace-nowrap flex-shrink-0",
                    pathname === link.href
                      ? "text-primaryText rounded-[50px] bg-mutedGreen p-2 md:p-3"
                      : "text-disabledText"
                  )}
                >
                  <div className="flex gap-2 items-center justify-center">
                    <Image src={link.icon} alt="icon" width={20} height={20} />
                    <span className="hidden sm:inline">{link.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        {children}
      </main>
    </div>
  );
}
