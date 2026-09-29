import { Link } from "react-router-dom";
import { stats } from "../data";
import { ContactCta, DetailStrip } from "../components/sections";
import { PageHero } from "./shared";

const values = [
  { t: "Invisible, not absent", d: "We don't stage your wedding. We disappear into it — and catch the moments you'd have missed while living them." },
  { t: "Rituals first, trends later", d: "Fads fade. The way your mother tied your chooda won't. We shoot for the version of you that's eighty." },
  { t: "Edited by humans, with taste", d: "Every frame is hand-edited by our own colour team. No presets slapped on, no orange-skin shortcuts." },
  { t: "Fewer weddings, done properly", d: "We take a limited number of celebrations each season, so yours gets our whole heart — and our whole calendar." },
];

export default function Studio() {
  return (
    <>
      <PageHero
        eyebrow="The studio"
        title={<>Twelve people, one <span className="display-italic text-gold">obsession</span></>}
        intro="We're photographers, cinematographers and editors from Jaipur who believe an Indian wedding isn't an event — it's an epic."
      />

      <div className="mx-auto max-w-7xl px-5 md:px-8 pb-24 md:pb-32 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="rv-scale rv relative lg:sticky lg:top-28">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/about.jpg"
              alt="Kahani Studios photographer at work"
              className="w-full aspect-[4/5] object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-3 md:-right-6 bg-maroon text-cream px-6 py-4 rounded-xl shadow-xl rotate-2">
            <div className="display display-black text-3xl text-gold">2014</div>
            <div className="text-xs uppercase tracking-[0.2em]">shooting since</div>
          </div>
        </div>

        <div>
          <div className="rv space-y-5 text-creamdim leading-relaxed text-base md:text-lg">
            <p>
              Kahani Studios began in Jaipur's old city in 2014 with one camera
              and a stubborn belief — that an Indian wedding isn't an event,
              it's an <em className="text-cream not-italic font-semibold">epic</em>.
              Four days, forty rituals, four hundred emotions.
            </p>
            <p>
              Today we're a twelve-person crew. We shoot quietly, direct gently,
              and deliver galleries that read like films — the baraat's madness,
              your grandmother's blessing, the two seconds before the varmala
              when time stopped.
            </p>
            <p>
              We've shot in palaces and farmhouses, on dunes and beaches, in 28
              cities across India. But our favourite venue is still wherever
              your people are laughing the loudest.
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

          <div className="mt-14 space-y-8">
            <h2 className="rv display display-black text-3xl md:text-4xl">
              What we <span className="display-italic text-gold">believe</span>
            </h2>
            {values.map((v, i) => (
              <div key={v.t} className="rv border-t hairline pt-6" style={{ ["--rv-d" as string]: `${i * 80}ms` }}>
                <h3 className="display text-xl md:text-2xl mb-2">
                  <span className="text-gold mr-3" aria-hidden>✦</span>{v.t}
                </h3>
                <p className="text-creamdim leading-relaxed pl-8">{v.d}</p>
              </div>
            ))}
          </div>

          <Link to="/work" className="rv btn-ghost mt-12 inline-flex">
            See the work this creates →
          </Link>
        </div>
      </div>

      <DetailStrip />
      <ContactCta />
    </>
  );
}
