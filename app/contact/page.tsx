// app/contact/page.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

type Lang = "en" | "ar";

const c = {
  en: {
    title: "Contact Sales / Partnerships",
    subtitle:
      "We supply smart security and control solutions to homes, teams, service providers, and tech firms worldwide. Tell us what you're building — we’ll recommend the right setup.",
    cards: [
      {
        title: "Sales",
        text: "For pricing, product availability, bulk orders, and deployments.",
      },
      {
        title: "Partnerships",
        text: "For resellers, integrators, installers, and distribution.",
      },
      {
        title: "Enterprise / IT",
        text: "For offices, managed networks, policies, and security workflows.",
      },
    ],
    formTitle: "Send us your request",
    name: "Full Name",
    company: "Company / Organization",
    email: "Email Address",
    phone: "Phone (optional)",
    usecase: "Use Case",
    usecaseOptions: [
      "Home",
      "Office / Enterprise",
      "MSP / Managed Networks",
      "Reseller / Integrator",
      "Other",
    ],
    message: "What do you need?",
    submit: "Submit",
    back: "Back to Home",
    required: "Required",
    optional: "Optional",
    errors: {
      name: "Name is required.",
      company: "Company is required.",
      email: "Email is required.",
      emailInvalid: "Enter a valid email.",
      usecase: "Select a use case.",
      message: "Message is required.",
    },
    success: "✅ Submitted! Our team will reach out within 1 business day.",
    note: "We typically respond within 1 business day. No spam — your details stay private.",
  },
  ar: {
    title: "تواصل مع المبيعات / الشراكات",
    subtitle:
      "نوفّر حلول الأمان والتحكم للمنازل، والفرق، ومقدّمي الخدمات، والشركات التقنية عالميًا. أخبرنا باحتياجك وسنقترح أفضل إعداد.",
    cards: [
      {
        title: "المبيعات",
        text: "الأسعار، توفر المنتجات، الطلبات بالجملة، وخطط النشر.",
      },
      {
        title: "الشراكات",
        text: "للموزعين، ومتكاملي الأنظمة، والتركيب والتوزيع.",
      },
      {
        title: "المؤسسات / IT",
        text: "للمكاتب والشبكات المُدارة والسياسات وتدفقات الأمان.",
      },
    ],
    formTitle: "أرسل طلبك",
    name: "الاسم الكامل",
    company: "الشركة / الجهة",
    email: "البريد الإلكتروني",
    phone: "الهاتف (اختياري)",
    usecase: "نوع الاستخدام",
    usecaseOptions: [
      "منزل",
      "مكتب / مؤسسة",
      "شبكات مُدارة",
      "موزّع / تكامل",
      "أخرى",
    ],
    message: "ما الذي تحتاجه؟",
    submit: "إرسال",
    back: "العودة للرئيسية",
    required: "مطلوب",
    optional: "اختياري",
    errors: {
      name: "الاسم مطلوب.",
      company: "الجهة مطلوبة.",
      email: "البريد الإلكتروني مطلوب.",
      emailInvalid: "أدخل بريدًا صحيحًا.",
      usecase: "اختر نوع الاستخدام.",
      message: "الرسالة مطلوبة.",
    },
    success: "✅ تم الإرسال! سيتواصل معك فريقنا خلال يوم عمل واحد.",
    note: "عادةً نرد خلال يوم عمل واحد. بدون رسائل مزعجة — بياناتك تبقى خاصة.",
  },
} as const;

export default function ContactPage() {
  const [lang, setLang] = useState<Lang>("en");
  const t = c[lang];
  const isAr = lang === "ar";

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    usecase: "",
    message: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof typeof form, string>>
  >({});
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(false);

    const nextErrors: Partial<Record<keyof typeof form, string>> = {};

    if (!form.name.trim()) nextErrors.name = t.errors.name;
    if (!form.company.trim()) nextErrors.company = t.errors.company;

    if (!form.email.trim()) nextErrors.email = t.errors.email;
    else if (!validateEmail(form.email.trim()))
      nextErrors.email = t.errors.emailInvalid;

    if (!form.usecase.trim()) nextErrors.usecase = t.errors.usecase;
    if (!form.message.trim()) nextErrors.message = t.errors.message;

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitted(true);
    setForm({
      name: "",
      company: "",
      email: "",
      phone: "",
      usecase: "",
      message: "",
    });
  };

  const fieldBase =
    "mt-1 w-full rounded-xl border bg-white px-3 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4";

  const fieldClass = (k: keyof typeof form) =>
    `${fieldBase} ${
      errors[k]
        ? "border-rose-300 focus:border-rose-500 focus:ring-rose-500/10"
        : "border-slate-200 focus:border-cyan-500 focus:ring-cyan-500/10"
    }`;

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      className="min-h-screen bg-slate-50 text-slate-900"
    >
      {/* Light theme background gradients (brand) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-50 via-slate-50 to-blue-50" />
        <div className="absolute -top-40 -left-16 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute top-28 right-[-80px] h-96 w-96 rounded-full bg-blue-400/15 blur-3xl" />
        <div className="absolute bottom-[-140px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-emerald-300/15 blur-3xl" />
      </div>

      {/* Header (light theme, brand) */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-md shadow-cyan-400/30">
              <span className="text-lg font-semibold tracking-tight">HG</span>
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-800">
              HomeGuard AI
            </span>
          </Link>

          {/* Language toggle */}
          <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white px-1 py-1 text-xs">
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-2 py-1 transition ${
                !isAr
                  ? "bg-cyan-500 text-white"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("ar")}
              className={`rounded-full px-2 py-1 transition ${
                isAr
                  ? "bg-cyan-500 text-white"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              ع
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-white/70 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-700 shadow-sm">
            {lang === "en" ? "Contact" : "تواصل"}
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.title}
          </h1>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            {t.subtitle}
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-cyan-400 hover:text-cyan-800"
          >
            {t.back}
          </Link>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {t.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300/60 hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{card.text}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="mt-10 mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <h2 className="text-lg font-semibold text-slate-900">
              {t.formTitle}
            </h2>

            <div className="text-[11px] text-slate-500">
              <span className="text-rose-500">*</span> {t.required}
              <span className="mx-2 text-slate-300">•</span>
              <span className="text-slate-500">{t.optional}: </span>
              <span className="text-slate-600">{t.phone}</span>
            </div>
          </div>

          {submitted && (
            <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
              {t.success}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="mt-6 grid gap-4 sm:grid-cols-2"
          >
            {/* Name */}
            <div className="sm:col-span-1">
              <label className="text-sm text-slate-700">
                {t.name} <span className="text-rose-500">*</span>
              </label>
              <input
                value={form.name}
                onChange={(e) =>
                  setForm((p) => ({ ...p, name: e.target.value }))
                }
                className={fieldClass("name")}
                placeholder={lang === "en" ? "Your full name" : "اسمك الكامل"}
              />
              {errors.name && (
                <p className="mt-1 text-[11px] text-rose-600">{errors.name}</p>
              )}
            </div>

            {/* Company */}
            <div className="sm:col-span-1">
              <label className="text-sm text-slate-700">
                {t.company} <span className="text-rose-500">*</span>
              </label>
              <input
                value={form.company}
                onChange={(e) =>
                  setForm((p) => ({ ...p, company: e.target.value }))
                }
                className={fieldClass("company")}
                placeholder={
                  lang === "en" ? "Company name" : "اسم الشركة / الجهة"
                }
              />
              {errors.company && (
                <p className="mt-1 text-[11px] text-rose-600">
                  {errors.company}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="sm:col-span-1">
              <label className="text-sm text-slate-700">
                {t.email} <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm((p) => ({ ...p, email: e.target.value }))
                }
                className={fieldClass("email")}
                placeholder={
                  lang === "en" ? "you@company.com" : "name@example.com"
                }
              />
              {errors.email && (
                <p className="mt-1 text-[11px] text-rose-600">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div className="sm:col-span-1">
              <label className="text-sm text-slate-700">
                {t.phone} <span className="text-slate-400">({t.optional})</span>
              </label>
              <input
                value={form.phone}
                onChange={(e) =>
                  setForm((p) => ({ ...p, phone: e.target.value }))
                }
                className={fieldClass("phone")}
                placeholder={lang === "en" ? "+966..." : "+966..."}
              />
            </div>

            {/* Usecase */}
            <div className="sm:col-span-2">
              <label className="text-sm text-slate-700">
                {t.usecase} <span className="text-rose-500">*</span>
              </label>
              <select
                value={form.usecase}
                onChange={(e) =>
                  setForm((p) => ({ ...p, usecase: e.target.value }))
                }
                className={fieldClass("usecase")}
              >
                <option value="" disabled>
                  {lang === "en" ? "Select..." : "اختر..."}
                </option>
                {t.usecaseOptions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
              {errors.usecase && (
                <p className="mt-1 text-[11px] text-rose-600">
                  {errors.usecase}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label className="text-sm text-slate-700">
                {t.message} <span className="text-rose-500">*</span>
              </label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm((p) => ({ ...p, message: e.target.value }))
                }
                className={fieldClass("message")}
                placeholder={
                  lang === "en"
                    ? "Tell us what you need (quantities, timeline, location, integrations)…"
                    : "اكتب احتياجك (الكمية، الجدول الزمني، الموقع، التكاملات)…"
                }
              />
              {errors.message && (
                <p className="mt-1 text-[11px] text-rose-600">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-400/30 transition hover:brightness-110"
              >
                {t.submit}
              </button>
              <p className="mt-2 text-[11px] text-slate-500">{t.note}</p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
