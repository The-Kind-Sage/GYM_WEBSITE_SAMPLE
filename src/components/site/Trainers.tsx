import { Instagram } from "lucide-react";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";

const TRAINERS = [
  {
    name: "Bibek Shrestha",
    role: "Head Strength Coach",
    bio: "12+ years building powerlifters and everyday athletes. Specializes in barbell strength and progressive programming.",
    img: trainer1,
    tags: ["Strength", "Powerlifting"],
  },
  {
    name: "Anjali Gurung",
    role: "Performance & Mobility Coach",
    bio: "Former national athlete focused on functional movement, mobility, and injury-free training for all levels.",
    img: trainer2,
    tags: ["Mobility", "Conditioning"],
  },
  {
    name: "Suman Tamang",
    role: "Hypertrophy & Personal Trainer",
    bio: "Physique and body-composition specialist who blends science-backed training with nutrition coaching.",
    img: trainer3,
    tags: ["Hypertrophy", "Nutrition"],
  },
];

export function Trainers() {
  return (
    <section id="trainers" className="bg-surface py-24 sm:py-28">
      <div className="container-x">
        <div className="reveal text-center">
          <span className="eyebrow">The Team</span>
          <h2 className="mt-4 text-4xl text-white sm:text-6xl">Meet Your Coaches</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-[#cccccc]">
            Certified, experienced, and obsessed with your results. These are the people in your
            corner.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {TRAINERS.map((t) => (
            <article key={t.name} className="reveal group flex flex-col">
              <div className="relative overflow-hidden border border-border">
                <img
                  src={t.img}
                  alt={`${t.name}, ${t.role}`}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t.name} on Instagram`}
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center bg-black/50 text-white transition-colors hover:bg-gold hover:text-primary-foreground"
                >
                  <Instagram size={18} />
                </a>
              </div>

              <div className="mt-5">
                <h3 className="font-display text-2xl text-white">{t.name}</h3>
                <div className="mt-1 font-label text-sm font-semibold uppercase tracking-wider text-gold">
                  {t.role}
                </div>
                <p className="mt-3 text-sm text-[#cccccc]">{t.bio}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-border px-3 py-1 font-label text-xs uppercase tracking-wide text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
