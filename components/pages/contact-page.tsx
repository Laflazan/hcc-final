import type { Locale } from "@/lib/site";
import { getDictionary } from "@/lib/site";
import { Contact } from "@/components/law-firm/contact";

export function ContactPage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-background pt-32 pb-20 text-left lg:pt-36 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,106,0.10),transparent_38%)]" />

        <div className="relative mx-auto max-w-4xl px-6">
          <div className="mb-6 flex justify-start">
            <div className="h-px w-16 bg-gold" />
          </div>

          <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            {dictionary.metadata.contact.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {dictionary.pages.contactIntro}
          </p>
        </div>
      </section>

      <Contact locale={locale} />

      <section className="bg-background py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="mx-auto h-px w-16 bg-gold" />
          <h2 className="mt-8 font-serif text-3xl text-foreground">
            {dictionary.contact.preMeetingTitle}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {dictionary.contact.preMeetingDescription}
          </p>
        </div>
      </section>
    </>
  );
}
