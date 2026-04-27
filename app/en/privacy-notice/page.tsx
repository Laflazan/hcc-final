import { LegalPage } from "@/components/pages/legal-page";
import { buildLegalPageMetadata } from "@/lib/legal-pages";

export const metadata = buildLegalPageMetadata("en", "privacyNotice");

export default function EnglishPrivacyNoticePage() {
  return <LegalPage locale="en" pageKey="privacyNotice" />;
}
