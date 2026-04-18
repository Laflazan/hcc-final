"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Linkedin, X } from "lucide-react";
import { getDictionary, getTeamMembers, type Locale } from "@/lib/site";

type TeamPageProps = {
  locale: Locale;
};

export function TeamPage({ locale }: TeamPageProps) {
  const dictionary = getDictionary(locale);
  const teamMembers = getTeamMembers(locale);
  const [selectedMember, setSelectedMember] = useState<
    (typeof teamMembers)[number] | null
  >(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedMember ? "hidden" : "auto";

    if (!selectedMember) {
      return () => {
        document.body.style.overflow = "auto";
      };
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedMember(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMember]);

  return (
    <>
      <section className="pt-40 pb-28 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-6 h-px w-16 bg-gold mx-auto" />
          <h1 className="font-serif text-4xl md:text-5xl">
            {dictionary.metadata.team.title}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {dictionary.team.pageIntro}
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              role="button"
              tabIndex={0}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-background hover:shadow-lg transition"
              onClick={() => setSelectedMember(member)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedMember(member);
                }
              }}
              aria-label={`${member.name} ${dictionary.team.openProfile}`}
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition" />

                <span
                  aria-hidden="true"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                  title={dictionary.team.profileLinkSoon}
                >
                  <span className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-black">
                    <Linkedin size={16} />
                  </span>
                </span>

                <div className="absolute bottom-0 p-6 text-white opacity-0 group-hover:opacity-100 transition">
                  <h3 className="font-serif text-xl">{member.name}</h3>
                  <p className="text-gold text-sm">{member.role}</p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-lg">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedMember && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6"
          onClick={() => setSelectedMember(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="team-member-title"
            className="bg-background rounded-2xl max-w-3xl w-full p-8 relative"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4"
              aria-label={dictionary.team.closeProfile}
            >
              <X />
            </button>

            <h2 id="team-member-title" className="font-serif text-2xl">
              {selectedMember.name}
            </h2>
            <p className="text-gold mt-1">{selectedMember.role}</p>

            <p className="mt-4 text-muted-foreground">
              {selectedMember.longDescription}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {selectedMember.expertise.map((item) => (
                <span
                  key={item}
                  className="border border-border px-3 py-2 text-sm text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
