import React from "react";
import { User, Phone, CreditCard } from "lucide-react";
import BookingInput from "./BookingInput";
import { cn } from "@/lib/utils";

interface CustomerDetailsFormProps {
  name: string;
  phone: string;
  paymentMethod: string;
  onChange: (field: string, value: string) => void;
}

export default function CustomerDetailsForm({
  name,
  phone,
  paymentMethod,
  onChange,
}: CustomerDetailsFormProps) {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BookingInput
          label="Name"
          icon={User}
          placeholder="Type your full name"
          value={name}
          onChange={(e) => onChange("name", e.target.value)}
        />
        <BookingInput
          label="Phone / WhatsApp"
          icon={Phone}
          type="tel"
          placeholder="0300 xxxxxxx"
          value={phone}
          onChange={(e) => onChange("phone", e.target.value)}
        />
      </div>

      <div className="space-y-3">
        <label className="text-sm font-medium text-neutral-600 flex items-center gap-2">
          <CreditCard size={16} className="text-rose-500" /> Payment Method
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {["cod", "jazzcash"].map((method) => (
            <button
              key={method}
              onClick={() => onChange("paymentMethod", method)}
              className={cn(
                "flex items-center gap-3 p-4 rounded-xl border transition-all text-left relative overflow-hidden",
                paymentMethod === method
                  ? "bg-rose-50 border-rose-200 ring-1 ring-rose-200"
                  : "border-gray-200 hover:bg-gray-50"
              )}
            >
              <div
                className={cn(
                  "w-5 h-5 rounded-full border flex items-center justify-center z-10",
                  paymentMethod === method
                    ? "border-rose-500"
                    : "border-gray-300"
                )}
              >
                {paymentMethod === method && (
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                )}
              </div>
              <div className="z-10">
                <div className="font-semibold text-rose-900">
                  {method === "cod"
                    ? "Cash on Arrival"
                    : "JazzCash / EasyPaisa"}
                </div>
                <div className="text-xs text-neutral-500">
                  {method === "cod"
                    ? "Pay at the studio"
                    : "Pre-payment options"}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
