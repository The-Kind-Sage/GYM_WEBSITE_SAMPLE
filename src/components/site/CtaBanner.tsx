import ctaImg from "@/assets/cta-equipment.jpg";

export function CtaBanner() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-cover bg-center py-28"
      style={{ backgroundImage: `url(${ctaImg})` }}
    >
      <div className="absolute inset-0 -z-10 bg-black/75" />
      <div className="container-x text-center">
        <h2 className="text-4xl text-white sm:text-6xl">Your Transformation Starts Today.</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-[#cccccc]">
          First session is on us. No commitment required.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#membership"
            className="bg-gold px-8 py-4 font-label text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
          >
            Claim Free Trial
          </a>
          <a
            href="tel:+9779801234567"
            className="border border-white/70 px-8 py-4 font-label text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-gold hover:text-gold"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
