import Link from "next/link";
import {
  Building2,
  Gavel,
  Landmark,
  Lightbulb,
  Scale,
  Shield,
} from "lucide-react";
import { getDictionary, type Locale } from "@/lib/site";
import { getAllServices } from "@/lib/services";

const iconMap = {
  scale: Scale,
  lightbulb: Lightbulb,
  gavel: Gavel,
  shield: Shield,
  building2: Building2,
  landmark: Landmark,
} as const;

export function Services({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const services = getAllServices(locale);

  return (
    <section id="services" className="bg-background pt-16 pb-24 lg:pt-20 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-left">
          <div className="mb-8 flex justify-start">
            <div className="h-px w-16 bg-gold" />
          </div>

          <h2 className="font-serif text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            {dictionary.services.title}
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {dictionary.services.description}
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.iconKey as keyof typeof iconMap];
            const cardClassName =
              "group rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] sm:p-8 lg:p-10";

            const content = (
              <>
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 transition-colors duration-300 group-hover:bg-gold/15">
                  <Icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
                </div>

                <h3 className="mt-6 font-serif text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {service.shortDescription}
                </p>

                <div className="mt-6 h-px w-10 bg-gold/50 transition-all duration-300 group-hover:w-16 group-hover:bg-gold" />
              </>
            );

            if (!service.href) {
              return (
                <div key={service.slug} className={cardClassName}>
                  {content}
                </div>
              );
            }

            return (
              <Link key={service.slug} href={service.href} className={cardClassName}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
