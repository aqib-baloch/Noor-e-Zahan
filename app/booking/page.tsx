"use client";

import React, { useState, Suspense } from "react";
import NavTabs from "@/components/animata/container/nav-tabs";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import {
  Clock,
  CheckCircle,
  Calendar as CalendarIcon,
  Sparkles,
  ShoppingBag,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import Modal from "@/components/animata/overlay/modal";
import { useRouter } from "next/navigation";

function BookingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const [selectedService, setSelectedService] = useState(() => {
    const product = searchParams.get("product");
    if (product) return `Pickup: ${product}`;
    return searchParams.get("service") || "Bridal Consultation";
  });

  const [productContext, setProductContext] = useState(() =>
    searchParams.get("product")
  );

  // Expanded Service List
  const serviceCategories = {
    "Bridal & Grooming": [
      "Royal Bridal",
      "Silver Bride",
      "Gold Barat",
      "Platinum Royal",
      "Bridal Consultation",
    ],
    Makeup: [
      "Party Makeup",
      "Party Makeup (Eye Focus)",
      "Mehndi Artistry",
      "Model Look",
    ],
    "Skin & Hair": [
      "HydraFacial",
      "Whitening Facial",
      "Hair Cut",
      "Keratin Treatment",
      "Rebonding",
    ],
  };

  const allServices = Object.values(serviceCategories).flat();

  // Modal State
  const [showConfirmation, setShowConfirmation] = useState(false);

  const generateSlots = () => {
    const slots = [];
    const startHour = 10;
    const endHour = 22;
    for (let i = startHour; i < endHour; i += 2) {
      const start = new Date(0, 0, 0, i).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      const end = new Date(0, 0, 0, i + 2).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      slots.push(`${start} - ${end}`);
    }
    return slots;
  };
  const availableSlots = generateSlots();

  const handleConfirm = () => {
    setShowConfirmation(true);
  };

  const css = `
    .rdp {
      --rdp-cell-size: 40px;
      --rdp-accent-color: #e11d48; 
      --rdp-background-color: #ffe4e6; 
      margin: 0;
    }
    .rdp-day_selected:not([disabled]) { 
      background-color: var(--rdp-accent-color);
      font-weight: bold;
    }
    .rdp-day_selected:hover:not([disabled]) { 
      background-color: #be123c; 
    }
    .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
        background-color: #fff1f2; 
    }
  `;

  return (
    <>
      <style>{css}</style>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-rose-900 mb-3">
              Book Your Experience
            </h1>
            <p className="text-neutral-500 text-lg">
              Reserve your exclusive session at Sargodha&apos;s premier studio.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* LEFT COLUMN: Service & Calendar */}
            <div className="w-full lg:w-5/12 space-y-8">
              {/* 1. Service Selection */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-rose-100">
                <h3 className="text-lg font-bold text-rose-900 mb-4 flex items-center gap-3">
                  <div className="bg-amber-100 text-amber-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
                    1
                  </div>
                  Choose Service
                </h3>

                {productContext && (
                  <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-center gap-3 text-amber-800">
                    <ShoppingBag size={20} />
                    <span className="text-sm font-medium">
                      Booking pickup for: <strong>{productContext}</strong>
                    </span>
                    <button
                      onClick={() => {
                        setProductContext(null);
                        setSelectedService("Bridal Consultation");
                      }}
                      className="ml-auto text-xs underline"
                    >
                      Clear
                    </button>
                  </div>
                )}

                <div className="space-y-4">
                  {Object.entries(serviceCategories).map(
                    ([category, items]) => (
                      <div key={category}>
                        <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                          {category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {items.map((s) => (
                            <button
                              key={s}
                              onClick={() => {
                                setSelectedService(s);
                                setProductContext(null);
                              }}
                              className={cn(
                                "px-3 py-2 rounded-lg text-xs font-medium border transition-all duration-200",
                                selectedService === s
                                  ? "border-amber-500 bg-amber-50 text-amber-900 shadow-sm ring-1 ring-amber-200"
                                  : "border-gray-200 hover:border-amber-300 text-gray-600 bg-gray-50/50"
                              )}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>

                {/* Show selected Custom/Product service if it's not in the list */}
                {!allServices.includes(selectedService) && (
                  <div className="mt-4 pt-4 border-t border-dashed border-gray-200">
                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                      Selected
                    </h4>
                    <button className="px-4 py-2 rounded-lg text-sm font-medium border border-amber-500 bg-amber-50 text-amber-900 shadow-sm ring-1 ring-amber-200">
                      {selectedService}
                    </button>
                  </div>
                )}
              </div>

              {/* 2. Calendar Selection */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-rose-100 flex flex-col items-center">
                <h3 className="text-lg font-bold text-rose-900 mb-6 flex items-center gap-3 w-full">
                  <div className="bg-amber-100 text-amber-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
                    2
                  </div>
                  Select Date
                </h3>
                <div className="border border-rose-100 rounded-2xl p-4 bg-white shadow-[0_4px_20px_-10px_rgba(225,29,72,0.1)]">
                  <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => {
                      setSelectedDate(date);
                      setSelectedSlot(null);
                    }}
                    disabled={[{ before: new Date() }]}
                  />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Slots & Summary */}
            <div className="w-full lg:w-7/12 space-y-8">
              {/* 3. Slot Selection */}
              <div
                className={cn(
                  "bg-white p-8 rounded-3xl shadow-sm border border-rose-100 transition-all duration-500",
                  !selectedDate
                    ? "opacity-60 pointer-events-none grayscale-[0.5]"
                    : "opacity-100"
                )}
              >
                <h3 className="text-lg font-bold text-rose-900 mb-6 flex items-center gap-3">
                  <div className="bg-amber-100 text-amber-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
                    3
                  </div>
                  Select Time Slot
                </h3>

                {!selectedDate ? (
                  <div className="py-12 flex flex-col items-center justify-center text-neutral-400 border-2 border-dashed border-gray-100 rounded-2xl bg-gray-50/50">
                    <CalendarIcon size={40} className="mb-3 opacity-20" />
                    <p>Please select a date from the calendar first.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {availableSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={cn(
                          "group relative flex items-center p-4 rounded-xl border-2 transition-all duration-200",
                          selectedSlot === slot
                            ? "border-rose-600 bg-rose-600 text-white shadow-lg scale-[1.02]"
                            : "border-gray-100 bg-white hover:border-rose-200 hover:shadow-md"
                        )}
                      >
                        <div
                          className={cn(
                            "p-2 rounded-full mr-3 transition-colors",
                            selectedSlot === slot
                              ? "bg-white/20 text-white"
                              : "bg-rose-50 text-rose-500 group-hover:bg-rose-100"
                          )}
                        >
                          <Clock size={18} />
                        </div>
                        <span className="font-semibold text-lg">{slot}</span>
                        {selectedSlot === slot && (
                          <div className="absolute right-4 top-1/2 -translate-y-1/2">
                            <CheckCircle size={20} className="text-white" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Confirm Button */}
              <button
                onClick={handleConfirm}
                disabled={!selectedDate || !selectedSlot}
                className="w-full bg-rose-900 hover:bg-rose-950 disabled:bg-neutral-300 disabled:cursor-not-allowed text-white text-lg font-bold py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 active:scale-[0.98] flex items-center justify-center gap-3 ring-4 ring-transparent hover:ring-rose-200"
              >
                <span>Confirm Appointment</span>
                <Sparkles
                  className={cn(
                    "w-5 h-5",
                    !selectedDate || !selectedSlot ? "hidden" : "block"
                  )}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Confirmation Modal */}
        <Modal
          isOpen={showConfirmation}
          onClose={() => setShowConfirmation(false)}
        >
          <div className="p-8 text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-rose-900 mb-2">
              Booking Confirmed!
            </h2>
            <p className="text-neutral-500 mb-8">
              We can&apos;t wait to see you.
            </p>

            <div className="bg-neutral-50 rounded-xl p-6 mb-8 text-left space-y-3 border border-neutral-100">
              <div className="flex justify-between">
                <span className="text-neutral-500">Service</span>
                <span className="font-bold text-rose-900">
                  {selectedService}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Date</span>
                <span className="font-bold text-rose-900">
                  {selectedDate && format(selectedDate, "MMM do, yyyy")}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Time</span>
                <span className="font-bold text-rose-900">{selectedSlot}</span>
              </div>
            </div>

            <button
              onClick={() => {
                setShowConfirmation(false);
                router.push("/");
              }}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-xl transition-colors"
            >
              Done
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default function BookingPage() {
  const tabs = [
    { text: "Home", href: "/" },
    { text: "Services", href: "/services" },
    { text: "Gallery", href: "/gallery" },
    { text: "Shop", href: "/shop" },
    { text: "Book Appointment", href: "/booking" },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-800">
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-100">
        <NavTabs tabs={tabs} />
      </div>
      <Suspense
        fallback={
          <div className="p-12 text-center text-rose-900">
            Loading booking experience...
          </div>
        }
      >
        <BookingContent />
      </Suspense>
    </div>
  );
}
