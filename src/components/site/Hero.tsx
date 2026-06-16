import heroGym from "@/assets/hero-gym.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-fixed"
        style={{ backgroundImage: `url(${heroGym})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden />

      <div className="container-x relative z-10 flex min-h-screen flex-col items-start justify-center pt-20">
        <p className="eyebrow mb-4">Kathmandu, Nepal</p>
        <h1 className="max-w-4xl text-5xl text-white sm:text-7xl lg:text-8xl">Iron Peak Fitness</h1>
        <p className="mt-5 font-accent text-2xl italic text-gold sm:text-3xl">
          Built in the Mountains. Built to Last.
        </p>
        <p className="mt-6 max-w-xl text-lg text-[#cccccc]">
          Kathmandu's most serious training facility. Real equipment. Expert coaches. Zero excuses.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#membership"
            className="bg-gold px-8 py-4 font-label text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
          >
            Join Now
          </a>
          <a
            href="#contact"
            className="border border-white/70 px-8 py-4 font-label text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-gold hover:text-gold"
          >
            Book a Free Trial
          </a>
        </div>
      </div>
    </section>
  );
}
