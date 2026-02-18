import { IntroBlock } from "@/components/sections/intro-block";
import { ProductCard } from "@/components/commerce/product-card";
import { packs } from "@/data/products";

export default function PacksPage() {
  return (
    <>
      <IntroBlock
        title="Packs"
        subtitle="Trois niveaux clairs pour structurer votre déploiement: Starter, Advanced et Elite."
      />
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {packs.map((pack) => (
            <ProductCard key={pack.id} product={pack} href={`/packs/${pack.slug}`} />
          ))}
        </div>
      </section>
    </>
  );
}
