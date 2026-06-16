import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Trips", href: "#trips" },
  { label: "Trainers", href: "#trainers" },
  { label: "Membership", href: "#membership" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#111111] border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between">
        <a
          href="#home"
          className="font-display text-2xl font-bold uppercase tracking-[0.08em] text-white"
        >
          Iron<span className="text-gold">Peak</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-label text-sm font-semibold uppercase tracking-wider text-[#cccccc] transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#membership"
          className="hidden font-label text-sm font-semibold uppercase tracking-wider bg-gold px-5 py-2.5 text-primary-foreground transition-opacity hover:opacity-90 lg:inline-block"
        >
          Join Now
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="text-white lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 top-20 z-40 bg-[#0a0a0a] lg:hidden">
          <ul className="container-x flex flex-col gap-2 py-8">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-4 font-label text-lg font-semibold uppercase tracking-wider text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#membership"
                onClick={() => setOpen(false)}
                className="mt-4 block bg-gold py-4 text-center font-label text-lg font-semibold uppercase tracking-wider text-primary-foreground"
              >
                Join Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
