import { useState } from "react";
import { Link } from "react-router-dom";
import { gallery, galleryCategories } from "../data";
import { PageHero } from "./shared";

export default function Work() {
  const [cat, setCat] = useState("All");
  const items = cat === "All" ? gallery : gallery.filter((g) => g.category === cat);

  return (
    <>
      <PageHero
        eyebrow="The portfolio"
        title={<>Every frame, a <span className="display-italic text-gold">kahani</span></>}
        intro="Weddings, pre-wedding stories, portraits and editorials — a few of our favourite frames from the last two seasons."
      />

      {/* filters */}
      <div className="mx-auto max-w-7xl px-5 md:px-8 mb-10">
        <div className="rv flex flex-wrap gap-3">
          {galleryCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-wide border transition-all duration-300 ${
                cat === c
                  ? "bg-gold text-ink border-gold"
                  : "border-cream/20 text-creamdim hover:border-gold/60 hover:text-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* masonry grid */}
      <div className="mx-auto max-w-7xl px-5 md:px-8 pb-24 md:pb-32">
        <div key={cat} className="page-in columns-1 sm:columns-2 lg:columns-3 gap-5 [&>div]:mb-5">
          {items.map((g) => (
            <div key={g.image} className="rv break-inside-avoid relative overflow-hidden rounded-xl group">
              <img
                src={g.image}
                alt={g.title}
                loading="lazy"
                className="w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="text-xs font-bold tracking-[0.2em] uppercase text-gold mb-1">
                  {g.category}
                </div>
                <div className="display text-2xl text-cream">
                  {g.title}
                  {g.deva && <span className="deva text-lg text-gold/80 ml-2">{g.deva}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="rv text-creamdim mb-6 max-w-xl mx-auto">
            Like what you see? Tell us about your celebration — we'll share full
            galleries that match your vibe.
          </p>
          <Link to="/contact" className="rv btn-gold inline-flex">
            Check your date →
          </Link>
        </div>
      </div>
    </>
  );
}
