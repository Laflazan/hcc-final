import { z } from "zod";
import { getDictionary, isLocale, type Locale } from "@/lib/site";

export type ContactFormValues = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export function createContactSchema(locale: Locale) {
  const messages = getDictionary(locale).contact.validation;

  return z.object({
    name: z.string().trim().min(2, messages.nameRequired),
    email: z.string().trim().email(messages.emailInvalid),
    company: z.string().trim().max(120).optional().or(z.literal("")),
    message: z
      .string()
      .trim()
      .min(10, messages.messageMin)
      .max(2000, messages.messageMax),
  });
}

export function resolveContactLocale(value: unknown): Locale {
  return typeof value === "string" && isLocale(value) ? value : "tr";
}
