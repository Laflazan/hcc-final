import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/pages/service-detail-page";
import {
  buildServiceMetadata,
  getServiceBySlug,
  getServiceStaticParams,
} from "@/lib/services";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getServiceStaticParams("en");
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  return buildServiceMetadata("en", slug) ?? {};
}

export default async function EnglishServiceDetailRoute({
  params,
}: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug("en", slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} locale="en" />;
}
