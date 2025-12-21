import { ReactNode } from "react";
import {
  HTMLMotionProps,
  motion,
  useSpring,
  useTransform,
} from "framer-motion";
import Balancer from "react-wrap-balancer";
import Image from "next/image";

import { cn } from "@/lib/utils";

interface FeatureCardProps extends HTMLMotionProps<"div"> {
  feature: {
    title: ReactNode;
    category: string;
    imageUrl: string;
  };
  zIndexOffset?: number;
}

function FeatureCard({
  feature,
  className,
  zIndexOffset = 0,
  ...props
}: FeatureCardProps) {
  const { title, category, imageUrl } = feature;
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
      <div className="z-10 flex h-full w-full flex-col gap-2 bg-gradient-to-t from-zinc-800/40 from-15% to-transparent p-3">
        <small className="inline w-fit rounded-xl bg-orange-950 bg-opacity-50 px-2 py-1 text-xs font-medium leading-none text-white">
          {category}
        </small>

        <div className="flex-1" />
        <h3 className="rounded-xl bg-blue-950 bg-opacity-30 p-3 text-base font-bold leading-none text-white backdrop-blur-sm">
          {title}
        </h3>
      </div>
    </>
  );

  const containerClassName = cn(
    "relative flex h-64 w-48 flex-col overflow-hidden rounded-2xl shadow-none transition-shadow duration-300 ease-in-out hover:shadow-xl",
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

export default function ProductFeatures() {
  const yOffset = 30;

  return (
    <section className="storybook-fix flex w-full flex-col items-center gap-4 bg-orange-50 py-10">
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
        <h1 className="text-3xl font-black text-orange-600">
          Pots of Joy: Ceramic Chic!
        </h1>
        <Balancer className="block text-lg text-neutral-500">
          Quirky ceramics for happy spaces. From sleek vases to funky mugs,
          we&apos;ve got your shelves covered.
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
          className="box-border inline-block h-11 transform-gpu cursor-pointer touch-manipulation whitespace-nowrap rounded-full border-b-4 border-solid border-transparent bg-orange-600 px-4 py-3 text-center text-sm font-bold uppercase leading-5 tracking-wider text-white shadow-2xl outline-none transition-all duration-200 hover:brightness-110 active:border-b-0 active:border-t-4 active:bg-none disabled:cursor-auto"
          role="button"
        >
          Ready to clay &rarr;
          <span className="absolute inset-0 -z-10 rounded-full border-b-4 border-solid border-transparent bg-orange-500" />
        </button>
      </motion.div>

      <div className="relative flex w-full flex-wrap justify-center gap-8 px-4 py-12 sm:flex-row sm:gap-0">
        <FeatureCard
          feature={{
            category: "Vases",
            imageUrl:
              "https://assets.lummi.ai/assets/QmSxHGeLuiXMzUSFM9hhVJToRXVeQCBEtno96zgAXB3uVN?auto=format&w=400",
            title: "Elegant Swirling Glass Vase",
          }}
          initial={{
            x: -40,
            y: yOffset,
            opacity: 0,
          }}
          animate={{
            x: -40,
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              delay: 0.2,
            },
          }}
        />

        <FeatureCard
          feature={{
            category: "Jugs",
            title: "Artisanal Ceramic Jug",
            imageUrl:
              "https://assets.lummi.ai/assets/QmaUXibkkKYu6Y3TzwE71ytVrPqecXiG4URAPZuqqzxz6R?auto=format&w=400",
          }}
          initial={{
            x: -20,
            y: yOffset,
            opacity: 0,
          }}
          animate={{
            x: -20,
            y: -3,
            opacity: 1,
            transition: {
              type: "spring",
              delay: 0.4,
            },
          }}
          zIndexOffset={1}
        />

        <FeatureCard
          feature={{
            category: "Bottles",
            title: "Colorful Gradient Glass Bottle",
            imageUrl:
              "https://assets.lummi.ai/assets/QmYXzaoAXsA71sz3Uv3fXytMKDoBHs1twQN3eCcrvr7AJf?auto=format&w=400",
          }}
          initial={{
            x: 0,
            y: yOffset,
            opacity: 0,
          }}
          animate={{
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              delay: 0.6,
            },
          }}
        />

        <FeatureCard
          feature={{
            category: "Mugs",
            title: "Funky Ceramic Mug",
            imageUrl:
              "https://assets.lummi.ai/assets/QmSxHGeLuiXMzUSFM9hhVJToRXVeQCBEtno96zgAXB3uVN?auto=format&w=400",
          }}
          initial={{
            x: 20,
            y: yOffset,
            opacity: 0,
          }}
          animate={{
            x: 20,
            y: 4,
            opacity: 1,
            transition: {
              type: "spring",
              delay: 0.8,
            },
          }}
          zIndexOffset={2}
        />

        <FeatureCard
          feature={{
            category: "Bowls",
            title: "Handcrafted Ceramic Bowl",
            imageUrl:
              "https://assets.lummi.ai/assets/QmaUXibkkKYu6Y3TzwE71ytVrPqecXiG4URAPZuqqzxz6R?auto=format&w=400",
          }}
          initial={{
            x: 40,
            y: yOffset,
            opacity: 0,
          }}
          animate={{
            x: 40,
            y: -1,
            opacity: 1,
            transition: {
              type: "spring",
              delay: 1.0,
            },
          }}
          zIndexOffset={3}
        />

        <FeatureCard
          feature={{
            category: "Plates",
            title: "Elegant Ceramic Plate",
            imageUrl:
              "https://assets.lummi.ai/assets/QmYXzaoAXsA71sz3Uv3fXytMKDoBHs1twQN3eCcrvr7AJf?auto=format&w=400",
          }}
          initial={{
            x: 60,
            y: yOffset,
            opacity: 0,
          }}
          animate={{
            x: 60,
            y: -3,
            opacity: 1,
            transition: {
              type: "spring",
              delay: 1.2,
            },
          }}
          zIndexOffset={4}
        />

        <FeatureCard
          feature={{
            category: "Cups",
            title: "Delicate Porcelain Cup",
            imageUrl:
              "https://assets.lummi.ai/assets/QmSxHGeLuiXMzUSFM9hhVJToRXVeQCBEtno96zgAXB3uVN?auto=format&w=400",
          }}
          initial={{
            x: 80,
            y: yOffset,
            opacity: 0,
          }}
          animate={{
            x: 80,
            y: 3,
            opacity: 1,
            transition: {
              type: "spring",
              delay: 1.4,
            },
          }}
          zIndexOffset={5}
        />
      </div>
    </section>
  );
}
