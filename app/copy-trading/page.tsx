import { IntroBlock } from "@/components/sections/intro-block";
import { Button } from "@/components/ui/button";

export default function CopyTradingPage() {
  return (
    <>
      <IntroBlock
        title="Copy Trading — Smile Method"
        subtitle="Une méthode structurée pour suivre une approche de marché encadrée et progressive."
      />
      <section className="mx-auto max-w-4xl space-y-8 px-6 pb-20">
        <div className="rounded-soft border border-slate-200 bg-white p-8">
          <h2 className="text-2xl font-semibold">Smile Method (S-M-I-L-E M-E-T-H-O-D)</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Principe: reproduire des signaux selon un cadre défini, avec contrôle du risque, documentation claire et accompagnement.
            À remplacer par ta description détaillée.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-700">
            <li>• S — Structure du compte et objectifs.</li>
            <li>• M — Méthodologie et règles d'exposition.</li>
            <li>• I — Implémentation progressive.</li>
            <li>• L — Lecture des performances et limites.</li>
            <li>• E — Encadrement et amélioration continue.</li>
          </ul>
        </div>
        <p className="text-sm text-slate-600">
          Destiné aux profils recherchant un cadre sérieux. Le trading comporte des risques et ne garantit aucun résultat.
        </p>
        <Button href="/contact">Demander l’accès</Button>
      </section>
    </>
  );
}
