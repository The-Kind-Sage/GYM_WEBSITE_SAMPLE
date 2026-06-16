import { useState } from "react";
import { Check, Minus, Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type DurationKey = "1" | "3" | "6" | "12";

const DURATIONS: {
  key: DurationKey;
  label: string;
  months: number;
  discount: number;
  badge?: string;
}[] = [
  { key: "1", label: "1 Month", months: 1, discount: 0 },
  { key: "3", label: "3 Months", months: 3, discount: 0.1 },
  { key: "6", label: "6 Months", months: 6, discount: 0.17, badge: "Best Value" },
  { key: "12", label: "12 Months", months: 12, discount: 0.25 },
];

type Plan = {
  name: string;
  base: number; // base monthly price (NPR)
  featured?: boolean;
  features: string[];
};

const PLANS: Plan[] = [
  {
    name: "Basic",
    base: 3500,
    features: [
      "Full gym floor access",
      "Locker room & showers",
      "2 group classes / week",
      "Fitness orientation session",
    ],
  },
  {
    name: "Premium",
    base: 6500,
    featured: true,
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "1 personal training session / month",
      "Sauna & recovery zone access",
    ],
  },
  {
    name: "Elite",
    base: 12000,
    features: [
      "Everything in Premium",
      "Weekly 1-on-1 coaching",
      "Custom nutrition plan",
      "Priority booking & guest passes",
    ],
  },
];

const ADDONS = [
  { name: "Personal Training Pack", note: "8 sessions", price: "NPR 8,000" },
  { name: "Nutrition Plan", note: "one-time", price: "NPR 3,500" },
  { name: "Body Composition Scan", note: "one-time", price: "NPR 1,500" },
];

const COMPARISON: { feature: string; basic: boolean; premium: boolean; elite: boolean }[] = [
  { feature: "Gym floor access", basic: true, premium: true, elite: true },
  { feature: "Locker room & showers", basic: true, premium: true, elite: true },
  { feature: "Group classes", basic: true, premium: true, elite: true },
  { feature: "Unlimited classes", basic: false, premium: true, elite: true },
  { feature: "Sauna & recovery zone", basic: false, premium: true, elite: true },
  { feature: "Personal training", basic: false, premium: true, elite: true },
  { feature: "Weekly 1-on-1 coaching", basic: false, premium: false, elite: true },
  { feature: "Custom nutrition plan", basic: false, premium: false, elite: true },
  { feature: "Priority booking & guest passes", basic: false, premium: false, elite: true },
];

const FAQS = [
  {
    q: "Is there a joining or registration fee?",
    a: "No. The price you see is the price you pay — no hidden registration, maintenance, or hidden fees of any kind.",
  },
  {
    q: "Can I freeze or pause my membership?",
    a: "Yes. Memberships of 3 months or longer can be frozen for up to 30 days, no questions asked.",
  },
  {
    q: "Do longer plans really save money?",
    a: "Absolutely. The longer your commitment, the lower your effective monthly rate — up to 25% off with the 12-month plan.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Yes, you can upgrade from Basic to Premium or Elite at any time. We simply apply the difference on a pro-rated basis.",
  },
  {
    q: "Do you offer a free trial?",
    a: "We do. Your first session is on us — no card, no commitment. Just walk in and train.",
  },
];

function formatNpr(n: number) {
  return "NPR " + Math.round(n).toLocaleString("en-IN");
}

function priceFor(plan: Plan, months: number, discount: number) {
  const perMonth = plan.base * (1 - discount);
  // round per-month to nearest 1
  const total = perMonth * months;
  return { total, perMonth, savePct: Math.round(discount * 100) };
}

export function Membership() {
  const [duration, setDuration] = useState<DurationKey>("6");
  const active = DURATIONS.find((d) => d.key === duration)!;

  return (
    <section id="membership" className="bg-surface py-24 sm:py-28">
      <div className="container-x">
        {/* Hero */}
        <div className="reveal text-center">
          <span className="eyebrow">Membership</span>
          <h2 className="mt-4 text-4xl text-white sm:text-6xl">Choose Your Journey</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-[#cccccc]">
            Simple pricing. No hidden fees.
          </p>
        </div>

        {/* Duration toggle */}
        <div className="reveal mt-12 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-2 rounded-md border border-border bg-card p-2">
            {DURATIONS.map((d) => {
              const isActive = d.key === duration;
              return (
                <button
                  key={d.key}
                  onClick={() => setDuration(d.key)}
                  className={`relative font-label text-xs font-semibold uppercase tracking-wider px-5 py-3 transition-colors sm:text-sm ${
                    isActive ? "bg-gold text-primary-foreground" : "text-[#cccccc] hover:text-gold"
                  }`}
                >
                  {d.label}
                  {d.badge && (
                    <span
                      className={`absolute -top-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ${
                        isActive
                          ? "bg-primary-foreground text-gold"
                          : "bg-gold text-primary-foreground"
                      }`}
                    >
                      ★ Best Value
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Plan cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => {
            const { total, perMonth, savePct } = priceFor(plan, active.months, active.discount);
            return (
              <div
                key={plan.name}
                className={`reveal relative flex flex-col bg-card p-8 ${
                  plan.featured ? "border-2 border-gold lg:-translate-y-3" : "border border-border"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-gold px-4 py-1 font-label text-xs font-bold uppercase tracking-wider text-primary-foreground">
                    <Star size={12} fill="currentColor" /> Most Popular
                  </span>
                )}
                <h3 className="font-display text-2xl text-white">{plan.name}</h3>

                <div className="mt-6">
                  <div className="font-number text-5xl leading-none text-white">
                    {formatNpr(total)}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    /{active.months} month{active.months > 1 ? "s" : ""}
                  </div>
                </div>

                <div className="mt-4 border-t border-border pt-4">
                  <div className="font-number text-2xl text-gold">{formatNpr(perMonth)}</div>
                  <div className="text-sm text-muted-foreground">per month</div>
                </div>

                {savePct > 0 && (
                  <div className="mt-3 inline-flex w-fit bg-gold/10 px-3 py-1 font-label text-xs font-semibold uppercase tracking-wider text-gold">
                    Save {savePct}%
                  </div>
                )}

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-[#cccccc]">
                      <Check size={18} className="mt-0.5 shrink-0 text-gold" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 block w-full py-4 text-center font-label text-sm font-semibold uppercase tracking-wider transition-opacity hover:opacity-90 ${
                    plan.featured
                      ? "bg-gold text-primary-foreground"
                      : "border border-gold text-gold hover:bg-gold hover:text-primary-foreground"
                  }`}
                >
                  Join Now
                </a>
              </div>
            );
          })}
        </div>

        {/* Add-ons */}
        <div className="reveal mt-20">
          <h3 className="text-2xl text-white sm:text-3xl">Add-Ons</h3>
          <p className="mt-2 text-muted-foreground">Optional upgrades to power up your training.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {ADDONS.map((a) => (
              <div
                key={a.name}
                className="flex items-center justify-between border border-border bg-card p-5"
              >
                <div>
                  <div className="font-label text-sm font-semibold uppercase tracking-wide text-white">
                    + {a.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{a.note}</div>
                </div>
                <div className="font-number text-xl text-gold">{a.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison table */}
        <div className="reveal mt-20">
          <h3 className="text-2xl text-white sm:text-3xl">Compare Plans</h3>
          <p className="mt-2 text-muted-foreground">
            Full transparency — every feature, every plan.
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 text-left font-label text-sm font-semibold uppercase tracking-wider text-[#cccccc]">
                    Feature
                  </th>
                  {["Basic", "Premium", "Elite"].map((p) => (
                    <th
                      key={p}
                      className="px-4 py-4 text-center font-display text-lg uppercase text-white"
                    >
                      {p}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.feature} className="border-b border-border">
                    <td className="py-4 text-sm text-[#cccccc]">{row.feature}</td>
                    {[row.basic, row.premium, row.elite].map((v, i) => (
                      <td key={i} className="px-4 py-4 text-center">
                        {v ? (
                          <Check size={18} className="mx-auto text-gold" />
                        ) : (
                          <Minus size={18} className="mx-auto text-muted-foreground" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="reveal mx-auto mt-20 max-w-3xl">
          <h3 className="text-center text-2xl text-white sm:text-3xl">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="mt-8">
            {FAQS.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-label text-base font-semibold uppercase tracking-wide text-white hover:text-gold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#cccccc]">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Final CTA banner */}
        <div className="reveal mt-20 border border-gold bg-card p-10 text-center sm:p-14">
          <h3 className="text-3xl text-white sm:text-4xl">Still Unsure? Try Us Free.</h3>
          <p className="mx-auto mt-3 max-w-md text-[#cccccc]">
            Walk in, train hard, and feel the difference. No card. No commitment.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block bg-gold px-10 py-4 font-label text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book Free Trial
          </a>
        </div>
      </div>
    </section>
  );
}
