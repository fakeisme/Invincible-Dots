import { ReactNode } from "react";

export function IntroBlock({ title, subtitle, kicker }: { title: string; subtitle: string; kicker?: ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-10 pt-24 md:pt-28">
      {kicker && <div className="mb-4">{kicker}</div>}
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">{title}</h1>
      <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">{subtitle}</p>
    </section>
  );
}
