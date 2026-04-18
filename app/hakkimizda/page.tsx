import { buildPageMetadata } from "@/lib/site";
import { AboutPage } from "@/components/pages/about-page";

export const metadata = buildPageMetadata("tr", "about");

export default function HakkimizdaPage() {
  return <AboutPage locale="tr" />;
}
