import { LegalPage } from "@/components/pages/legal-page";
import { buildLegalPageMetadata } from "@/lib/legal-pages";

export const metadata = buildLegalPageMetadata("tr", "privacyPolicy");

export default function GizlilikPolitikasiPage() {
  return <LegalPage locale="tr" pageKey="privacyPolicy" />;
}
