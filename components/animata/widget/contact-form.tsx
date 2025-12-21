import React from 'react';
import { Send, Calendar, User, Phone } from 'lucide-react';

export default function ContactForm() {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-rose-100 flex flex-col md:flex-row">
      <div className="bg-rose-950 p-10 md:w-1/3 text-white flex flex-col justify-between">
         <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Book Your Visit</h3>
            <p className="text-rose-200 mb-6">Ready to transform your look? Fill out the details and we will call you to confirm.</p>
         </div>
         <div className="space-y-4">
             <div className="flex items-center gap-3 text-rose-200">
                 <Phone size={18} />
                 <span>+92 300 1234567</span>
             </div>
             <div className="flex items-center gap-3 text-rose-200">
                 <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                 <span>Open Today until 10 PM</span>
             </div>
         </div>
      </div>
      
      <div className="p-10 md:w-2/3">
        <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2"><User size={16}/> Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" placeholder="E.g. Sara Ali" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2"><Phone size={16}/> Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" placeholder="0300-XXXXXXX" />
                </div>
            </div>
            
            <div className="space-y-2">
                 <label className="text-sm font-medium text-gray-700 flex items-center gap-2"><Calendar size={16}/> Preferred Service</label>
                 <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all bg-white">
                    <option>Bridal Makeup Consultation</option>
                    <option>Party Makeup</option>
                    <option>HydraFacial</option>
                    <option>Hair Cut & Style</option>
                    <option>Mehndi Application</option>
                 </select>
            </div>

            <button type="button" className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group">
                <Send size={20} className="group-hover:translate-x-1 transition-transform"/>
                Send Booking Request
            </button>
        </form>
      </div>
    </div>
  );
}
