import {
  Building2,
  Gavel,
  Landmark,
  Lightbulb,
  Scale,
  Shield,
} from "lucide-react";
import { getDictionary, type Locale } from "@/lib/site";

const icons = [Scale, Lightbulb, Gavel, Shield, Building2, Landmark];

export function Services({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <section id="services" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="h-px w-16 bg-gold" />
          </div>

          <h2 className="font-serif text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            {dictionary.services.title}
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {dictionary.services.description}
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {dictionary.services.items.map((service, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={service.title}
                className="group bg-background p-8 transition-colors duration-300 hover:bg-secondary lg:p-10"
              >
                <Icon className="h-8 w-8 text-gold" strokeWidth={1.5} />

                <h3 className="mt-6 font-serif text-xl font-medium text-foreground">
                  {service.title}
                </h3>

                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <div className="mt-6 h-px w-0 bg-gold transition-all duration-300 group-hover:w-12" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
