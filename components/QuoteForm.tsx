"use client";

import { useState, type ChangeEvent } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type FormState = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  description: string;
};

const initialState: FormState = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  description: "",
};

const projectTypes = [
  "Site web",
  "Application web",
  "Solution digitale",
  "Intelligence artificielle",
  "Autre",
];

const budgets = [
  "Moins de 500 000 Ar",
  "500 000 – 800 000 Ar",
  "800 000 – 1 000 000 Ar",
  "Plus de 1 000 000 Ar",
  "À définir ensemble",
];

const inputClass =
  "w-full rounded-lg border border-line bg-ink/70 px-4 py-3 text-sm text-paper placeholder:text-muted/60 transition-colors focus:border-gold";

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.fullName || !form.email || !form.projectType || !form.description) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="devis" className="scroll-mt-24 border-y border-line/50 bg-navy/30 py-24">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading
          eyebrow="Devis gratuit"
          title="Obtenez votre devis gratuit"
          description="Décrivez votre projet en quelques lignes : je reviens vers vous sous 48 h avec une proposition personnalisée, sans engagement."
        />

        <Reveal className="mt-12">
          {status === "sent" ? (
            <div
              role="status"
              className="rounded-xl border border-gold-light/40 bg-navy-2/80 p-10 text-center shadow-glow"
            >
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-gold to-gold-light">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12.5l4.5 4.5L19 7.5" stroke="#061229" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold">
                Demande envoyée avec succès
              </h3>
              <p className="mx-auto mt-3 max-w-md text-sm text-muted">
                Merci pour votre confiance. J&apos;étudie votre projet et
                vous répondrai sous 48 heures avec une proposition personnalisée.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-7 rounded-lg border border-line px-5 py-2.5 text-sm transition-colors hover:border-gold-light/60 hover:text-gold-light"
              >
                Envoyer une autre demande
              </button>
            </div>
          ) : (
            <div className="rounded-xl border border-line bg-ink/60 p-6 sm:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium">
                    Nom complet <span className="text-gold-light">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Ex. : Jean Kabasele"
                    autoComplete="name"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="company" className="mb-1.5 block text-sm font-medium">
                    Nom de l&apos;entreprise
                  </label>
                  <input
                    id="company"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Ex. : Karibu SARL"
                    autoComplete="organization"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                    Adresse email <span className="text-gold-light">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="vous@entreprise.com"
                    autoComplete="email"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                    Téléphone / WhatsApp
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+243 ..."
                    autoComplete="tel"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="mb-1.5 block text-sm font-medium">
                    Type de projet <span className="text-gold-light">*</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Sélectionnez un type
                    </option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="mb-1.5 block text-sm font-medium">
                    Budget estimé
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Sélectionnez une fourchette
                    </option>
                    {budgets.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="description" className="mb-1.5 block text-sm font-medium">
                    Description du projet <span className="text-gold-light">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Décrivez votre projet : objectifs, fonctionnalités souhaitées, délais..."
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              {status === "error" && (
                <p role="alert" className="mt-4 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                  Vérifiez les champs obligatoires (nom, email, type de projet,
                  description), puis réessayez.
                </p>
              )}

              <button
                type="button"
                onClick={handleSubmit}
                disabled={status === "sending"}
                className="mt-7 w-full rounded-lg bg-gradient-to-r from-gold to-gold-light px-6 py-4 font-semibold text-ink transition-all hover:-translate-y-0.5 hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending"
                  ? "Envoi en cours..."
                  : "Envoyer ma demande de devis gratuit"}
              </button>
              <p className="mt-3 text-center text-xs text-muted">
                Réponse sous 48 h · Sans engagement · Vos données restent confidentielles
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
