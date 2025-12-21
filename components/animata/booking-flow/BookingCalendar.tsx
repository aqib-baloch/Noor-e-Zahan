"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface BookingCalendarProps {
  selectedDate: Date | undefined;
  onSelect: (date: Date | undefined) => void;
}

export default function BookingCalendar({
  selectedDate,
  onSelect,
}: BookingCalendarProps) {
  const css = `
    .rdp {
      --rdp-cell-size: 40px;
      --rdp-accent-color: #e11d48; 
      --rdp-background-color: #ffe4e6; 
      margin: 0;
    }
    .rdp-day_selected:not([disabled]) { 
      background-color: var(--rdp-accent-color);
      font-weight: bold;
    }
    .rdp-day_selected:hover:not([disabled]) { 
      background-color: #be123c; 
    }
    .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
        background-color: #fff1f2; 
    }
  `;

  return (
    <div className="border border-rose-100 rounded-2xl p-4 bg-white shadow-[0_4px_20px_-10px_rgba(225,29,72,0.1)] inline-block">
      <style>{css}</style>
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={onSelect}
        disabled={[{ before: new Date() }]}
      />
    </div>
  );
}
