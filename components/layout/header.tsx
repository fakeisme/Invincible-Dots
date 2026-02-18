import Link from "next/link";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/packs", label: "Packs" },
  { href: "/robots", label: "Robots" },
  { href: "/copy-trading", label: "Copy Trading" },
  { href: "/faq", label: "FAQ" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-canvas/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-brand-dark">
          (Nom de ta marque ici)
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-700 transition-colors duration-500 hover:text-brand">
              {item.label}
            </Link>
          ))}
        </nav>
        <Button href="/packs" className="hidden md:inline-flex">
          Accéder à l’achat
        </Button>
      </div>
    </header>
  );
}
