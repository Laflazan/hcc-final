import Link from "next/link";
import { getArticles, getDictionary, getFeaturedArticle, type Locale } from "@/lib/site";

type ArticleActionProps = {
  href?: string;
  className: string;
  label: string;
  icon: string;
};

function ArticleAction({ href, className, label, icon }: ArticleActionProps) {
  if (!href) {
    return (
      <span aria-disabled="true" className={`${className} text-[#f1e7d7]/60`}>
        {label}
        <span>{icon}</span>
      </span>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
      <span>{icon}</span>
    </Link>
  );
}

export function ArticlesPage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const featuredArticle = getFeaturedArticle(locale);
  const articles = getArticles(locale);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#e5e2e1] selection:bg-[#e5c483] selection:text-[#402d00]">
      <div className="mx-auto max-w-[1440px] px-6 pb-24 pt-4 md:px-10 xl:px-12">
        <header className="mb-16 border-b border-[#c8a96a]/10 pb-10 md:mb-20 md:pb-12">
          <div className="max-w-3xl">
            <span className="mb-4 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[#c8a96a]">
              <span className="h-px w-10 bg-[#c8a96a]/70" />
              {dictionary.insights.collectionLabel}
            </span>

            <h1 className="font-serif text-5xl leading-[1.02] tracking-[-0.03em] text-[#e5c483] md:text-7xl xl:text-[84px]">
              {dictionary.metadata.articles.title}
            </h1>
          </div>
        </header>

        <section className="mb-20 md:mb-24">
          <div className="group relative grid overflow-hidden border border-[#c8a96a]/10 bg-[#131313] lg:grid-cols-[1.2fr_0.85fr]">
            <div className="relative min-h-[320px] overflow-hidden md:min-h-[430px]">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="h-full w-full object-cover opacity-80 grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div className="flex flex-col justify-center px-7 py-8 md:px-10 md:py-10 xl:px-12">
              <span className="mb-5 inline-block w-fit border border-[#c8a96a]/20 bg-[#c8a96a]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#e5c483]">
                {featuredArticle.category}
              </span>

              <h2 className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#f2e7d5] transition-colors group-hover:text-[#e5c483] md:text-[40px]">
                {featuredArticle.title}
              </h2>

              <p className="mt-5 max-w-xl text-[15px] leading-8 text-[#cdbfae] md:text-base">
                {featuredArticle.excerpt}
              </p>

              <ArticleAction
                href={featuredArticle.href}
                className="mt-8 inline-flex w-fit items-center gap-3 border-b border-[#c8a96a]/40 pb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f3e7d0] transition hover:border-[#c8a96a] hover:text-[#e5c483]"
                label={dictionary.insights.continueReading}
                icon="→"
              />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <article
              key={`${article.title}-${article.date}`}
              className="group flex flex-col overflow-hidden border border-[#c8a96a]/10 bg-[#141414] transition-all duration-300 hover:border-[#c8a96a]/25 hover:bg-[#181818]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover opacity-75 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-transparent" />
              </div>

              <div className="flex flex-1 flex-col px-6 pb-7 pt-6 md:px-7">
                <div className="mb-5 flex items-center justify-between gap-4 border-b border-[#4d463a]/15 pb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#e5c483]">
                    {article.category}
                  </span>
                  <span className="shrink-0 text-[10px] uppercase tracking-[0.18em] text-[#a89987]">
                    {article.date}
                  </span>
                </div>

                <h3 className="font-serif text-[30px] leading-[1.16] tracking-[-0.02em] text-[#f3e7d0] transition-colors group-hover:text-[#e5c483]">
                  {article.title}
                </h3>

                <p className="mt-4 flex-1 text-[15px] leading-7 text-[#cdbfae]">
                  {article.excerpt}
                </p>

                <ArticleAction
                  href={article.href}
                  className="mt-7 inline-flex w-fit items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] transition hover:text-[#e5c483]"
                  label={dictionary.insights.readMore}
                  icon="↗"
                />
              </div>
            </article>
          ))}
        </section>

        <div className="mt-20 flex justify-center">
          {/* TODO: New article pagination can be connected when detail content is ready. */}
          <span className="inline-flex items-center gap-3 border border-[#c8a96a]/20 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#e7d8c2]/60">
            {dictionary.insights.loadMore}
            <span>+</span>
          </span>
        </div>
      </div>
    </div>
  );
}
