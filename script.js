const buttons = document.querySelectorAll(".myBtn");
const closeSpans = document.querySelectorAll(".close");
const allModals = document.querySelectorAll(".modal");

buttons.forEach((btn) => {
  btn.onclick = () => {
    const targetId = btn.getAttribute("data-target");
    document.getElementById(targetId).style.display = "block";
  };
});

closeSpans.forEach((span) => {
  span.onclick = () => {
    span.closest(".modal").style.display = "none";
  };
});

window.onclick = (event) => {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    allModals.forEach((modal) => {
      if (modal.style.display === "block") {
        modal.style.display = "none";
        console.log("Modal closed via Escape key.");
      }
    });
  }
});
