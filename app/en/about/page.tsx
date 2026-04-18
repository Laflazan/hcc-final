import { buildPageMetadata } from "@/lib/site";
import { AboutPage } from "@/components/pages/about-page";

export const metadata = buildPageMetadata("en", "about");

export default function EnglishAboutPage() {
  return <AboutPage locale="en" />;
}
