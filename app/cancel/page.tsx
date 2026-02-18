import Link from "next/link";

export default function CancelPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="text-4xl font-semibold">Paiement annulé</h1>
      <p className="mt-5 text-slate-600">Aucune transaction n'a été finalisée. Vous pouvez reprendre votre sélection à tout moment.</p>
      <Link href="/packs" className="mt-8 inline-flex rounded-full border border-brand px-5 py-2.5 text-sm text-brand">Revenir aux packs</Link>
    </section>
  );
}
