import { useEffect, useRef, useState } from "react";
import { studio } from "../data";

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
