"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/commerce/product-card";
import { robots, RiskProfile } from "@/data/products";

const profiles: Array<RiskProfile | "Tous"> = ["Tous", "Prudent", "Équilibré", "Dynamique"];

export function RobotGrid() {
  const [selected, setSelected] = useState<RiskProfile | "Tous">("Tous");

  const filtered = useMemo(
    () => robots.filter((robot) => (selected === "Tous" ? true : robot.riskProfile === selected)),
    [selected]
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-3">
        {profiles.map((profile) => (
          <button
            key={profile}
            onClick={() => setSelected(profile)}
            className={`rounded-full border px-4 py-2 text-sm transition-all duration-500 ${
              selected === profile ? "border-brand bg-brand-tint text-brand-dark" : "border-slate-200 bg-white text-slate-600"
            }`}
            aria-pressed={selected === profile}
          >
            {profile}
          </button>
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="rounded-soft border border-slate-200 bg-white p-6 text-sm text-slate-600">Aucun robot pour ce filtre.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((robot) => (
            <ProductCard key={robot.id} product={robot} href={`/robots/${robot.slug}`} />
          ))}
        </div>
      )}
    </div>
  );
}
