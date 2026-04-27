import { LegalPage } from "@/components/pages/legal-page";
import { buildLegalPageMetadata } from "@/lib/legal-pages";

export const metadata = buildLegalPageMetadata("tr", "termsOfUse");

export default function KullanimSartlariPage() {
  return <LegalPage locale="tr" pageKey="termsOfUse" />;
}
