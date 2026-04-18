import type { Locale } from "@/lib/site";
import { getDictionary } from "@/lib/site";
import { Contact } from "@/components/law-firm/contact";

export function ContactPage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <>
      <section className="pt-40 pb-28 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-6 h-px w-16 bg-gold mx-auto" />
          <h1 className="font-serif text-4xl md:text-5xl">
            {dictionary.metadata.contact.title}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {dictionary.pages.contactIntro}
          </p>
        </div>
      </section>

      <Contact locale={locale} />

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="mx-auto h-px w-16 bg-gold" />
          <h2 className="mt-8 font-serif text-3xl text-foreground">
            {dictionary.contact.preMeetingTitle}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {dictionary.contact.preMeetingDescription}
          </p>
        </div>
      </section>
    </>
  );
}
