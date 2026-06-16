import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import heroGym from "@/assets/hero-gym.jpg";
import ctaEquipment from "@/assets/cta-equipment.jpg";
import aboutCulture from "@/assets/about-culture.jpg";

const IMAGES: { src: string; alt: string; w: number; h: number; span: string }[] = [
  {
    src: gallery1,
    alt: "Rows of dumbbells in the gym floor",
    w: 900,
    h: 1100,
    span: "sm:row-span-2",
  },
  { src: gallery2, alt: "Athlete training with battle ropes", w: 900, h: 700, span: "" },
  { src: heroGym, alt: "Iron Peak Fitness training floor", w: 900, h: 700, span: "" },
  { src: gallery3, alt: "Loaded barbell with weight plates", w: 900, h: 700, span: "" },
  { src: aboutCulture, alt: "Members training together", w: 900, h: 700, span: "" },
  { src: ctaEquipment, alt: "Premium gym equipment", w: 900, h: 1100, span: "sm:row-span-2" },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-background py-24 sm:py-28">
      <div className="container-x">
        <div className="reveal text-center">
          <span className="eyebrow">The Space</span>
          <h2 className="mt-4 text-4xl text-white sm:text-6xl">Inside Iron Peak</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-[#cccccc]">
            Real equipment. Real grind. A look inside Kathmandu's most serious training floor.
          </p>
        </div>

        <div className="reveal mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 sm:grid-cols-3 sm:auto-rows-[220px]">
          {IMAGES.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden border border-border ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                width={img.w}
                height={img.h}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
