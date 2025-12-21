"use client";

import React from "react";
import Image from "next/image";
import NavTabs from "@/components/animata/container/nav-tabs";

export default function GalleryPage() {
  const tabs = [
    { text: "Home", href: "/" },
    { text: "Services", href: "/services" },
    { text: "Gallery", href: "/gallery" },
    { text: "Shop", href: "/shop" },
    { text: "Book Appointment", href: "/booking" },
  ];

  const images = [
    {
      src: "/images/bridal_makeup_pakistan_1766305826576.png",
      alt: "Signature Bridal Makeup",
      span: "row-span-2",
    },
    {
      src: "/images/mehndi_art_hands_1766305842529.png",
      alt: "Intricate Mehndi Design",
      span: "col-span-1",
    },
    {
      src: "/images/luxury_salon_interior_1766305856102.png",
      alt: "Salon Interior",
      span: "col-span-1",
    },
    {
      src: "/images/hydrafacial_treatment_1766305871701.png",
      alt: "HydraFacial Treatment",
      span: "row-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1887&auto=format&fit=crop",
      alt: "Hair Styling",
      span: "col-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=2070&auto=format&fit=crop",
      alt: "Eye Makeup Detail",
      span: "col-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop",
      alt: "Manicure",
      span: "col-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop",
      alt: "Bridal Jewellery",
      span: "col-span-1",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-800">
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-100">
        <NavTabs tabs={tabs} />
      </div>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-center text-rose-900 mb-4">
          Our Masterpieces
        </h1>
        <p className="text-center text-neutral-500 mb-12 max-w-2xl mx-auto">
          A glimpse into the artistry and elegance we create every day at
          Noor-e-Zahan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl overflow-hidden group ${img.span}`}
            >
              <Image
                fill
                src={img.src}
                alt={img.alt}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-serif text-lg font-medium">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
