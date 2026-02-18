export type RiskProfile = "Prudent" | "Équilibré" | "Dynamique";

export type ProductFAQ = {
  question: string;
  answer: string;
};

export type Robot = {
  type: "robot";
  id: string;
  name: string;
  slug: string;
  price: number;
  stripePriceId: string;
  shortDescription: string;
  longDescription: string;
  strategy: string;
  timeframe: string;
  riskProfile: RiskProfile;
  keyPoints: string[];
  includes: string[];
  badge?: string;
  faq?: ProductFAQ[];
};

export type Pack = {
  type: "pack";
  id: string;
  name: string;
  slug: string;
  price: number;
  stripePriceId: string;
  shortDescription: string;
  longDescription: string;
  robotsIncluded: string[];
  keyPoints: string[];
  includes: string[];
  badge?: string;
  faq?: ProductFAQ[];
};

export const robots: Robot[] = [
  {
    type: "robot",
    id: "robot_alpha",
    name: "Robot Alpha",
    slug: "robot-alpha",
    price: 59000,
    stripePriceId: "price_robot_alpha_placeholder",
    shortDescription: "Robot multi-marchés orienté régularité et risque mesuré.",
    longDescription: "À remplacer par ta description. Robot pensé pour une exécution disciplinée avec gestion du risque intégrée.",
    strategy: "Trend-following avec filtres de volatilité (placeholder)",
    timeframe: "H1 / H4 (placeholder)",
    riskProfile: "Prudent",
    keyPoints: ["Risque calibré", "Entrées filtrées", "Adaptation marché"],
    includes: ["Guide d'installation", "Paramètres de démarrage", "Mises à jour 3 mois"],
    badge: "Nouveau"
  },
  {
    type: "robot",
    id: "robot_beta",
    name: "Robot Beta",
    slug: "robot-beta",
    price: 79000,
    stripePriceId: "price_robot_beta_placeholder",
    shortDescription: "Approche hybride momentum / mean-reversion.",
    longDescription: "À remplacer par ta description. Convient aux utilisateurs recherchant un compromis entre stabilité et performance.",
    strategy: "Hybrid momentum / reversion (placeholder)",
    timeframe: "M30 / H1 (placeholder)",
    riskProfile: "Équilibré",
    keyPoints: ["Exécution constante", "Filtres anti-bruit", "Reporting simplifié"],
    includes: ["Onboarding", "FAQ dédiée", "Mises à jour 6 mois"],
    badge: "Populaire"
  },
  {
    type: "robot",
    id: "robot_gamma",
    name: "Robot Gamma",
    slug: "robot-gamma",
    price: 99000,
    stripePriceId: "price_robot_gamma_placeholder",
    shortDescription: "Moteur dynamique pour contextes directionnels.",
    longDescription: "À remplacer par ta description. Conçu pour des utilisateurs tolérant une variabilité supérieure.",
    strategy: "Breakout contextuel (placeholder)",
    timeframe: "M15 / M30 (placeholder)",
    riskProfile: "Dynamique",
    keyPoints: ["Réactivité", "Protection capital", "Alertes clés"],
    includes: ["Template de paramétrage", "Canal support", "Mises à jour 6 mois"]
  },
  {
    type: "robot",
    id: "robot_delta",
    name: "Robot Delta",
    slug: "robot-delta",
    price: 119000,
    stripePriceId: "price_robot_delta_placeholder",
    shortDescription: "Robot polyvalent avec règles strictes d'exposition.",
    longDescription: "À remplacer par ta description. Optimisé pour une utilisation continue avec contrôles de sécurité renforcés.",
    strategy: "Multi-signaux pondérés (placeholder)",
    timeframe: "H1 (placeholder)",
    riskProfile: "Équilibré",
    keyPoints: ["Drawdown contrôlé", "Règles claires", "Support prioritaire"],
    includes: ["Audit paramétrage", "Mises à jour 12 mois", "Documentation complète"],
    badge: "Pro"
  },
  {
    type: "robot",
    id: "robot_epsilon",
    name: "Robot Epsilon",
    slug: "robot-epsilon",
    price: 149000,
    stripePriceId: "price_robot_epsilon_placeholder",
    shortDescription: "Solution avancée orientée portefeuille robotisé.",
    longDescription: "À remplacer par ta description. Pensé pour structurer une allocation multi-robots avec suivi premium.",
    strategy: "Allocation adaptive (placeholder)",
    timeframe: "H4 / D1 (placeholder)",
    riskProfile: "Prudent",
    keyPoints: ["Vision portefeuille", "Contrôle du levier", "Tableau de bord"],
    includes: ["Session stratégique", "Support VIP", "Mises à jour 12 mois"],
    badge: "Elite"
  }
];

export const packs: Pack[] = [
  {
    type: "pack",
    id: "starter_pack",
    name: "Starter Pack",
    slug: "starter-pack",
    price: 149000,
    stripePriceId: "price_starter_pack_placeholder",
    shortDescription: "Base solide pour démarrer avec une approche encadrée.",
    longDescription: "À remplacer par ta description. Ce pack inclut les robots essentiels pour un démarrage progressif.",
    robotsIncluded: ["robot_alpha", "robot_beta"],
    keyPoints: ["2 robots inclus", "Mise en place rapide", "Support standard"],
    includes: ["Accès robots Alpha & Beta", "Guide de déploiement", "Check-list de conformité"]
  },
  {
    type: "pack",
    id: "advanced_pack",
    name: "Advanced Pack",
    slug: "advanced-pack",
    price: 249000,
    stripePriceId: "price_advanced_pack_placeholder",
    shortDescription: "Couverture élargie avec davantage de scénarios de marché.",
    longDescription: "À remplacer par ta description. Pack conçu pour les utilisateurs expérimentés qui veulent plus de flexibilité.",
    robotsIncluded: ["robot_alpha", "robot_beta", "robot_gamma"],
    keyPoints: ["3 robots inclus", "Approche multi-style", "Support prioritaire"],
    includes: ["Accès Alpha/Beta/Gamma", "Mises à jour trimestrielles", "Session onboarding"],
    badge: "Populaire"
  },
  {
    type: "pack",
    id: "elite_pack",
    name: "Elite Pack",
    slug: "elite-pack",
    price: 399000,
    stripePriceId: "price_elite_pack_placeholder",
    shortDescription: "Suite complète des 5 robots pour une allocation premium.",
    longDescription: "À remplacer par ta description. Offre institutionnelle avec accompagnement renforcé.",
    robotsIncluded: ["robot_alpha", "robot_beta", "robot_gamma", "robot_delta", "robot_epsilon"],
    keyPoints: ["5 robots inclus", "Vision portefeuille", "Accompagnement premium"],
    includes: ["Accès complet", "Support VIP", "Roadmap produit"],
    badge: "Pro"
  }
];

export const allProducts = [...packs, ...robots];

export const findPackBySlug = (slug: string) => packs.find((pack) => pack.slug === slug);
export const findRobotBySlug = (slug: string) => robots.find((robot) => robot.slug === slug);
export const findProductById = (id: string) => allProducts.find((item) => item.id === id);
