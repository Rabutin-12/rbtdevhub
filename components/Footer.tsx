import Image from "next/image";
import { contactInfo } from "@/lib/data";

const columns = [
  {
    title: "Navigation",
    links: [
      { label: "Services", href: "#services" },
      { label: "À propos", href: "#a-propos" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Devis gratuit", href: "#devis" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Sites web professionnels", href: "#services" },
      { label: "Applications web", href: "#services" },
      { label: "Solutions digitales", href: "#services" },
      { label: "IA & automatisation", href: "#services" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line/60 bg-navy/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Logo Rbt Dev Hub"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full"
            />
            <span className="font-mono text-lg font-bold">
              rbt.dev<span className="text-gold">hub</span>
            </span>
          </p>
          <p className="mt-4 max-w-sm text-sm text-muted">
            Votre idée, notre code, votre succès. Développement web et solutions
            digitales pour entreprises, entrepreneurs et organisations.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {contactInfo.socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg border border-line px-3 py-1.5 text-xs text-muted transition-colors hover:border-gold-light/60 hover:text-gold-light"
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-paper/90">
              {column.title}
            </p>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-gold-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-line/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Rbt Dev Hub. Tous droits réservés.</p>
          <p className="font-mono">Votre idée, notre code, votre succès.</p>
        </div>
      </div>
    </footer>
  );
}
