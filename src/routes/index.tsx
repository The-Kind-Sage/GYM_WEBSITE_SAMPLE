import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { StatsTicker } from "@/components/site/StatsTicker";
import { AboutPreview } from "@/components/site/AboutPreview";
import { Programs } from "@/components/site/Programs";
import { AthleteSplit } from "@/components/site/AthleteSplit";
import { TripsStrip } from "@/components/site/TripsStrip";
import { Gallery } from "@/components/site/Gallery";
import { Trainers } from "@/components/site/Trainers";
import { Testimonials } from "@/components/site/Testimonials";
import { Membership } from "@/components/site/Membership";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Iron Peak Fitness — Premium Gym in Kathmandu, Nepal" },
      {
        name: "description",
        content:
          "Kathmandu's most serious training facility. Real equipment, expert coaches, and proven programs. Built in the Mountains. Built to Last.",
      },
      { property: "og:title", content: "Iron Peak Fitness — Premium Gym in Kathmandu" },
      {
        property: "og:description",
        content:
          "Real equipment. Expert coaches. Zero excuses. Join Kathmandu's premier fitness facility.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <main>
        <Hero />
        <StatsTicker />
        <AboutPreview />
        <Programs />
        <Gallery />
        <AthleteSplit />
        <TripsStrip />
        <Trainers />
        <Testimonials />
        <Membership />
        <CtaBanner />
      </main>
      <Footer />

      <a
        href="https://wa.me/9779801234567"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
