import Link from "next/link";

const legalLinks = [
  { href: "/legal", label: "Mentions légales" },
  { href: "/privacy", label: "Politique de confidentialité" },
  { href: "/terms", label: "CGV" }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="text-sm font-medium text-brand-dark">(Nom de ta marque ici)</p>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Solutions technologiques pour le trading algorithmique. Le trading comporte des risques de perte en capital.
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-slate-900">Navigation</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li><Link href="/packs">Packs</Link></li>
            <li><Link href="/robots">Robots</Link></li>
            <li><Link href="/copy-trading">Copy Trading</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium text-slate-900">Légal & Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {legalLinks.map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
            <li><a href="mailto:contact@marque.com">contact@marque.com</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
