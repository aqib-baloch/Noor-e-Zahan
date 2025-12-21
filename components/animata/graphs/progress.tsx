import React from "react";

interface ProgressProps {
  value: number;
  max: number;
  className?: string;
}

export default function Progress({ value, max, className }: ProgressProps) {
  const percentage = (value / max) * 100;

  return (
    <div className={`w-full bg-gray-200 rounded-full h-4 ${className}`}>
      <div
        className="bg-amber-600 h-4 rounded-full transition-all duration-500"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}