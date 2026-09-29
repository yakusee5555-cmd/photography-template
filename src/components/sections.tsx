import { useEffect, useRef, useState } from "react";
import { marqueeItems, projects, services, stats, studio, testimonials } from "../data";
import { useParallax } from "../hooks";

/* ================= Marquee ================= */
export function Marquee({
  items,
  reverse = false,
  duration = "30s",
  className = "",
  itemClassName = "",
}: {
  items: string[];
  reverse?: boolean;
  duration?: string;
  className?: string;
  itemClassName?: string;
}) {
  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className={`flex items-center whitespace-nowrap ${itemClassName}`}>
          <span className={/[\u0900-\u097F]/.test(item) ? "deva" : ""}>{item}</span>
          <span className="mx-6 text-gold">✦</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`marquee-track ${reverse ? "marquee-rev" : ""}`}
        style={{ ["--marquee-t" as string]: duration }}
      >
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}

/* ================= Section heading ================= */
function Heading({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} mb-12 md:mb-16`}>
      <p className="rv eyebrow mb-5">{eyebrow}</p>
      <h2 className="rv display display-black text-5xl md:text-7xl lg:text-8xl" style={{ ["--rv-d" as string]: "80ms" }}>
        {title}
      </h2>
    </div>
  );
}

/* ================= Hero ================= */
export function Hero({ ready }: { ready: boolean }) {
  const parallax = useParallax(0.22);

  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col overflow-hidden">
      {/* backdrop */}
      <div className="absolute inset-0 vignette">
        <div ref={parallax} className="absolute -inset-y-[12%] inset-x-0">
          <img
            src="/images/hero.jpg"
            alt="Indian bride and groom — cinematic wedding photograph"
            className={`w-full h-full object-cover ${ready ? "hero-img-in" : "opacity-0"}`}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/25 to-ink" />
        <div className="absolute inset-0 bg-maroondeep/20 mix-blend-multiply" />
      </div>

      {/* copy */}
      <div className="relative flex-1 flex flex-col justify-end mx-auto w-full max-w-7xl px-5 md:px-8 pb-10 pt-36">
        <p className="eyebrow mb-6">
          {ready && (
            <span className="rise-mask"><span style={{ ["--rise-d" as string]: "100ms" }}>
              Photography studio — {studio.city}, {studio.state}
            </span></span>
          )}
        </p>
        <h1 className="display display-black text-[19vw] md:text-[13vw] leading-[0.85] tracking-tight">
          {ready && (
            <>
              <span className="rise-mask"><span style={{ ["--rise-d" as string]: "200ms" }}>KAHANI</span></span>
              <span className="rise-mask"><span style={{ ["--rise-d" as string]: "330ms" }}>
                <span className="deva text-gold text-[13vw] md:text-[9vw] align-middle mr-4 md:mr-6">{studio.deva}</span>
                <span className="display-italic text-creamdim text-[11vw] md:text-[7vw]">in every frame</span>
              </span></span>
            </>
          )}
        </h1>
        <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          {ready && (
            <p className="rise-mask max-w-md text-creamdim text-base md:text-lg leading-relaxed">
              <span style={{ ["--rise-d" as string]: "480ms" }}>
                Cinematic Indian weddings, pre-wedding stories, fashion editorials
                and portraits — shot across Rajasthan and beyond.
              </span>
            </p>
          )}
          {ready && (
            <div className="rise-mask">
              <span className="flex flex-wrap gap-4" style={{ ["--rise-d" as string]: "600ms" }}>
                <a href="#work" className="btn-gold">View selected work <span aria-hidden>↓</span></a>
                <a href="#contact" className="btn-ghost">Book your date</a>
              </span>
            </div>
          )}
        </div>
      </div>

      {/* bottom marquee */}
      <div className="relative border-t hairline bg-ink/60 backdrop-blur-sm">
        <Marquee
          items={marqueeItems}
          duration="28s"
          className="py-4"
          itemClassName="text-sm font-bold tracking-[0.22em] uppercase text-creamdim"
        />
      </div>
    </section>
  );
}

/* ================= Work ================= */
export function Work() {
  const floatRef = useRef<HTMLImageElement | null>(null);
  const [active, setActive] = useState<string | null>(null);
  const raf = useRef(0);
  const target = useRef({ x: 0, y: 0 });
  const cur = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = floatRef.current;
    if (!el) return;
    const move = (e: MouseEvent) => { target.current = { x: e.clientX, y: e.clientY }; };
    const loop = () => {
      raf.current = requestAnimationFrame(loop);
      cur.current.x += (target.current.x - cur.current.x) * 0.12;
      cur.current.y += (target.current.y - cur.current.y) * 0.12;
      el.style.left = `${cur.current.x}px`;
      el.style.top = `${cur.current.y}px`;
    };
    window.addEventListener("mousemove", move, { passive: true });
    loop();
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <section id="work" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Heading
          eyebrow="Selected work · 2024 — 2025"
          title={<>Stories we've <span className="display-italic text-gold">told</span></>}
        />

        <div className="border-t hairline">
          {projects.map((p, i) => (
            <a
              key={p.title}
              href="#contact"
              className="work-row group grid grid-cols-[auto_1fr_auto] md:grid-cols-[80px_1fr_auto_auto] items-center gap-4 md:gap-8 py-7 md:py-9 border-b hairline px-2 md:px-4"
              onMouseEnter={() => setActive(p.image)}
              onMouseLeave={() => setActive(null)}
            >
              <span className="deva text-xl md:text-2xl text-maroon w-10">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>
                {/* mobile thumbnail */}
                <span className="block md:hidden mb-4 overflow-hidden rounded-xl">
                  <img src={p.image} alt={p.title} className="w-full aspect-[16/10] object-cover" loading="lazy" />
                </span>
                <span className="work-title display text-3xl md:text-5xl lg:text-6xl block">
                  {p.title}
                </span>
                <span className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-creamdim">
                  <span className="text-gold font-semibold">{p.category}</span>
                  <span>{p.location}</span>
                  <span>{p.year}</span>
                  <span className="deva text-base text-creamdim/70">{p.deva}</span>
                </span>
              </span>
              <span className="work-arrow hidden md:block text-4xl text-gold" aria-hidden>↗</span>
              <span className="hidden lg:block" />
            </a>
          ))}
        </div>

        <p className="rv mt-10 text-creamdim text-sm md:text-base max-w-xl">
          Every project above is a full gallery — 400 to 900 hand-edited frames.
          Ask us and we'll share complete wedding stories, not just highlights.
        </p>
      </div>

      {/* floating hover image (desktop) */}
      <img
        ref={floatRef}
        src={active ?? projects[0].image}
        alt=""
        aria-hidden
        className={`work-float hidden md:block rounded-xl shadow-2xl ${active ? "on" : ""}`}
      />
    </section>
  );
}

/* ================= Services ================= */
export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-36 bg-coal overflow-hidden">
      {/* giant ghost word */}
      <div aria-hidden className="pointer-events-none select-none absolute -top-6 left-0 right-0 overflow-hidden">
        <div className="display display-black text-[24vw] leading-none text-stroke opacity-[0.16] whitespace-nowrap text-center">
          सेवाएँ
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Heading
          eyebrow="What we shoot"
          title={<>Every ritual, <span className="display-italic text-gold">beautifully</span></>}
        />

        <div className="border-t hairline">
          {services.map((s) => (
            <div key={s.num} className="svc-row grid md:grid-cols-[90px_1fr_1.4fr_auto] gap-3 md:gap-8 items-start md:items-center py-8 md:py-10 border-b hairline px-2 md:px-4 rounded-lg">
              <span className="svc-num display text-2xl md:text-3xl text-creamdim/60">{s.num}</span>
              <h3 className="display text-3xl md:text-4xl">
                {s.title} <span className="deva text-xl md:text-2xl text-gold/80 ml-2">{s.deva}</span>
              </h3>
              <p className="rv text-creamdim leading-relaxed max-w-xl">{s.desc}</p>
              <span className="rv text-sm font-bold tracking-widest uppercase text-gold whitespace-nowrap">
                {s.price}
              </span>
            </div>
          ))}
        </div>

        <div className="rv mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-creamdim max-w-lg">
            Destination weddings across India? We travel — palaces, deserts,
            beaches, mountains. Travel is billed at cost, nothing more.
          </p>
          <a href="#contact" className="btn-gold shrink-0">Get a quote →</a>
        </div>
      </div>
    </section>
  );
}

/* ================= Studio / About ================= */
export function Studio() {
  return (
    <section id="studio" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="rv-scale rv relative">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/about.jpg"
              alt="Kahani Studios photographer at work"
              className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-[1.2s]"
              loading="lazy"
            />
          </div>
          {/* rotating badge */}
          <div className="absolute -bottom-8 -right-4 md:-right-8 w-32 h-32 md:w-40 md:h-40">
            <div className="relative w-full h-full">
              <svg viewBox="0 0 100 100" className="spin-slow w-full h-full">
                <defs>
                  <path id="circ" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                </defs>
                <text className="fill-gold" style={{ fontSize: "10.5px", letterSpacing: "2.5px", fontWeight: 700 }}>
                  <textPath href="#circ">SINCE 2014 · JAIPUR · INDIA ·</textPath>
                </text>
              </svg>
              <div className="deva absolute inset-0 flex items-center justify-center text-4xl text-gold">
                {studio.deva}
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="rv eyebrow mb-5">The studio</p>
          <h2 className="rv display display-black text-5xl md:text-6xl mb-8" style={{ ["--rv-d" as string]: "80ms" }}>
            We shoot weddings like <span className="display-italic text-gold">cinema</span>
          </h2>
          <div className="rv space-y-5 text-creamdim leading-relaxed text-base md:text-lg" style={{ ["--rv-d" as string]: "160ms" }}>
            <p>
              Kahani Studios began in Jaipur's old city in 2014 with one camera
              and a stubborn belief — that an Indian wedding isn't an event,
              it's an <em className="text-cream not-italic font-semibold">epic</em>.
              Four days, forty rituals, four hundred emotions.
            </p>
            <p>
              Today we're a twelve-person crew of photographers, cinematographers
              and editors. We shoot quietly, direct gently, and deliver galleries
              that read like films — the baraat's madness, your grandmother's
              blessing, the two seconds before the varmala when time stopped.
            </p>
            <p className="deva text-2xl text-gold/90 pt-2">हर फ्रेम में एक कहानी —</p>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={s.label} className="rv border-l-2 border-maroon pl-4" style={{ ["--rv-d" as string]: `${i * 90}ms` }}>
                <div className="display display-black text-3xl md:text-4xl text-gold">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-creamdim">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= Testimonials ================= */
export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 bg-maroondeep overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 30%, #cfa14f 0, transparent 32%), radial-gradient(circle at 85% 75%, #cfa14f 0, transparent 28%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Heading
          eyebrow="Kind words"
          align="center"
          title={<>Loved, <span className="display-italic text-goldsoft">loudly</span></>}
        />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="rv bg-ink/45 backdrop-blur-sm border hairline rounded-2xl p-8 flex flex-col hover:-translate-y-2 transition-transform duration-500"
              style={{ ["--rv-d" as string]: `${i * 120}ms` }}
            >
              <div className="text-gold tracking-[0.3em] mb-5" aria-label="5 stars">★★★★★</div>
              <blockquote className="display text-xl md:text-2xl leading-snug flex-1">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t hairline">
                <div className="font-bold">{t.name}</div>
                <div className="text-sm text-creamdim mt-1">{t.detail}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= Detail strip ================= */
export function DetailStrip() {
  const imgs = [
    { src: "/images/detail-hands.jpg", alt: "Bride's mehendi hands with jewelry" },
    { src: "/images/detail-decor.jpg", alt: "Indian wedding decor with marigolds" },
    { src: "/images/detail-jewelry.jpg", alt: "Indian bridal jewelry close-up" },
    { src: "/images/marquee-1.jpg", alt: "Candid Indian wedding moment" },
  ];
  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8 mb-10">
        <p className="rv eyebrow">Details we obsess over</p>
      </div>
      {/* image marquee */}
      <div className="overflow-hidden">
        <div className="marquee-track marquee-rev gap-5 px-2" style={{ ["--marquee-t" as string]: "46s" }}>
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 gap-5">
              {imgs.map((im) => (
                <img
                  key={`${dup}-${im.src}`}
                  src={im.src}
                  alt={im.alt}
                  loading="lazy"
                  className="h-56 md:h-72 w-auto rounded-xl object-cover hover:scale-[1.03] transition-transform duration-500"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= Contact / Footer ================= */
export function Contact() {
  return (
    <footer id="contact" className="relative pt-24 md:pt-36 bg-coal overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center mb-16">
          <p className="rv eyebrow mb-6">Dates open for 2026 — 2027</p>
          <h2 className="rv display display-black text-[13vw] md:text-[8vw] leading-[0.9]" style={{ ["--rv-d" as string]: "80ms" }}>
            Let's create<br />
            <span className="display-italic text-gold">your kahani</span>
            <span className="deva text-gold text-[8vw] md:text-[5vw] ml-4">कहानी</span>
          </h2>
          <p className="rv mt-8 text-creamdim max-w-xl mx-auto text-base md:text-lg" style={{ ["--rv-d" as string]: "160ms" }}>
            Tell us your date and your city. We'll reply within 24 hours with
            availability, packages and a few full galleries to fall in love with.
          </p>
          <div className="rv mt-10 flex flex-wrap justify-center gap-4" style={{ ["--rv-d" as string]: "240ms" }}>
            <a href={studio.phoneHref} className="btn-gold text-lg !px-8 !py-4">
              <span aria-hidden>✆</span> {studio.phone}
            </a>
            <a href={`mailto:${studio.email}`} className="btn-ghost text-lg !px-8 !py-4">
              {studio.email}
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 py-12 border-t hairline text-sm">
          <div className="rv">
            <div className="eyebrow mb-4">Studio</div>
            <p className="text-creamdim leading-relaxed">
              {studio.address}<br />{studio.hours}
            </p>
          </div>
          <div className="rv" style={{ ["--rv-d" as string]: "100ms" }}>
            <div className="eyebrow mb-4">Follow the stories</div>
            <a href={studio.instagramHref} className="text-creamdim hover:text-gold transition-colors text-lg font-semibold">
              {studio.instagram}
            </a>
            <p className="text-creamdim/70 mt-2">Daily frames, reels & behind-the-scenes.</p>
          </div>
          <div className="rv" style={{ ["--rv-d" as string]: "200ms" }}>
            <div className="eyebrow mb-4">Begin</div>
            <a href="#top" className="text-creamdim hover:text-gold transition-colors">
              Back to top ↑
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
