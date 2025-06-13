import "../style/index.css";

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
  const dropdownButtons = document.querySelectorAll(".dropdown-btn");

  dropdownButtons.forEach((button) => {
    button.addEventListener("click", function () {
      let content = this.nextElementSibling;
      content.style.display =
        content.style.display === "block" ? "none" : "block";
    });
  });

  function fadeInOnScroll() {
    let elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => {
      let rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", fadeInOnScroll);
  fadeInOnScroll();

  const cataractInfo = document.getElementById("cataract-info");
  if (cataractInfo) {
    window.addEventListener("scroll", () => {
      if (
        cataractInfo.getBoundingClientRect().top <=
        window.innerHeight - 150
      ) {
        cataractInfo.classList.add("visible");
      }
    });
  }

  const cataractItems = document.querySelectorAll(".cataract-item");
  const paginationContainer = document.getElementById("pagination");
  const itemsPerPage = 2;
  let currentPage = 1;

  function showPage(page) {
    let start = (page - 1) * itemsPerPage;
    let end = start + itemsPerPage;

    cataractItems.forEach((item, index) => {
      item.style.display = index >= start && index < end ? "flex" : "none";
    });

    renderPagination(page);
  }

  function renderPagination(page) {
    let totalPages = Math.ceil(cataractItems.length / itemsPerPage);
    paginationContainer.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
      let pageElement = document.createElement("a");
      pageElement.textContent = i;
      pageElement.href = "#";
      pageElement.classList.add("page");
      if (i === page) pageElement.classList.add("active");

      pageElement.addEventListener("click", function (e) {
        e.preventDefault();
        currentPage = i;
        showPage(currentPage);
      });

      paginationContainer.appendChild(pageElement);
    }
  }

  showPage(currentPage);
});
