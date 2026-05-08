// assets/js/theme.js
(function () {
  const HTML = document.documentElement;
  const BTN = document.getElementById("themeToggle");
  const ICON = document.getElementById("themeIcon");
  const KEY = "pref_theme";

  function setIcon(mode) {
    if (!ICON) return;
    // قمر للوضع الفاتح (يعني اضغط ليفعّل الداكن)، وشمس للوضع الداكن
    ICON.classList.remove("fa-moon", "fa-sun");
    ICON.classList.add("fa-regular");
    ICON.classList.add(mode === "dark" ? "fa-sun" : "fa-moon");
  }

  function applyTheme(mode) {
    HTML.setAttribute("data-bs-theme", mode);
    localStorage.setItem(KEY, mode);
    setIcon(mode);
  }

  // init
  const saved = localStorage.getItem(KEY) || "light";
  applyTheme(saved);

  if (BTN) {
    BTN.addEventListener("click", () => {
      const current =
        HTML.getAttribute("data-bs-theme") === "dark" ? "dark" : "light";
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
    });
  } else {
    console.warn("themeToggle button not found.");
  }
})();
