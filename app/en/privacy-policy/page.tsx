import { LegalPage } from "@/components/pages/legal-page";
import { buildLegalPageMetadata } from "@/lib/legal-pages";

export const metadata = buildLegalPageMetadata("en", "privacyPolicy");

export default function EnglishPrivacyPolicyPage() {
  return <LegalPage locale="en" pageKey="privacyPolicy" />;
}
