import { LegalPage } from "@/components/pages/legal-page";
import { buildLegalPageMetadata } from "@/lib/legal-pages";

export const metadata = buildLegalPageMetadata("tr", "cookiePolicy");

export default function CerezPolitikasiPage() {
  return <LegalPage locale="tr" pageKey="cookiePolicy" />;
}
