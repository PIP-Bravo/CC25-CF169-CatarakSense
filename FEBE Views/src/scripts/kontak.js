import "../style/kontak.css";

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!this.checkValidity()) {
        this.reportValidity();
        return;
      }

      alert("Terima kasih atas pesan Anda! Kami akan segera menghubungi Anda.");

      this.reset();
    });
  }
});
