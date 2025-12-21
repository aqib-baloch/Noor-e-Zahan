import React from "react";

interface DonutChartProps {
  data: { label: string; value: number; color: string }[];
  className?: string;
}

export default function DonutChart({ data, className }: DonutChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  const paths = data.reduce((acc, item, index) => {
    const startAngle = (acc.cumulative / total) * 360;
    const endAngle = ((acc.cumulative + item.value) / total) * 360;
    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
    const x1 = 50 + 40 * Math.cos((startAngle * Math.PI) / 180);
    const y1 = 50 + 40 * Math.sin((startAngle * Math.PI) / 180);
    const x2 = 50 + 40 * Math.cos((endAngle * Math.PI) / 180);
    const y2 = 50 + 40 * Math.sin((endAngle * Math.PI) / 180);

    acc.paths.push(
      <path
        key={index}
        d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
        fill={item.color}
      />
    );
    acc.cumulative += item.value;
    return acc;
  }, { cumulative: 0, paths: [] as React.ReactElement[] });

  return (
    <div className={`relative w-32 h-32 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {paths.paths}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-bold">{total}</span>
      </div>
    </div>
  );
}