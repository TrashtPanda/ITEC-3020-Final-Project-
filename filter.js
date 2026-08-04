document.addEventListener("DOMContentLoaded", function () {
  // Products filter
  const productFilter = document.getElementById("filter-input");
  const productGrid = document.getElementById("product-grid");
  const productNoResults = document.getElementById("no-results");

  if (productFilter && productGrid) {
    const cards = productGrid.querySelectorAll(".product-card");

    productFilter.addEventListener("input", function () {
      const query = this.value.toLowerCase().trim();
      let visibleCount = 0;

      cards.forEach(function (card) {
        const title = (card.dataset.title || "").toLowerCase();
        const category = (card.dataset.category || "").toLowerCase();
        const match = title.includes(query) || category.includes(query);
        if (match) {
          card.style.display = "";
          visibleCount++;
        } else {
          card.style.display = "none";
        }
      });

      if (productNoResults) {
        productNoResults.style.display = visibleCount === 0 ? "block" : "none";
      }
    });
  }

  // Blog filter
  const blogFilter = document.getElementById("blog-filter-input");
  const blogContainer = document.getElementById("blog-container");
  const blogNoResults = document.getElementById("blog-no-results");

  if (blogFilter && blogContainer) {
    setTimeout(function() {
      const cards = blogContainer.querySelectorAll(".blog-card");
      if (cards.length === 0) return;

      blogFilter.addEventListener("input", function () {
        const query = this.value.toLowerCase().trim();
        let visibleCount = 0;

        cards.forEach(function (card) {
          const title = (card.dataset.title || "").toLowerCase();
          const category = (card.dataset.category || "").toLowerCase();
          const match = title.includes(query) || category.includes(query);
          if (match) {
            card.style.display = "";
            visibleCount++;
          } else {
            card.style.display = "none";
          }
        });

        if (blogNoResults) {
          blogNoResults.style.display = visibleCount === 0 ? "block" : "none";
        }
      });
    }, 500);
  }
});