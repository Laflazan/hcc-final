import { buildPageMetadata } from "@/lib/site";
import { ServicesPage } from "@/components/pages/services-page";

export const metadata = buildPageMetadata("tr", "services");

export default function HizmetlerimizPage() {
  return <ServicesPage locale="tr" />;
}
