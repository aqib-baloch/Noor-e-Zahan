"use client";

import React, { useState, Suspense } from "react";
import NavTabs from "@/components/animata/container/nav-tabs";
import { format } from "date-fns";
import {
  CheckCircle,
  Calendar as CalendarIcon,
  Sparkles,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import Modal from "@/components/animata/overlay/modal";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import SlideArrowButton from "@/components/animata/button/slide-arrow-button";
import ServiceTabs from "@/components/animata/booking-flow/ServiceTabs";
import BookingCalendar from "@/components/animata/booking-flow/BookingCalendar";
import TimeSlots from "@/components/animata/booking-flow/TimeSlots";
import CustomerDetailsForm from "@/components/animata/booking-flow/CustomerDetailsForm";

function BookingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Booking State
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("Bridal & Grooming");
  const [selectedService, setSelectedService] = useState(() => {
    return searchParams.get("service") || "";
  });

  // User Details State
  const [userDetails, setUserDetails] = useState({
    name: "",
    phone: "",
    paymentMethod: "cod",
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

  // Data
  const serviceCategories: Record<string, string[]> = {
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

  const isFormValid =
    selectedService &&
    selectedDate &&
    selectedSlot &&
    userDetails.name.trim().length >= 3 &&
    userDetails.phone.trim().length >= 10;

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-rose-900 mb-3">
            Book Your Experience
          </h1>
          <p className="text-neutral-500 text-lg flex items-center justify-center gap-2">
            <MapPin size={18} className="text-rose-500" />
            Sargodha&apos;s Premier Beauty Studio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Service & Calendar (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Service Selection */}
            <section className="bg-white p-6 rounded-3xl shadow-sm border border-rose-100">
              <h3 className="text-lg font-bold text-rose-900 mb-4 flex items-center gap-3">
                <div className="bg-amber-100 text-amber-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
                  1
                </div>
                Choose Service
              </h3>

              <ServiceTabs
                categories={Object.keys(serviceCategories)}
                selectedCategory={selectedCategory}
                onSelect={setSelectedCategory}
              />

              <div className="flex flex-wrap gap-2 animate-in fade-in duration-300">
                {serviceCategories[selectedCategory].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedService(s)}
                    className={cn(
                      "px-3 py-2 rounded-lg text-sm font-medium border transition-all duration-200 text-left",
                      selectedService === s
                        ? "border-amber-500 bg-amber-50 text-amber-900 shadow-sm ring-1 ring-amber-200"
                        : "border-gray-200 hover:border-amber-300 text-gray-600 bg-gray-50/50"
                    )}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </section>

            {/* Calendar */}
            <section className="bg-white p-6 rounded-3xl shadow-sm border border-rose-100 flex flex-col items-center">
              <h3 className="text-lg font-bold text-rose-900 mb-4 flex items-center gap-3 w-full">
                <div className="bg-amber-100 text-amber-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
                  2
                </div>
                Select Date
              </h3>
              <BookingCalendar
                selectedDate={selectedDate}
                onSelect={(date) => {
                  setSelectedDate(date);
                  setSelectedSlot(null);
                }}
              />
            </section>
          </div>

          {/* RIGHT COLUMN: Time & Details (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Time Slots */}
            <section
              className={cn(
                "bg-white p-8 rounded-3xl shadow-sm border border-rose-100 transition-all duration-300",
                !selectedDate
                  ? "opacity-60 grayscale-[0.5] pointer-events-none"
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
                  <p>Select a date to view available times</p>
                </div>
              ) : (
                <TimeSlots
                  slots={availableSlots}
                  selectedSlot={selectedSlot}
                  onSelect={setSelectedSlot}
                />
              )}
            </section>

            {/* Customer Details */}
            <AnimatePresence>
              {selectedSlot && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-rose-100"
                >
                  <h3 className="text-lg font-bold text-rose-900 mb-6 flex items-center gap-3">
                    <div className="bg-amber-100 text-amber-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
                      4
                    </div>
                    Confirm Details
                  </h3>

                  <CustomerDetailsForm
                    name={userDetails.name}
                    phone={userDetails.phone}
                    paymentMethod={userDetails.paymentMethod}
                    onChange={(field, value) =>
                      setUserDetails((prev) => ({ ...prev, [field]: value }))
                    }
                  />

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <button
                      onClick={handleConfirm}
                      disabled={!isFormValid}
                      className="w-full bg-rose-900 hover:bg-rose-950 disabled:bg-neutral-300 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                      Confirm Appointment
                      {isFormValid && <Sparkles size={18} />}
                    </button>
                    {!isFormValid && (
                      <p className="text-center text-sm text-rose-500 mt-3 font-medium animate-pulse">
                        * Please complete all fields (Name must be 3+
                        characters, Phone 10+ digits)
                      </p>
                    )}
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Success Modal */}
        <Modal
          isOpen={showConfirmation}
          onClose={() => setShowConfirmation(false)}
        >
          <div className="p-8 text-center max-w-sm mx-auto">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-rose-900 mb-2">
              Confirmed!
            </h2>
            <p className="text-neutral-500 mb-8">
              Thank you, {userDetails.name}.
            </p>

            <div className="bg-neutral-50 rounded-xl p-4 mb-8 text-left space-y-2 border border-neutral-100 text-sm">
              <div className="flex justify-between">
                <span className="text-neutral-500">Service</span>{" "}
                <span className="font-bold text-rose-900">
                  {selectedService}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Date</span>{" "}
                <span className="font-bold text-rose-900">
                  {selectedDate && format(selectedDate, "MMM do")}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Time</span>{" "}
                <span className="font-bold text-rose-900">{selectedSlot}</span>
              </div>
            </div>

            <div className="flex justify-center">
              <SlideArrowButton
                text="Return Home"
                primaryColor="#e11d48"
                onClick={() => router.push("/")}
                className="border-rose-100"
              />
            </div>
          </div>
        </Modal>
      </div>
    </div>
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
          <div className="min-h-screen flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <BookingContent />
      </Suspense>
    </div>
  );
}
