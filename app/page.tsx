import { ProductCard } from "@/components/commerce/product-card";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { packs, robots } from "@/data/products";

const trustItems = [
  { title: "Sécurité", text: "Architecture claire, processus documentés et paiements Stripe sécurisés." },
  { title: "Transparence", text: "Approche pédagogique, description explicite des limites et des risques." },
  { title: "Support", text: "Accompagnement professionnel pour la mise en place et le suivi." },
  { title: "Mises à jour", text: "Roadmap produit continue et maintenance planifiée." }
];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-24 md:grid-cols-2 md:pt-28">
        <Reveal>
          <Badge>Trading algorithmique premium</Badge>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-900 md:text-6xl">
            Infrastructure sobre pour robots de trading et packs professionnels.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Conçu pour les utilisateurs exigeants : design institutionnel, expérience fluide, et cadre clair. Le trading comporte des risques.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/packs">Voir les packs</Button>
            <Button href="/robots" variant="secondary">Voir les robots</Button>
          </div>
        </Reveal>
        <Reveal className="rounded-soft border border-slate-200 bg-white p-8 shadow-premium" delay={0.1}>
          <p className="text-sm text-slate-500">Section confiance</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div><p className="text-3xl font-semibold text-brand-dark">+2k</p><p className="text-sm text-slate-600">Utilisateurs (placeholder)</p></div>
            <div><p className="text-3xl font-semibold text-brand-dark">99.9%</p><p className="text-sm text-slate-600">Disponibilité (placeholder)</p></div>
            <div><p className="text-3xl font-semibold text-brand-dark">24/7</p><p className="text-sm text-slate-600">Support (placeholder)</p></div>
          </div>
          <p className="mt-6 text-sm text-slate-500">Logos partenaires (placeholders)</p>
        </Reveal>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold">Pourquoi nous</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.06} className="rounded-soft border border-slate-200 p-5">
                <h3 className="font-medium text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-3xl font-semibold">Aperçu des packs</h2>
            <Button href="/packs" variant="ghost">Tout voir</Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {packs.map((pack) => <ProductCard key={pack.id} product={pack} href={`/packs/${pack.slug}`} />)}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-3xl font-semibold">Aperçu des robots</h2>
            <Button href="/robots" variant="ghost">Tout voir</Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {robots.map((robot) => <ProductCard key={robot.id} product={robot} href={`/robots/${robot.slug}`} />)}
          </div>
          <p className="mt-10 text-xs text-slate-500">Avertissement: les performances passées ne préjugent pas des performances futures. Le trading comporte des risques.</p>
        </div>
      </section>
    </>
  );
}
