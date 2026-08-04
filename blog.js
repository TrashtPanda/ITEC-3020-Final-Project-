document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("blog-container");
  if (!container) return;

  fetch("data/posts.json")
    .then(response => {
      if (!response.ok) throw new Error("Failed to load posts.");
      return response.json();
    })
    .then(posts => {
      posts.sort((a, b) => new Date(b.date) - new Date(a.date));

      posts.forEach((post, index) => {
        const card = document.createElement("div");
        card.className = "blog-card";
        card.dataset.title = post.title.toLowerCase();
        card.dataset.category = post.category.toLowerCase();

        const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });

        let badgeHtml = '';
        if (index === 0) {
          badgeHtml = `<span class="badge">⭐ Latest Post</span>`;
        }

        card.innerHTML = `
          <h3>${post.title} ${badgeHtml}</h3>
          <span class="category">${post.category}</span>
          <span class="date">${formattedDate}</span>
          <p><strong>Summary:</strong> ${post.summary}</p>
          <p>${post.content}</p>
        `;
        container.appendChild(card);
      });

      const filterInput = document.getElementById("blog-filter-input");
      if (filterInput) {
        filterInput.dispatchEvent(new Event('input'));
      }
    })
    .catch(error => {
      container.innerHTML = `<p style="color:red;">Error loading posts: ${error.message}</p>`;
    });
});