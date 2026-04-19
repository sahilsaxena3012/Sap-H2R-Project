const filterButtons = document.querySelectorAll(".filter-btn");
const timelineCards = document.querySelectorAll(".timeline-card");
const codeCards = document.querySelectorAll(".code-card");
const modal = document.getElementById("codeModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeModal = document.getElementById("closeModal");
const scrollTopButton = document.getElementById("scrollTop");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    timelineCards.forEach((card) => {
      const matches = filter === "all" || card.dataset.group === filter;
      card.classList.toggle("hidden-card", !matches);
    });
  });
});

codeCards.forEach((card) => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.dataset.title;
    modalDesc.textContent = card.dataset.desc;
    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
  });
});

function hideModal() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

closeModal.addEventListener("click", hideModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    hideModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    hideModal();
  }
});

window.addEventListener("scroll", () => {
  const shouldShow = window.scrollY > 320;
  scrollTopButton.classList.toggle("visible", shouldShow);
});

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
