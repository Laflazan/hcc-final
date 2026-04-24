import Link from "next/link";
import type { Locale } from "@/lib/site";
import { getDictionary, getPath } from "@/lib/site";
import { About } from "@/components/law-firm/about";
import { Button } from "@/components/ui/button";

export function AboutPage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <>
      <section className="relative overflow-hidden bg-background pt-32 pb-20 text-left lg:pt-36 lg:pb-24 border-b border-border">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,106,0.10),transparent_38%)]" />

        <div className="relative mx-auto max-w-4xl px-6">
          <div className="mb-6 flex justify-start">
            <div className="h-px w-16 bg-gold" />
          </div>

          <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            {dictionary.metadata.about.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {dictionary.pages.aboutIntro}
          </p>
        </div>
      </section>

      <About locale={locale} />

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-px bg-border lg:grid-cols-3">
            {dictionary.pages.aboutCards.map((card) => (
              <div key={card.title} className="bg-background p-8 lg:p-10">
                <div className="h-px w-12 bg-gold" />
                <h2 className="mt-6 font-serif text-2xl text-foreground">
                  {card.title}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Button
              asChild
              variant="outline"
              className="border-gold bg-transparent text-foreground hover:bg-gold hover:text-primary-foreground"
            >
              <Link href={getPath(locale, "contact")}>
                {dictionary.pages.aboutCta}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
