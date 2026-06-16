import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";

const COLS = [
  {
    title: "Quick Links",
    items: ["Home", "About", "Programs", "Gallery", "Trainers", "Membership", "Contact"],
  },
  {
    title: "Programs",
    items: [
      "Personal Training",
      "Weight Loss",
      "Muscle Building",
      "Yoga",
      "Group Classes",
      "Sports Performance",
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#0a0a0a]">
      <div className="container-x grid grid-cols-1 gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a className="font-display text-2xl font-bold uppercase tracking-[0.08em] text-white">
            Iron<span className="text-gold">Peak</span>
          </a>
          <p className="mt-4 font-accent text-lg italic text-gold">
            Built in the Mountains. Built to Last.
          </p>
          <p className="mt-3 text-sm text-[#cccccc]">
            Kathmandu's premier strength and fitness facility.
          </p>
        </div>

        {COLS.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm tracking-[0.2em] text-white">{col.title}</h4>
            <ul className="mt-4 space-y-2">
              {col.items.map((i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-[#cccccc] transition-colors hover:text-gold">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-sm tracking-[0.2em] text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-[#cccccc]">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" /> Thamel Marg, Kathmandu
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-gold" /> +977 9801234567
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-gold" /> hello@ironpeakfitness.com
            </li>
          </ul>
          <div className="mt-5 flex gap-4">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-[#cccccc] transition-colors hover:text-gold"
                aria-label="social link"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© 2025 Iron Peak Fitness. All rights reserved.</p>
          <p className="flex gap-4">
            <a href="#" className="hover:text-gold">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
