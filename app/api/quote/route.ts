import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.fullName || !data.email || !data.projectType || !data.description) {
      return NextResponse.json(
        { ok: false, error: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Rbt Dev Hub <onboarding@resend.dev>",
      to: "ernestorabutin02@gmail.com",
      replyTo: data.email,
      subject: `Nouvelle demande de devis — ${data.fullName}`,
      text: [
        `Nom : ${data.fullName}`,
        `Entreprise : ${data.company || "—"}`,
        `Email : ${data.email}`,
        `Téléphone : ${data.phone || "—"}`,
        `Type de projet : ${data.projectType}`,
        `Budget : ${data.budget || "—"}`,
        ``,
        `Description :`,
        data.description,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Échec de l'envoi." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      { ok: false, error: "Échec de l'envoi." },
      { status: 500 }
    );
  }
}