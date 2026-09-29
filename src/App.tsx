import { useCallback, useEffect, useState } from "react";
import Lenis from "lenis";
import { Cursor, Nav, Preloader } from "./components/chrome";
import {
  Contact,
  DetailStrip,
  Hero,
  Services,
  Studio,
  Testimonials,
  Work,
} from "./components/sections";
import { useRevealRoot } from "./hooks";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);
  const rootRef = useRevealRoot<HTMLDivElement>();

  const handleDone = useCallback(() => {
    setLoading(false);
    // let the preloader slide away, then trigger hero animations
    requestAnimationFrame(() => setTimeout(() => setReady(true), 250));
  }, []);

  // Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1 });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // anchor links via lenis
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -64, duration: 1.4 });
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  // lock scroll during preload
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <div ref={rootRef} className="grain min-h-screen bg-ink text-cream">
      {loading && <Preloader onDone={handleDone} />}
      <Cursor />
      <Nav ready={ready} />
      <main>
        <Hero ready={ready} />
        <Work />
        <Services />
        <Studio />
        <DetailStrip />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}
