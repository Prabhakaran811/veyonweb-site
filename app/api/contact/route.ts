import { NextResponse } from "next/server";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const name = clean(body.name, 100);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 30);
  const company = clean(body.company, 150);
  const service = clean(body.service, 150);
  const industry = clean(body.industry, 100);
  const message = clean(body.message, 3000);

  if (name.length < 2 || !emailRe.test(email) || message.length < 10) {
    return NextResponse.json({ ok: false, error: "Please check the form fields" }, { status: 422 });
  }

  const text = [
    `Name: ${name}`,
    `Company: ${company || "-"}`,
    `Email: ${email}`,
    `Phone: ${phone || "-"}`,
    `Service: ${service || "-"}`,
    `Industry: ${industry || "-"}`,
    "",
    message,
  ].join("\n");

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!key || !to) {
    // Email is not set up yet. In development just log the enquiry so you can test the form.
    if (process.env.NODE_ENV !== "production") {
      console.log("[contact] email not configured, enquiry received:\n" + text);
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ ok: false, error: "Email is not configured" }, { status: 500 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "VEYON Website <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `New website enquiry from ${name.replace(/[\r\n]+/g, " ")}`,
      text,
    }),
  });

  if (!res.ok) return NextResponse.json({ ok: false, error: "Could not send" }, { status: 502 });
  return NextResponse.json({ ok: true });
}