import { useEffect, useRef, useState } from "react";
import { navLinks, studio } from "../data";

/* ---------------- Preloader ---------------- */
export function Preloader({ onDone }: { onDone: () => void }) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLeaving(true), 1900);
    const t2 = setTimeout(onDone, 2800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[300] flex flex-col items-center justify-center bg-ink ${
        leaving ? "preloader-done" : ""
      }`}
      aria-hidden
    >
      <div className="deva text-7xl md:text-8xl text-gold float-soft">{studio.deva}</div>
      <div className="mt-4 text-xs font-bold tracking-[0.5em] uppercase text-creamdim">
        Kahani Studios
      </div>
      <div className="mt-8 h-px w-48 bg-cream/10 overflow-hidden">
        <div className="h-full w-full bg-gold preloader-bar" />
      </div>
    </div>
  );
}

/* ---------------- Custom cursor ---------------- */
export function Cursor() {
  const dot = useRef<HTMLDivElement | null>(null);
  const ring = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const d = dot.current, r = ring.current;
    if (!d || !r) return;
    let x = -100, y = -100, rx = -100, ry = -100, raf = 0;

    const move = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      const t = e.target as HTMLElement;
      r.classList.toggle("is-hover", !!t.closest("a, button, .work-row, .svc-row"));
    };
    const loop = () => {
      raf = requestAnimationFrame(loop);
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      d.style.transform = `translate(${x}px, ${y}px)`;
      r.style.transform = `translate(${rx}px, ${ry}px)`;
    };
    window.addEventListener("mousemove", move, { passive: true });
    loop();
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot"><span /></div>
      <div ref={ring} className="cursor-ring"><span /></div>
    </>
  );
}

/* ---------------- Nav ---------------- */
export function Nav({ ready }: { ready: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open ]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-[120] transition-all duration-500 ${
          ready ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
        } ${scrolled ? "bg-ink/85 backdrop-blur-md border-b hairline" : "bg-transparent"}`}
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
          <a href="#top" className="flex items-baseline gap-2 group">
            <span className="deva text-2xl text-gold leading-none">{studio.deva}</span>
            <span className="display text-lg md:text-xl tracking-tight">
              Kahani<span className="text-gold">.</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-creamdim hover:text-gold transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-gold !py-2.5 !px-5 text-sm">
              Book your date
            </a>
          </nav>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-7 h-0.5 bg-cream" />
            <span className="block w-7 h-0.5 bg-gold" />
            <span className="block w-7 h-0.5 bg-cream" />
          </button>
        </div>
      </header>

      {/* fullscreen mobile menu */}
      <div
        className={`fixed inset-0 z-[150] bg-maroondeep flex flex-col transition-all duration-500 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-5 h-16">
          <span className="deva text-2xl text-gold">{studio.deva}</span>
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 text-3xl leading-none text-cream">
            ×
          </button>
        </div>
        <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="menu-link display display-black text-5xl py-2 text-cream hover:text-gold transition-colors"
              style={{ ["--m-d" as string]: `${i * 90}ms` }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="menu-link btn-gold mt-6 self-start"
            style={{ ["--m-d" as string]: "380ms" }}
          >
            Book your date →
          </a>
        </nav>
        <div className="px-8 pb-10 text-creamdim text-sm">
          {studio.city}, {studio.state} · {studio.phone}
        </div>
      </div>
    </>
  );
}
