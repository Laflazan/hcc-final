"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getDictionary,
  getLocaleFromPathname,
  getPath,
  switchLocalePath,
} from "@/lib/site";

function LanguageToggle({
  href,
  currentLocale,
  ariaLabel,
  className,
  onClick,
}: {
  href: string;
  currentLocale: "tr" | "en";
  ariaLabel: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Button
      asChild
      variant="outline"
      className={`border-gold bg-transparent text-foreground transition-all duration-300 hover:bg-gold hover:text-primary-foreground ${className ?? ""}`}
    >
      <Link href={href} aria-label={ariaLabel} onClick={onClick}>
        <span className={currentLocale === "tr" ? "text-gold" : ""}>TR</span>
        <span className="px-1 opacity-60">/</span>
        <span className={currentLocale === "en" ? "text-gold" : ""}>EN</span>
      </Link>
    </Button>
  );
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dictionary = getDictionary(locale);

  const navigation = useMemo(
    () => [
      { name: dictionary.navbar.about, href: getPath(locale, "about") },
      { name: dictionary.navbar.services, href: getPath(locale, "services") },
      { name: dictionary.navbar.team, href: getPath(locale, "team") },
      { name: dictionary.navbar.articles, href: getPath(locale, "articles") },
      { name: dictionary.navbar.contact, href: getPath(locale, "contact") },
    ],
    [dictionary, locale],
  );

  const languageHref = switchLocalePath(pathname, locale === "tr" ? "en" : "tr");

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500
      ${
        scrolled
          ? "border-b border-gold/20 bg-background/95 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl"
          : "border-b border-transparent bg-background/70 py-3 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href={getPath(locale, "home")} className="group flex items-center">
            <Image
              src="/HCC_LOGO-removebg-preview.png"
              alt={locale === "tr" ? "HCC Avukatlık Bürosu" : "HCC Law Office"}
              width={200}
              height={60}
              className={`w-auto object-contain transition-all duration-500
              ${
                scrolled ? "h-12" : "h-16"
              } group-hover:scale-[1.03] drop-shadow-[0_0_12px_rgba(200,169,106,0.25)]`}
              priority
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground transition hover:bg-muted"
            onClick={() => setMobileMenuOpen(true)}
            aria-label={dictionary.navbar.openMenu}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-sm font-medium tracking-[0.02em] transition-all duration-300 ${
                isActive(item.href)
                  ? "text-gold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.name}
              <span
                className={`absolute -bottom-2 left-0 h-[2px] bg-gold transition-all duration-300 ${
                  isActive(item.href)
                    ? "w-full opacity-100"
                    : "w-0 opacity-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-3">
          <LanguageToggle
            href={languageHref}
            currentLocale={locale}
            ariaLabel={dictionary.language.toggleLabel}
          />
          <Button
            asChild
            variant="outline"
            className="border-gold bg-transparent text-foreground shadow-[0_0_0px_rgba(200,169,106,0.0)] transition-all duration-300 hover:bg-gold hover:text-primary-foreground hover:shadow-[0_0_20px_rgba(200,169,106,0.25)]"
          >
            <Link href={getPath(locale, "contact")}>
              {dictionary.navbar.contactCta}
            </Link>
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div id="mobile-navigation" className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-sm border-l border-border bg-background px-6 py-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <Link
                href={getPath(locale, "home")}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image
                  src="/HCC_LOGO-removebg-preview.png"
                  alt={
                    locale === "tr" ? "HCC Avukatlık Bürosu logosu" : "HCC Law Office logo"
                  }
                  width={160}
                  height={50}
                  className="h-14 w-auto"
                />
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label={dictionary.navbar.closeMenu}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-10 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-base font-medium transition ${
                    isActive(item.href) ? "bg-gold/10 text-gold" : "hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              <LanguageToggle
                href={languageHref}
                currentLocale={locale}
                ariaLabel={dictionary.language.toggleLabel}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full"
              />
              <Button
                asChild
                className="w-full bg-gold text-primary-foreground hover:bg-gold/90"
              >
                <Link
                  href={getPath(locale, "contact")}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {dictionary.navbar.contactCta}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
