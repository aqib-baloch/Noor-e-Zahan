"use client";

import { Clock, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimeSlotsProps {
  slots: string[];
  selectedSlot: string | null;
  onSelect: (slot: string) => void;
}

export default function TimeSlots({
  slots,
  selectedSlot,
  onSelect,
}: TimeSlotsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in slide-in-from-bottom-4 fade-in duration-500">
      {slots.map((slot) => (
        <button
          key={slot}
          onClick={() => onSelect(slot)}
          className={cn(
            "group relative flex items-center p-4 rounded-xl border-2 transition-all duration-200",
            selectedSlot === slot
              ? "border-rose-600 bg-rose-600 text-white shadow-lg scale-[1.02]"
              : "border-gray-100 bg-white hover:border-rose-200 hover:shadow-md"
          )}
        >
          <div
            className={cn(
              "p-2 rounded-full mr-3 transition-colors",
              selectedSlot === slot
                ? "bg-white/20 text-white"
                : "bg-rose-50 text-rose-500 group-hover:bg-rose-100"
            )}
          >
            <Clock size={18} />
          </div>
          <span className="font-semibold text-lg">{slot}</span>
          {selectedSlot === slot && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <CheckCircle size={20} className="text-white" />
            </div>
          )}
        </button>
      ))}
    </div>
  );
}
