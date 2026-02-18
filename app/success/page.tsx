import Link from "next/link";

export default function SuccessPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="text-4xl font-semibold">Paiement validé</h1>
      <p className="mt-5 text-slate-600">Merci pour votre achat. Livraison d'accès: placeholder (email automatique / espace client futur).</p>
      <Link href="/" className="mt-8 inline-flex rounded-full bg-brand px-5 py-2.5 text-sm text-white">Retour à l'accueil</Link>
    </section>
  );
}
