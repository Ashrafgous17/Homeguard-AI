// app/page.tsx
"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";

// ✅ Import images (no image paths inside content objects)
import heroBg from "@/public/hero-bg.jpg";
import parentalImg from "@/public/parental-control.jpg";
import facialImg from "@/public/facial-recognition.jpg";
import guardianImg from "@/public/internet-guardian.jpg";

type Lang = "en" | "ar";

const content = {
  en: {
    navLogo: "HomeGuard AI",
    navLinks: [
      { href: "#hero", label: "Home" },
      { href: "#solutions", label: "Solutions" },
      { href: "#products", label: "Products" },
      { href: "#contact", label: "Contact" },
    ],
    heroBadge: "AI-POWERED SMART HOME SECURITY",
    heroTitle: "Transform Your Home Into a Smarter, Safer, Future-Ready Space",
    heroSubtitle:
      "A unified ecosystem for parental control, AI facial recognition, and intelligent network security — built for modern connected families.",
    heroPrimaryCta: "Get Started",
    heroSecondaryCta: "Explore Solutions",
    heroSubpoints: [
      "Total visibility over every device",
      "AI-secured home network",
      "Built for families and smart homes",
    ],

    // Solutions
    solutionsIntroTitle: "Our Solutions",
    solutionsIntroSubtitle:
      "Each solution is designed to protect, control, and simplify your digital life.",

    solutions: [
      {
        key: "parental",
        label: "Smart Parental Control",
        tagline: "Your home. Your rules. Their safe digital world.",
        bullets: [
          "Monitor every device connected to your home network.",
          "Set time limits for gaming, streaming, and social media.",
          "Automatically filter unsafe and inappropriate content.",
          "Pause the internet for any device in a single tap.",
          "Get real-time alerts when kids access risky websites.",
        ],
      },
      {
        key: "facial",
        label: "AI Facial Recognition",
        tagline:
          "Security that knows your family — and protects them instantly.",
        bullets: [
          "Recognizes familiar faces for keyless, seamless entry.",
          "Detects strangers and sends instant alerts to your phone.",
          "Works day and night with high-precision facial AI.",
          "Integrates with smart locks and security cameras.",
          "Stores encrypted facial data with privacy by design.",
        ],
      },
      {
        key: "guardian",
        label: "Smart Home Internet Guardian",
        tagline: "Your home’s always-on digital bodyguard.",
        bullets: [
          "Monitors all home network traffic in real time.",
          "Detects hacking attempts, malware, and rogue devices.",
          "Warns parents about unsafe apps and suspicious links.",
          "Automatically blocks phishing and scam websites.",
          "Gives your home a live security health score.",
        ],
      },
    ],

    productsTitle: "Our Products",
    productsSubtitle:
      "Premium hardware that unlocks the full power of our AI ecosystem.",
    products: [
      {
        key: "famlock",
        name: "eufy FamiLock S3 Max",
        badge: "AI SMART DOOR LOCK",
        description:
          "Unlock your door in 0.3 seconds with AI facial recognition. No keys, no codes — just intelligent, secure access for your family.",
        bullets: [
          "6-in-1 access: Face ID, fingerprint, app, passcode, NFC, mechanical key.",
          "Ultra-fast unlocking with military-grade encryption.",
          "Perfect for families, guests, and service providers.",
          "Weatherproof and ready for everyday use.",
        ],
        cta: "Learn More",
      },
      {
        key: "nspanel",
        name: "Sonoff NSPanel Smart Switch",
        badge: "SMART HOME CONTROL PANEL",
        description:
          "Turn any room into a smart command center with a beautiful touchscreen that controls your entire home.",
        bullets: [
          "Control lights, AC, curtains, and more from one panel.",
          "Create one-tap scenes like Movie Night and Away Mode.",
          "Monitor device status and room temperature in real time.",
          "Works with Alexa, Google Home, and popular platforms.",
        ],
        cta: "View Details",
      },
    ],

    whyChooseTitle: "Why Choose Us?",
    whyChooseSubtitle: "A Unified Ecosystem That Actually Works Together",
    whyChooseIntro:
      "Other brands sell isolated devices. We give you a fully synchronized home intelligence ecosystem:",
    whyChooseBullets: [
      "AI-enhanced parental control",
      "Real-time network threat detection",
      "Intelligent access management",
      "Unified device control",
      "Privacy-first architecture",
      "Mobile app management for the entire home",
    ],
    whyChooseOutro: "Your home deserves this level of simplicity and power.",

    builtAiTitle: "Built With Next-Gen AI",
    builtAiSubtitle:
      "Our technology is designed to learn your routines, adapt to your lifestyle, and protect your home automatically without needing you to be “techy.”",
    builtAiBullets: [
      "Autonomous threat identification",
      "Facial recognition that improves over time",
      "Smart automation suggestions",
      "Predictive monitoring for kids’ devices",
    ],
    builtAiOutro: "With us, your home becomes not just smart — but intuitive.",

    ctaTitle: "Ready to Build the Smartest Home in Your Neighborhood?",
    ctaSubtitle:
      "Bring intelligence, security, and simplicity together in one powerful smart home experience.",

    contactName: "Full Name",
    contactEmail: "Email Address",
    contactMessage: "How can we help?",
    contactSubmit: "Send Message",

    footerText:
      "© " + new Date().getFullYear() + " HomeGuard AI. All rights reserved.",
  },

  ar: {
    navLogo: "هوم جارد AI",
    navLinks: [
      { href: "#hero", label: "الرئيسية" },
      { href: "#solutions", label: "الحلول" },
      { href: "#products", label: "المنتجات" },
      { href: "#contact", label: "تواصل معنا" },
    ],
    heroBadge: "حماية منزلية ذكية مدعومة بالذكاء الاصطناعي",
    heroTitle: "حوِّل منزلك إلى مساحة أذكى وأكثر أمانًا وجاهزة للمستقبل",
    heroSubtitle:
      "نظام موحّد للتحكم الأبوي، والتعرّف على الوجوه، وحماية شبكة الإنترنت المنزلية — مصمَّم للعائلات المتصلة اليوم.",
    heroPrimaryCta: "ابدأ الآن",
    heroSecondaryCta: "اكتشف الحلول",
    heroSubpoints: [
      "رؤية كاملة لجميع الأجهزة المتصلة",
      "شبكة منزلية مؤمَّنة بالذكاء الاصطناعي",
      "مصمم للعائلات والمنازل الذكية الحديثة",
    ],

    solutionsIntroTitle: "حلولنا",
    solutionsIntroSubtitle:
      "كل حل مصمَّم لحماية حياتك الرقمية والتحكم بها وتبسيطها.",

    solutions: [
      {
        key: "parental",
        label: "التحكم الأبوي الذكي",
        tagline: "منزلك. قواعدك. عالم رقمي آمن لأطفالك.",
        bullets: [
          "رؤية كل جهاز وكل اتصال داخل شبكتك المنزلية.",
          "تحديد أوقات استخدام الألعاب والفيديو ووسائل التواصل.",
          "حجب المحتوى غير المناسب تلقائيًا عبر الذكاء الاصطناعي.",
          "إيقاف الإنترنت عن أي جهاز بلمسة واحدة.",
          "تنبيهات فورية عند الوصول إلى مواقع غير آمنة.",
        ],
      },
      {
        key: "facial",
        label: "التعرّف على الوجوه بالذكاء الاصطناعي",
        tagline: "أمان يعرف عائلتك ويحميهم فورًا.",
        bullets: [
          "يتعرّف على الوجوه المألوفة لفتح الباب بدون مفتاح.",
          "يكتشف الغرباء ويرسل إشعارات أمان فورية.",
          "يعمل ليلًا ونهارًا بدقة عالية في التعرّف على الوجوه.",
          "يتكامل مع الأقفال والكاميرات الذكية.",
          "تخزين مشفّر لبيانات الوجوه مع احترام الخصوصية.",
        ],
      },
      {
        key: "guardian",
        label: "حارس الإنترنت الذكي للمنزل",
        tagline: "حارس رقمي يعمل على مدار الساعة.",
        bullets: [
          "يراقب حركة البيانات في الشبكة المنزلية في الوقت الحقيقي.",
          "يكتشف محاولات الاختراق والبرمجيات الخبيثة والأجهزة المريبة.",
          "يحذّر الوالدين من التطبيقات والروابط غير الآمنة.",
          "يحجب تلقائيًا مواقع الاحتيال والتصيد.",
          "يوفّر مؤشرًا مباشرًا لمستوى أمان شبكتك المنزلية.",
        ],
      },
    ],

    productsTitle: "منتجاتنا",
    productsSubtitle:
      "أجهزة مميزة تفتح الإمكانات الكاملة لنظامنا الذكي المدعوم بالذكاء الاصطناعي.",
    products: [
      {
        key: "famlock",
        name: "eufy FamiLock S3 Max",
        badge: "قفل باب ذكي بالذكاء الاصطناعي",
        description:
          "افتح باب منزلك خلال 0.3 ثانية عبر التعرّف على الوجه. لا حاجة للمفاتيح أو الأكواد — دخول ذكي وآمن لعائلتك.",
        bullets: [
          "ستة طرق للدخول: الوجه، البصمة، التطبيق، الرمز السري، NFC، المفتاح التقليدي.",
          "فتح فائق السرعة مع تشفير بدرجة عسكرية.",
          "مثالي للعائلات والضيوف ومقدّمي الخدمات.",
          "مقاوم للعوامل الجوية ومناسب للاستخدام اليومي.",
        ],
        cta: "المزيد من التفاصيل",
      },
      {
        key: "nspanel",
        name: "Sonoff NSPanel Smart Switch",
        badge: "لوحة تحكم ذكية بالمنزل",
        description:
          "حوِّل أي غرفة إلى مركز قيادة ذكي عبر شاشة لمس أنيقة تُدار منها كل أجهزتك.",
        bullets: [
          "تحكم في الإضاءة والتكييف والستائر والمراوح من مكان واحد.",
          "إنشاء مشاهد ذكية مثل وضع الفيلم أو وضع السفر.",
          "مراقبة حالة الأجهزة ودرجة الحرارة في الوقت الفعلي.",
          "يدعم Alexa و Google Home وعدة أنظمة منزلية ذكية.",
        ],
        cta: "عرض التفاصيل",
      },
    ],

    whyChooseTitle: "لماذا تختارنا؟",
    whyChooseSubtitle: "نظام موحَّد يعمل فعليًا معًا",
    whyChooseIntro:
      "العلامات الأخرى تبيع أجهزة منفصلة. نحن نقدّم نظامًا متكاملًا للمنزل الذكي:",
    whyChooseBullets: [
      "تحكم أبوي معزَّز بالذكاء الاصطناعي",
      "كشف تهديدات الشبكة في الوقت الفعلي",
      "إدارة وصول ذكية",
      "تحكم موحَّد في جميع الأجهزة",
      "تصميم يضع الخصوصية أولًا",
      "تطبيق واحد لإدارة المنزل بالكامل",
    ],
    whyChooseOutro: "منزلك يستحق هذا المستوى من البساطة والقوة.",

    builtAiTitle: "مبني بأحدث تقنيات الذكاء الاصطناعي",
    builtAiSubtitle:
      "تقنيتنا تتعلّم روتينك، وتتكيّف مع أسلوب حياتك، وتحمي منزلك تلقائيًا دون الحاجة لأن تكون خبيرًا تقنيًا.",
    builtAiBullets: [
      "تعرّف تلقائي على التهديدات",
      "تعرّف على الوجوه يتحسّن مع الوقت",
      "اقتراحات للأتمتة الذكية",
      "مراقبة استباقية لأجهزة الأطفال",
    ],
    builtAiOutro: "معنا، يصبح منزلك ليس فقط ذكيًا — بل حدسيًا أيضًا.",

    ctaTitle: "جاهز لبناء أذكى منزل في الحي؟",
    ctaSubtitle:
      "اجمع بين الذكاء والأمان والبساطة في تجربة منزل ذكي واحدة قوية.",

    contactName: "الاسم الكامل",
    contactEmail: "البريد الإلكتروني",
    contactMessage: "كيف يمكننا مساعدتك؟",
    contactSubmit: "إرسال الرسالة",

    footerText:
      "© " + new Date().getFullYear() + " هوم جارد AI. جميع الحقوق محفوظة.",
  },
} as const;

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("en");
  const [mobileOpen, setMobileOpen] = useState(false);

  // ✅ Contact form state + validation
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [submitted, setSubmitted] = useState(false);

  const t = content[lang];
  const isAr = lang === "ar";

  // ✅ Image map (no paths in content objects)
  const solutionImages = useMemo(
    () => ({
      parental: parentalImg,
      facial: facialImg,
      guardian: guardianImg,
    }),
    []
  );

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(false);

    const nextErrors: typeof errors = {};
    if (!contact.name.trim())
      nextErrors.name = lang === "en" ? "Name is required." : "الاسم مطلوب.";
    if (!contact.email.trim())
      nextErrors.email =
        lang === "en" ? "Email is required." : "البريد الإلكتروني مطلوب.";
    else if (!validateEmail(contact.email.trim()))
      nextErrors.email =
        lang === "en" ? "Enter a valid email." : "أدخل بريدًا صحيحًا.";
    if (!contact.message.trim())
      nextErrors.message =
        lang === "en" ? "Message is required." : "الرسالة مطلوبة.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // ✅ Demo submit (replace with API later)
    setSubmitted(true);
    setContact({ name: "", email: "", message: "" });
  };

  // ✅ Context-fit icons for Why Choose Us
  const whyChooseIcon = (text: string) => {
    const s = text.toLowerCase();
    if (s.includes("parental") || s.includes("أبوي")) return "👨‍👩‍👧‍👦";
    if (
      s.includes("threat") ||
      s.includes("تهديد") ||
      s.includes("network") ||
      s.includes("شبكة")
    )
      return "🛡️";
    if (s.includes("access") || s.includes("وصول")) return "🔐";
    if (
      s.includes("unified") ||
      s.includes("موح") ||
      s.includes("device") ||
      s.includes("الأجهزة")
    )
      return "🧩";
    if (s.includes("privacy") || s.includes("خصوص")) return "🔒";
    if (s.includes("mobile") || s.includes("تطبيق") || s.includes("app"))
      return "📱";
    return "✨";
  };

  const iconAnimClass = (i: number) =>
    i % 4 === 0
      ? "animate-[float_3s_ease-in-out_infinite]"
      : i % 4 === 1
      ? "animate-[pulseSoft_2.2s_ease-in-out_infinite]"
      : i % 4 === 2
      ? "animate-[wiggle_1.4s_ease-in-out_infinite]"
      : "animate-[pop_2.6s_ease-in-out_infinite]";

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      className="min-h-screen bg-slate-50 text-slate-900"
    >
      {/* Global background gradients */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-50 via-slate-50 to-blue-50" />
        <div className="absolute -top-40 -left-10 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute top-40 right-0 h-72 w-72 rounded-full bg-blue-400/15 blur-3xl" />
        <div className="absolute bottom-[-120px] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-300/15 blur-3xl" />
      </div>

      {/* NAVBAR */}
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-md">
              <span className="text-lg font-semibold">HG</span>
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              {t.navLogo}
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-6 md:flex">
            <div className="flex gap-6 text-sm font-medium text-white/80">
              {t.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Language Toggle */}
            <div className="ml-4 flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-1 py-1 text-xs">
              <button
                onClick={() => setLang("en")}
                className={`rounded-full px-2 py-1 transition ${
                  !isAr
                    ? "bg-cyan-500 text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("ar")}
                className={`rounded-full px-2 py-1 transition ${
                  isAr
                    ? "bg-cyan-500 text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                ع
              </button>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Language Toggle */}
            <div className="flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-1 py-1 text-xs">
              <button
                onClick={() => setLang("en")}
                className={`rounded-full px-2 py-1 transition ${
                  !isAr
                    ? "bg-cyan-500 text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("ar")}
                className={`rounded-full px-2 py-1 transition ${
                  isAr
                    ? "bg-cyan-500 text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                ع
              </button>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen((p) => !p)}
              aria-label="Toggle navigation"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20"
            >
              {mobileOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <div className="space-y-1">
                  <span className="block h-[2px] w-4 rounded-full bg-white" />
                  <span className="block h-[2px] w-4 rounded-full bg-white" />
                  <span className="block h-[2px] w-4 rounded-full bg-white" />
                </div>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden border-t border-white/10 bg-black/95 transition-all duration-200 ${
            mobileOpen
              ? "max-h-64 opacity-100 pointer-events-auto"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-sm font-medium text-white/80">
            {t.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-2 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* HERO (full width + imported image) */}
      {/* HERO (full width + imported image) */}
      <section id="hero" className="relative isolate w-full overflow-hidden">
        {/* Hero Image */}
        <Image
          src={heroBg}
          alt="Hero background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* ✅ Black overlay (true dark) */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
              {t.heroBadge}
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t.heroTitle}
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
              {t.heroSubtitle}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-7 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:brightness-110"
              >
                {t.heroPrimaryCta}
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-2.5 text-sm font-semibold !text-cyan-400 transition hover:bg-white/20 hover:!text-cyan-300 hover:border-white/60"
              >
                {t.heroSecondaryCta}
              </a>
            </div>

            {/* Subpoints */}
            <ul className="mt-6 flex flex-wrap justify-center gap-3 text-xs text-white/80 sm:text-sm">
              {t.heroSubpoints.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1"
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* SOLUTIONS (imported images) */}
        <section
          id="solutions"
          className="flex min-h-[90vh] flex-col items-center justify-center gap-10 py-16 text-center"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {t.solutionsIntroTitle}
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              {t.solutionsIntroSubtitle}
            </p>
          </div>

          <div className="w-full space-y-20">
            {t.solutions.map((solution, index) => {
              const isEven = index % 2 === 0;
              const layout =
                isEven && !isAr
                  ? "lg:flex-row"
                  : isEven && isAr
                  ? "lg:flex-row-reverse"
                  : !isEven && !isAr
                  ? "lg:flex-row-reverse"
                  : "lg:flex-row";

              const img =
                solutionImages[solution.key as keyof typeof solutionImages];

              return (
                <div
                  key={solution.key}
                  className={`flex flex-col items-center gap-14 ${layout}`}
                >
                  {/* Image block */}
                  <div className="w-full lg:w-1/2 flex justify-center">
                    {/* empty image slot (no Image, no icon, no label inside) */}
                    <div className="relative h-72 w-full max-w-md overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl" />
                  </div>

                  {/* Text block */}
                  <div
                    className={`w-full lg:w-1/2 mx-auto max-w-md ${
                      isAr ? "text-right" : "text-left"
                    }`}
                  >
                    <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                      {solution.label}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 sm:text-base">
                      {solution.tagline}
                    </p>

                    <ul className="mt-4 space-y-2 text-xs text-slate-600 sm:text-sm">
                      {solution.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-500" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-7 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-400/40 transition hover:brightness-110"
            >
              {lang === "en"
                ? "Talk to us about these solutions"
                : "تواصل معنا بخصوص هذه الحلول"}
            </a>
          </div>
        </section>

        {/* PRODUCTS */}
        <section
          id="products"
          className="flex min-h-[90vh] flex-col items-center justify-center gap-10 py-16 text-center"
        >
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {t.productsTitle}
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              {t.productsSubtitle}
            </p>
          </div>

          <div className="grid w-full gap-8 md:grid-cols-2">
            {t.products.map((product) => (
              <article
                key={product.key}
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-md shadow-slate-200/70 transition hover:-translate-y-1 hover:border-cyan-400/60"
              >
                <div className="inline-flex items-center rounded-full bg-cyan-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-700">
                  {product.badge}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-2xl">
                    {product.key === "famlock" ? "🔒" : "🎛️"}
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                    {product.name}
                  </h3>
                </div>
                <p className="mt-3 text-xs text-slate-600 sm:text-sm">
                  {product.description}
                </p>
                <ul className="mt-3 space-y-1.5 text-[11px] text-slate-600 sm:text-xs">
                  {product.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-cyan-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-4 inline-flex w-max items-center rounded-full border border-cyan-500/70 bg-cyan-50 px-4 py-1.5 text-xs font-semibold text-cyan-700 transition hover:bg-cyan-500 hover:text-white">
                  {product.cta}
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE US + BUILT WITH AI + CONTACT */}
        <section className="flex min-h-[90vh] flex-col items-center justify-center gap-12 py-16 text-center">
          <div className="max-w-4xl space-y-6">
            <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              {t.whyChooseTitle}
            </h3>
            <p className="text-sm text-slate-600 sm:text-base">
              {t.whyChooseSubtitle}
            </p>
            <p className="mt-2 text-xs text-slate-600 sm:text-sm">
              {t.whyChooseIntro}
            </p>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {t.whyChooseBullets.map((b, i) => (
                <div
                  key={b}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left shadow-sm"
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-md ${iconAnimClass(
                      i
                    )}`}
                    aria-hidden="true"
                  >
                    <span className="text-base leading-none">
                      {whyChooseIcon(b)}
                    </span>
                  </div>
                  <span className="text-sm text-slate-700">{b}</span>
                </div>
              ))}
            </div>

            <p className="mt-3 text-xs text-slate-600 sm:text-sm">
              {t.whyChooseOutro}
            </p>
          </div>

          <div
            id="contact"
            className="mt-6 grid w-full items-stretch gap-8 rounded-3xl border border-cyan-400/60 bg-gradient-to-br from-cyan-50 via-white to-blue-50 px-6 py-8 shadow-md sm:px-10 md:grid-cols-2"
          >
            {/* LEFT: Built with AI (aligned to match form) */}
            <div
              className={`flex flex-col justify-between rounded-3xl border border-slate-200 bg-white/70 p-6 text-left shadow-sm ${
                isAr ? "text-right" : "text-left"
              }`}
            >
              <div>
                <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700">
                  {lang === "en"
                    ? "Next-Gen AI Platform"
                    : "منصة ذكاء اصطناعي متقدمة"}
                </div>

                <h3 className="mt-4 text-xl font-semibold text-slate-900 sm:text-2xl">
                  {lang === "en"
                    ? "Built With Next-Gen AI That Works Quietly in the Background"
                    : "مبني بأحدث تقنيات الذكاء الاصطناعي تعمل بهدوء في الخلفية"}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {lang === "en"
                    ? "Instead of complex settings, our system learns patterns, detects risks early, and helps you stay in control—whether you’re protecting kids’ devices, securing networks, or managing access."
                    : "بدلاً من الإعدادات المعقدة، يتعلّم نظامنا الأنماط، يكتشف المخاطر مبكرًا، ويساعدك على التحكم—سواء لحماية أجهزة الأطفال أو تأمين الشبكات أو إدارة الوصول."}
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    {
                      enTitle: "Autonomous threat detection",
                      arTitle: "كشف تهديدات تلقائي",
                      enDesc:
                        "Finds suspicious traffic and risky behavior in real time.",
                      arDesc:
                        "يرصد حركة المرور المشبوهة والسلوكيات الخطرة لحظيًا.",
                    },
                    {
                      enTitle: "Smarter recognition over time",
                      arTitle: "تعرّف يتحسّن مع الوقت",
                      enDesc:
                        "AI improves accuracy as it learns your environment.",
                      arDesc: "يتحسن الذكاء الاصطناعي كلما تعلّم بيئتك.",
                    },
                    {
                      enTitle: "Helpful automation suggestions",
                      arTitle: "اقتراحات أتمتة مفيدة",
                      enDesc: "Recommends settings that match your routines.",
                      arDesc: "يقترح إعدادات تناسب روتينك.",
                    },
                    {
                      enTitle: "Predictive monitoring for families",
                      arTitle: "مراقبة استباقية للعائلات",
                      enDesc:
                        "Flags risky apps, links, and usage patterns early.",
                      arDesc:
                        "يُنبّه مبكرًا للتطبيقات والروابط وأنماط الاستخدام الخطرة.",
                    },
                  ].map((item) => (
                    <div key={item.enTitle} className="flex gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                        ✔
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {lang === "en" ? item.enTitle : item.arTitle}
                        </p>
                        <p className="mt-0.5 text-xs text-slate-600 sm:text-sm">
                          {lang === "en" ? item.enDesc : item.arDesc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                <p className="text-xs text-slate-700">
                  {lang === "en"
                    ? "Outcome: a smarter, safer environment—without needing you to be “techy.”"
                    : "النتيجة: بيئة أذكى وأكثر أمانًا—دون الحاجة لأن تكون خبيرًا تقنيًا."}
                </p>
              </div>
            </div>

            {/* RIGHT: Contact form (kept aligned + same validation you already have) */}
            <div
              className={`flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm ${
                isAr ? "text-right" : "text-left"
              }`}
            >
              <div>
                <h4 className="text-base font-semibold text-slate-900 sm:text-lg">
                  {lang === "en" ? "Talk to our team" : "تواصل مع فريقنا"}
                </h4>
                <p className="mt-2 text-xs text-slate-600 sm:text-sm">
                  {lang === "en"
                    ? "Share your needs and we’ll recommend the best solution or product setup."
                    : "شاركنا احتياجك وسنقترح أفضل حل أو إعداد للمنتجات."}
                </p>

                {/* trust checks */}
                <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left">
                  <div className="flex items-start gap-2 text-[11px] text-slate-700">
                    <span className="text-emerald-500">✔</span>
                    <span>
                      {lang === "en"
                        ? "Reply within 24 hours."
                        : "نرد خلال 24 ساعة."}
                    </span>
                  </div>
                  <div className="mt-1 flex items-start gap-2 text-[11px] text-slate-700">
                    <span className="text-emerald-500">✔</span>
                    <span>
                      {lang === "en"
                        ? "For homes and businesses."
                        : "للمنزل والشركات."}
                    </span>
                  </div>
                  <div className="mt-1 flex items-start gap-2 text-[11px] text-slate-700">
                    <span className="text-emerald-500">✔</span>
                    <span>
                      {lang === "en"
                        ? "Get a recommended setup plan."
                        : "تحصل على خطة إعداد مقترحة."}
                    </span>
                  </div>
                </div>
              </div>

              {/* FORM (keep your existing controlled inputs + validation) */}
              <form
                onSubmit={handleContactSubmit}
                className="mt-4 space-y-4 text-left"
              >
                {/* Name */}
                <div className="space-y-1 text-xs sm:text-sm">
                  <label className="block text-slate-700">
                    {t.contactName}
                  </label>
                  <input
                    type="text"
                    value={contact.name}
                    onChange={(e) =>
                      setContact((p) => ({ ...p, name: e.target.value }))
                    }
                    className={`w-full rounded-xl border bg-white px-3 py-2 text-xs text-slate-900 outline-none sm:text-sm ${
                      errors.name
                        ? "border-rose-400 focus:border-rose-500"
                        : "border-slate-200 focus:border-cyan-500"
                    }`}
                    placeholder={lang === "en" ? "Your name" : "اسمك"}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-rose-600">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1 text-xs sm:text-sm">
                  <label className="block text-slate-700">
                    {t.contactEmail}
                  </label>
                  <input
                    type="email"
                    value={contact.email}
                    onChange={(e) =>
                      setContact((p) => ({ ...p, email: e.target.value }))
                    }
                    className={`w-full rounded-xl border bg-white px-3 py-2 text-xs text-slate-900 outline-none sm:text-sm ${
                      errors.email
                        ? "border-rose-400 focus:border-rose-500"
                        : "border-slate-200 focus:border-cyan-500"
                    }`}
                    placeholder={
                      lang === "en" ? "you@company.com" : "name@example.com"
                    }
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-600">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1 text-xs sm:text-sm">
                  <label className="block text-slate-700">
                    {t.contactMessage}
                  </label>
                  <textarea
                    rows={4}
                    value={contact.message}
                    onChange={(e) =>
                      setContact((p) => ({ ...p, message: e.target.value }))
                    }
                    className={`w-full rounded-xl border bg-white px-3 py-2 text-xs text-slate-900 outline-none sm:text-sm ${
                      errors.message
                        ? "border-rose-400 focus:border-rose-500"
                        : "border-slate-200 focus:border-cyan-500"
                    }`}
                    placeholder={
                      lang === "en"
                        ? "Tell us what you need..."
                        : "اكتب رسالتك هنا..."
                    }
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-cyan-400/30 transition hover:brightness-110"
                >
                  {t.contactSubmit}
                </button>

                {submitted && (
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-left text-xs text-emerald-800">
                    {lang === "en"
                      ? "✅ Message sent! We’ll get back to you soon."
                      : "✅ تم الإرسال! سنعود إليك قريبًا."}
                  </div>
                )}

                <p className="text-[10px] text-slate-500">
                  {lang === "en"
                    ? "By submitting, you agree to be contacted. No spam."
                    : "بإرسال هذا النموذج، فإنك توافق على أن نتواصل معك. بدون رسائل مزعجة."}
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-5 text-xs text-slate-500">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6 lg:px-8">
          <p>{t.footerText}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-cyan-600">
              {lang === "en" ? "Privacy" : "الخصوصية"}
            </a>
            <a href="#" className="hover:text-cyan-600">
              {lang === "en" ? "Terms" : "الشروط"}
            </a>
          </div>
        </div>
      </footer>

      {/* Animations */}
      <style jsx global>{`
        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(-2deg);
          }
          50% {
            transform: rotate(2deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes pulseSoft {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }

        @keyframes pop {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
        }
      `}</style>
    </div>
  );
}
