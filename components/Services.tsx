import { services, type Service } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function ServiceIcon({ icon }: { icon: Service["icon"] }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (icon) {
    case "web":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.7 2.6 4 5.7 4 9s-1.3 6.4-4 9c-2.7-2.6-4-5.7-4-9s1.3-6.4 4-9z" />
        </svg>
      );
    case "app":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M8 21h8M12 18v3M7 9l2.5 2.5L7 14M12.5 14H17" />
        </svg>
      );
    case "rocket":
      return (
        <svg {...common}>
          <path d="M12 15c4.5-4.5 5.5-9 5.5-11.5C15 3.5 10.5 4.5 6 9l-2 5 4 4 4-3z" />
          <path d="M6 9l4 4M5 16l-2 5 5-2" />
          <circle cx="13" cy="8" r="1.2" />
        </svg>
      );
    case "ai":
      return (
        <svg {...common}>
          <rect x="5" y="7" width="14" height="12" rx="2.5" />
          <path d="M12 7V4M9 4h6M9 19v2M15 19v2M2 12h3M19 12h3" />
          <circle cx="9.5" cy="12.5" r="1" fill="currentColor" />
          <circle cx="14.5" cy="12.5" r="1" fill="currentColor" />
        </svg>
      );
  }
}

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Services"
          title="Ce que nous construisons pour vous"
          description="Quatre expertises complémentaires pour transformer vos idées en produits numériques performants."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 90}>
              <article className="group relative h-full overflow-hidden rounded-xl border border-line bg-navy/50 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-glow">
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="grid h-12 w-12 place-items-center rounded-lg border border-line bg-navy-2 text-gold-light transition-colors duration-300 group-hover:border-gold-light/50 group-hover:text-white group-hover:bg-gold">
                  <ServiceIcon icon={service.icon} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
