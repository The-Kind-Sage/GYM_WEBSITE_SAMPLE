import { useCountUp } from "@/hooks/useCountUp";

function Stat({
  end,
  decimals = 0,
  suffix = "",
  label,
}: {
  end: number;
  decimals?: number;
  suffix?: string;
  label: string;
}) {
  const { ref, display } = useCountUp(end, 2000, decimals);
  return (
    <div className="flex flex-col items-center text-center">
      <span ref={ref} className="font-number text-5xl leading-none text-white sm:text-6xl">
        {display}
        {suffix}
      </span>
      <span className="mt-2 font-label text-xs uppercase tracking-[0.2em] text-[#cccccc]">
        {label}
      </span>
    </div>
  );
}

export function StatsTicker() {
  return (
    <section className="border-y border-border bg-[#111111]">
      <div className="container-x grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
        <Stat end={1200} suffix="+" label="Members" />
        <Stat end={15} label="Expert Trainers" />
        <Stat end={8} label="Years Running" />
        <Stat end={4.9} decimals={1} label="Star Rating" />
      </div>
    </section>
  );
}
