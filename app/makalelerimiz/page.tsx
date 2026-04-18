import { buildPageMetadata } from "@/lib/site";
import { ArticlesPage } from "@/components/pages/articles-page";

export const metadata = buildPageMetadata("tr", "articles");

export default function MakalelerimizPage() {
  return <ArticlesPage locale="tr" />;
}
