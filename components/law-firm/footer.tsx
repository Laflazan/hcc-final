"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Linkedin, Twitter } from "lucide-react";
import {
  getDictionary,
  getLocaleFromPathname,
  getPath,
  LINKEDIN_COMPANY_URL,
} from "@/lib/site";

function FooterPlaceholderLink({
  label,
  title,
}: {
  label: string;
  title?: string;
}) {
  return (
    <span
      title={title}
      className="text-sm text-background/50"
      aria-disabled="true"
    >
      {label}
    </span>
  );
}

export function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dictionary = getDictionary(locale);

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              href={getPath(locale, "home")}
              className="font-serif text-xl font-semibold tracking-tight"
            >
              HCC<span className="text-gold">.</span>
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-background/60">
              {dictionary.footer.summary}
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href={LINKEDIN_COMPANY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/60 transition-colors hover:text-gold"
                aria-label="LinkedIn"
                title={dictionary.footer.socialSoonLinkedIn}
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <span
                className="text-background/60"
                aria-label="X"
                title={dictionary.footer.socialSoonX}
              >
                <Twitter className="h-5 w-5" />
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-background/40">
              {dictionary.footer.servicesTitle}
            </h3>

            <ul className="mt-4 space-y-3">
              {dictionary.footer.services.map((link) => (
                <li key={link.name}>
                  {link.routeKey ? (
                    <Link
                      href={getPath(locale, link.routeKey)}
                      className="text-sm text-background/70 transition-colors hover:text-gold"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <FooterPlaceholderLink label={link.name} />
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-background/40">
              {dictionary.footer.companyTitle}
            </h3>

            <ul className="mt-4 space-y-3">
              {dictionary.footer.company.map((link) => (
                <li key={link.name}>
                  {link.routeKey ? (
                    <Link
                      href={getPath(locale, link.routeKey)}
                      className="text-sm text-background/70 transition-colors hover:text-gold"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <FooterPlaceholderLink label={link.name} />
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-background/40">
              {dictionary.footer.legalTitle}
            </h3>

            <ul className="mt-4 space-y-3">
              {dictionary.footer.legal.map((link) => (
                <li key={link.name}>
                  {link.routeKey ? (
                    <Link
                      href={getPath(locale, link.routeKey)}
                      className="text-sm text-background/70 transition-colors hover:text-gold"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <FooterPlaceholderLink label={link.name} />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 text-center md:flex-row md:text-left">
          <p className="text-sm text-background/40">{dictionary.footer.copyright}</p>

          <p className="max-w-2xl text-sm text-background/40">{dictionary.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
