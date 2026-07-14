import { Resend } from "resend";

const FROM = process.env.RESEND_FROM_EMAIL ?? "Rbt Dev Hub <onboarding@resend.dev>";
const TO = process.env.CONTACT_TO_EMAIL ?? "ernestorabutin02@gmail.com";

export async function sendMail(params: {
  replyTo: string;
  subject: string;
  text: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not defined");
  }

  const resend = new Resend(apiKey);

  return resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: params.replyTo,
    subject: params.subject,
    text: params.text,
  });
}
