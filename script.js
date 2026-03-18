//variables for modal
const buttons = document.querySelectorAll(".myBtn");
const closeSpans = document.querySelectorAll(".close");
const allModals = document.querySelectorAll(".modal");

//variables for collapsible
const collapsibles = document.querySelectorAll(".collapsible");

//opens modal
buttons.forEach((btn) => {
  btn.onclick = () => {
    const targetId = btn.getAttribute("data-target");
    document.getElementById(targetId).style.display = "block";
  };
});

//closes modal
closeSpans.forEach((span) => {
  span.onclick = () => {
    span.closest(".modal").style.display = "none";
  };
});

//closes modal when clicking elsewhere
window.onclick = (event) => {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};

//closes modal when pressing ESC key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    allModals.forEach((modal) => {
      if (modal.style.display === "block") {
        modal.style.display = "none";
      }
    });
  }
});

//toggles collapsible
collapsibles.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");

    const content = item.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      console.log("Section collapsed.");
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
