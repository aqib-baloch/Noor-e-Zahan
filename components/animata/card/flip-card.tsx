import { cn } from "@/lib/utils";
import Image from "next/image";

interface FlipCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  description: string;
  subtitle?: string;
  rotate?: "x" | "y";
  action?: React.ReactNode;
}

export default function FlipCard({
  image,
  title,
  description,
  subtitle,
  rotate = "y",
  className,
  action,
  ...props
}: FlipCardProps) {
  const rotationClass = {
    x: [
      "group-hover:[transform:rotateX(180deg)]",
      "[transform:rotateX(180deg)]",
    ],
    y: [
      "group-hover:[transform:rotateY(180deg)]",
      "[transform:rotateY(180deg)]",
    ],
  };
  const self = rotationClass[rotate];

  return (
    <div
      className={cn("group h-80 w-64 [perspective:1000px]", className)}
      {...props}
    >
      <div
        className={cn(
          "relative h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]",
          self[0]
        )}
      >
        {/* Front */}
        <div className="absolute h-full w-full [backface-visibility:hidden]">
          <Image
            src={image}
            alt="image"
            fill
            className="rounded-2xl object-cover shadow-2xl shadow-black/40"
          />
          <div className="absolute bottom-4 left-4 text-xl font-bold text-white shadow-black drop-shadow-md">
            {title}
          </div>
        </div>

        {/* Back */}
        <div
          className={cn(
            "absolute h-full w-full rounded-2xl bg-black/80 p-6 text-slate-200 [backface-visibility:hidden] flex flex-col",
            self[1]
          )}
        >
          <div className="flex-1 flex flex-col gap-2">
            <h1 className="text-xl font-bold text-white">{subtitle}</h1>
            <p className="mt-1 border-t border-t-gray-200/20 py-4 text-sm font-medium leading-relaxed text-gray-100">
              {description}
            </p>
          </div>
          {action && <div className="mt-auto">{action}</div>}
        </div>
      </div>
    </div>
  );
}
