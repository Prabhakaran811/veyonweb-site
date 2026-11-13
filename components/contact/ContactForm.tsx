"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import * as m from "framer-motion/m";
import { AlertCircle, Check, Loader2, Send } from "lucide-react";
import { serviceGroups, industries } from "@/data/services";
import { company } from "@/data/company";
import { ease } from "@/lib/motion";

type Values = { name: string; company: string; email: string; phone: string; service: string; industry: string; message: string; website: string };
type Errors = Partial<Record<keyof Values, string>>;

const empty: Values = { name: "", company: "", email: "", phone: "", service: "", industry: "", message: "", website: "" };
const input =
  "w-full rounded-xl border border-primary/15 bg-background px-4 py-3 text-sm text-primary outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/30 aria-[invalid=true]:border-red-400";

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (v.phone && !/^[0-9+()\-\s]{7,20}$/.test(v.phone.trim())) e.phone = "Please enter a valid phone number.";
  if (v.message.trim().length < 10) e.message = "Please tell us a little more (at least 10 characters).";
  return e;
}

function Field({ label, error, required, children, className = "" }: { label: string; error?: string; required?: boolean; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-sm font-semibold text-primary">
        {label} {required && <span className="text-red-500" aria-hidden>*</span>}
      </span>
      {children}
      {error && <span role="alert" className="mt-1.5 block text-xs text-red-600">{error}</span>}
    </label>
  );
}

export default function ContactForm() {
  const [v, setV] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const set = (k: keyof Values) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setV((p) => ({ ...p, [k]: e.target.value }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(v);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(v) });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-w-0 rounded-3xl border border-primary/10 bg-white p-6 shadow-xl shadow-primary/5 sm:p-10">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <m.div key="ok" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease }} className="py-10 text-center" role="status">
            <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent text-primary">
              <Check size={32} />
            </span>
            <h3 className="mt-6 text-2xl font-bold text-primary">Thank you, {v.name.split(" ")[0]}.</h3>
            <p className="mx-auto mt-2 max-w-md text-slate-600">We have received your enquiry. Our engineers will review it and get back to you at {v.email}.</p>
            <button onClick={() => { setV(empty); setStatus("idle"); }} className="mt-6 rounded-md border border-primary/20 px-5 py-2.5 text-sm font-semibold text-primary transition hover:border-accent hover:bg-accent">
              Send another enquiry
            </button>
          </m.div>
        ) : (
          <m.form key="form" onSubmit={submit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">Tell us about your project</h2>
            <p className="mt-1 text-sm text-slate-600">Fields marked * are required.</p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Field label="Your name" required error={errors.name}>
                <input className={input} value={v.name} onChange={set("name")} autoComplete="name" aria-invalid={!!errors.name} />
              </Field>
              <Field label="Company">
                <input className={input} value={v.company} onChange={set("company")} autoComplete="organization" />
              </Field>
              <Field label="Email" required error={errors.email}>
                <input type="email" className={input} value={v.email} onChange={set("email")} autoComplete="email" aria-invalid={!!errors.email} />
              </Field>
              <Field label="Phone" error={errors.phone}>
                <input type="tel" className={input} value={v.phone} onChange={set("phone")} autoComplete="tel" aria-invalid={!!errors.phone} />
              </Field>
              <Field label="Service you need">
                <select className={input} value={v.service} onChange={set("service")}>
                  <option value="">Select a service</option>
                  {serviceGroups.map((g) => (
                    <optgroup key={g.id} label={g.title}>
                      {g.items.map((i) => <option key={i.title}>{i.title}</option>)}
                    </optgroup>
                  ))}
                  <option>Not sure yet</option>
                </select>
              </Field>
              <Field label="Your industry">
                <select className={input} value={v.industry} onChange={set("industry")}>
                  <option value="">Select an industry</option>
                  {industries.map((i) => <option key={i.title}>{i.title}</option>)}
                  <option>Other</option>
                </select>
              </Field>
              <Field label="What problem are you trying to solve?" required error={errors.message} className="sm:col-span-2">
                <textarea rows={5} className={`${input} resize-y`} value={v.message} onChange={set("message")} aria-invalid={!!errors.message} />
              </Field>
            </div>

            {/* honeypot, hidden from people */}
            <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label>Website <input tabIndex={-1} autoComplete="off" value={v.website} onChange={set("website")} /></label>
            </div>

            {status === "error" && (
              <p role="alert" className="mt-5 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                <AlertCircle size={18} className="mt-0.5 shrink-0" />
                <span>Sorry, we could not send your message. Please try again{company.email ? <> or email us at <a className="font-semibold underline" href={`mailto:${company.email}`}>{company.email}</a></> : null}.</span>
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {status === "sending" ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : <>Send enquiry <Send size={18} className="transition-transform group-hover:translate-x-1" /></>}
            </button>
          </m.form>
        )}
      </AnimatePresence>
    </div>
  );
}