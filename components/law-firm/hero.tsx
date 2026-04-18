import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getDictionary, getSectionHref, type Locale } from "@/lib/site";

export function Hero({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex justify-center">
            <div className="h-px w-24 bg-gold" />
          </div>

          <h1 className="font-serif text-5xl font-medium leading-[1.1] tracking-tight text-foreground text-balance md:text-6xl lg:text-7xl xl:text-8xl">
            {dictionary.hero.title}
            <br />
            <span className="text-gold">{dictionary.hero.highlight}</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
            {dictionary.hero.description}
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-foreground px-8 py-6 text-base text-background hover:bg-foreground/90"
            >
              <Link href={getSectionHref(locale, "services")}>
                {dictionary.hero.servicesButton}
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border px-8 py-6 text-base text-foreground hover:bg-muted"
            >
              <Link href={getSectionHref(locale, "contact")}>
                {dictionary.hero.contactButton}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-16 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
