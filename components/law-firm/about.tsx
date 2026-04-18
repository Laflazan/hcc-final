import { getDictionary, type Locale } from "@/lib/site";

export function About({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <img
          src="/about-bg.png"
          alt={locale === "tr" ? "Hakkımızda arka plan" : "About background"}
          className="h-full w-full scale-105 object-cover opacity-25"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/65 to-black/75" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2">
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
                className={`text-lg leading-relaxed text-white/80 ${
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
                  className="flex items-center gap-3 text-sm text-white/75"
                >
                  <div className="h-2 w-2 shrink-0 bg-gold" />
                  <span>{indicator}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {dictionary.about.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/15 bg-white/10 p-8 backdrop-blur-sm"
              >
                <div className="font-serif text-3xl font-medium text-white md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm uppercase tracking-wider leading-relaxed text-white/65">
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
