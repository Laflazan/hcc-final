"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Linkedin, X } from "lucide-react";
import {
  getDictionary,
  getTeamMembers,
  type Locale,
} from "@/lib/site";

type TeamPageProps = {
  locale: Locale;
};

function getTelHref(value: string) {
  return `tel:${value.replace(/\s+/g, "")}`;
}

export function TeamPage({ locale }: TeamPageProps) {
  const dictionary = getDictionary(locale);
  const teamMembers = getTeamMembers(locale);
  const detailLabels =
    locale === "tr"
      ? {
          email: "E-posta",
          officePhone: "Ofis Telefonu",
          mobilePhone: "Cep Telefonu",
          education: "Eğitim",
          biography: "Biyografi",
          languages: "Dil",
          birthInfo: "Doğum Bilgisi",
          startYear: "Başlangıç Yılı",
          expertise: "Uzmanlık Alanları",
        }
      : {
          email: "Email",
          officePhone: "Office Phone",
          mobilePhone: "Mobile Phone",
          education: "Education",
          biography: "Biography",
          languages: "Language",
          birthInfo: "Birth Information",
          startYear: "Start Year",
          expertise: "Practice Areas",
        };
  const [selectedMember, setSelectedMember] = useState<
    (typeof teamMembers)[number] | null
  >(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedMember ? "hidden" : "auto";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedMember(null);
      }
    };

    if (selectedMember) {
      window.addEventListener("keydown", handleKeyDown);
      closeButtonRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMember]);

  const contactItems = selectedMember
    ? [
        selectedMember.email
          ? {
              label: detailLabels.email,
              value: selectedMember.email,
              href: `mailto:${selectedMember.email}`,
            }
          : null,
        selectedMember.officePhone
          ? {
              label: detailLabels.officePhone,
              value: selectedMember.officePhone,
              href: getTelHref(selectedMember.officePhone),
            }
          : null,
        selectedMember.mobilePhone
          ? {
              label: detailLabels.mobilePhone,
              value: selectedMember.mobilePhone,
              href: getTelHref(selectedMember.mobilePhone),
            }
          : null,
        selectedMember.birthInfo
          ? {
              label: detailLabels.birthInfo,
              value: selectedMember.birthInfo,
            }
          : null,
        selectedMember.startYear
          ? {
              label: detailLabels.startYear,
              value: selectedMember.startYear,
            }
          : null,
      ].filter(Boolean)
    : [];
  const educationItems = selectedMember
    ? Array.isArray(selectedMember.education)
      ? selectedMember.education
      : selectedMember.education
        ? [selectedMember.education]
        : []
    : [];

  return (
    <div className="bg-background">
      <section className="pt-40 pb-20 text-left">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-6 h-px w-16 bg-gold" />

          <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            {dictionary.metadata.team.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {dictionary.team.pageIntro}
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              role="button"
              tabIndex={0}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-background transition duration-500 md:hover:-translate-y-1 md:hover:shadow-[0_20px_45px_rgba(0,0,0,0.10)]"
              onClick={() => setSelectedMember(member)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedMember(member);
                }
              }}
              aria-label={`${member.name} ${dictionary.team.openProfile}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition duration-700 md:group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-foreground/84 via-foreground/22 via-55% to-transparent opacity-90 transition duration-500 md:group-hover:from-foreground/90 md:group-hover:via-foreground/30" />

                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="absolute right-4 top-4 opacity-0 transition duration-500 md:group-hover:opacity-100"
                  aria-label={
                    locale === "tr"
                      ? "LinkedIn sayfasını aç"
                      : "Open LinkedIn page"
                  }
                  title="LinkedIn"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-md">
                    <Linkedin size={16} />
                  </span>
                </a>

                <div className="absolute bottom-0 p-6 text-white">
                  <div className="transition duration-500 md:translate-y-2 md:group-hover:translate-y-0">
                    <h3 className="font-serif text-[22px] tracking-tight text-white">{member.name}</h3>
                    <p className="mt-1 text-sm text-white/70">{member.role}</p>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/82 transition duration-500 md:group-hover:text-white">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background/96 p-6 backdrop-blur-sm">
                <h3 className="font-serif text-xl tracking-tight text-foreground">{member.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground/90">{member.role}</p>
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-6"
          onClick={() => setSelectedMember(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="team-member-title"
            className="relative max-h-[calc(100vh-3rem)] w-full max-w-3xl overflow-y-auto rounded-2xl bg-background p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setSelectedMember(null)}
              className="absolute right-4 top-4 text-foreground/70 transition hover:text-foreground"
              aria-label={dictionary.team.closeProfile}
            >
              <X />
            </button>

            <h2 id="team-member-title" className="font-serif text-2xl text-foreground">
              {selectedMember.name}
            </h2>

            <p className="mt-1 text-gold">{selectedMember.role}</p>

            <div className="mt-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
                {detailLabels.expertise}
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              {selectedMember.expertise.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border px-3 py-2 text-sm text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>

            {educationItems.length ? (
              <div className="mt-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
                  {detailLabels.education}
                </p>
                <div className="mt-4 grid gap-4">
                  {educationItems.map((item, index) => (
                    <div
                      key={`${selectedMember.name}-education-${index}`}
                      className="rounded-xl border border-border bg-secondary/40 p-4"
                    >
                      <p className="whitespace-pre-line text-sm leading-6 text-foreground">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {selectedMember.languages?.length ? (
              <div className="mt-8 border-t border-border pt-6">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
                  {detailLabels.languages}
                </p>
                <div className="mt-4 rounded-xl border border-border bg-secondary/40 p-4">
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.languages.map((language) => (
                      <span
                        key={language}
                        className="rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}

            {selectedMember.longDescription || selectedMember.biography?.length ? (
              <div className="mt-8 border-t border-border pt-6">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
                  {detailLabels.biography}
                </p>
                <div className="mt-4 space-y-4">
                  {selectedMember.longDescription ? (
                    <p className="text-sm leading-7 text-muted-foreground">
                      {selectedMember.longDescription}
                    </p>
                  ) : null}
                  {selectedMember.biography?.map((paragraph, index) => (
                    <p
                      key={`${selectedMember.name}-biography-${index}`}
                      className="text-sm leading-7 text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ) : null}

            {contactItems.length > 0 ? (
              <div className="mt-8 grid gap-4 border-t border-border pt-6 md:grid-cols-2">
                {contactItems.map((item) => {
                  if (!item) {
                    return null;
                  }

                  return (
                    <div
                      key={`${selectedMember.name}-${item.label}`}
                      className="rounded-xl border border-border bg-secondary/40 p-4"
                    >
                      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-2 inline-flex text-sm leading-6 text-foreground transition hover:text-gold"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-2 text-sm leading-6 text-foreground">
                          {item.value}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : null}

          </div>
        </div>
      )}
    </div>
  );
}
