import { useState } from "react";
import { Link } from "react-router-dom";
import { detailStrip, marqueeItems, projects, services, stats, studio, testimonials } from "../data";
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
                <Link to="/contact" className="btn-ghost">Book your date</Link>
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
  const [active, setActive] = useState(0);
  const shown = projects[active] ?? projects[0];

  return (
    <section id="work" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex items-end justify-between gap-8 mb-12 md:mb-16">
          <div className="mb-0">
            <p className="rv eyebrow mb-5">Selected work · 2024 — 2025</p>
            <h2 className="rv display display-black text-5xl md:text-7xl lg:text-8xl" style={{ ["--rv-d" as string]: "80ms" }}>
              Stories we've <span className="display-italic text-gold">told</span>
            </h2>
          </div>

          {/* pinned preview card — swaps image as you hover each row */}
          <div className="rv hidden md:block shrink-0 relative w-52 lg:w-60" style={{ ["--rv-d" as string]: "160ms" }}>
            <div className="absolute -inset-2 rounded-2xl border border-gold/40 rotate-3" aria-hidden />
            <div className="relative overflow-hidden rounded-xl shadow-2xl rotate-2 aspect-[3/4] bg-coal">
              {projects.map((p, i) => (
                <img
                  key={p.image}
                  src={p.image}
                  alt=""
                  aria-hidden
                  loading={i === 0 ? "eager" : "lazy"}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                    i === active ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                />
              ))}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-4 pt-10">
                <div className="deva text-gold text-lg leading-none">{shown.deva}</div>
                <div className="text-xs font-bold tracking-widest uppercase mt-1 text-cream">
                  {shown.location} · {shown.year}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t hairline" onMouseLeave={() => setActive(0)}>
          {projects.map((p, i) => (
            <Link
              key={p.title}
              to="/work"
              className="work-row group grid grid-cols-[auto_1fr_auto] md:grid-cols-[80px_1fr_auto_auto] items-center gap-4 md:gap-8 py-7 md:py-9 border-b hairline px-2 md:px-4"
              onMouseEnter={() => setActive(i)}
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
            </Link>
          ))}
        </div>

        <p className="rv mt-10 text-creamdim text-sm md:text-base max-w-xl">
          Every project above is a full gallery — 400 to 900 hand-edited frames.
          Ask us and we'll share complete wedding stories, not just highlights.
        </p>
        <Link to="/work" className="rv btn-ghost mt-6 inline-flex">
          View the full gallery →
        </Link>
      </div>

      {/* pinned preview card lives in the section header now */}
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
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link to="/services" className="btn-ghost">Explore all services →</Link>
            <Link to="/contact" className="btn-gold">Get a quote →</Link>
          </div>
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

          <Link to="/studio" className="rv btn-ghost mt-8 inline-flex" style={{ ["--rv-d" as string]: "200ms" }}>
            More about the studio →
          </Link>

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
  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8 mb-10 flex items-end justify-between gap-6">
        <p className="rv eyebrow">Details we obsess over</p>
        <p className="rv hidden md:block text-sm text-creamdim/70" style={{ ["--rv-d" as string]: "100ms" }}>
          The small things are the big things
        </p>
      </div>
      {/* image marquee — never pauses, hover just zooms the tile */}
      <div className="overflow-hidden">
        <div className="marquee-track marquee-rev nopause gap-5 px-2" style={{ ["--marquee-t" as string]: "60s" }}>
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 gap-5" aria-hidden={dup === 1}>
              {detailStrip.map((im) => (
                <div
                  key={`${dup}-${im.image}`}
                  className="relative shrink-0 overflow-hidden rounded-xl group"
                >
                  <img
                    src={im.image}
                    alt={im.label}
                    loading="lazy"
                    className="h-56 md:h-80 w-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-4 pt-8 pb-3">
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-cream">
                      {im.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= Contact CTA band ================= */
export function ContactCta() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div aria-hidden className="pointer-events-none select-none absolute inset-0 flex items-center justify-center">
        <div className="display display-black text-[26vw] leading-none text-stroke opacity-[0.12] whitespace-nowrap">
          कहानी
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 text-center">
        <p className="rv eyebrow mb-6">Dates open for 2026 — 2027</p>
        <h2 className="rv display display-black text-[13vw] md:text-[8vw] leading-[0.9]" style={{ ["--rv-d" as string]: "80ms" }}>
          Let's create<br />
          <span className="display-italic text-gold">your kahani</span>
          <span className="deva text-gold text-[8vw] md:text-[5vw] ml-4">कहानी</span>
        </h2>
        <p className="rv mt-8 text-creamdim max-w-xl mx-auto text-base md:text-lg" style={{ ["--rv-d" as string]: "160ms" }}>
          Tell us your date, your city and what you're dreaming of.
          We'll reply within 24 hours with availability and packages.
        </p>
        <div className="rv mt-10 flex flex-wrap justify-center gap-4" style={{ ["--rv-d" as string]: "240ms" }}>
          <Link to="/contact" className="btn-gold text-lg !px-8 !py-4">
            Start your booking →
          </Link>
          <a href={studio.phoneHref} className="btn-ghost text-lg !px-8 !py-4">
            <span aria-hidden>✆</span> {studio.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
