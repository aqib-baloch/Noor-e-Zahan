import React from "react";

interface GaugeChartProps {
  value: number;
  max: number;
  className?: string;
}

export default function GaugeChart({ value, max, className }: GaugeChartProps) {
  const percentage = (value / max) * 100;
  const angle = (percentage / 100) * 180 - 90; // from -90 to 90

  return (
    <div className={`relative w-40 h-20 ${className}`}>
      <svg viewBox="0 0 100 50" className="w-full h-full">
        <path
          d="M 10 40 A 30 30 0 0 1 90 40"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="8"
        />
        <path
          d={`M 10 40 A 30 30 0 0 1 ${50 + 30 * Math.cos((angle * Math.PI) / 180)} ${40 + 30 * Math.sin((angle * Math.PI) / 180)}`}
          fill="none"
          stroke="#d97706"
          strokeWidth="8"
        />
      </svg>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <span className="text-sm font-bold">{percentage.toFixed(0)}%</span>
      </div>
    </div>
  );
}