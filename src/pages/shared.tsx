import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <section className="relative pt-32 md:pt-44 pb-14 md:pb-20 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none select-none absolute -top-4 left-0 right-0 overflow-hidden"
      >
        <div className="display display-black text-[20vw] leading-none text-stroke opacity-[0.12] whitespace-nowrap text-center">
          कहानी
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <p className="rv eyebrow mb-5">{eyebrow}</p>
        <h1 className="rv display display-black text-5xl md:text-7xl lg:text-8xl max-w-5xl" style={{ ["--rv-d" as string]: "80ms" }}>
          {title}
        </h1>
        {intro && (
          <p className="rv mt-6 text-creamdim text-base md:text-lg max-w-2xl leading-relaxed" style={{ ["--rv-d" as string]: "160ms" }}>
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
