import { buildPageMetadata } from "@/lib/site";
import { TeamPage } from "@/components/pages/team-page";

export const metadata = buildPageMetadata("en", "team");

export default function EnglishTeamPage() {
  return <TeamPage locale="en" />;
}
