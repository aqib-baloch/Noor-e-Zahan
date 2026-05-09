"use client";

import React, { useState, useMemo, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import NavTabs from "@/components/animata/container/nav-tabs";
import Modal from "@/components/animata/overlay/modal";
import { ShoppingBag, Star, MessageCircle } from "lucide-react";

function ShopContent() {
  const searchParams = useSearchParams();
  const tabs = [
    { text: "Home", href: "/" },
    { text: "Services", href: "/services" },
    { text: "Gallery", href: "/gallery" },
    { text: "Shop", href: "/shop" },
    { text: "Book Appointment", href: "/booking" },
  ];

  const products = useMemo(
    () => [
      {
        id: 1,
        title: "Gold Radiance Facial Kit",
        category: "Skincare",
        price: "4,500 PKR",
        image: "/images/gold_facial_kit_1766306419894.png",
        rating: 4.8,
        description:
          "Achieve a salon-like glow with our 24K Gold Facial Kit. Includes cleanser, scrub, massage cream, mask, and serum.",
      },
      {
        id: 2,
        title: "Keratin Smooth Shampoo",
        category: "Hair Care",
        price: "2,800 PKR",
        image: "/images/keratin_shampoo_bottle_1766306434146.png",
        rating: 4.9,
        description:
          "Sulfate-free keratin shampoo that tames frizz and adds shine. Perfect for treated hair.",
      },
      {
        id: 3,
        title: "Organic Hair Oil",
        category: "Hair Care",
        price: "1,500 PKR",
        image:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=2670&auto=format&fit=crop",
        rating: 4.7,
        description:
          "A blend of 7 essential oils to boost hair growth and reduce fall. 100% organic.",
      },
      {
        id: 4,
        title: "Bridal Jewellery Set",
        category: "Accessories",
        price: "12,000 PKR",
        image:
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop",
        rating: 5.0,
        description:
          "Exquisite Kundan set available for rent or purchase. Includes necklace, earrings, and teeka.",
      },
      {
        id: 5,
        title: "Hydrating Face Mist",
        category: "Skincare",
        price: "950 PKR",
        image:
          "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1887&auto=format&fit=crop",
        rating: 4.6,
        description:
          "Rose water and aloe vera mist for instant hydration and freshness.",
      },
      {
        id: 6,
        title: "Matte Lipstick Set",
        category: "Makeup",
        price: "3,200 PKR",
        image:
          "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1887&auto=format&fit=crop",
        rating: 4.8,
        description:
          "Long-lasting matte liquid lipsticks in 6 nude and bold shades.",
      },
    ],
    []
  );

  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[0] | null
  >(null);

  React.useEffect(() => {
    const productParam = searchParams.get("product");
    if (productParam) {
      const foundProduct = products.find((p) => p.title === productParam);
      if (foundProduct) {
        setSelectedProduct(foundProduct);
      }
    }
  }, [searchParams, products]);

  const handleBuy = (product: (typeof products)[0]) => {
    const message = `Hi Noor-e-Zahan, I would like to order *${product.title}* (Price: ${product.price}). Please let me know the availability.`;
    const whatsappUrl = `https://wa.me/923370683966?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-800">
      <NavTabs tabs={tabs} />

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-center text-rose-900 mb-4">
          Shop Essentials
        </h1>
        <p className="text-center text-neutral-500 mb-12 max-w-2xl mx-auto">
          Take the salon experience home with our premium curated products.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-rose-50 flex flex-col group"
            >
              <div className="h-64 overflow-hidden relative">
                <Image
                  fill
                  src={product.image}
                  alt={product.title}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold text-amber-600 flex items-center gap-1">
                  <Star size={12} className="fill-amber-500 text-amber-500" />{" "}
                  {product.rating}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-2">
                  {product.category}
                </div>
                <h3 className="text-xl font-serif font-bold text-neutral-900 mb-2">
                  {product.title}
                </h3>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-amber-600">
                    {product.price}
                  </span>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="bg-rose-950 text-white p-3 rounded-full hover:bg-rose-800 transition-colors"
                  >
                    <ShoppingBag size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Detail Modal */}
        <Modal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          className="p-0 max-w-2xl"
        >
          {selectedProduct && (
            <div className="flex flex-col md:flex-row h-full">
              <div className="w-full md:w-1/2 relative h-64 md:h-auto min-h-[300px] bg-gray-100">
                <Image
                  fill
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 p-8 flex flex-col">
                <div className="text-xs font-bold text-rose-500 uppercase tracking-wider mb-2">
                  {selectedProduct.category}
                </div>
                <h2 className="text-2xl font-serif font-bold text-rose-900 mb-2">
                  {selectedProduct.title}
                </h2>
                <div className="flex items-center gap-2 mb-6">
                  <Star size={16} className="fill-amber-400 text-amber-400" />
                  <span className="font-bold text-neutral-700">
                    {selectedProduct.rating}
                  </span>
                </div>

                <p className="text-neutral-600 mb-8 leading-relaxed">
                  {selectedProduct.description}
                </p>

                <div className="mt-auto">
                  <div className="text-3xl font-bold text-amber-600 mb-6">
                    {selectedProduct.price}
                  </div>
                  <button
                    onClick={() => handleBuy(selectedProduct)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle size={20} />
                    Order on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
          <div className="text-center text-rose-900">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-900 mx-auto mb-4"></div>
            Loading shop...
          </div>
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
