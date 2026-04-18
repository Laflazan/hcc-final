import { buildPageMetadata } from "@/lib/site";
import { ContactPage } from "@/components/pages/contact-page";

export const metadata = buildPageMetadata("tr", "contact");

export default function IletisimPage() {
  return <ContactPage locale="tr" />;
}
