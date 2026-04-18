"use client";

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
        <img
          src="/contact-bg.png"
          alt={locale === "tr" ? "HCC Avukatlık Bürosu" : "HCC Law Office"}
          className="h-full w-full object-cover opacity-25"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8 h-px w-16 bg-gold" />

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-serif text-4xl font-medium tracking-tight text-white md:text-5xl"
            >
              {dictionary.contact.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 text-lg leading-relaxed text-white/80"
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
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-gold" />
                <div>
                  <p className="text-sm uppercase tracking-wider text-white/60">
                    {dictionary.contact.addressLabel}
                  </p>
                  <p className="mt-1 text-white">
                    {dictionary.contact.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 text-gold" />
                <div>
                  <p className="text-sm uppercase tracking-wider text-white/60">
                    {dictionary.contact.phoneLabel}
                  </p>
                  <p className="mt-1 text-white">{dictionary.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 text-gold" />
                <div>
                  <p className="text-sm uppercase tracking-wider text-white/60">
                    {dictionary.contact.emailLabel}
                  </p>
                  <p className="mt-1 text-white">{dictionary.contact.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-5 w-5 text-gold" />
                <div>
                  <p className="text-sm uppercase tracking-wider text-white/60">
                    {dictionary.contact.hoursLabel}
                  </p>
                  <p className="mt-1 text-white">{dictionary.contact.hours}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-md lg:p-12"
          >
            <h3 className="font-serif text-2xl font-medium text-white">
              {dictionary.contact.formTitle}
            </h3>

            <p className="mt-2 text-white/70">{dictionary.contact.formDescription}</p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6" noValidate>
              <div>
                <label className="block text-sm font-medium text-white">
                  {dictionary.contact.nameLabel}
                </label>
                <Input
                  type="text"
                  required
                  className="mt-2 border-white/20 bg-white/10 text-white placeholder:text-white/50"
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
                  className="mt-2 border-white/20 bg-white/10 text-white placeholder:text-white/50"
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
                  className="mt-2 border-white/20 bg-white/10 text-white placeholder:text-white/50"
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
                  className="mt-2 resize-none border-white/20 bg-white/10 text-white placeholder:text-white/50"
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
                className="w-full bg-white text-black hover:bg-white/90"
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

              <p className="text-center text-xs text-white/50">
                {dictionary.contact.consent}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
