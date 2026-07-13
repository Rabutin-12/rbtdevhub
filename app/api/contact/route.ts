import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { ok: false, error: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Rbt Dev Hub <onboarding@resend.dev>",
      to: "ernestorabutin02@gmail.com",
      replyTo: data.email,
      subject: `Nouveau message de contact — ${data.name}`,
      text: [
        `Nom : ${data.name}`,
        `Email : ${data.email}`,
        ``,
        `Message :`,
        data.message,
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
