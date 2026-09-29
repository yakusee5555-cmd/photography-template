import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks, studio } from "../data";

/* ---------------- Nav ---------------- */
export function Nav({ ready }: { ready: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

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

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-[120] transition-all duration-500 ${
          ready ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
        } ${scrolled ? "bg-ink/85 backdrop-blur-md border-b hairline" : "bg-transparent"}`}
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
          <Link to="/" className="flex items-baseline gap-2 group">
            <span className="deva text-2xl text-gold leading-none">{studio.deva}</span>
            <span className="display text-lg md:text-xl tracking-tight">
              Kahani<span className="text-gold">.</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
            {navLinks.map((l) => (
              <NavLink
                key={l.href}
                to={l.href}
                className={({ isActive }) =>
                  `transition-colors ${isActive ? "text-gold" : "text-creamdim hover:text-gold"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-gold !py-2.5 !px-5 text-sm">
              Book your date
            </Link>
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
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="menu-link display display-black text-5xl py-2 text-cream hover:text-gold transition-colors"
            style={{ ["--m-d" as string]: "0ms" }}
          >
            Home
          </NavLink>
          {navLinks.map((l, i) => (
            <NavLink
              key={l.href}
              to={l.href}
              onClick={() => setOpen(false)}
              className="menu-link display display-black text-5xl py-2 text-cream hover:text-gold transition-colors"
              style={{ ["--m-d" as string]: `${(i + 1) * 90}ms` }}
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="menu-link btn-gold mt-6 self-start"
            style={{ ["--m-d" as string]: "470ms" }}
          >
            Book your date →
          </Link>
        </nav>
        <div className="px-8 pb-10 text-creamdim text-sm">
          {studio.city}, {studio.state} · {studio.phone}
        </div>
      </div>
    </>
  );
}

/* ---------------- Footer ---------------- */
export function Footer() {
  return (
    <footer className="relative bg-coal overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid sm:grid-cols-4 gap-8 py-14 border-t hairline text-sm">
          <div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="deva text-2xl text-gold leading-none">{studio.deva}</span>
              <span className="display text-xl tracking-tight">Kahani<span className="text-gold">.</span></span>
            </div>
            <p className="text-creamdim/80 leading-relaxed">
              {studio.tagline}<br />{studio.city}, {studio.state}
            </p>
          </div>
          <div>
            <div className="eyebrow mb-4">Explore</div>
            <div className="flex flex-col gap-2.5">
              <Link to="/" className="text-creamdim hover:text-gold transition-colors w-fit">Home</Link>
              {navLinks.map((l) => (
                <Link key={l.href} to={l.href} className="text-creamdim hover:text-gold transition-colors w-fit">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="eyebrow mb-4">Studio</div>
            <p className="text-creamdim leading-relaxed">
              {studio.address}<br />
              {studio.hours}
            </p>
          </div>
          <div>
            <div className="eyebrow mb-4">Talk to us</div>
            <a href={studio.phoneHref} className="block text-creamdim hover:text-gold transition-colors text-lg font-semibold">
              {studio.phone}
            </a>
            <a href={`mailto:${studio.email}`} className="block text-creamdim hover:text-gold transition-colors mt-1">
              {studio.email}
            </a>
            <a href={studio.instagramHref} className="block text-creamdim hover:text-gold transition-colors mt-1">
              {studio.instagram}
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-8 border-t hairline text-xs text-creamdim/70">
          <span>© 2026 {studio.name}. All stories reserved.</span>
          <span className="deva text-base text-gold/70">{studio.deva} · {studio.city}</span>
        </div>
      </div>

      {/* giant footer word */}
      <div aria-hidden className="select-none pointer-events-none overflow-hidden -mb-[4vw]">
        <div className="display display-black text-[22vw] leading-[0.8] text-center text-stroke opacity-25 whitespace-nowrap">
          KAHANI
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Page layout ---------------- */
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav ready />
      <main>{children}</main>
      <Footer />
    </>
  );
}
