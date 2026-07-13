import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="font-mono text-xs uppercase tracking-[0.35em] text-gold-light">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-muted">{description}</p>}
    </Reveal>
  );
}
