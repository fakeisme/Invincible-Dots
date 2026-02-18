# (Nom de ta marque ici) — Website vitrine + e-commerce

Projet Next.js (App Router) minimaliste/premium pour vendre des robots de trading et des packs.

## Stack
- Next.js + TypeScript + Tailwind CSS
- Framer Motion (micro-animations)
- Stripe Checkout + webhook
- SEO: metadata, sitemap, robots

## Démarrage
```bash
npm install
npm run dev
```

## Variables d'environnement
Copier `.env.example` vers `.env.local` puis renseigner les clés Stripe.

## Données produits
Éditer `data/products.ts` pour modifier noms, prix, descriptions, IDs Stripe.

## Routes
- `/` Accueil
- `/packs`, `/packs/[slug]`
- `/robots`, `/robots/[slug]`
- `/copy-trading`
- `/faq`
- `/contact`
- `/legal`, `/privacy`, `/terms`
- `/success`, `/cancel`
- `/api/checkout`
- `/api/webhooks/stripe`

## Notes conformité
Le contenu inclut des disclaimers sur les risques du trading et évite les promesses de gains.
