"use client";

import { useState } from "react";
import { projects, type ProjectCategory } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const categories: ("Tous" | ProjectCategory)[] = [
  "Tous",
  "Sites web professionnels",
  "Applications web",
  "Solutions digitales",
];

export default function Portfolio() {
  const [active, setActive] = useState<(typeof categories)[number]>("Tous");

  const visible =
    active === "Tous" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Portfolio"
          title="Des projets qui parlent pour nous"
          description="Un aperçu du type de réalisations que nous livrons à nos clients."
        />

        <Reveal className="mt-10 flex flex-wrap justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={`rounded-full border px-4 py-2 text-sm transition-all ${
                active === cat
                  ? "border-gold bg-gold font-semibold text-ink shadow-glow"
                  : "border-line bg-navy/50 text-muted hover:border-gold-light/50 hover:text-paper"
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal key={project.name} delay={i * 70}>
              <article className="group h-full overflow-hidden rounded-xl border border-line bg-navy/50 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-glow">
                {/* Aperçu du projet */}
                <div
                  className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${project.gradient}`}
                >
                  <code className="rounded-lg border border-white/10 bg-ink/70 px-4 py-2.5 font-mono text-xs text-gold-light backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                    {project.code}
                  </code>
                </div>

                <div className="p-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold-light">
                    {project.category}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md border border-line bg-navy-2 px-2.5 py-1 font-mono text-[11px] text-paper/80"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
