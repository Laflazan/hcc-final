import { LegalPage } from "@/components/pages/legal-page";
import { buildLegalPageMetadata } from "@/lib/legal-pages";

export const metadata = buildLegalPageMetadata("tr", "privacyNotice");

export default function AydinlatmaMetniPage() {
  return <LegalPage locale="tr" pageKey="privacyNotice" />;
}
