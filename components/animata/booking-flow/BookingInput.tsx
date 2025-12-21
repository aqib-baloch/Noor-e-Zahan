import React from "react";
import { LucideIcon } from "lucide-react";

interface BookingInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: LucideIcon;
}

export default function BookingInput({
  label,
  icon: Icon,
  className,
  ...props
}: BookingInputProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-neutral-600 flex items-center gap-2">
        <Icon size={16} className="text-rose-500" /> {label}
      </label>
      <input
        className={`w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all ${className}`}
        {...props}
      />
    </div>
  );
}
