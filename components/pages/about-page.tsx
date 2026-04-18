import Link from "next/link";
import type { Locale } from "@/lib/site";
import { getDictionary, getPath } from "@/lib/site";
import { About } from "@/components/law-firm/about";
import { Button } from "@/components/ui/button";

export function AboutPage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <>
      <section className="pt-40 pb-28 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-6 h-px w-16 bg-gold mx-auto" />
          <h1 className="font-serif text-4xl md:text-5xl">
            {dictionary.metadata.about.title}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {dictionary.pages.aboutIntro}
          </p>
        </div>
      </section>

      <About locale={locale} />

      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-px bg-border lg:grid-cols-3">
            {dictionary.pages.aboutCards.map((card) => (
              <div key={card.title} className="bg-background p-8 lg:p-10">
                <div className="h-px w-12 bg-gold" />
                <h2 className="mt-6 font-serif text-2xl text-foreground">
                  {card.title}
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
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
