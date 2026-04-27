import type { Locale } from "@/lib/site";
import { getLegalPageContent, type LegalPageKey } from "@/lib/legal-pages";

export function LegalPage({
  locale,
  pageKey,
}: {
  locale: Locale;
  pageKey: LegalPageKey;
}) {
  const page = getLegalPageContent(locale, pageKey);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-background pt-32 pb-20 text-left lg:pt-36 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,106,0.10),transparent_38%)]" />

        <div className="relative mx-auto max-w-4xl px-6">
          <div className="mb-6 flex justify-start">
            <div className="h-px w-16 bg-gold" />
          </div>

          <p className="text-sm uppercase tracking-[0.22em] text-gold">
            HCC
          </p>
          <h1 className="mt-4 font-serif text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            {page.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {page.description}
          </p>
          <p className="mt-5 text-sm text-muted-foreground">
            {page.updatedLabel}: {page.updatedAt}
          </p>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="space-y-12">
            {page.sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-serif text-2xl font-medium text-foreground md:text-3xl">
                  {section.title}
                </h2>
                <div className="mt-5 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-8 text-muted-foreground md:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
