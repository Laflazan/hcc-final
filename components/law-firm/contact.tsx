"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { ContactFormValues } from "@/lib/contact";
import { getDictionary, type Locale } from "@/lib/site";

type FormState = {
  status: "idle" | "submitting" | "success" | "error";
  message: string | null;
  fieldErrors: Partial<Record<keyof ContactFormValues, string[]>>;
};

const initialFormValues: ContactFormValues = {
  name: "",
  email: "",
  company: "",
  message: "",
};

const HCC_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=HCC%20Avukatlık%20Bürosu%20Balmumcu%20Gazi%20Umur%20Paşa%20Sk.%20No%3A24%2F7%20Beşiktaş%20İstanbul";

const HCC_PHONE_HREF = "tel:+902122160724";
const HCC_EMAIL_HREF = "mailto:info@hcc.av.tr";

export function Contact({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const [formData, setFormData] = useState<ContactFormValues>(initialFormValues);
  const [formState, setFormState] = useState<FormState>({
    status: "idle",
    message: null,
    fieldErrors: {},
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setFormState({
      status: "submitting",
      message: null,
      fieldErrors: {},
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          locale,
        }),
      });

      const payload = (await response.json()) as {
        success: boolean;
        message: string;
        errors?: Partial<Record<keyof ContactFormValues, string[]>>;
      };

      if (!response.ok || !payload.success) {
        setFormState({
          status: "error",
          message: payload.message,
          fieldErrors: payload.errors ?? {},
        });
        return;
      }

      setFormData(initialFormValues);
      setFormState({
        status: "success",
        message: payload.message,
        fieldErrors: {},
      });
    } catch {
      setFormState({
        status: "error",
        message: dictionary.contact.validation.failure,
        fieldErrors: {},
      });
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/contact-bg.png"
          alt={locale === "tr" ? "HCC Avukatlık Bürosu" : "HCC Law Office"}
          fill
          sizes="100vw"
          quality={70}
          className="h-full w-full scale-105 object-cover opacity-55"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/28 to-black/45" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/35 via-transparent to-black/20" />
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gold/12 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05] bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)_76%,transparent_77%,transparent)] bg-[length:60px_60px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <div className="mb-8 h-px w-16 bg-gold" />

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-serif text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              {dictionary.contact.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
            >
              {dictionary.contact.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-10 space-y-6"
            >
          <a
  href={HCC_MAPS_URL}
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
  <div className="flex cursor-pointer items-start gap-4 rounded-2xl border border-white/10 bg-black/15 px-4 py-4 backdrop-blur-[2px] transition duration-300 hover:scale-[1.02] hover:border-gold/50 sm:px-5">
    <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" />
    <div>
      <p className="text-sm uppercase tracking-[0.18em] text-white/60">
        {dictionary.contact.addressLabel}
      </p>
      <p className="mt-2 break-words text-sm leading-relaxed text-white sm:text-base">
        {dictionary.contact.address.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>
    </div>
  </div>
</a>

              <a
                href={HCC_PHONE_HREF}
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-black/15 px-4 py-4 backdrop-blur-[2px] transition duration-300 hover:border-gold/50 focus-visible:border-gold/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 sm:px-5"
              >
                <Phone className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-white/60">
                    {dictionary.contact.phoneLabel}
                  </p>
                  <p className="mt-2 break-words text-sm text-white transition-colors group-hover:text-gold sm:text-base">{dictionary.contact.phone}</p>
                </div>
              </a>

              <a
                href={HCC_EMAIL_HREF}
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-black/15 px-4 py-4 backdrop-blur-[2px] transition duration-300 hover:border-gold/50 focus-visible:border-gold/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 sm:px-5"
              >
                <Mail className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-white/60">
                    {dictionary.contact.emailLabel}
                  </p>
                  <p className="mt-2 break-all text-sm text-white transition-colors group-hover:text-gold sm:text-base">{dictionary.contact.email}</p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/15 px-4 py-4 backdrop-blur-[2px] sm:px-5">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-white/60">
                    {dictionary.contact.hoursLabel}
                  </p>
                  <p className="mt-2 break-words text-sm text-white sm:text-base">{dictionary.contact.hours}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/15 bg-white/10 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-lg sm:p-8 lg:p-12"
          >
            <h3 className="font-serif text-xl font-medium text-white sm:text-2xl md:text-3xl">
              {dictionary.contact.formTitle}
            </h3>

            <p className="mt-3 text-white/72">{dictionary.contact.formDescription}</p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6" noValidate>
              <div>
                <label className="block text-sm font-medium text-white">
                  {dictionary.contact.nameLabel}
                </label>
                <Input
                  type="text"
                  required
                  className="mt-2 h-12 border-white/20 bg-white/10 text-white placeholder:text-white/45 focus:border-gold/60 focus:ring-0"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData({ ...formData, name: event.target.value })
                  }
                />
                {formState.fieldErrors.name?.[0] && (
                  <p className="mt-2 text-sm text-[#f2c2c2]">
                    {formState.fieldErrors.name[0]}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-white">
                  {dictionary.contact.emailInputLabel}
                </label>
                <Input
                  type="email"
                  required
                  className="mt-2 h-12 border-white/20 bg-white/10 text-white placeholder:text-white/45 focus:border-gold/60 focus:ring-0"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData({ ...formData, email: event.target.value })
                  }
                />
                {formState.fieldErrors.email?.[0] && (
                  <p className="mt-2 text-sm text-[#f2c2c2]">
                    {formState.fieldErrors.email[0]}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-white">
                  {dictionary.contact.companyLabel}
                </label>
                <Input
                  type="text"
                  className="mt-2 h-12 border-white/20 bg-white/10 text-white placeholder:text-white/45 focus:border-gold/60 focus:ring-0"
                  value={formData.company}
                  onChange={(event) =>
                    setFormData({ ...formData, company: event.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white">
                  {dictionary.contact.messageLabel}
                </label>
                <Textarea
                  required
                  rows={5}
                  className="mt-2 min-h-[140px] resize-none border-white/20 bg-white/10 text-white placeholder:text-white/45 focus:border-gold/60 focus:ring-0"
                  value={formData.message}
                  onChange={(event) =>
                    setFormData({ ...formData, message: event.target.value })
                  }
                />
                {formState.fieldErrors.message?.[0] && (
                  <p className="mt-2 text-sm text-[#f2c2c2]">
                    {formState.fieldErrors.message[0]}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={formState.status === "submitting"}
                className="h-12 w-full bg-white text-black transition hover:bg-white/90"
              >
                {formState.status === "submitting"
                  ? dictionary.contact.submitting
                  : dictionary.contact.submit}
              </Button>

              {formState.message && (
                <p
                  className={`text-center text-sm ${
                    formState.status === "success"
                      ? "text-[#d9f0d4]"
                      : "text-[#f2c2c2]"
                  }`}
                >
                  {formState.message}
                </p>
              )}

              <p className="text-center text-xs leading-relaxed text-white/50 break-words">
                {dictionary.contact.consent}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
