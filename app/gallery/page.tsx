"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Camera,
  Images,
  Sparkles,
  WandSparkles,
} from "lucide-react";

import NavTabs from "@/components/animata/container/nav-tabs";
import Modal from "@/components/animata/overlay/modal";
import { cn } from "@/lib/utils";

type GalleryImage = {
  src: string;
  alt: string;
  category: "Bridal" | "Mehndi" | "Salon" | "Skin" | "Editorial";
  span: string;
  blurb: string;
};

const tabs = [
  { text: "Home", href: "/" },
  { text: "Services", href: "/services" },
  { text: "Gallery", href: "/gallery" },
  { text: "Shop", href: "/shop" },
  { text: "Book Appointment", href: "/booking" },
];

const images: GalleryImage[] = [
  {
    src: "/images/bridal_makeup_pakistan_1766305826576.png",
    alt: "Signature Bridal Makeup",
    category: "Bridal",
    span: "md:col-span-2 md:row-span-2",
    blurb: "Soft sculpting, regal tones, and camera-ready bridal finishing.",
  },
  {
    src: "/images/mehndi_art_hands_1766305842529.png",
    alt: "Intricate Mehndi Design",
    category: "Mehndi",
    span: "",
    blurb: "Fine-line detailing designed for ceremonies and close-up moments.",
  },
  {
    src: "/images/luxury_salon_interior_1766305856102.png",
    alt: "Salon Interior",
    category: "Salon",
    span: "",
    blurb: "A calm, polished studio atmosphere built around bridal prep.",
  },
  {
    src: "/images/hydrafacial_treatment_1766305871701.png",
    alt: "HydraFacial Treatment",
    category: "Skin",
    span: "md:row-span-2",
    blurb: "Skin treatments focused on glow, texture, and event-day freshness.",
  },
  {
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1887&auto=format&fit=crop",
    alt: "Hair Styling",
    category: "Editorial",
    span: "",
    blurb: "Structured volume and styling shaped for long event wear.",
  },
  {
    src: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=2070&auto=format&fit=crop",
    alt: "Eye Makeup Detail",
    category: "Bridal",
    span: "md:col-span-2",
    blurb: "Precision eye work with shimmer, balance, and statement definition.",
  },
  {
    src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop",
    alt: "Manicure",
    category: "Skin",
    span: "",
    blurb: "Clean finishing details that complete the overall look.",
  },
  {
    src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop",
    alt: "Bridal Jewellery",
    category: "Editorial",
    span: "",
    blurb: "Accessory styling curated to reinforce the final bridal story.",
  },
];

const filters = ["All", "Bridal", "Mehndi", "Salon", "Skin", "Editorial"] as const;

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = useMemo(() => {
    if (activeFilter === "All") return images;
    return images.filter((image) => image.category === activeFilter);
  }, [activeFilter]);

  const featuredImage = filteredImages[0] ?? images[0];

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-800">
      <NavTabs tabs={tabs} />

      <div className="px-4 pb-28 pt-4 md:pb-12 md:pt-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-8">
          <section className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-rose-950 via-rose-900 to-[#2e0717] text-white shadow-[0_24px_80px_rgba(80,7,36,0.18)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.28),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(244,114,182,0.18),transparent_28%)]" />
            <div className="relative grid gap-10 px-6 py-8 md:grid-cols-[1.05fr_0.95fr] md:px-10 md:py-10">
              <div className="flex flex-col justify-between gap-8">
                <div className="space-y-5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-amber-200">
                    <Camera size={14} />
                    Visual Portfolio
                  </div>
                  <div className="space-y-4">
                    <h1 className="max-w-2xl font-serif text-4xl font-bold leading-tight md:text-6xl">
                      A gallery shaped like a bridal story, not a basic grid.
                    </h1>
                    <p className="max-w-xl text-sm leading-7 text-rose-100/80 md:text-base">
                      Explore signature bridal looks, henna detail, studio
                      ambience, and finishing work. The theme stays refined;
                      the experience now feels more curated and easier to scan.
                    </p>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-[1.5rem] border border-white/12 bg-white/10 p-4">
                    <p className="text-2xl font-semibold text-amber-300">120+</p>
                    <p className="mt-1 text-sm text-rose-100/70">
                      bridal transformations documented
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/12 bg-white/10 p-4">
                    <p className="text-2xl font-semibold text-amber-300">5</p>
                    <p className="mt-1 text-sm text-rose-100/70">
                      experience zones inside one collection
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/12 bg-white/10 p-4">
                    <p className="text-2xl font-semibold text-amber-300">1 tap</p>
                    <p className="mt-1 text-sm text-rose-100/70">
                      to open each visual in detail
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
                <button
                  onClick={() => setSelectedImage(featuredImage)}
                  className="group relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 text-left"
                >
                  <Image
                    fill
                    src={featuredImage.src}
                    alt={featuredImage.alt}
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1 text-xs uppercase tracking-[0.22em] text-amber-200 backdrop-blur-md">
                      <WandSparkles size={14} />
                      Featured
                    </div>
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="font-serif text-2xl font-semibold">
                          {featuredImage.alt}
                        </p>
                        <p className="mt-2 max-w-sm text-sm text-white/78">
                          {featuredImage.blurb}
                        </p>
                      </div>
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/14 backdrop-blur-md">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>
                  </div>
                </button>

                <div className="grid gap-4">
                  {[
                    {
                      icon: Sparkles,
                      title: "Refined journey",
                      text: "Intro, filter, then browse. The page now guides the eye instead of dumping every image at once.",
                    },
                    {
                      icon: Images,
                      title: "Cards preserved",
                      text: "Rounded image cards, rose and amber palette, and soft luxury mood are kept intact.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.75rem] border border-white/12 bg-white/10 p-5 backdrop-blur-md"
                    >
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/12">
                        <item.icon size={18} className="text-amber-200" />
                      </div>
                      <p className="font-serif text-xl">{item.title}</p>
                      <p className="mt-2 text-sm leading-6 text-rose-100/72">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border border-rose-100/80 bg-white/80 p-5 shadow-[0_16px_50px_rgba(122,33,66,0.08)] backdrop-blur-xl md:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-rose-400">
                  Curated Collection
                </p>
                <h2 className="mt-2 font-serif text-3xl font-bold text-rose-950 md:text-4xl">
                  Browse by moment, not just by image.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-neutral-500">
                The filtering improves mobile browsing and keeps the gallery
                from feeling heavy. Tap any card to open a larger preview.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-all",
                    activeFilter === filter
                      ? "bg-rose-950 text-white shadow-lg"
                      : "bg-rose-50 text-rose-900 hover:bg-rose-100"
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="mt-3 text-sm text-neutral-500">
              Showing {filteredImages.length} visual
              {filteredImages.length === 1 ? "" : "s"} in {activeFilter}.
            </div>

            <div className="mt-8 grid auto-rows-[260px] grid-cols-1 gap-4 md:grid-cols-3">
              {filteredImages.map((img) => (
                <button
                  key={`${img.src}-${img.alt}`}
                  onClick={() => setSelectedImage(img)}
                  className={cn(
                    "group relative overflow-hidden rounded-[1.75rem] border border-rose-100 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                    img.span
                  )}
                >
                  <Image
                    fill
                    src={img.src}
                    alt={img.alt}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/18 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="mb-3 inline-flex rounded-full bg-white/12 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-amber-200 backdrop-blur-md">
                      {img.category}
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-white">
                      {img.alt}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-white/72">
                      {img.blurb}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>

      <Modal
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        className="max-w-4xl rounded-[2rem] bg-[#16060d]"
      >
        {selectedImage && (
          <div className="grid gap-0 md:grid-cols-[1.25fr_0.75fr]">
            <div className="relative min-h-[420px]">
              <Image
                fill
                src={selectedImage.src}
                alt={selectedImage.alt}
                sizes="(max-width: 768px) 100vw, 70vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-end bg-gradient-to-br from-rose-950 via-[#2d0717] to-amber-700/90 p-6 text-white">
              <p className="text-xs uppercase tracking-[0.28em] text-amber-200">
                {selectedImage.category}
              </p>
              <h3 className="mt-3 font-serif text-3xl font-semibold">
                {selectedImage.alt}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/76">
                {selectedImage.blurb}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
