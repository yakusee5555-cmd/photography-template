import {
  ContactCta,
  DetailStrip,
  Hero,
  Marquee,
  Services,
  Studio,
  Testimonials,
  Work,
} from "../components/sections";
import { marqueeItems } from "../data";

export default function Home({ ready }: { ready: boolean }) {
  return (
    <>
      <Hero ready={ready} />
      <Marquee items={marqueeItems} className="border-y hairline bg-coal/60" />
      <Work />
      <Services />
      <Studio />
      <DetailStrip />
      <Testimonials />
      <ContactCta />
    </>
  );
}
