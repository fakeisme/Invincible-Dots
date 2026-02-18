import { IntroBlock } from "@/components/sections/intro-block";

const faqs = [
  "Comment se passe l'installation ?",
  "Quels marchés sont compatibles ?",
  "Y a-t-il un support après achat ?",
  "Puis-je utiliser plusieurs robots en parallèle ?",
  "Quel est le niveau de risque ?"
];

export default function FAQPage() {
  return (
    <>
      <IntroBlock title="FAQ" subtitle="Réponses rapides aux questions fréquentes. Contenu à personnaliser." />
      <section className="mx-auto max-w-4xl space-y-4 px-6 pb-20">
        {faqs.map((question) => (
          <article key={question} className="rounded-soft border border-slate-200 bg-white p-6">
            <h2 className="font-medium text-slate-900">{question}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">À remplacer par ta réponse détaillée.</p>
          </article>
        ))}
      </section>
    </>
  );
}
