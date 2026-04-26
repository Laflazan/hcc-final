import Image from "next/image";
import { getDictionary, type Locale } from "@/lib/site";

export function About({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/about-bg.png"
          alt={locale === "tr" ? "Hakkımızda arka plan" : "About background"}
          fill
          sizes="100vw"
          quality={70}
className="h-full w-full scale-105 object-cover opacity-60"         />
      </div>

      {/* MAIN DARK GRADIENT (LIGHTENED) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/50 via-black/30 to-black/40" />

      {/* PREMIUM LIGHT EFFECT */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gold/20 blur-[120px]" />

      {/* SUBTLE GRID EFFECT (VERY PREMIUM TOUCH) */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05] bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)_76%,transparent_77%,transparent)] bg-[length:60px_60px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            <div className="mb-8 h-px w-16 bg-gold" />

            <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-white md:text-5xl">
              {dictionary.about.title}
              <br />
              <span className="text-gold">{dictionary.about.highlight}</span>
            </h2>

            {dictionary.about.paragraphs.map((paragraph, index) => (
              <p
                key={`${index}-${paragraph.slice(0, 24)}`}
                className={`text-base leading-relaxed text-white/85 sm:text-lg ${
                  index === 0 ? "mt-8" : "mt-6"
                }`}
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {dictionary.about.indicators.map((indicator) => (
                <div
                  key={indicator}
                  className="flex items-center gap-3 text-sm text-white/80"
                >
                  <div className="h-2 w-2 shrink-0 bg-gold" />
                  <span>{indicator}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
            {dictionary.about.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/15 bg-white/10 p-8 backdrop-blur-md transition hover:bg-white/15"
              >
                <div className="font-serif text-3xl font-medium text-white md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm uppercase tracking-wider leading-relaxed text-white/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
