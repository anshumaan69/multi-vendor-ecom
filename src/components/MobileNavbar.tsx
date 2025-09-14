"use client"
import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const NavbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];

export const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  return (
    <nav className="h-16 flex items-center justify-between px-4 border-b bg-white lg:hidden">
      <Link href="/" className="text-2xl font-semibold">
        KartFlip
      </Link>
      <button
        className="p-2 rounded-md focus:outline-none"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setOpen(false)} />
      )}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col gap-4 p-6 pt-16">
          {NavbarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-lg font-medium py-2 px-4 rounded",
                pathName === item.href ? "bg-black text-amber-50" : "hover:bg-gray-100"
              )}
              onClick={() => setOpen(false)}
            >
              {item.children}
            </Link>
          ))}
          <Button variant="ghost" asChild className="mt-4">
            <Link href="/login">Login</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#">Start Selling</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
