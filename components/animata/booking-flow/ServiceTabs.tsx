"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ServiceTabsProps {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}

export default function ServiceTabs({
  categories,
  selectedCategory,
  onSelect,
}: ServiceTabsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-6 p-1.5 bg-neutral-100/50 rounded-xl border border-neutral-200/50">
      {categories.map((category) => {
        const isSelected = selectedCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={cn(
              "relative px-4 py-2 text-sm font-medium rounded-lg transition-all z-10",
              isSelected ? "text-rose-900" : "text-neutral-500 hover:text-neutral-700"
            )}
          >
            {isSelected && (
              <motion.div
                layoutId="service-tab"
                className="absolute inset-0 bg-white shadow-sm border border-neutral-200/50 rounded-lg -z-10"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            {category}
          </button>
        );
      })}
    </div>
  );
}
