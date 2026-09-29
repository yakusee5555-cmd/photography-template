import { useEffect, useRef, useState } from "react";
import type { MutableRefObject } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { Cursor, Preloader } from "./components/chrome";
import { Layout } from "./components/layout";
import { useRevealRoot } from "./hooks";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Services from "./pages/Services";
import Studio from "./pages/Studio";
import Contact from "./pages/Contact";

/* scroll to top on every route change */
function ScrollManager({ lenisRef }: { lenisRef: MutableRefObject<Lenis | null> }) {
  const { pathname } = useLocation();
  useEffect(() => {
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname, lenisRef]);
  return null;
}

function Shell() {
  const [ready, setReady] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);
  const revealRef = useRevealRoot<HTMLDivElement>();
  const { pathname } = useLocation();

  /* smooth scroll */
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenisRef.current = lenis;
    let raf = 0;
    const loop = (t: number) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);

    /* in-page anchor links (home hero "view work" etc.) */
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href")!.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -70 });
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  /* lock scroll during preload */
  useEffect(() => {
    document.documentElement.style.overflow = loaded ? "" : "hidden";
    return () => { document.documentElement.style.overflow = ""; };
  }, [loaded ]);

  useEffect(() => {
    if (loaded) {
      const t = setTimeout(() => setReady(true), 60);
      return () => clearTimeout(t);
    }
  }, [loaded ]);

  return (
    <div ref={revealRef} id="top" className="min-h-screen">
      {!loaded && <Preloader onDone={() => setLoaded(true)} />}
      <Cursor />
      <ScrollManager lenisRef={lenisRef} />
      <Layout>
        <div key={pathname} className="page-in">
          <Routes>
            <Route path="/" element={<Home ready={ready} />} />
            <Route path="/work" element={<Work />} />
            <Route path="/services" element={<Services />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home ready={ready} />} />
          </Routes>
        </div>
      </Layout>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}
