import { NextResponse } from "next/server";
import { getClientIp, isRateLimited } from "@/lib/rateLimit";

export function guardFormRequest(request: Request, data: Record<string, unknown>) {
  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json(
      { ok: false, error: "Trop de tentatives. Réessayez plus tard." },
      { status: 429 }
    );
  }

  // Honeypot : champ invisible que seuls les bots remplissent.
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  return null;
}
