import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const pillars = [
  {
    title: "Développement web moderne",
    text: "Technologies actuelles, code propre et maintenable, performances au rendez-vous.",
  },
  {
    title: "Solutions digitales",
    text: "Des outils pensés pour vos processus réels, pas des produits génériques.",
  },
  {
    title: "Innovation technologique",
    text: "Veille permanente et intégration des meilleures pratiques du secteur.",
  },
  {
    title: "Accompagnement personnalisé",
    text: "Un interlocuteur dédié, de la première idée jusqu'après la mise en ligne.",
  },
];

const values = [
  { label: "Qualité du code", detail: "revue, testé, documenté" },
  { label: "Créativité", detail: "des interfaces qui vous ressemblent" },
  { label: "Satisfaction client", detail: "notre mesure de réussite" },
];

export default function About() {
  return (
    <section id="a-propos" className="scroll-mt-24 border-y border-line/50 bg-navy/30 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="À propos"
          title="Une équipe, une exigence : votre réussite"
          description="Rbt Dev Hub est une entreprise de développement logiciel spécialisée dans la création de produits numériques qui font grandir votre activité."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 80}>
              <div className="flex h-full gap-4 rounded-xl border border-line bg-ink/60 p-6 transition-colors hover:border-gold/50">
                <span
                  className="mt-1 h-8 w-1 shrink-0 rounded-full bg-gradient-to-b from-gold to-gold-light"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-display text-lg font-semibold">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-muted">{pillar.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.label} className="bg-navy-2/80 p-6 text-center">
                <p className="font-display text-lg font-semibold text-gold-light">
                  {value.label}
                </p>
                <p className="mt-1 text-sm text-muted">{value.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
