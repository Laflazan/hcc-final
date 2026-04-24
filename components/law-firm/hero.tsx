import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getDictionary, getSectionHref, type Locale } from "@/lib/site";

export function Hero({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#12070A] text-white">
      {/* Background image */}
      <Image
        src="/istanbul-hero.jpg"
        alt="İstanbul silüeti"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-70"
      />

      {/* Image darkening */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Left burgundy gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#18070B]/95 via-[#3A0F17]/75 to-transparent" />

      {/* Bottom depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/15" />

      {/* Gold glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-2/3 bg-[radial-gradient(circle_at_25%_42%,rgba(200,169,106,0.18),transparent_45%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 sm:px-8 lg:px-12">
        <div className="max-w-4xl text-left">
          <div className="mb-8 h-px w-28 bg-gold" />

          <h1 className="font-serif text-5xl font-medium leading-[0.98] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            {dictionary.hero.title}
            <br />
            <span className="text-gold">{dictionary.hero.highlight}</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
            {dictionary.hero.description}
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-14 w-full bg-gold px-8 text-base text-black shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:bg-white sm:w-auto"
            >
              <Link href={getSectionHref(locale, "services")}>
                {dictionary.hero.servicesButton}
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 w-full border-white/30 bg-white/10 px-8 text-base text-white backdrop-blur-sm transition hover:border-gold hover:bg-gold hover:text-black sm:w-auto"
            >
              <Link href={getSectionHref(locale, "contact")}>
                {dictionary.hero.contactButton}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-12 hidden animate-bounce lg:block">
        <div className="h-16 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}