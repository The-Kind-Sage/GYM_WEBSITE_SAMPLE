import aboutImg from "@/assets/about-culture.jpg";

export function AboutPreview() {
  return (
    <section id="about" className="bg-[#0a0a0a] py-24">
      <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="reveal-left">
          <img
            src={aboutImg}
            alt="Iron Peak Fitness members training together"
            loading="lazy"
            width={1024}
            height={1024}
            className="h-full w-full border border-border object-cover"
          />
        </div>

        <div className="reveal-right">
          <p className="eyebrow">Who We Are</p>
          <h2 className="mt-3 text-4xl text-white sm:text-5xl">More Than a Gym. A Way of Life.</h2>
          <p className="mt-6 text-lg text-[#cccccc]">
            Iron Peak Fitness was built on one belief — that serious training changes people. Not
            just physically, but mentally. We built Kathmandu's premier fitness facility so that
            every person who walks through our doors leaves stronger than when they came in.
          </p>
          <a
            href="#about"
            className="mt-8 inline-block border-b-2 border-gold pb-1 font-label text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:text-gold"
          >
            Read Our Story →
          </a>
        </div>
      </div>
    </section>
  );
}
