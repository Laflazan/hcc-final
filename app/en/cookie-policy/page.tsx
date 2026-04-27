import { LegalPage } from "@/components/pages/legal-page";
import { buildLegalPageMetadata } from "@/lib/legal-pages";

export const metadata = buildLegalPageMetadata("en", "cookiePolicy");

export default function EnglishCookiePolicyPage() {
  return <LegalPage locale="en" pageKey="cookiePolicy" />;
}
