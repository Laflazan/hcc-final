import { buildPageMetadata } from "@/lib/site";
import { ContactPage } from "@/components/pages/contact-page";

export const metadata = buildPageMetadata("en", "contact");

export default function EnglishContactPage() {
  return <ContactPage locale="en" />;
}
