"use client";

import { IntroBlock } from "@/components/sections/intro-block";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <IntroBlock title="Contact" subtitle="Une question stratégique ? Écrivez-nous, réponse professionnelle sous 24h ouvrées." />
      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 md:grid-cols-2">
        <form
          className="rounded-soft border border-slate-200 bg-white p-7"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <label className="mb-3 block text-sm text-slate-700" htmlFor="name">Nom</label>
          <input id="name" required className="mb-5 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-brand" />
          <label className="mb-3 block text-sm text-slate-700" htmlFor="email">Email</label>
          <input id="email" type="email" required className="mb-5 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-brand" />
          <label className="mb-3 block text-sm text-slate-700" htmlFor="message">Message</label>
          <textarea id="message" rows={5} required className="mb-6 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-brand" />
          <Button type="submit">Envoyer</Button>
          {submitted && <p className="mt-3 text-sm text-brand-dark">Message envoyé (placeholder: brancher API/contact).</p>}
        </form>

        <aside className="rounded-soft border border-slate-200 bg-white p-7">
          <h2 className="text-xl font-semibold">Coordonnées</h2>
          <p className="mt-4 text-sm text-slate-600">Email : contact@marque.com</p>
          <p className="mt-2 text-sm text-slate-600">Calendrier (option) : lien à ajouter.</p>
          <p className="mt-8 text-xs text-slate-500">Le trading comporte des risques de perte en capital.</p>
        </aside>
      </section>
    </>
  );
}
