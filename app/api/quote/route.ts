import { NextResponse } from "next/server";
import { guardFormRequest } from "@/lib/formGuard";
import { sendMail } from "@/lib/sendMail";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const guardResponse = guardFormRequest(request, data);
    if (guardResponse) return guardResponse;

    if (!data.fullName || !data.email || !data.projectType || !data.description) {
      return NextResponse.json(
        { ok: false, error: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }

    const { error } = await sendMail({
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
