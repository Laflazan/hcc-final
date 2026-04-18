import { buildPageMetadata } from "@/lib/site";
import { ArticlesPage } from "@/components/pages/articles-page";

export const metadata = buildPageMetadata("en", "articles");

export default function EnglishArticlesPage() {
  return <ArticlesPage locale="en" />;
}
