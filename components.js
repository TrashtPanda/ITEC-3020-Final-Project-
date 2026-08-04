function loadComponent(selector, filePath) {
  fetch(filePath)
    .then(response => {
      if (!response.ok) throw new Error("Could not load " + filePath);
      return response.text();
    })
    .then(html => {
      document.querySelector(selector).innerHTML = html;
      // Re‑attach theme toggle after header injection
      const toggleBtn = document.getElementById("theme-toggle");
      if (toggleBtn) {
        const currentTheme = document.body.getAttribute("data-theme") || "light";
        toggleBtn.textContent = currentTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
        toggleBtn.addEventListener("click", function() {
          const current = document.body.getAttribute("data-theme") || "light";
          const newTheme = current === "dark" ? "light" : "dark";
          document.body.setAttribute("data-theme", newTheme);
          toggleBtn.textContent = newTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
          localStorage.setItem("theme", newTheme);
        });
      }
    })
    .catch(error => console.error(error));
}

document.addEventListener("DOMContentLoaded", function () {
  loadComponent("#header-placeholder", "components/header.html");
  loadComponent("#footer-placeholder", "components/footer.html");
});