import { useEffect, useRef } from "react";
import hike from "@/assets/trip-hike.jpg";
import bootcamp from "@/assets/trip-bootcamp.jpg";
import retreat from "@/assets/trip-retreat.jpg";

const TRIPS = [
  { img: hike, title: "Mountain Hike" },
  { img: bootcamp, title: "Outdoor Bootcamp" },
  { img: retreat, title: "Wellness Retreat" },
  { img: hike, title: "Community Events" },
  { img: bootcamp, title: "Sunrise Sessions" },
  { img: retreat, title: "Yoga in the Hills" },
];

export function TripsStrip() {
  const scroller = useRef<HTMLDivElement | null>(null);
  const paused = useRef(false);
  const drag = useRef({ active: false, startX: 0, startScroll: 0 });

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    let raf = 0;
    const loop = () => {
      if (!paused.current && !drag.current.active) {
        el.scrollLeft += 1;
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) el.scrollLeft = 0;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onDown = (e: React.PointerEvent) => {
    const el = scroller.current;
    if (!el) return;
    drag.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
  };
  const onMove = (e: React.PointerEvent) => {
    if (!drag.current.active || !scroller.current) return;
    scroller.current.scrollLeft = drag.current.startScroll - (e.clientX - drag.current.startX);
  };
  const onUp = () => {
    drag.current.active = false;
  };

  return (
    <section id="trips" className="bg-[#111111] py-24">
      <div className="container-x">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Beyond the Gym</p>
          <h2 className="mt-3 text-4xl text-white sm:text-5xl">We Train. We Explore.</h2>
          <p className="mt-5 text-lg text-[#cccccc]">
            Iron Peak organizes quarterly hikes, retreats, and fitness events across Nepal.
          </p>
        </div>
      </div>

      <div
        ref={scroller}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
        className="mt-12 flex gap-4 overflow-x-hidden px-6 [scrollbar-width:none] cursor-grab active:cursor-grabbing select-none"
      >
        {TRIPS.map((t, i) => (
          <figure key={i} className="relative h-[400px] w-[320px] shrink-0 overflow-hidden">
            <img
              src={t.img}
              alt={t.title}
              loading="lazy"
              width={1280}
              height={1024}
              draggable={false}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <figcaption className="absolute bottom-5 left-5 font-display text-xl uppercase tracking-[0.05em] text-white">
              {t.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
