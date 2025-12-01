"use client";

import { useState } from "react";

type Lang = "en" | "ar";

const content = {
  en: {
    navLogo: "HomeGuard AI",
    navLinks: [
      { href: "#hero", label: "Home" },
      { href: "#solutions", label: "Solutions" },
      { href: "#products", label: "Products" },
      { href: "#why-exist", label: "Why We Exist" },
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
    solutionsIntroTitle: "Our Smart Home Solutions",
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

    productsTitle: "Featured Smart Home Devices",
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

    whyExistTitle: "Why We Exist",
    whyExistSubtitle:
      "Homes are more connected than ever — but also more exposed. We exist to give families simple, powerful tools that make smart homes truly feel safe, easy, and stress-free.",
    whyExistPoints: [
      "Kids are growing up online without enough protection.",
      "Smart devices are expanding faster than traditional security.",
      "Most solutions are fragmented, complex, and hard to manage.",
      "We unify security, control, and intelligence into one ecosystem.",
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
      "Our technology learns your routines, adapts to your lifestyle, and protects your home automatically — no tech expertise required.",
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
      { href: "#why-exist", label: "لماذا وُجدنا" },
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

    solutionsIntroTitle: "حلول المنزل الذكي",
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

    productsTitle: "أهم الأجهزة الذكية لمنزلك",
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

    whyExistTitle: "لماذا وُجدنا",
    whyExistSubtitle:
      "المنازل اليوم أكثر اتصالًا من أي وقت مضى — لكنها أيضًا أكثر عرضة للمخاطر. نحن هنا لنمنح العائلات أدوات بسيطة وقوية تجعل المنزل الذكي آمنًا وسهلًا وخاليًا من التوتر.",
    whyExistPoints: [
      "الأطفال يقضون وقتًا طويلًا على الإنترنت بدون حماية كافية.",
      "الأجهزة الذكية تتزايد أسرع من حلول الأمان التقليدية.",
      "معظم الحلول مجزأة ومعقدة وصعبة الإدارة.",
      "نحن نوحّد الأمان والتحكم والذكاء في نظام واحد متكامل.",
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
};

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("en");
  const [mobileOpen, setMobileOpen] = useState(false);

  const t = content[lang];
  const isAr = lang === "ar";

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      className="min-h-screen bg-slate-50 text-slate-900"
    >
      {/* HERO background gradients */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-50 via-slate-50 to-blue-50" />
        <div className="absolute -top-40 -left-10 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute top-40 right-0 h-72 w-72 rounded-full bg-blue-400/15 blur-3xl" />
        <div className="absolute bottom-[-120px] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-300/15 blur-3xl" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-md shadow-cyan-400/40">
              <span className="text-lg font-semibold tracking-tight">HG</span>
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
              {t.navLogo}
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 md:flex">
            <div className="flex gap-5 text-sm font-medium text-slate-700">
              {t.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative transition hover:text-slate-950"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Language toggle */}
            <div className="ml-4 flex items-center gap-1 rounded-full border border-slate-200 bg-white px-1 py-1 text-xs">
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

          {/* Mobile nav toggle */}
          <div className="flex items-center gap-2 md:hidden">
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

            <button
              onClick={() => setMobileOpen((p) => !p)}
              aria-label="Toggle navigation"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:border-cyan-400"
            >
              {mobileOpen ? (
                // X icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-slate-800"
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
                // Hamburger icon
                <div className="space-y-1">
                  <span className="block h-[2px] w-4 rounded-full bg-slate-800" />
                  <span className="block h-[2px] w-4 rounded-full bg-slate-800" />
                  <span className="block h-[2px] w-4 rounded-full bg-slate-800" />
                </div>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile nav menu */}
        <div
          className={`md:hidden origin-top overflow-hidden border-t border-slate-200 bg-white/95 transition-all duration-200 ${
            mobileOpen
              ? "max-h-60 opacity-100 pointer-events-auto"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 text-sm font-medium text-slate-700">
            {t.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-2 py-2 transition hover:bg-cyan-50 hover:text-cyan-700"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* HERO (centered, 90vh) */}
        <section
          id="hero"
          className="flex min-h-[90vh] flex-col items-center justify-center py-16 text-center"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-cyan-400/50 bg-white/70 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-700 shadow-sm">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-cyan-500" />
              {t.heroBadge}
            </div>

            <h1 className="mt-6 text-balance text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {t.heroTitle}
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              {t.heroSubtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-7 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-400/40 transition hover:brightness-110"
              >
                {t.heroPrimaryCta}
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-cyan-400 hover:text-cyan-800"
              >
                {t.heroSecondaryCta}
              </a>
            </div>

            <ul className="mt-6 flex flex-wrap justify-center gap-3 text-xs text-slate-600 sm:text-sm">
              {t.heroSubpoints.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 shadow-sm"
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SOLUTIONS (90vh, alternating layout, headings = solution names) */}
        <section
          id="solutions"
          className="flex min-h-[90vh] flex-col justify-center gap-10 py-16"
        >
          {/* Heading block – left for EN, right for AR */}
          <div
            className={`max-w-2xl mx-auto ${isAr ? "text-right" : "text-left"}`}
          >
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {t.solutionsIntroTitle}
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              {t.solutionsIntroSubtitle}
            </p>
          </div>

          {/* Solutions list with alternating layout */}
          <div className="space-y-12 w-full">
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

              return (
                <div
                  key={solution.key}
                  className={`flex flex-col items-center gap-10 ${layout}`}
                >
                  {/* Illustration block */}
                  <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="relative h-64 w-full max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-100 via-white to-blue-100 shadow-xl">
                      <div className="absolute inset-0 opacity-60">
                        <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-cyan-300/40 blur-3xl" />
                        <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-blue-400/30 blur-3xl" />
                      </div>
                      <div className="relative flex h-full flex-col items-center justify-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 text-3xl shadow-lg">
                          {solution.key === "parental" && "👨‍👩‍👧‍👦"}
                          {solution.key === "facial" && "🧠"}
                          {solution.key === "guardian" && "🛡️"}
                        </div>
                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-600">
                          {solution.label}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Text block – left/right align by language */}
                  <div
                    className={`w-full lg:w-1/2 mx-auto max-w-md ${
                      isAr ? "text-right" : "text-left"
                    }`}
                  >
                    {/* Main solution title */}
                    <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                      {solution.label}
                    </h3>

                    {/* Subheading / tagline */}
                    <p className="mt-2 text-sm text-slate-600 sm:text-base">
                      {solution.tagline}
                    </p>

                    {/* Bullets */}
                    <ul className="mt-4 space-y-2 text-xs text-slate-600 sm:text-sm">
                      {solution.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          {/* dot goes to the correct side automatically with flex + dir */}
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

          {/* Solutions CTA at bottom of section */}
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

        {/* PRODUCTS (90vh, centered) */}
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

        {/* WHY WE EXIST (big), WHY CHOOSE US (animated icons), BUILT WITH AI + CONTACT (90vh) */}
        <section
          id="why-exist"
          className="flex min-h-[90vh] flex-col items-center justify-center gap-12 py-16 text-center"
        >
          {/* Why we exist - big */}
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {t.whyExistTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              {t.whyExistSubtitle}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600 sm:text-base text-left mx-auto max-w-xl">
              {t.whyExistPoints.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="mt-1 text-cyan-500">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why choose us - animated icons */}
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
                    className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-white text-sm shadow-md ${
                      i % 3 === 0
                        ? "animate-bounce"
                        : i % 3 === 1
                        ? "animate-pulse"
                        : "animate-[wiggle_1.2s_ease-in-out_infinite]"
                    }`}
                  >
                    {i % 3 === 0 ? "⚡" : i % 3 === 1 ? "🔒" : "📡"}
                  </div>
                  <span className="text-sm text-slate-700">{b}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-600 sm:text-sm">
              {t.whyChooseOutro}
            </p>
          </div>

          {/* Built with AI + contact form (still in this big section) */}
          <div
            id="contact"
            className="mt-6 grid w-full gap-8 rounded-3xl border border-cyan-400/60 bg-gradient-to-br from-cyan-50 via-white to-blue-50 px-6 py-8 text-center shadow-md sm:px-10 md:grid-cols-2"
          >
            {/* Built with AI */}
            <div className="flex flex-col items-center justify-center gap-4">
              <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                {t.builtAiTitle}
              </h3>
              <p className="text-sm text-slate-600 sm:text-base">
                {t.builtAiSubtitle}
              </p>
              <ul className="mt-2 space-y-2 text-xs text-slate-600 sm:text-sm text-left max-w-xs mx-auto">
                {t.builtAiBullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-500">✔</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-xs text-slate-600 sm:text-sm">
                {t.builtAiOutro}
              </p>
            </div>

            {/* Contact form */}
            <div className="flex flex-col items-center justify-center">
              <h4 className="text-base font-semibold text-slate-900 sm:text-lg">
                {t.ctaTitle}
              </h4>
              <p className="mt-2 text-xs text-slate-600 sm:text-sm">
                {t.ctaSubtitle}
              </p>

              <form className="mt-4 w-full max-w-sm space-y-4 text-left">
                <div className="space-y-1 text-xs sm:text-sm">
                  <label className="block text-slate-700">
                    {t.contactName}
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 outline-none focus:border-cyan-500 sm:text-sm"
                  />
                </div>
                <div className="space-y-1 text-xs sm:text-sm">
                  <label className="block text-slate-700">
                    {t.contactEmail}
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 outline-none focus:border-cyan-500 sm:text-sm"
                  />
                </div>
                <div className="space-y-1 text-xs sm:text-sm">
                  <label className="block text-slate-700">
                    {t.contactMessage}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 outline-none focus:border-cyan-500 sm:text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-cyan-400/40 transition hover:brightness-110"
                >
                  {t.contactSubmit}
                </button>
                <p className="text-[10px] text-slate-500">
                  {lang === "en"
                    ? "By submitting, you agree to be contacted about HomeGuard AI solutions. No spam, ever."
                    : "بإرسال هذا النموذج، فإنك توافق على أن نتواصل معك بخصوص حلول هوم جارد AI — بدون رسائل مزعجة."}
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

      {/* Extra keyframes for wiggle animation used above */}
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
      `}</style>
    </div>
  );
}
