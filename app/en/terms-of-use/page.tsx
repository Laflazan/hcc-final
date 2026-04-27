import { LegalPage } from "@/components/pages/legal-page";
import { buildLegalPageMetadata } from "@/lib/legal-pages";

export const metadata = buildLegalPageMetadata("en", "termsOfUse");

export default function EnglishTermsOfUsePage() {
  return <LegalPage locale="en" pageKey="termsOfUse" />;
}
