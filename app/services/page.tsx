"use client";

import React from "react";
import { useRouter } from "next/navigation";
import NavTabs from "@/components/animata/container/nav-tabs";
import { Check, Star } from "lucide-react";

export default function ServicesPage() {
  const router = useRouter();
  const tabs = [
    { text: "Home", href: "/" },
    { text: "Services", href: "/services" },
    { text: "Gallery", href: "/gallery" },
    { text: "Shop", href: "/shop" }, // Placeholder for now
    { text: "Book Appointment", href: "/booking" },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-800">
      <NavTabs tabs={tabs} />

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-center text-rose-900 mb-4">
          Services & Pricing
        </h1>
        <p className="text-center text-neutral-500 mb-12 max-w-2xl mx-auto">
          Tailored packages for the Sargodha beauty market. Experience luxury at competitive rates.
        </p>

        {/* Bridal Packages */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-center text-amber-600 mb-10 flex items-center justify-center gap-2">
            <Star className="fill-amber-500 text-amber-500" size={24} /> Bridal Lounge
            <Star className="fill-amber-500 text-amber-500" size={24} />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Silver Plan */}
            <div className="bg-white rounded-2xl shadow-lg border border-rose-100 p-8 hover:shadow-xl transition-all hover:scale-105">
              <h3 className="text-2xl font-bold text-rose-900 mb-2">Silver Bride</h3>
              <p className="text-neutral-500 text-sm mb-6">Perfect for Nikkah or Engagement</p>
              <div className="text-4xl font-bold text-amber-600 mb-6">PKR 15,000</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-neutral-700"><Check size={16} className="text-green-500" /> Signature Soft Makeup</li>
                <li className="flex items-center gap-2 text-sm text-neutral-700"><Check size={16} className="text-green-500" /> Standard Hairstyling</li>
                <li className="flex items-center gap-2 text-sm text-neutral-700"><Check size={16} className="text-green-500" /> Nail Paint Application</li>
                <li className="flex items-center gap-2 text-sm text-neutral-700"><Check size={16} className="text-green-500" /> Jewelry Setting</li>
              </ul>
              <button 
                onClick={() => router.push("/booking?service=Silver Bride")}
                className="w-full py-3 rounded-lg border-2 border-rose-900 text-rose-900 font-bold hover:bg-rose-900 hover:text-white transition-colors"
              >
                Choose Silver
              </button>
            </div>

            {/* Gold Plan */}
            <div className="bg-rose-950 text-white rounded-2xl shadow-xl p-8 transform scale-105 relative overflow-hidden">
               <div className="absolute top-0 right-0 bg-amber-500 text-rose-950 text-xs font-bold px-3 py-1 rounded-bl-lg">MOST POPULAR</div>
              <h3 className="text-2xl font-bold text-amber-500 mb-2">Gold Barat</h3>
              <p className="text-rose-200 text-sm mb-6">The Classic Red Bridal Look</p>
              <div className="text-4xl font-bold text-white mb-6">PKR 30,000</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-rose-50"><Check size={16} className="text-amber-500" /> HD Bridal Makeup</li>
                <li className="flex items-center gap-2 text-sm text-rose-50"><Check size={16} className="text-amber-500" /> Premium Hairstyling (Extensions inc.)</li>
                <li className="flex items-center gap-2 text-sm text-rose-50"><Check size={16} className="text-amber-500" /> 3D Lashes</li>
                <li className="flex items-center gap-2 text-sm text-rose-50"><Check size={16} className="text-amber-500" /> Dupatta Draping & Styling</li>
                <li className="flex items-center gap-2 text-sm text-rose-50"><Check size={16} className="text-amber-500" /> Hand & Feet Polish</li>
              </ul>
              <button 
                onClick={() => router.push("/booking?service=Gold Barat")}
                className="w-full py-3 rounded-lg bg-amber-500 text-rose-950 font-bold hover:bg-amber-400 transition-colors"
              >
                Book Gold Plan
              </button>
            </div>

            {/* Platinum Plan */}
            <div className="bg-white rounded-2xl shadow-lg border border-rose-100 p-8 hover:shadow-xl transition-all hover:scale-105">
              <h3 className="text-2xl font-bold text-rose-900 mb-2">Platinum Royal</h3>
              <p className="text-neutral-500 text-sm mb-6">Complete Walima/Barat Luxury</p>
              <div className="text-4xl font-bold text-amber-600 mb-6">PKR 50,000</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-neutral-700"><Check size={16} className="text-green-500" /> Airbrush 4K Makeup</li>
                <li className="flex items-center gap-2 text-sm text-neutral-700"><Check size={16} className="text-green-500" /> HydraFacial Session (Pre-Event)</li>
                <li className="flex items-center gap-2 text-sm text-neutral-700"><Check size={16} className="text-green-500" /> Full Body Waxing</li>
                <li className="flex items-center gap-2 text-sm text-neutral-700"><Check size={16} className="text-green-500" /> Premium Mani-Pedi</li>
                <li className="flex items-center gap-2 text-sm text-neutral-700"><Check size={16} className="text-green-500" /> Exclusive Lounge Access</li>
              </ul>
              <button 
                onClick={() => router.push("/booking?service=Platinum Royal")}
                className="w-full py-3 rounded-lg border-2 border-rose-900 text-rose-900 font-bold hover:bg-rose-900 hover:text-white transition-colors"
              >
                Choose Platinum
              </button>
            </div>
          </div>
        </div>

        {/* Regular Service List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           <div className="bg-white p-8 rounded-xl border-l-4 border-amber-500 shadow-sm">
               <h3 className="text-2xl font-serif font-bold text-rose-900 mb-6">Party & Glam</h3>
               <ul className="space-y-4">
                   <li className="flex justify-between items-center border-b border-dashed border-gray-200 pb-2">
                       <span className="font-medium">Party Makeup (Eye Focus)</span>
                       <span className="text-amber-600 font-bold">1,500 PKR</span>
                   </li>
                    <li className="flex justify-between items-center border-b border-dashed border-gray-200 pb-2">
                       <span className="font-medium">Party Makeup (Full Glam)</span>
                       <span className="text-amber-600 font-bold">3,500 PKR</span>
                   </li>
                    <li className="flex justify-between items-center border-b border-dashed border-gray-200 pb-2">
                       <span className="font-medium">Model Look / Shoot</span>
                       <span className="text-amber-600 font-bold">8,000 PKR</span>
                   </li>
               </ul>
           </div>

            <div className="bg-white p-8 rounded-xl border-l-4 border-rose-500 shadow-sm">
               <h3 className="text-2xl font-serif font-bold text-rose-900 mb-6">Hair & Skin Care</h3>
               <ul className="space-y-4">
                   <li className="flex justify-between items-center border-b border-dashed border-gray-200 pb-2">
                       <span className="font-medium">Whitening Facial (Janssen)</span>
                       <span className="text-amber-600 font-bold">3,000 PKR</span>
                   </li>
                    <li className="flex justify-between items-center border-b border-dashed border-gray-200 pb-2">
                       <span className="font-medium">HydraFacial (7 Steps)</span>
                       <span className="text-amber-600 font-bold">4,500 PKR</span>
                   </li>
                    <li className="flex justify-between items-center border-b border-dashed border-gray-200 pb-2">
                       <span className="font-medium">Keratin Treatment (Shoulder)</span>
                       <span className="text-amber-600 font-bold">12,000+ PKR</span>
                   </li>
                    <li className="flex justify-between items-center border-b border-dashed border-gray-200 pb-2">
                       <span className="font-medium">Rebonding / Extenso</span>
                       <span className="text-amber-600 font-bold">15,000+ PKR</span>
                   </li>
               </ul>
           </div>
        </div>
      </div>
    </div>
  );
}
