import { NextResponse } from "next/server";
import { guardFormRequest } from "@/lib/formGuard";
import { sendMail } from "@/lib/sendMail";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const guardResponse = guardFormRequest(request, data);
    if (guardResponse) return guardResponse;

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { ok: false, error: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }

    const { error } = await sendMail({
      replyTo: data.email,
      subject: `Nouveau message de contact — ${data.name}`,
      text: [
        `Nom : ${data.name}`,
        `Email : ${data.email}`,
        "",
        "Message :",
        data.message,
      ].join("\n"),
    });

    if (error) {
      console.error(error);
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
