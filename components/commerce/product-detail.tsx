import { PurchaseButton } from "@/components/commerce/purchase-button";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils";
import { Pack, Robot, findProductById } from "@/data/products";

type Product = Pack | Robot;

export function ProductDetail({ product }: { product: Product }) {
  const includedRobots = product.type === "pack" ? product.robotsIncluded.map((id) => findProductById(id)) : [];

  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 md:grid-cols-[1.1fr_0.9fr]">
      <div>
        {product.badge && <Badge>{product.badge}</Badge>}
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">{product.name}</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">{product.longDescription}</p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Points clés</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {product.keyPoints.map((point) => <li key={point}>• {point}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Inclus</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {product.includes.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </div>
        </div>

        {product.type === "robot" && (
          <div className="mt-10 rounded-soft border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-500">Stratégie</p>
            <p className="mt-2 text-slate-800">{product.strategy}</p>
            <p className="mt-5 text-sm text-slate-500">Timeframe</p>
            <p className="mt-2 text-slate-800">{product.timeframe}</p>
            <p className="mt-5 text-sm text-slate-500">Profil</p>
            <p className="mt-2 text-slate-800">{product.riskProfile}</p>
          </div>
        )}

        {product.type === "pack" && (
          <div className="mt-10 rounded-soft border border-slate-200 bg-white p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Robots inclus</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {includedRobots.map((robot) => robot && <li key={robot.id}>• {robot.name}</li>)}
            </ul>
          </div>
        )}
      </div>

      <aside className="h-fit rounded-soft border border-slate-200 bg-white p-7 shadow-premium md:sticky md:top-28">
        <p className="text-sm text-slate-500">Prix</p>
        <p className="mt-2 text-4xl font-semibold text-brand-dark">{formatPrice(product.price)}</p>
        <p className="mt-4 text-sm leading-6 text-slate-600">
          Paiement sécurisé via Stripe. Aucun engagement de performance ou de gains garantis.
        </p>
        <div className="mt-8">
          <PurchaseButton productId={product.id} />
        </div>
      </aside>
    </section>
  );
}
