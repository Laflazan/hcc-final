"use client";

import { memo, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavbarLogo } from "@/components/law-firm/navbar-logo";
import {
  getDictionary,
  getLocaleFromPathname,
  getPath,
  switchLocalePath,
} from "@/lib/site";

const NAV_ITEMS = ["about", "services", "team", "articles", "contact"] as const;

const LanguageToggle = memo(function LanguageToggle({
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
      className={`h-11 rounded-xl border-gold bg-transparent px-5 text-foreground transition-all duration-300 hover:bg-gold/10 hover:text-foreground ${className ?? ""}`}
    >
      <Link
        href={href}
        aria-label={ariaLabel}
        onClick={onClick}
        className="flex items-center justify-center"
      >
        <span className={currentLocale === "tr" ? "text-gold" : ""}>TR</span>
        <span className="px-2 text-foreground/50">/</span>
        <span className={currentLocale === "en" ? "text-gold" : ""}>EN</span>
      </Link>
    </Button>
  );
});

const DesktopNavLink = memo(function DesktopNavLink({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group relative text-sm font-medium tracking-[0.02em] transition-colors duration-300 ${
        isActive ? "text-gold" : "text-foreground/65 hover:text-foreground"
      }`}
    >
      {label}
      <span
        className={`absolute -bottom-2 left-0 h-[2px] bg-gold transition-all duration-300 ${
          isActive
            ? "w-full opacity-100"
            : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
        }`}
      />
    </Link>
  );
});

const MobileNavLink = memo(function MobileNavLink({
  href,
  label,
  isActive,
  onClick,
}: {
  href: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block rounded-lg px-4 py-3 text-[15px] font-medium transition-all duration-200 ${
        isActive
          ? "bg-gold/10 text-gold"
          : "text-foreground/80 hover:bg-black/[0.03] hover:text-foreground"
      }`}
    >
      {label}
    </Link>
  );
});

export function NavbarClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dictionary = getDictionary(locale);

  const homeHref = getPath(locale, "home");
  const contactHref = getPath(locale, "contact");
  const languageHref = switchLocalePath(pathname, locale === "tr" ? "en" : "tr");

  const navigation = useMemo(
    () =>
      NAV_ITEMS.map((key) => ({
        name: dictionary.navbar[key],
        href: getPath(locale, key),
      })),
    [dictionary.navbar, locale],
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-black/8 bg-white/96 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:py-3"
          : "border-b border-black/6 bg-white/92 py-3 backdrop-blur-md sm:py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center lg:flex-1">
          <div
            className={`ml-1.5 flex items-center transition-all duration-500 ${
              scrolled
                ? "h-9 w-[132px] sm:h-10 sm:w-[148px]"
                : "h-10 w-[142px] sm:h-[42px] sm:w-[160px]"
            }`}
          >
            <NavbarLogo
              href={homeHref}
              src="/HCC_LOGO-removebg-preview.png"
              alt={locale === "tr" ? "HCC Avukatlık Bürosu" : "HCC Law Firm"}
              width={160}
              height={42}
              className="h-full w-full object-contain object-left transition-all duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-black/8 bg-white text-foreground shadow-sm transition-all duration-200 hover:bg-black/5 active:scale-[0.98]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={
              mobileMenuOpen
                ? dictionary.navbar.closeMenu
                : dictionary.navbar.openMenu
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-x-10">
          {navigation.map((item) => (
            <DesktopNavLink
              key={item.href}
              href={item.href}
              label={item.name}
              isActive={pathname === item.href}
            />
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-4">
          <LanguageToggle
            href={languageHref}
            currentLocale={locale}
            ariaLabel={dictionary.language.toggleLabel}
          />

          <Button
            asChild
            variant="outline"
            className="h-11 rounded-none border-gold bg-transparent px-6 text-foreground transition-all duration-300 hover:bg-gold/10 hover:text-foreground"
          >
            <Link href={contactHref}>{dictionary.navbar.contactCta}</Link>
          </Button>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-black/8 bg-white/95 backdrop-blur-md transition-all duration-300 ease-out lg:hidden ${
          mobileMenuOpen
            ? "max-h-[420px] opacity-100 shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 pb-5 pt-4 sm:px-6">
          <div className="rounded-2xl border border-black/8 bg-white p-3 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <MobileNavLink
                  key={item.href}
                  href={item.href}
                  label={item.name}
                  isActive={pathname === item.href}
                  onClick={() => setMobileMenuOpen(false)}
                />
              ))}
            </div>

            <div className="my-4 h-px bg-black/8" />

            <div className="flex flex-col gap-3">
              <LanguageToggle
                href={languageHref}
                currentLocale={locale}
                ariaLabel={dictionary.language.toggleLabel}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full"
              />

              <Button
                asChild
                className="h-11 w-full rounded-xl bg-gold text-primary-foreground transition-all duration-200 hover:bg-gold/90"
              >
                <Link href={contactHref} onClick={() => setMobileMenuOpen(false)}>
                  {dictionary.navbar.contactCta}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
