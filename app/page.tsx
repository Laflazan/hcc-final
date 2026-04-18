import { buildPageMetadata } from "@/lib/site";
import { HomePage } from "@/components/pages/home-page";

export const metadata = buildPageMetadata("tr", "home");

export default function Home() {
  return <HomePage locale="tr" />;
}
