import { Link } from "react-router-dom";
import { faqs, serviceDetails } from "../data";
import { ContactCta } from "../components/sections";
import { PageHero } from "./shared";

const process = [
  { step: "01", title: "Say hello", desc: "Share your dates and your story. We reply within 24 hours with availability, packages and full galleries." },
  { step: "02", title: "The shoot", desc: "We arrive early, stay invisible, and direct gently. You live the day — we collect it." },
  { step: "03", title: "Sneak peeks", desc: "Within 48 hours you get a hand-picked set of highlights, ready for the family group chat." },
  { step: "04", title: "The album", desc: "Your full gallery in 3–4 weeks, and a luxury album in 6–8 weeks — a film you can hold." },
];

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services & pricing"
        title={<>Choose your <span className="display-italic text-gold">story</span></>}
        intro="Transparent packages, no hidden costs. Every booking includes our full crew, hand-edited galleries and a sneak-peek set within 48 hours."
      />

      {/* service detail cards */}
      <div className="mx-auto max-w-7xl px-5 md:px-8 pb-8 space-y-16 md:space-y-24">
        {serviceDetails.map((s, i) => (
          <article
            key={s.name}
            className={`rv grid lg:grid-cols-2 gap-8 lg:gap-14 items-center ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={s.image}
                  alt={s.name}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-[1.2s]"
                />
              </div>
              <div className="absolute -bottom-5 left-6 bg-maroon text-cream px-5 py-3 rounded-xl shadow-xl">
                <span className="text-sm font-bold tracking-widest uppercase">{s.price}</span>
              </div>
            </div>
            <div>
              <p className="eyebrow mb-4">{s.deva}</p>
              <h2 className="display display-black text-4xl md:text-5xl mb-3">{s.name}</h2>
              <p className="display-italic text-xl text-gold mb-6">{s.tagline}</p>
              <ul className="space-y-3 mb-8">
                {s.includes.map((inc) => (
                  <li key={inc} className="flex items-start gap-3 text-creamdim">
                    <span className="text-gold mt-0.5" aria-hidden>✦</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-gold inline-flex">
                Book {s.name} →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* process */}
      <section className="py-24 md:py-32 bg-coal">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="rv eyebrow mb-5">How it works</p>
          <h2 className="rv display display-black text-4xl md:text-6xl mb-14" style={{ ["--rv-d" as string]: "80ms" }}>
            From hello to <span className="display-italic text-gold">heirloom</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <div key={p.step} className="rv border-t-2 border-maroon pt-6" style={{ ["--rv-d" as string]: `${i * 90}ms` }}>
                <div className="display display-black text-5xl text-gold/30 mb-4">{p.step}</div>
                <h3 className="display text-2xl mb-3">{p.title}</h3>
                <p className="text-creamdim text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <p className="rv eyebrow mb-5 text-center">Good to know</p>
          <h2 className="rv display display-black text-4xl md:text-6xl mb-12 text-center" style={{ ["--rv-d" as string]: "80ms" }}>
            Questions, <span className="display-italic text-gold">answered</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={f.q} className="rv group border hairline rounded-xl bg-coal/50 open:bg-coal transition-colors" style={{ ["--rv-d" as string]: `${i * 60}ms` }}>
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                  <span className="display text-lg md:text-xl">{f.q}</span>
                  <span className="text-gold text-2xl leading-none transition-transform duration-300 group-open:rotate-45" aria-hidden>+</span>
                </summary>
                <p className="px-6 pb-6 text-creamdim leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
