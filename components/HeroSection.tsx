import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  Star,
  Phone,
  Mail,
  MapPin,
  Brain,
  Heart,
  Zap,
  Users,
  Baby,
  Pill,
} from "lucide-react";
import { useInView } from "react-intersection-observer";

interface Service {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export default function Home() {
  const services = [
    { title: "Anxiety Treatment", icon: Brain },
    { title: "Depression Therapy", icon: Heart },
    { title: "Stress Management", icon: Zap },
    { title: "Couples Counseling", icon: Users },
    { title: "Child Psychology", icon: Baby },
    { title: "Addiction Recovery", icon: Pill },
  ];

  const ServiceCard: React.FC<{ service: Service; index: number }> = ({
    service,
    index,
  }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    return (
      <div
        ref={ref}
        className={`relative p-0.5 rounded-2xl transition-all duration-1000 group ${
          inView
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-10 scale-95"
        }`}
        style={{ transitionDelay: inView ? `${index * 0.12}s` : "0s" }}
      >
        <div className="absoluten inset-0 rounded-2xl bg-linear-to-br from-blue-400 via-yellow-300 to-blue-900 opacity-30 blur-sm"></div>
        <div className="relative bg-white/80 backdrop-blur-lg p-4 rounded-xl shadow-md border border-gray-100 hover:shadow-xl">
          <div className="w-10 h-10 bg-linear-to-tr from-blue-100 via-yellow-100 to-blue-200 rounded-full flex items-center justify-center mb-3 group-hover:bg-yellow-500 transition-colors shadow">
            <service.icon className="w-6 h-6 text-blue-700 group-hover:text-yellow-700 transition" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm leading-snug mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <a
            href="#"
            className="mt-1 inline-block text-yellow-500 font-medium hover:text-yellow-600 transition underline underline-offset-2 text-sm"
          >
            Learn More →
          </a>
        </div>
      </div>
    );
  };

  return (
    <>
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(13, 57, 113, 0.95), rgba(13, 57, 113, 0.80)), url('/Doc1.jpg')`,
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div className="space-y-4 lg:space-y-6">
              <p className="text-yellow-400 font-bold tracking-widest uppercase text-xs md:text-sm">
                Trust us for Psychiatrist
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                Lets Get Back Your <br />
                <span className="text-yellow-400">Mental Health</span> With{" "}
                <br />
                Our Psychiatrist
              </h1>

              <p className="text-gray-200 text-base md:text-lg leading-snug max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>

              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold text-base rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  OUR SERVICES <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-6 py-3 border border-white hover:bg-white hover:text-blue-950 text-white font-semibold text-base rounded-full transition-all duration-300">
                  OUR PACKAGE →
                </button>
              </div>
              <div className="flex items-center gap-4 pt-6">
                <div className="flex -space-x-3">
                  <Image
                    src="/Doc2.jpg"
                    alt="Client"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow"
                  />
                  <Image
                    src="/Doc1.jpg"
                    alt="Client"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow"
                  />
                  <div className="w-10 h-10 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center text-white font-bold text-base shadow">
                    +50
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-white">4.9</span>
                    <div className="flex text-yellow-400 text-lg">★★★★★</div>
                  </div>
                  <p className="text-gray-300 text-xs font-medium">
                    Clients Rating
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <Image
                src="/Doc2.jpg"
                alt="Doctor"
                width={320}
                height={400}
                className="rounded-2xl shadow-xl object-cover border-8 border-white/20"
                priority
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 220"
            className="w-full h-32 md:h-48 text-white"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,0 C320,160 1120,40 1440,100 L1440,220 L0,220 Z"
            />
          </svg>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-yellow-500 font-bold uppercase tracking-widest">
              Our Services
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              Professional Care You Can Trust
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={i} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-8">
            <p className="text-yellow-500 font-bold uppercase tracking-widest text-xs">
              Meet Our Experts
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
              Experienced Psychiatrists
            </h2>
          </div>

          <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4">
            <div className="flex gap-4" style={{ width: "max-content" }}>
              {[1, 2, 3, 4, 5, 6].map((doc, idx) => (
                <div
                  key={doc}
                  className={`bg-linear-to-b from-blue-50 to-white p-4 rounded-xl shadow-md min-w-[220px] border border-blue-100 snap-center transition-all duration-700 ${
                    idx % 2 === 0 ? "scale-100" : "scale-95"
                  }`}
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <Image
                    src={`/Doc${doc % 2 === 1 ? 1 : 2}.jpg`}
                    alt="Doctor"
                    width={120}
                    height={140}
                    className="rounded-lg object-cover w-full h-36 mb-3"
                  />
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    Dr. Sarah Johnson
                  </h3>
                  <p className="text-yellow-600 font-medium text-xs mb-1">
                    Senior Psychiatrist
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="ml-1 text-gray-600 text-xs">
                      5.0 (120)
                    </span>
                  </div>
                  <button className="mt-3 w-full py-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition text-xs font-semibold">
                    Book
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div>
            <Image
              src="/Doc2.jpg"
              alt="Therapy Session"
              width={320}
              height={220}
              className="rounded-xl shadow-md"
            />
          </div>
          <div>
            <p className="text-yellow-500 font-bold uppercase tracking-widest text-xs mb-1">
              Why Choose Us
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-1 mb-2">
              Healing Minds, Changing Lives
            </h2>
            <p className="text-gray-600 mt-2 text-sm leading-snug mb-2">
              With 20+ years of experience, our team provides compassionate,
              evidence-based care in a safe and welcoming environment.
            </p>
            <div className="space-y-2 mt-4">
              {[
                "Personalized Treatment Plans",
                "24/7 Emergency Support",
                "Confidential & Safe Environment",
                "Insurance Accepted",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    ✓
                  </div>
                  <span className="text-sm font-medium text-gray-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-yellow-500 font-bold uppercase tracking-widest">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            What Our Patients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-3xl shadow-lg">
                <div className="text-yellow-500 text-2xl mb-4">★★★★★</div>
                <p className="text-gray-700 italic">
                  &quot;Best decision I ever made. Dr. helped me regain control
                  of my life.&quot;
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="font-bold">John Doe</p>
                    <p className="text-sm text-gray-500">Patient</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="py-20 bg-linear-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mt-6 text-blue-100">
            Book a consultation today and take the first step toward better
            mental health.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
            <button className="px-12 py-5 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold text-xl rounded-full transition-all transform hover:scale-105">
              Get Appointment Now
            </button>
            <button className="px-12 py-5 border-2 border-white hover:bg-white hover:text-blue-900 font-semibold text-xl rounded-full transition-all">
              Call: +62 123 456 789
            </button>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-white">Sikiater</h3>
            <p className="mt-4 text-gray-400">
              Your trusted partner in mental wellness.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Doctors
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <p className="flex items-center gap-3">
                <Phone className="w-5 h-5" /> +62 123 456 789
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-5 h-5" /> hello@email.co
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="w-5 h-5" /> Jakarta, Indonesia
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Opening Hours</h4>
            <p>Mon - Fri: 8:00 AM - 8:00 PM</p>
            <p>Saturday: 9:00 AM - 5:00 PM</p>
            <p>Sunday: Emergency Only</p>
          </div>
        </div>
        <div className="text-center mt-12 text-gray-500 text-sm">
          © 2025 Sikiater. All rights reserved.
        </div>
      </footer>
    </>
  );
}
