import { IntroBlock } from "@/components/sections/intro-block";

export default function LegalPage() {
  return (
    <>
      <IntroBlock title="Mentions légales" subtitle="Informations légales de l'éditeur. Contenu placeholder à compléter." />
      <section className="mx-auto max-w-4xl px-6 pb-20 text-sm leading-7 text-slate-600">
        <p>Raison sociale : À compléter.</p>
        <p>Adresse : À compléter.</p>
        <p>Responsable publication : À compléter.</p>
      </section>
    </>
  );
}
