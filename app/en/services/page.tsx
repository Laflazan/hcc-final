import { buildPageMetadata } from "@/lib/site";
import { ServicesPage } from "@/components/pages/services-page";

export const metadata = buildPageMetadata("en", "services");

export default function EnglishServicesPage() {
  return <ServicesPage locale="en" />;
}
