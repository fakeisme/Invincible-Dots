import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { formatPrice } from "@/lib/utils";
import { Pack, Robot } from "@/data/products";

type Product = Pack | Robot;

export function ProductCard({ product, href }: { product: Product; href: string }) {
  return (
    <Reveal className="rounded-soft border border-slate-200 bg-white p-6 shadow-premium transition-all duration-500 hover:-translate-y-1 hover:border-brand/35">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-xl font-semibold text-slate-900">{product.name}</h3>
        {product.badge && <Badge>{product.badge}</Badge>}
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600">{product.shortDescription}</p>
      <p className="mt-5 text-2xl font-semibold text-brand-dark">{formatPrice(product.price)}</p>
      <Link href={href} className="mt-6 inline-flex text-sm font-medium text-brand hover:text-brand-dark">
        Voir le détail →
      </Link>
    </Reveal>
  );
}
