"use client";

import BlurryBlob from "@/components/animata/background/blurry-blob";

export function BackgroundLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-50 min-h-screen relative">
      <BlurryBlob firstBlobColor="bg-blue-800" secondBlobColor="bg-pink-800" />
      {children}
    </div>
  );
}
