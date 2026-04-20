import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getPath, type Locale } from "@/lib/site";
import type { ServiceDetail } from "@/lib/services";

export function ServiceDetailPage({
  service,
  locale,
}: {
  service: ServiceDetail;
  locale: Locale;
}) {
  const backLabel = locale === "tr" ? "Hizmetlere Dön" : "Back to Services";
  const categoryLabel = locale === "tr" ? "Hizmet Alanı" : "Practice Area";
  const summaryLabel = locale === "tr" ? "Hizmet Özeti" : "Service Overview";
  const ctaTitle =
    locale === "tr" ? "Hukuki Talebinizi Paylaşın" : "Share Your Legal Request";
  const ctaDescription =
    locale === "tr"
      ? "Bu hizmet alanına ilişkin daha detaylı bilgi veya ön değerlendirme için bizimle iletişime geçebilirsiniz."
      : "You may contact us for more detailed information or a preliminary assessment regarding this practice area.";
  const ctaButton = locale === "tr" ? "İletişime Geçin" : "Contact Us";
  const relatedLabel = locale === "tr" ? "İlgili Hizmetler" : "Related Services";

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold/30 selection:text-foreground">
      <div className="mx-auto max-w-[1440px] px-6 pb-24 pt-6 md:px-10 xl:px-12">
        <article className="mx-auto max-w-5xl">
          <header className="border-b border-border pb-10 md:pb-12">
            <Link
              href={getPath(locale, "services")}
              className="mb-8 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-gold transition hover:text-foreground"
            >
              <span aria-hidden="true">←</span>
              {backLabel}
            </Link>

            <div className="max-w-4xl">
              <span className="inline-block rounded-sm border border-gold/25 bg-gold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
                {categoryLabel}
              </span>

              <h1 className="mt-5 font-serif text-4xl leading-[1.04] tracking-[-0.03em] text-foreground md:text-6xl xl:text-[72px]">
                {service.title}
              </h1>

              <p className="mt-6 max-w-3xl text-[16px] leading-8 text-muted-foreground md:text-[17px]">
                {service.shortDescription}
              </p>
            </div>
          </header>

          <div className="mx-auto mt-14 max-w-3xl">
            <div className="mb-12 rounded-2xl border border-border bg-background p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] md:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                {summaryLabel}
              </p>
              <p className="mt-4 text-[15px] leading-8 text-muted-foreground md:text-base">
                {service.longDescription}
              </p>
            </div>

            <div className="space-y-12">
              {service.sections.map((section, index) => (
                <section key={`${service.slug}-${index}`}>
                  {section.heading ? (
                    <>
                      <div className="mb-5 h-px w-14 bg-gold" />
                      <h2 className="font-serif text-3xl leading-tight tracking-[-0.02em] text-foreground">
                        {section.heading}
                      </h2>
                    </>
                  ) : null}

                  <div
                    className={`space-y-5 text-[15px] leading-8 text-muted-foreground md:text-base ${
                      section.heading ? "mt-5" : ""
                    }`}
                  >
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-16 rounded-2xl border border-border bg-secondary p-8">
              <div className="h-px w-12 bg-gold" />
              <h2 className="mt-6 font-serif text-2xl text-foreground">
                {ctaTitle}
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {ctaDescription}
              </p>
              <div className="mt-8">
                <Button
                  asChild
                  variant="outline"
                  className="border-gold bg-transparent text-foreground hover:bg-gold hover:text-primary-foreground"
                >
                  <Link href={getPath(locale, "contact")}>{ctaButton}</Link>
                </Button>
              </div>
            </div>
          </div>
        </article>

        {service.relatedServices.length > 0 && (
          <section className="mx-auto mt-20 max-w-6xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-gold/70" />
              <h2 className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
                {relatedLabel}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {service.relatedServices.map((relatedService) => (
                <Link
                  key={relatedService.slug}
                  href={relatedService.href}
                  className="group rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]"
                >
                  <h3 className="font-serif text-2xl font-medium tracking-tight text-foreground transition-colors group-hover:text-gold">
                    {relatedService.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {relatedService.shortDescription}
                  </p>

                  <div className="mt-6 h-px w-10 bg-gold/50 transition-all duration-300 group-hover:w-16 group-hover:bg-gold" />
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
