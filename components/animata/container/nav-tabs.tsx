"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import SlideArrowButton from "../button/slide-arrow-button";

interface TabItem {
  text: string;
  href: string;
}

interface TabProps {
  text: string;
  href: string;
  selected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export default function NavTabs({ tabs }: { tabs: TabItem[] }) {
  const pathname = usePathname();
  const [selected, setSelected] = useState<string>(() => {
    const activeTab = tabs.find((tab) => tab.href === pathname);
    return activeTab ? activeTab.text : pathname === "/" ? tabs[0].text : "";
  });

  return (
    <div className="relative flex flex-wrap items-center justify-center gap-4 rounded-md bg-white/90 backdrop-blur-md p-4 shadow-sm border border-rose-100">
      {tabs.map((tab) => (
        <Tab
          text={tab.text}
          href={tab.href}
          selected={selected === tab.text}
          setSelected={setSelected}
          key={tab.text}
        />
      ))}
      {/* Removed SlideArrowButton as it might not be needed for simple nav, or kept if desired. Keeping it for style consistency if it works. */}
      <SlideArrowButton className="absolute top-0 right-[-72px] hidden md:block" />
    </div>
  );
}

const Tab = ({ text, href, selected, setSelected }: TabProps) => {
  return (
    <Link
      href={href}
      onClick={() => setSelected(text)}
      className={cn(
        "relative rounded-md px-4 py-2 text-sm transition-all font-serif tracking-wide",
        selected
          ? "text-white"
          : "text-rose-900 hover:text-rose-700 hover:bg-rose-50"
      )}
    >
      <p className="relative z-50 min-w-20 text-center">{text}</p>
      {selected && (
        <motion.span
          layoutId="tabs"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 rounded-md bg-gradient-to-r from-amber-500 to-rose-600 shadow-md"
        />
      )}
    </Link>
  );
};
