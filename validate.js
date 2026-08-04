document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (!form) return;

  function showError(fieldId, message) {
    const errorSpan = document.getElementById(fieldId + "-error");
    if (errorSpan) {
      errorSpan.textContent = message;
      errorSpan.classList.add("visible");
    }
  }

  function clearError(fieldId) {
    const errorSpan = document.getElementById(fieldId + "-error");
    if (errorSpan) {
      errorSpan.classList.remove("visible");
    }
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "") {
      showError("name", "Please enter your name.");
      isValid = false;
    } else {
      clearError("name");
    }

    if (email === "" || !validateEmail(email)) {
      showError("email", "Please enter a valid email address.");
      isValid = false;
    } else {
      clearError("email");
    }

    if (message.length < 20) {
      showError("message", "Message must be at least 20 characters.");
      isValid = false;
    } else {
      clearError("message");
    }

    if (isValid) {
      document.getElementById("success-msg").style.display = "block";
      form.style.display = "none";
    }
  });

  ["name", "email", "message"].forEach(function (id) {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", function () {
        clearError(id);
      });
    }
  });
});