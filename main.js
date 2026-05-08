// assets/js/main.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("main.js ready ✅");

  /* =========================================================
     1) زر العودة للأعلى (عام لكل الصفحات)
     ========================================================= */
  const btn = document.createElement("button");
  btn.id = "backToTop";
  btn.className = "back-to-top";
  btn.type = "button";
  btn.setAttribute("aria-label", "Back to top");
  btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
  document.body.appendChild(btn);

  const showAfter = 150; // px
  const onScroll = () => {
    if (window.scrollY > showAfter) btn.classList.add("show");
    else btn.classList.remove("show");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  btn.addEventListener("click", () => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      window.scrollTo(0, 0);
    }
  });

  /* =========================================================
     2) هيدر ثابت + تعويض المسافة للمحتوى
     - نقرأ ارتفاع <header> الحقيقي ونحقنه في :root كـ --nav-h
     - نضيف/نزيل ظل عند التمرير
     ========================================================= */
  const header = document.querySelector("header");

  function updateNavOffset() {
    if (!header) return;
    const h = header.offsetHeight || 0;
    document.documentElement.style.setProperty("--nav-h", `${h}px`);
  }

  const stickCheck = () => {
    if (!header) return;
    if (window.scrollY > 2) header.classList.add("is-stuck");
    else header.classList.remove("is-stuck");
  };

  // راقب تغيّر حجم الهيدر (قد يتغيّر مع تبديل اللغة/الاتجاه)
  if (window.ResizeObserver && header) {
    const ro = new ResizeObserver(updateNavOffset);
    ro.observe(header);
  } else {
    window.addEventListener("resize", updateNavOffset);
  }

  // تحديثات أولية ومتأخرة قليلة لضمان الدقة بعد التحميل/الترجمة
  updateNavOffset();
  window.addEventListener("scroll", stickCheck, { passive: true });
  stickCheck();
  setTimeout(updateNavOffset, 100);
  setTimeout(updateNavOffset, 300);
  setTimeout(updateNavOffset, 700);
});
