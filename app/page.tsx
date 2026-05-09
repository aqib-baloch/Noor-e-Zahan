"use client";

import React, { useState } from "react";
import Image from "next/image";
import NavTabs from "@/components/animata/container/nav-tabs";
import ImageCarousel from "@/components/animata/carousel/image-carousel";
import CommentReplyCard from "@/components/animata/card/comment-reply-card";
import FlipCard from "@/components/animata/card/flip-card";
import Marquee from "@/components/animata/container/marquee";
import SalonProducts from "@/components/animata/hero/salon-products";
import ContactForm from "@/components/animata/widget/contact-form";

import {
  MessageCircle,
  X,
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Camera,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [showComments, setShowComments] = useState(false);

  const bridalImage = "/images/bridal_makeup_pakistan_1766305826576.png";
  const mehndiImage = "/images/mehndi_art_hands_1766305842529.png";
  const interiorImage = "/images/luxury_salon_interior_1766305856102.png";
  const facialImage = "/images/hydrafacial_treatment_1766305871701.png";

  const tabs = [
    { text: "Home", href: "/" },
    { text: "Services", href: "/services" },
    { text: "Gallery", href: "/gallery" },
    { text: "Shop", href: "/shop" },
    { text: "Book Appointment", href: "/booking" },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-800">
      <NavTabs tabs={tabs} />

      {/* Hero Section */}
      <div className="relative w-full overflow-hidden bg-rose-950 text-white">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full border border-amber-500/50 text-amber-500 text-sm font-medium tracking-wide mb-2">
              Sargodha&apos;s Premier Bridal Studio
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200 pb-2">
              Noor-e-Zahan
            </h1>
            <p className="text-lg md:text-2xl text-rose-100/90 max-w-xl mx-auto md:mx-0 font-light leading-relaxed">
              Experience the art of traditional beauty reimagined for the modern
              Pakistani woman. Where elegance meets royalty in the heart of
              Sargodha.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <button
                onClick={() => router.push("/booking")}
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-10 rounded-full transition-all shadow-[0_0_20px_rgba(217,119,6,0.5)]"
              >
                Book Appointment
              </button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-xl relative">
            <div className="absolute -inset-4 bg-amber-500/20 rounded-[2rem] blur-2xl"></div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-2 border-white/10 aspect-[3/4] md:h-[600px] w-full">
              <Image
                fill
                src={bridalImage}
                alt="Bridal Makeup"
                className="object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-14 flex flex-col gap-6 text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-rose-100 bg-rose-50 px-4 py-2 text-xs uppercase tracking-[0.28em] text-rose-500">
              <Camera size={14} />
              Curated Gallery
            </div>
            <h2 className="text-4xl font-serif font-bold text-rose-900 md:text-5xl">
              Our Masterpieces
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-neutral-500">
              Witness the transformation through bridal beauty, mehndi detail,
              skin rituals, and studio ambience. This section now introduces the
              visual story instead of showing an unrelated card interaction.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-rose-100 bg-gradient-to-br from-rose-950 via-rose-900 to-[#2e0717] p-6 text-white shadow-[0_24px_70px_rgba(120,22,58,0.18)] md:p-8">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.26em] text-amber-300">
                    Featured Visuals
                  </p>
                  <h3 className="mt-2 text-3xl font-serif font-semibold">
                    Looks worth pausing on
                  </h3>
                </div>
                <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-white/10 md:flex">
                  <Sparkles size={20} className="text-amber-300" />
                </div>
              </div>

              <ImageCarousel
                items={[
                  { id: 1, image: bridalImage, title: "Signature Bridal" },
                  { id: 2, image: mehndiImage, title: "Intricate Mehndi" },
                  { id: 3, image: facialImage, title: "HydraFacial Glow" },
                  { id: 4, image: interiorImage, title: "Luxury Ambience" },
                ]}
              />

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-4">
                  <p className="text-2xl font-semibold text-amber-300">Bridal</p>
                  <p className="mt-1 text-sm text-rose-100/75">
                    refined complexion, eyes, draping
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-4">
                  <p className="text-2xl font-semibold text-amber-300">Skin</p>
                  <p className="mt-1 text-sm text-rose-100/75">
                    glow-focused prep before the event
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-4">
                  <p className="text-2xl font-semibold text-amber-300">Salon</p>
                  <p className="mt-1 text-sm text-rose-100/75">
                    luxury ambience around the service
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              {[
                {
                  icon: WandSparkles,
                  title: "Bridal looks with structure",
                  text: "Every image is chosen to show finish quality, balance, and the signature Noor-e-Zahan styling language.",
                },
                {
                  icon: Camera,
                  title: "More than makeup shots",
                  text: "The gallery covers mehndi, skin care, jewellery finishing, and salon atmosphere so the brand feels complete.",
                },
                {
                  icon: Sparkles,
                  title: "Built for conversion",
                  text: "The section should move visitors from inspiration to action, so the content now reads like a showcase with direction.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-rose-100 bg-rose-50/45 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-rose-900 shadow-sm">
                    <item.icon size={20} />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-rose-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-neutral-600">
                    {item.text}
                  </p>
                </div>
              ))}

              <div className="rounded-[2rem] border border-amber-200 bg-gradient-to-r from-amber-50 via-rose-50 to-white p-6">
                <p className="text-sm uppercase tracking-[0.26em] text-rose-500">
                  Explore More
                </p>
                <h3 className="mt-2 text-3xl font-serif font-semibold text-rose-950">
                  Open the full visual portfolio
                </h3>
                <p className="mt-3 max-w-xl text-base leading-7 text-neutral-600">
                  Browse the revamped gallery page with featured visuals,
                  category filters, and larger previews for each look.
                </p>
                <button
                  onClick={() => router.push("/gallery")}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-rose-950 px-6 py-3 font-semibold text-white transition-colors hover:bg-rose-900"
                >
                  Visit Gallery
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Love - Moved Here */}
      <div className="py-16 bg-amber-50/50 border-y border-rose-100 relative z-20">
        <h2 className="text-2xl font-serif font-bold text-center text-rose-900 mb-8 opacity-80">
          Trusted by 10,000+ Happy Brides
        </h2>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="relative flex h-full max-h-24 w-full items-center justify-center overflow-hidden bg-transparent flex-col">
            <Marquee>
              <div className="mx-12 text-xl font-serif text-rose-800/80 font-medium italic">
                &quot;Absolutely loved my makeup!&quot; - Ayesha
              </div>
              <div className="mx-12 text-xl font-serif text-rose-800/80 font-medium italic">
                &quot;Best Salon in Sargodha&quot; - Fatima
              </div>
              <div className="mx-12 text-xl font-serif text-rose-800/80 font-medium italic">
                &quot;Highly Recommended&quot; - Zainab
              </div>
              <div className="mx-12 text-xl font-serif text-rose-800/80 font-medium italic">
                &quot;Professional Staff&quot; - Maryam
              </div>
              <div className="mx-12 text-xl font-serif text-rose-800/80 font-medium italic">
                &quot;Magic hands!&quot; - Hina
              </div>
            </Marquee>
          </div>
        </div>
      </div>

      {/* Flip Cards - Services Section */}
      <div className="py-32 px-4 bg-rose-50/50 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-center text-rose-900 flex flex-col items-center">
            <span>Signature Services</span>
            <span className="w-24 h-1 bg-amber-500 mt-6 rounded-full"></span>
          </h2>

          {/* Centering Wrapper */}
          <div className="flex flex-wrap justify-center gap-10">
              <FlipCard
              title="Royal Bridal"
              subtitle="The Complete Package"
              description="Includes premium skin prep, HD makeup, hairstyling, jewellery setting, and dupatta draping."
              image={bridalImage}
              rotate="y"
              className="h-96 w-72"
              action={
                <button 
                  onClick={(e) => {
                     e.stopPropagation();
                     // Redirect to Services page for details
                     router.push("/services");
                  }}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-rose-950 font-bold py-2 rounded-lg transition-colors"
                >
                  View Package
                </button>
              }
            />
            <FlipCard
              title="Mehndi Artistry"
              subtitle="Intricate & Dark"
              description="Customized henna designs for brides and guests. We use organic chemical-free henna."
              image={mehndiImage}
              rotate="y"
               className="h-96 w-72"
              action={
                 <button 
                   onClick={(e) => {
                     e.stopPropagation();
                     router.push("/services");
                   }}
                   className="w-full bg-amber-500 hover:bg-amber-600 text-rose-950 font-bold py-2 rounded-lg transition-colors"
                 >
                   View Designs
                 </button>
               }
            />
            <FlipCard
              title="Aesthetic Skin"
              subtitle="Glow from Within"
              description="Advanced facial treatments including HydraFacial, whitening facials, and anti-aging therapies."
              image={facialImage}
              rotate="y"
               className="h-96 w-72"
               action={
                 <button 
                   onClick={(e) => {
                     e.stopPropagation();
                     router.push("/services");
                   }}
                   className="w-full bg-amber-500 hover:bg-amber-600 text-rose-950 font-bold py-2 rounded-lg transition-colors"
                 >
                   View Treatments
                 </button>
               }
            />
            <FlipCard
              title="Hair Couture"
              subtitle="Cut, Color & Care"
              description="Trendy cuts, balayage, rebonding, and protein treatments. Transform your tresses."
              image="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1887&auto=format&fit=crop"
              rotate="y"
               className="h-96 w-72"
               action={
                 <button 
                   onClick={(e) => {
                     e.stopPropagation();
                     router.push("/services");
                   }}
                   className="w-full bg-amber-500 hover:bg-amber-600 text-rose-950 font-bold py-2 rounded-lg transition-colors"
                 >
                   View Styles
                 </button>
               }
            />
          </div>
        </div>
      </div>

      {/* Product/Salon Features */}
      <div className="py-20 px-4 bg-white">
        <SalonProducts />
      </div>

      {/* Booking Form Section */}
      <div className="py-20 px-4 bg-rose-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-rose-900 mb-12">
            Make an Appointment
          </h2>
          <ContactForm />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-rose-950 text-white py-16 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-amber-500">
              Noor-e-Zahan
            </h3>
            <p className="text-rose-200/80 text-sm leading-relaxed">
              Elevating beauty standards in Sargodha since 2010. We specialize
              in making your special moments unforgettable.
            </p>
            <div className="flex gap-4 pt-2">
              <Instagram className="text-amber-500 hover:text-white cursor-pointer transition-colors" />
              <Facebook className="text-amber-500 hover:text-white cursor-pointer transition-colors" />
              <Mail className="text-amber-500 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-rose-200/80 text-sm">
              <li className="hover:text-amber-500 cursor-pointer">
                Bridal Makeup
              </li>
              <li className="hover:text-amber-500 cursor-pointer">
                Party Makeup
              </li>
              <li className="hover:text-amber-500 cursor-pointer">
                Hair Styling & Color
              </li>
              <li className="hover:text-amber-500 cursor-pointer">
                Skincare Treatments
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-3 text-rose-200/80 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-500 mt-0.5 shrink-0" />
                <span>University Road, Satellite Town, Sargodha</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-500 shrink-0" />
                <span>+92 337 0683966</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-rose-200/80 text-sm mb-4">
              Subscribe to get latest offers and beauty tips.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-rose-900/50 border border-rose-800 rounded-l-lg px-4 py-2 text-sm w-full outline-none focus:border-amber-500"
              />
              <button className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-r-lg text-sm font-bold">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-12 pt-8 border-t border-rose-900 text-center text-rose-200/40 text-sm">
          © 2025 Noor-e-Zahan Beauty Lounge. All rights reserved.
        </div>
      </footer>

      {/* Floating Comment/Contact Button */}
      <button
        onClick={() => setShowComments(true)}
        className="fixed bottom-6 right-6 bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-xl z-50 hover:bg-green-700 transition-colors animate-bounce"
      >
        <MessageCircle size={28} />
      </button>

      {/* Comments Modal */}
      {showComments && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-2xl max-w-md w-full relative shadow-2xl border border-rose-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-serif font-bold text-rose-900">
                Latest Reviews
              </h3>
              <button
                onClick={() => setShowComments(false)}
                className="text-neutral-400 hover:text-rose-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <CommentReplyCard
              initialComments={[
                {
                  avatarColor: "#e11d48", // Rose Red
                  id: 1,
                  text: ["Best hydrafacial in the city! My skin is glowing."],
                  time: "2 hours ago",
                  user: "Sadia K.",
                },
                {
                  avatarColor: "#d97706", // Amber
                  id: 2,
                  text: [
                    "Loved my bridal makeup. Exactly what I wanted, traditional yet modern.",
                  ],
                  time: "1 day ago",
                  user: "Zara F.",
                },
              ]}
            />
            <div className="mt-4 text-center">
              <button className="text-sm text-rose-600 font-medium hover:underline">
                View all 145 reviews
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
