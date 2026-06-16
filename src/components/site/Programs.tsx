import { useRef } from "react";
import { Dumbbell, Flame, Mountain, Heart, Users, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const PROGRAMS: { icon: LucideIcon; name: string; level: string; desc: string }[] = [
  {
    icon: Dumbbell,
    name: "Personal Training",
    level: "All Levels",
    desc: "One-on-one coaching tailored to your body, goal and timeline.",
  },
  {
    icon: Flame,
    name: "Weight Loss",
    level: "Beginner–Intermediate",
    desc: "Science-backed cardio, strength and nutrition for sustainable fat loss.",
  },
  {
    icon: Trophy,
    name: "Muscle Building",
    level: "Intermediate–Advanced",
    desc: "Progressive overload, compound lifts and structured recovery.",
  },
  {
    icon: Heart,
    name: "Yoga & Flexibility",
    level: "All Levels",
    desc: "Mobility, injury prevention and mental focus, led by certified instructors.",
  },
  {
    icon: Users,
    name: "Group Classes",
    level: "All Levels",
    desc: "High-energy HIIT, circuit and functional training as a team.",
  },
  {
    icon: Mountain,
    name: "Sports Performance",
    level: "Athletes Only",
    desc: "Speed, power, agility and sport-specific conditioning.",
  },
];

function MagneticCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${px * 8}deg) rotateX(${-py * 8}deg) scale(1.03)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="h-full transition-transform duration-300 ease-out [transform-style:preserve-3d]"
    >
      {children}
    </div>
  );
}

export function Programs() {
  return (
    <section id="programs" className="bg-[#111111] py-24">
      <div className="container-x">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">What We Offer</p>
          <h2 className="mt-3 text-4xl text-white sm:text-5xl">Programs Built for Real Results</h2>
          <p className="mt-5 text-lg text-[#cccccc]">
            Whether you're just starting out or training for competition, we have a structured
            program designed to push you forward.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p) => (
            <MagneticCard key={p.name}>
              <div className="group flex h-full flex-col border border-border bg-[#181818] p-8 transition-colors hover:border-gold">
                <p.icon className="text-gold" size={36} strokeWidth={1.5} />
                <h3 className="mt-6 text-2xl text-white">{p.name}</h3>
                <span className="mt-2 font-label text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {p.level}
                </span>
                <p className="mt-4 text-[#cccccc]">{p.desc}</p>
              </div>
            </MagneticCard>
          ))}
        </div>
      </div>
    </section>
  );
}
