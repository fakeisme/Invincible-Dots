import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/commerce/product-detail";
import { findRobotBySlug, robots } from "@/data/products";

export function generateStaticParams() {
  return robots.map((robot) => ({ slug: robot.slug }));
}

export default async function RobotDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const robot = findRobotBySlug(slug);
  if (!robot) return notFound();
  return <ProductDetail product={robot} />;
}
