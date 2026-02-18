"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function PurchaseButton({ productId }: { productId: string }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId })
      });

      if (!response.ok) throw new Error("Impossible de démarrer le paiement.");
      const data = (await response.json()) as { url?: string };
      if (!data.url) throw new Error("URL Stripe indisponible.");
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      <Button onClick={handleCheckout} disabled={loading} aria-busy={loading}>
        {loading ? "Redirection..." : "Acheter"}
      </Button>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
