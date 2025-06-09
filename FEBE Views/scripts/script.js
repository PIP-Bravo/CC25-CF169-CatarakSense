const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
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
});

function flipCard(cardId) {
  document.getElementById(cardId).classList.toggle("flipped");
}

document.addEventListener("DOMContentLoaded", function () {
  const beritaItems = document.querySelectorAll(".berita-item");
  const paginationContainer = document.getElementById("pagination");
  const itemsPerPage = 4;
  let currentPage = 1;

  function showPage(page) {
    let start = (page - 1) * itemsPerPage;
    let end = start + itemsPerPage;

    beritaItems.forEach((item, index) => {
      item.style.display = index >= start && index < end ? "flex" : "none";
    });

    renderPagination(page);
  }

  function renderPagination(page) {
    let totalPages = Math.ceil(beritaItems.length / itemsPerPage);
    paginationContainer.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
      if (
        totalPages <= 2 ||
        i === 1 ||
        i === totalPages ||
        Math.abs(i - page) <= 1
      ) {
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
      } else if (i === 2 && page > 3) {
        let dots = document.createElement("span");
        dots.textContent = "...";
        dots.classList.add("dots");
        paginationContainer.appendChild(dots);
      }
    }
  }

  showPage(currentPage);
});
