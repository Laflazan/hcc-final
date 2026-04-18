import type { Locale } from "@/lib/site";
import { Hero } from "@/components/law-firm/hero";
import { About } from "@/components/law-firm/about";
import { Services } from "@/components/law-firm/services";
import { Team } from "@/components/law-firm/team";
import { Insights } from "@/components/law-firm/insights";
import { Contact } from "@/components/law-firm/contact";

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <Hero locale={locale} />
      <About locale={locale} />
      <Services locale={locale} />
      <Team locale={locale} />
      <Insights locale={locale} />
      <Contact locale={locale} />
    </>
  );
}
