import { useState } from "react";
import { serviceDetails, studio } from "../data";
import { PageHero } from "./shared";

const inputCls =
  "field-input";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title={<>Tell us about your <span className="display-italic text-gold">celebration</span></>}
        intro="Fill this in and we'll reply within 24 hours with availability, packages and full galleries that match your vibe. Or just call — we like voices too."
      />

      <div className="mx-auto max-w-7xl px-5 md:px-8 pb-24 md:pb-32 grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
        {/* info column */}
        <div className="space-y-5 lg:sticky lg:top-28">
          <a href={studio.phoneHref} className="rv block border hairline rounded-2xl p-6 bg-coal/60 hover:border-gold/50 transition-colors group">
            <div className="eyebrow mb-2">Call us</div>
            <div className="display text-2xl md:text-3xl group-hover:text-gold transition-colors">{studio.phone}</div>
            <p className="text-creamdim text-sm mt-2">Mon–Sat, 10am–7pm IST. We actually pick up.</p>
          </a>
          <a href={`mailto:${studio.email}`} className="rv block border hairline rounded-2xl p-6 bg-coal/60 hover:border-gold/50 transition-colors group" style={{ ["--rv-d" as string]: "80ms" }}>
            <div className="eyebrow mb-2">Email</div>
            <div className="display text-xl md:text-2xl group-hover:text-gold transition-colors break-all">{studio.email}</div>
            <p className="text-creamdim text-sm mt-2">For detailed briefs, mood-boards and vendor lists.</p>
          </a>
          <div className="rv border hairline rounded-2xl p-6 bg-coal/60" style={{ ["--rv-d" as string]: "160ms" }}>
            <div className="eyebrow mb-2">The studio</div>
            <div className="text-creamdim leading-relaxed">{studio.address}</div>
            <p className="text-creamdim/70 text-sm mt-2">{studio.hours}</p>
          </div>
          <a href={studio.instagramHref} className="rv block border hairline rounded-2xl p-6 bg-coal/60 hover:border-gold/50 transition-colors group" style={{ ["--rv-d" as string]: "240ms" }}>
            <div className="eyebrow mb-2">Instagram</div>
            <div className="display text-xl md:text-2xl group-hover:text-gold transition-colors">{studio.instagram}</div>
            <p className="text-creamdim text-sm mt-2">Daily frames, reels & behind-the-scenes.</p>
          </a>
        </div>

        {/* form column */}
        <div className="rv border hairline rounded-2xl p-6 md:p-10 bg-coal/60" style={{ ["--rv-d" as string]: "120ms" }}>
          {sent ? (
            <div className="page-in text-center py-14">
              <div className="deva text-7xl text-gold mb-6">शुक्रिया</div>
              <h2 className="display display-black text-3xl md:text-4xl mb-4">
                We've got your story.
              </h2>
              <p className="text-creamdim max-w-md mx-auto leading-relaxed">
                Thank you for reaching out — we'll call you back within 24 hours
                with availability and packages. Keep your date flexible if you can.
              </p>
              <button onClick={() => setSent(false)} className="btn-ghost mt-8">
                Send another enquiry
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <label className="field">
                  <span>Your name *</span>
                  <input required type="text" name="name" placeholder="Aarav & Diya" className={inputCls} />
                </label>
                <label className="field">
                  <span>Phone *</span>
                  <input required type="tel" name="phone" placeholder="+91 …" className={inputCls} />
                </label>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <label className="field">
                  <span>Email</span>
                  <input type="email" name="email" placeholder="you@example.com" className={inputCls} />
                </label>
                <label className="field">
                  <span>Event date *</span>
                  <input required type="date" name="date" className={inputCls} />
                </label>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <label className="field">
                  <span>What do you need? *</span>
                  <select required name="service" defaultValue="" className={inputCls}>
                    <option value="" disabled>Choose a service…</option>
                    {serviceDetails.map((s) => (
                      <option key={s.name} value={s.name}>{s.name} — {s.price}</option>
                    ))}
                    <option value="Multiple">Multiple / full wedding</option>
                    <option value="Other">Something else</option>
                  </select>
                </label>
                <label className="field">
                  <span>City / venue</span>
                  <input type="text" name="city" placeholder="Jaipur, Udaipur, Goa…" className={inputCls} />
                </label>
              </div>

              <label className="field">
                <span>Your requirements *</span>
                <textarea
                  required
                  name="requirements"
                  rows={5}
                  placeholder="Tell us everything — the dates, the functions, the number of days, the vibe you're dreaming of, anything that matters to you…"
                  className={`${inputCls} resize-y`}
                />
              </label>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-2">
                <button type="submit" className="btn-gold text-lg !px-10 !py-4">
                  Send enquiry →
                </button>
                <p className="text-creamdim/70 text-sm">
                  No spam, no pressure. Just a call about your dates.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
