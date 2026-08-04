document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("theme-toggle");

  function applyTheme(theme) {
    document.body.setAttribute("data-theme", theme);
    if (toggleBtn) {
      toggleBtn.textContent = theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
    }
    localStorage.setItem("theme", theme);
  }

  function loadSavedTheme() {
    const saved = localStorage.getItem("theme");
    if (saved) {
      applyTheme(saved);
    } else {
      applyTheme("light");
    }
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      const current = document.body.getAttribute("data-theme") || "light";
      const newTheme = current === "dark" ? "light" : "dark";
      applyTheme(newTheme);
    });
  }

  loadSavedTheme();
});