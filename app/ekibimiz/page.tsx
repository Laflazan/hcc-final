import { buildPageMetadata } from "@/lib/site";
import { TeamPage } from "@/components/pages/team-page";

export const metadata = buildPageMetadata("tr", "team");

export default function EkibimizPage() {
  return <TeamPage locale="tr" />;
}
