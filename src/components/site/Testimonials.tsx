import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import bg1 from "@/assets/hero-gym.jpg";
import bg2 from "@/assets/cta-equipment.jpg";
import bg3 from "@/assets/about-culture.jpg";

const QUOTES = [
  {
    bg: bg1,
    text: "Iron Peak completely transformed how I see fitness. In 6 months, I lost 18kg and gained more confidence than I've had in my entire life.",
    name: "Priya Shrestha",
    city: "Kathmandu",
  },
  {
    bg: bg2,
    text: "The trainers here are the best I've trained with — and I've trained in gyms across three countries. Iron Peak is world-class.",
    name: "Ramesh Tamang",
    city: "Thamel",
  },
  {
    bg: bg3,
    text: "I came here nervous and unsure. Now I deadlift twice my bodyweight and wake up excited to train. This gym changed my life.",
    name: "Sita Rai",
    city: "Lalitpur",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % QUOTES.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-[#0a0a0a] py-24">
      {QUOTES.map((q, i) => (
        <div
          key={i}
          aria-hidden={i !== active}
          className="absolute inset-0 -z-10 bg-cover bg-center transition-opacity duration-1000"
          style={{ backgroundImage: `url(${q.bg})`, opacity: i === active ? 1 : 0 }}
        />
      ))}
      <div className="absolute inset-0 -z-10 bg-black/75" />

      <div className="container-x relative w-full max-w-3xl text-center">
        <div className="mb-6 flex justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={20} className="fill-gold text-gold" />
          ))}
        </div>
        {QUOTES.map((q, i) => (
          <blockquote
            key={i}
            className={`transition-opacity duration-1000 ${
              i === active ? "opacity-100" : "pointer-events-none absolute inset-x-0 opacity-0"
            }`}
          >
            <p className="font-accent text-2xl italic leading-relaxed text-white sm:text-3xl">
              "{q.text}"
            </p>
            <footer className="mt-6 font-label text-sm uppercase tracking-[0.2em] text-gold">
              {q.name} — {q.city}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
