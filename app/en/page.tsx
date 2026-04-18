import { buildPageMetadata } from "@/lib/site";
import { HomePage } from "@/components/pages/home-page";

export const metadata = buildPageMetadata("en", "home");

export default function EnglishHomePage() {
  return <HomePage locale="en" />;
}
