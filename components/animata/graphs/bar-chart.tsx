import React from "react";

interface BarChartProps {
  data: { label: string; value: number }[];
  className?: string;
}

export default function BarChart({ data, className }: BarChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div
      className={`flex items-end gap-2 p-4 bg-white rounded-lg shadow ${className}`}
    >
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div
            className="bg-amber-600 rounded-t w-8 transition-all duration-500"
            style={{ height: `${(item.value / maxValue) * 100}px` }}
          />
          <span className="text-xs mt-1">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
