import "../style/deteksi.css";
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}
let currentStep = 1;
// Update the steps based on the current step
function updateProgressSteps(step) {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
  const current = document.getElementById("step" + step);
  const previous = document.getElementById("step" + (step - 1));

  if (current) current.classList.add("active");
  if (previous && step > 1) previous.classList.add("completed");
}

export function analyzeImage() {
  const loading = document.getElementById("loading");
  const preview = document.getElementById("previewImage");
  const button = document.querySelector(".cta-btn");

  if (loading && preview && button) {
    loading.style.display = "block";
    preview.style.display = "none";
    button.style.display = "none";

    currentStep = 2;
    updateProgressSteps(currentStep);

    setTimeout(() => {
      loading.style.display = "none";
      currentStep = 3;
      updateProgressSteps(currentStep);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Gambar berhasil dianalisis",
        showConfirmButton: false,
        timer: 1500,
      });
    }, 3000);
  }
}
