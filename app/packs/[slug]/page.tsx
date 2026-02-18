import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/commerce/product-detail";
import { findPackBySlug, packs } from "@/data/products";

export function generateStaticParams() {
  return packs.map((pack) => ({ slug: pack.slug }));
}

export default async function PackDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pack = findPackBySlug(slug);
  if (!pack) return notFound();
  return <ProductDetail product={pack} />;
}
