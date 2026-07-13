"use client";

import { useState } from "react";
import { contactInfo } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const inputClass =
  "w-full rounded-lg border border-line bg-ink/70 px-4 py-3 text-sm text-paper placeholder:text-muted/60 transition-colors focus:border-gold";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Contact"
          title="Parlons de votre projet"
          description="Une question, une idée, un besoin urgent ? Écrivez-nous par le canal de votre choix."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Coordonnées */}
          <Reveal className="space-y-4">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-4 rounded-xl border border-line bg-navy/50 p-5 transition-all hover:-translate-y-0.5 hover:border-gold/60"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-navy-2 text-gold-light">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </span>
              <span>
                <span className="block text-sm text-muted">Email</span>
                <span className="font-medium">{contactInfo.email}</span>
              </span>
            </a>

            <a
              href={contactInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-line bg-navy/50 p-5 transition-all hover:-translate-y-0.5 hover:border-gold/60"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-navy-2 text-gold-light">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                  <path d="M21 11.5a8.5 8.5 0 01-12.4 7.5L4 20l1.1-4.4A8.5 8.5 0 1121 11.5z" />
                  <path d="M9 10c.5 2.5 2.5 4.5 5 5l1.5-1.5 2 1" strokeLinecap="round" />
                </svg>
              </span>
              <span>
                <span className="block text-sm text-muted">WhatsApp</span>
                <span className="font-medium">{contactInfo.whatsapp}</span>
              </span>
            </a>

            <div className="rounded-xl border border-line bg-navy/50 p-5">
              <p className="text-sm text-muted">Réseaux sociaux</p>
              <ul className="mt-3 flex flex-wrap gap-2.5">
                {contactInfo.socials.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-lg border border-line bg-navy-2 px-4 py-2 text-sm transition-colors hover:border-gold-light/60 hover:text-gold-light"
                    >
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Formulaire de contact */}
          <Reveal delay={120}>
            <div className="rounded-xl border border-line bg-navy/50 p-6 sm:p-8">
              {sent ? (
                <div role="status" className="py-10 text-center">
                  <h3 className="font-display text-xl font-semibold text-gold-light">
                    Message envoyé
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    Merci ! Nous vous répondrons dans les plus brefs délais.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 rounded-lg border border-line px-5 py-2.5 text-sm transition-colors hover:border-gold-light/60 hover:text-gold-light"
                  >
                    Écrire un autre message
                  </button>
                </div>
              ) : (
                <div className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">
                        Nom
                      </label>
                      <input
                        id="contact-name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Votre nom"
                        autoComplete="name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="vous@entreprise.com"
                        autoComplete="email"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Comment pouvons-nous vous aider ?"
                      className={inputClass}
                    />
                  </div>
                  {status === "error" && (
                    <p role="alert" className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                      Échec de l&apos;envoi. Veuillez réessayer.
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={status === "sending"}
                    className="rounded-lg bg-gold px-6 py-3.5 font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
                  </button>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
