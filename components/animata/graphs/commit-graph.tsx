import React from "react";

interface CommitGraphProps {
  commits: boolean[][];
  className?: string;
}

export default function CommitGraph({ commits, className }: CommitGraphProps) {
  return (
    <div className={`grid grid-cols-7 gap-1 p-4 bg-white rounded-lg shadow ${className}`}>
      {commits.flat().map((hasCommit, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-sm ${
            hasCommit ? "bg-amber-600" : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
}