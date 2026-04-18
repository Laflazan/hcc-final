"use client";

import Image from "next/image";
import { getDictionary, type Locale } from "@/lib/site";

export function Team({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const team = dictionary.team.members.map((member) => ({
    name: member.name,
    role: member.role,
    image: member.image,
  }));
  const marqueeTeam = [...team, ...team];

  return (
    <section id="team" className="overflow-hidden bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="h-px w-16 bg-gold" />
          </div>

          <h2 className="font-serif text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            {dictionary.team.title}
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {dictionary.team.description}
          </p>
        </div>

        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent" />

          <div className="overflow-hidden">
            <div className="flex w-max animate-team-marquee gap-8 will-change-transform hover:[animation-play-state:paused]">
              {marqueeTeam.map((member, index) => (
                <div
                  key={`${member.name}-${index}`}
                  className="group relative w-[260px] flex-shrink-0 overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      loading="lazy"
                      sizes="260px"
                      className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-end bg-foreground/75 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="text-background">
                      <h3 className="font-serif text-xl font-medium">{member.name}</h3>
                      <p className="mt-1 text-sm text-gold">{member.role}</p>
                    </div>
                  </div>

                  <div className="border-t border-border bg-background p-6 transition-opacity duration-300 group-hover:opacity-0">
                    <h3 className="font-serif text-lg font-medium text-foreground">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
