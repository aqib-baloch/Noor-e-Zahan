"use client";
import { ReactNode } from "react";
import {
  HTMLMotionProps,
  motion,
  useSpring,
  useTransform,
} from "framer-motion";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

interface FeatureCardProps extends HTMLMotionProps<"div"> {
  feature: {
    title: ReactNode;
    category: string;
    imageUrl: string;
    price?: string;
  };
  zIndexOffset?: number;
}

function FeatureCard({
  feature,
  className,
  zIndexOffset = 0,
  ...props
}: FeatureCardProps) {
  const router = useRouter();
  const { title, category, imageUrl, price } = feature;
  const springValue = useSpring(0, {
    bounce: 0,
  });
  const zIndex = useTransform(
    springValue,
    (value) => +Math.floor(value * 10) + 10 + zIndexOffset
  );
  const scale = useTransform(springValue, [0, 1], [1, 1.1]);

  const content = (
    <>
      <Image
        src={imageUrl}
        alt=""
        fill
        className="-z-1 absolute inset-0 h-full w-full object-cover"
      />
      <div className="z-10 flex h-full w-full flex-col gap-2 bg-gradient-to-t from-rose-950/80 from-15% to-transparent p-3">
        <div className="flex justify-between items-start">
          <small className="inline w-fit rounded-xl bg-amber-500/80 px-2 py-1 text-xs font-medium leading-none text-rose-950">
            {category}
          </small>
          {price && (
            <span className="text-white text-xs font-bold bg-black/40 px-2 py-1 rounded-full">
              {price}
            </span>
          )}
        </div>

        <div className="flex-1" />
        <h3 className="rounded-xl bg-white/10 p-2 text-sm font-bold leading-tight text-white backdrop-blur-sm border border-white/20">
          {title}
        </h3>

        <button
          onClick={(e) => {
            e.stopPropagation();

            router.push(
              `/shop?product=${encodeURIComponent(
                typeof title === "string" ? title : ""
              )}`
            );
          }}
          className="mt-1 w-full rounded-lg bg-rose-600 py-1.5 text-xs font-bold text-white shadow-md hover:bg-rose-500 transition-colors"
        >
          Book / Buy
        </button>
      </div>
    </>
  );

  const containerClassName = cn(
    "relative flex h-64 w-48 flex-col overflow-hidden rounded-2xl shadow-none transition-shadow duration-300 ease-in-out hover:shadow-xl border-2 border-transparent hover:border-amber-500/50",
    className
  );

  return (
    <>
      <motion.div
        onMouseEnter={() => springValue.set(1)}
        onMouseLeave={() => springValue.set(0)}
        style={{
          zIndex,
          scale,
        }}
        className={cn(containerClassName, "hidden sm:flex")}
        {...props}
      >
        {content}
      </motion.div>
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0, transition: { duration: 0.5 } }}
        className={cn(containerClassName, "flex sm:hidden")}
      >
        {content}
      </motion.div>
    </>
  );
}

export default function SalonProducts() {
  const yOffset = 30;
  const router = useRouter();

  // Image Paths
  const kitImage = "/images/gold_facial_kit_1766306419894.png";
  const shampooImage = "/images/keratin_shampoo_bottle_1766306434146.png";
  // Fallbacks for failed generations
  const oilImage =
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887&auto=format&fit=crop";
  const jewelleryImage =
    "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1915&auto=format&fit=crop";

  return (
    <section className="flex w-full flex-col items-center gap-4 py-10">
      <motion.header
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        }}
        className="flex max-w-md flex-col items-center gap-2 text-center"
      >
        <h1 className="text-3xl font-black text-rose-900 font-serif">
          Premium Care at Home
        </h1>
        <Balancer className="block text-lg text-neutral-600">
          Take the salon experience home with our curated luxurious products.
        </Balancer>
      </motion.header>

      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        }}
      >
        <button
          onClick={() => router.push("/shop")}
          className="bg-amber-500 hover:bg-amber-600 text-rose-950 font-bold py-3 px-8 rounded-full transition-all shadow-lg"
          role="button"
        >
          Shop Collection &rarr;
        </button>
      </motion.div>

      <div className="relative flex w-full flex-wrap justify-center gap-8 px-4 py-12 sm:flex-row sm:gap-0">
        <FeatureCard
          feature={{
            category: "Skincare",
            imageUrl: kitImage,
            title: "Gold Radiance Facial Kit",
            price: "PKR 4,500",
          }}
          initial={{ x: -40, y: yOffset, opacity: 0 }}
          animate={{
            x: -40,
            y: 0,
            opacity: 1,
            transition: { type: "spring", delay: 0.2 },
          }}
        />

        <FeatureCard
          feature={{
            category: "Hair Care",
            title: "Keratin Smooth Shampoo",
            imageUrl: shampooImage,
            price: "PKR 2,800",
          }}
          initial={{ x: -20, y: yOffset, opacity: 0 }}
          animate={{
            x: -20,
            y: -3,
            opacity: 1,
            transition: { type: "spring", delay: 0.4 },
          }}
          zIndexOffset={1}
        />

        <FeatureCard
          feature={{
            category: "Hair Care",
            title: "Organic Hair Oil",
            imageUrl: oilImage,
            price: "PKR 1,500",
          }}
          initial={{ x: 0, y: yOffset, opacity: 0 }}
          animate={{
            x: 0,
            y: 0,
            opacity: 1,
            transition: { type: "spring", delay: 0.6 },
          }}
        />

        <FeatureCard
          feature={{
            category: "Accessories",
            title: "Bridal Jewellery Set",
            imageUrl: jewelleryImage,
            price: "From PKR 15k",
          }}
          initial={{ x: 20, y: yOffset, opacity: 0 }}
          animate={{
            x: 20,
            y: 4,
            opacity: 1,
            transition: { type: "spring", delay: 0.8 },
          }}
          zIndexOffset={2}
        />

        <FeatureCard
          feature={{
            category: "Fragrance",
            title: "Rose & Oud Mist",
            imageUrl:
              "https://images.unsplash.com/photo-1595475207225-428b62bda831?q=80&w=2080&auto=format&fit=crop",
            price: "PKR 3,200",
          }}
          initial={{ x: 40, y: yOffset, opacity: 0 }}
          animate={{
            x: 40,
            y: -1,
            opacity: 1,
            transition: { type: "spring", delay: 1.0 },
          }}
          zIndexOffset={3}
        />
      </div>
    </section>
  );
}
