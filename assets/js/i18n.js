// assets/js/i18n.js
(function () {
  const HTML = document.documentElement;
  const rtlLink = document.getElementById("rtl-css");
  const flagAR = document.getElementById("AR");
  const flagEN = document.getElementById("EN");
  const LS_KEY = "pref_lang";

  // قواميس احتياطية للعمل محليًا (بدون سيرفر)
  const FALLBACK = {
    ar: {
      brand: "دليل فعاليات الجامعة الافتراضية",
      "page.index.title": "الرئيسية - دليل فعاليات الجامعة الافتراضية",
      "nav.home": "الرئيسية",
      "nav.events": "الفعاليات",
      "nav.about": "حول",
      "nav.contact": "تواصل معنا",
      "theme.label": "الوضع الداكن",
      "carousel.prev": "السابق",
      "carousel.next": "التالي",
      "home.featured.title": "فعاليات بارزة هذا الأسبوع",
      "home.featured.slide1.title": "جلسات استشارية",
      "home.featured.slide1.desc":
        "ورشات تفاعلية تهدف لنعريف الطلاب بمتطلبات سوق العمل من قبل متخصصين.",
      "home.featured.slide2.title": "لقاء خريجي الجامعة",
      "home.featured.slide2.desc": "جلسات تفاعلية تهدف لتبادل الخبرات بين الخريجين و الطلاب الحاليين.",
      "home.featured.slide3.title": "ملتقى طلاب الجامعة الافتراضية",
      "home.featured.slide3.desc": "مبادرة تطوعية تهدف لتعريف الطلاب المستجدين بنظام الجامعة.",
      "home.featured.card1.title": "استعد لسوق العمل!",
      "home.featured.card1.desc":
        "ورش تفاعلية تطور مهاراتك و تجهزك لمستقبلك المهني.",
      "home.featured.card2.title":
        "وسع شبكتك الاجتماعية!",
      "home.featured.card2.desc":
        "لقاء مع خريجين لتبادل الخبرات و بناء العلاقات الاجتماعية.",
      "home.featured.card3.title":
        "تطوع معنا!",
      "home.featured.card3.desc":
        "ساهم بمساعدة الطلاب المقبلين على التسجيل بالجامعة الافتراضية.",
      "home.categories.title": "تصفح حسب التصنيف",
      "cat.career": "مهني",
      "cat.social": "اجتماعي",
      "cat.volunteer": "تطوعي",
      "home.latest.title": "أحدث الفعاليات",
      "home.latest.card1.title": "جلسات استشارية",
      "home.latest.card1.desc":
        "ورشات تفاعلية تهدف لنعريف الطلاب بمتطلبات سوق العمل من قبل متخصصين.",
      "home.latest.card2.title": "لقاء خريجي الجامعة",
      "home.latest.card2.desc":
        "جلسات تفاعلية تهدف لتبادل الخبرات بين الخريجين و الطلاب الحاليين",
      "home.latest.card3.title": "ملتقى طلاب الجامعة الافتراضية",
      "home.latest.card3.desc":
        "مبادرة تطوعية تهدف لتعريف الطلاب المستجدين بنظام الجامعة.",
      "home.team.title": "فريق العمل",
      "home.team.name": "الاسم",
      "home.team.id": "المعرف (ID)",
      "footer.copy": "دليل فعاليات الجامعة الافتراضية - جميع الحقوق محفوظة ©",
      "footer.email": "البريد الإلكتروني:",
    },
    en: {
      brand: "Virtual University Events Guide",
      "page.index.title": "Home - Virtual University Events Guide",
      "nav.home": "Home",
      "nav.events": "Events",
      "nav.about": "About",
      "nav.contact": "Contact Us",
      "theme.label": "Dark Mode",
      "carousel.prev": "Previous",
      "carousel.next": "Next",
      "home.featured.title": "Featured Events This Week",
      "home.featured.slide1.title": "Consultation Sessions",
      "home.featured.slide1.desc":
      "Interactive workshops aimed at introducing students to labor market requirements by specialists.",
      "home.featured.slide2.title": "University Alumni Meeting",
      "home.featured.slide2.desc": "Interactive sessions aimed at exchanging experiences between alumni and current students.",
      "home.featured.slide3.title": "Virtual University Students Forum",
      "home.featured.slide3.desc": "A volunteer initiative aimed at introducing new students to the university system.",
      "home.featured.card1.title": "Get Ready for the Job Market!",
      "home.featured.card1.desc":
      "Interactive workshops that develop your skills and prepare you for your professional future.",
      "home.featured.card2.title":
      "Expand Your Social Network!",
      "home.featured.card2.desc":
      "A meeting with graduates to exchange experiences and build social relationships.",
      "home.featured.card3.title":
      "Volunteer With Us!",
      "home.featured.card3.desc":
      "Contribute to helping students who are about to enroll in the virtual university.",
      "home.categories.title": "Browse by Category",
      "cat.career": "Professional",
      "cat.social": "Social",
      "cat.volunteer": "Volunteer",
      "home.latest.title": "Latest Events",
      "home.latest.card1.title": "Consultation Sessions",
      "home.latest.card1.desc":
      "Interactive workshops aimed at introducing students to labor market requirements by specialists.",
      "home.latest.card2.title": "University Alumni Meeting",
      "home.latest.card2.desc":
      "Interactive sessions aimed at exchanging experiences between alumni and current students",
      "home.latest.card3.title": "Virtual University Students Forum",
      "home.latest.card3.desc":
      "A volunteer initiative aimed at introducing new students to the university system.",
      "home.team.title": "Team",
      "home.team.name": "Name",
      "home.team.id": "ID",
      "footer.copy": "Virtual University Events Guide - All rights reserved ©",
      "footer.email": "Email:"

     },
  };

  function applyDir(lang) {
    const isAR = lang === "ar";
    HTML.setAttribute("lang", lang);
    HTML.setAttribute("dir", isAR ? "rtl" : "ltr");
    if (rtlLink) rtlLink.disabled = !isAR;
    document.title = window.__DICT__?.["page.index.title"] || document.title;
  }

  function translateDOM(dict) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const pairs = el.getAttribute("data-i18n-attr").split("|");
      pairs.forEach((p) => {
        const [attr, key] = p.split(":");
        if (attr && key && dict[key] !== undefined)
          el.setAttribute(attr, dict[key]);
      });
    });
  }

  async function loadDict(lang) {
    if (location.protocol.startsWith("http")) {
      try {
        const res = await fetch(`assets/lang/${lang}.json`, {
          cache: "no-store",
        });
        if (res.ok) return await res.json();
      } catch (_) {}
    }
    return FALLBACK[lang];
  }

  async function setLanguage(lang) {
    const dict = await loadDict(lang);
    window.__DICT__ = dict;
    applyDir(lang);
    translateDOM(dict);
    localStorage.setItem(LS_KEY, lang);
  }

  // init
  const saved = localStorage.getItem(LS_KEY);
  const initial = saved || HTML.getAttribute("lang") || "ar";
  setLanguage(initial);

  // الأعلام
  if (flagAR) flagAR.addEventListener("click", () => setLanguage("ar"));
  if (flagEN) flagEN.addEventListener("click", () => setLanguage("en"));

  // متاح عالميًا عند الحاجة
  window.setLanguage = setLanguage;
})();
