"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarDays,
  Home,
  Images,
  type LucideIcon,
  Menu,
  Scissors,
  ShoppingBag,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";

interface TabItem {
  text: string;
  href: string;
}

const TAB_ICONS: Record<string, LucideIcon> = {
  "/": Home,
  "/services": Scissors,
  "/gallery": Images,
  "/shop": ShoppingBag,
  "/booking": CalendarDays,
};

interface TabProps {
  text: string;
  href: string;
  selected: boolean;
  onClick?: () => void;
}

export default function NavTabs({ tabs }: { tabs: TabItem[] }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeHref = tabs.find((tab) => tab.href === pathname)?.href ?? "/";

  return (
    <>
      <div className="sticky top-3 z-50 px-4 md:hidden">
        <div className="relative rounded-[2rem] border border-white/70 bg-white/82 p-3 shadow-[0_18px_50px_rgba(136,19,55,0.16)] backdrop-blur-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-rose-950 via-rose-900 to-amber-600 text-white shadow-lg">
                <span className="font-serif text-base font-semibold">N</span>
              </div>
              <div>
                <p className="font-serif text-lg font-semibold text-rose-950">
                  Noor-e-Zahan
                </p>
                <p className="text-[11px] uppercase tracking-[0.24em] text-rose-400">
                  Beauty Lounge
                </p>
              </div>
            </div>

            <button
              onClick={() => setMobileOpen((value) => !value)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full transition-all",
                mobileOpen
                  ? "bg-rose-950 text-white shadow-lg"
                  : "bg-rose-50 text-rose-900"
              )}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="absolute inset-x-0 top-full mt-3 md:hidden"
              >
                <div className="rounded-[2rem] border border-rose-100 bg-white p-4 shadow-[0_24px_60px_rgba(136,19,55,0.22)]">
                  <div className="mb-4 flex items-center justify-between px-2">
                    <div>
                      <p className="font-serif text-lg font-semibold text-rose-950">
                        Noor-e-Zahan
                      </p>
                      <p className="text-xs uppercase tracking-[0.28em] text-rose-400">
                        Beauty Lounge
                      </p>
                    </div>
                    <button
                      onClick={() => setMobileOpen(false)}
                      aria-label="Close menu"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-rose-100 bg-rose-50 text-rose-900"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {tabs.map((tab) => (
                      <MobileTab
                        key={tab.text}
                        text={tab.text}
                        href={tab.href}
                        selected={activeHref === tab.href}
                        onClick={() => setMobileOpen(false)}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="sticky top-4 z-50 hidden w-full justify-center px-4 md:flex">
        <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/60 bg-white/75 p-3 shadow-[0_24px_60px_rgba(136,19,55,0.16)] backdrop-blur-xl">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-rose-950 via-rose-900 to-amber-600 text-white shadow-lg">
            <span className="font-serif text-lg font-semibold">N</span>
          </div>
          <div className="h-10 w-px bg-rose-100" />
          {tabs.map((tab) => (
            <Tab
              key={tab.text}
              text={tab.text}
              href={tab.href}
              selected={activeHref === tab.href}
            />
          ))}
        </div>
      </div>

      <div className="h-5 md:h-0" />
    </>
  );
}

const Tab = ({ text, href, selected }: TabProps) => {
  const Icon = TAB_ICONS[href] ?? Home;

  return (
    <Link
      href={href}
      className={cn(
        "relative flex items-center gap-3 rounded-full px-4 py-3 text-sm transition-all",
        selected ? "text-white" : "text-rose-900 hover:text-rose-700"
      )}
    >
      {selected && (
        <motion.span
          layoutId="desktop-tab-pill"
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-950 via-rose-800 to-amber-600 shadow-lg"
        />
      )}
      <span
        className={cn(
          "relative z-10 flex h-10 w-10 items-center justify-center rounded-full",
          selected ? "bg-white/16" : "bg-rose-50"
        )}
      >
        <Icon size={18} />
      </span>
      <span className="relative z-10 hidden min-w-0 whitespace-nowrap font-serif font-medium lg:block">
        {text}
      </span>
    </Link>
  );
};

const MobileTab = ({ text, href, selected, onClick }: TabProps) => {
  const Icon = TAB_ICONS[href] ?? Home;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "relative overflow-hidden rounded-[1.5rem] border px-4 py-4 transition-all",
        selected
          ? "border-transparent text-white shadow-lg"
          : "border-rose-100 bg-rose-50 text-rose-900"
      )}
    >
      {selected && (
        <motion.span
          layoutId="mobile-tab-pill"
          className="absolute inset-0 bg-gradient-to-br from-rose-950 via-rose-900 to-amber-600"
        />
      )}
      <div className="relative z-10 flex items-center gap-3">
        <span
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full",
            selected ? "bg-white/14" : "bg-white"
          )}
        >
          <Icon size={18} />
        </span>
        <div>
          <p className="font-serif text-sm font-semibold">{text}</p>
          <p
            className={cn(
              "text-[11px] uppercase tracking-[0.22em]",
              selected ? "text-white/70" : "text-rose-400"
            )}
          >
            Explore
          </p>
        </div>
      </div>
    </Link>
  );
};
