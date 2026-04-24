import Image from "next/image";
import Link from "next/link";
import { getArticles, getDictionary, getFeaturedArticle, type Locale } from "@/lib/site";

type ArticleActionProps = {
  className: string;
  label: string;
  icon: string;
};

function ArticleAction({ className, label, icon }: ArticleActionProps) {
  return (
    <span className={className}>
      {label}
      <span>{icon}</span>
    </span>
  );
}

export function ArticlesPage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const featuredArticle = getFeaturedArticle(locale);
  const articles = getArticles(locale);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold/30 selection:text-foreground">
      <div className="mx-auto max-w-[1440px] px-4 pb-24 pt-6 sm:px-6 md:px-10 xl:px-12">
        <header className="mb-16 border-b border-border pb-10 md:mb-20 md:pb-12">
          <div className="max-w-3xl">
            <span className="mb-4 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-10 bg-gold/70" />
              {dictionary.insights.collectionLabel}
            </span>

            <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground md:text-5xl">
              {dictionary.metadata.articles.title}
            </h1>
          </div>
        </header>

        <section className="mb-20 md:mb-24">
          <Link
            href={featuredArticle.href}
            className="group relative grid overflow-hidden rounded-2xl border border-border bg-background shadow-[0_12px_40px_rgba(0,0,0,0.06)] lg:grid-cols-[1.2fr_0.85fr]"
          >
            <div className="relative min-h-[320px] overflow-hidden md:min-h-[430px]">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 62vw"
                quality={78}
                className="object-cover transition-all duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>

            <div className="flex min-w-0 flex-col justify-center px-6 py-8 sm:px-7 md:px-10 md:py-10 xl:px-12">
              <span className="mb-5 inline-block w-fit rounded-sm border border-gold/25 bg-gold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
                {featuredArticle.category}
              </span>

              <h2 className="font-serif text-[28px] leading-[1.12] tracking-[-0.02em] text-foreground transition-colors group-hover:text-gold [overflow-wrap:anywhere] sm:text-3xl md:text-[40px]">
                {featuredArticle.title}
              </h2>

              <p className="mt-5 max-w-xl text-[15px] leading-8 text-muted-foreground md:text-base">
                {featuredArticle.excerpt}
              </p>

              <ArticleAction
                className="mt-8 inline-flex w-fit items-center gap-3 border-b border-gold/40 pb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground transition hover:border-gold hover:text-gold"
                label={dictionary.insights.continueReading}
                icon="→"
              />
            </div>
          </Link>
        </section>

        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={`${article.title}-${article.date}`}
              href={article.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  quality={76}
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>

              <div className="flex min-w-0 flex-1 flex-col px-5 pb-7 pt-6 sm:px-6 md:px-7">
                <div className="mb-5 flex items-center justify-between gap-4 border-b border-border pb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
                    {article.category}
                  </span>
                  <span className="shrink-0 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {article.date}
                  </span>
                </div>

                <h3 className="font-serif text-2xl leading-[1.16] tracking-[-0.02em] text-foreground transition-colors group-hover:text-gold [overflow-wrap:anywhere] sm:text-[30px]">
                  {article.title}
                </h3>

                <p className="mt-4 flex-1 text-[15px] leading-7 text-muted-foreground">
                  {article.excerpt}
                </p>

                <ArticleAction
                  className="mt-7 inline-flex w-fit items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground transition hover:text-gold"
                  label={dictionary.insights.readMore}
                  icon="↗"
                />
              </div>
            </Link>
          ))}
        </section>

        <div className="mt-20 flex justify-center">
          <span className="inline-flex items-center gap-3 rounded-none border border-gold/25 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground/70">
            {dictionary.insights.loadMore}
            <span>+</span>
          </span>
        </div>
      </div>
    </div>
  );
}
