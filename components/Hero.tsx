"use client";

import { useEffect, useState } from "react";

const codeLines = [
  "const idee = client.vision;",
  "const code = rbtDevHub.develop(idee);",
  "const succes = deploy(code);",
  "// Votre idée, notre code, votre succès ✓",
];

export default function Hero() {
  const [typed, setTyped] = useState<string[]>([""]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setTyped(codeLines);
      setDone(true);
      return;
    }

    const totalChars = codeLines.reduce((sum, l) => sum + l.length, 0);
    let count = 0;

    const interval = setInterval(() => {
      count = Math.min(count + 1, totalChars);

      // Reconstruit les lignes affichées à partir du nombre de caractères tapés
      let remaining = count;
      const lines: string[] = [];
      for (const l of codeLines) {
        if (remaining <= 0) break;
        lines.push(l.slice(0, Math.min(l.length, remaining)));
        remaining -= l.length;
      }
      setTyped(lines);

      if (count >= totalChars) {
        setDone(true);
        clearInterval(interval);
      }
    }, 32);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden pb-24 pt-36 sm:pt-40">
      {/* Décor : grille technique + halos */}
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-gold/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-navy/60 px-4 py-1.5 font-mono text-xs text-gold-light animate-rise">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-light" aria-hidden="true" />
            {"//"} votre idée <span aria-hidden="true">→</span> notre code <span aria-hidden="true">→</span> votre succès
          </p>

          <h1
            className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl animate-rise"
            style={{ animationDelay: "120ms" }}
          >
            Votre idée, <br />
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              notre code,
            </span>{" "}
            <br />
            votre succès.
          </h1>

          <p
            className="mt-6 max-w-xl text-lg text-muted animate-rise"
            style={{ animationDelay: "240ms" }}
          >
            Rbt Dev Hub accompagne les entreprises, entrepreneurs et
            organisations dans leur transformation numérique : sites web
            professionnels, applications web et solutions digitales conçues
            sur mesure.
          </p>

          <div
            className="mt-9 flex flex-wrap gap-4 animate-rise"
            style={{ animationDelay: "360ms" }}
          >
            <a
              href="#devis"
              className="rounded-lg bg-gold px-6 py-3.5 font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-glow"
            >
              Démarrer un projet
            </a>
            <a
              href="#devis"
              className="rounded-lg border border-line bg-navy/50 px-6 py-3.5 font-medium transition-all hover:-translate-y-0.5 hover:border-gold-light/60 hover:text-gold-light"
            >
              Obtenir un devis gratuit
            </a>
          </div>
        </div>

        {/* Signature : terminal qui écrit la promesse en code */}
        <div className="animate-drift" aria-hidden="true">
          <div className="rounded-xl border border-line bg-navy/70 shadow-card backdrop-blur-sm">
            <div className="flex items-center gap-2 rounded-t-xl bg-gold px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-ink" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink/60" />
              <span className="ml-3 font-mono text-xs font-bold text-ink">
                &gt;rbt_ — succes.ts
              </span>
            </div>
            <pre className="min-h-[10.5rem] overflow-x-auto p-5 font-mono text-sm leading-7 text-paper/90">
              {typed.map((lineText, i) => (
                <div key={i}>
                  <span className="mr-4 select-none text-muted/50">{i + 1}</span>
                  <span className={lineText.startsWith("//") ? "text-gold" : ""}>
                    {lineText}
                  </span>
                  {i === typed.length - 1 && (
                    <span
                      className={`ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-gold-light ${
                        done ? "animate-blink" : ""
                      }`}
                    />
                  )}
                </div>
              ))}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
