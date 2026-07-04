(function () {
  "use strict";

  const book = document.getElementById("book");
  const pages = Array.from(book.querySelectorAll(".page"));
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  // Stack the pages so the first one sits on top and they flip in order.
  const total = pages.length;
  pages.forEach((page, i) => {
    page.style.zIndex = String(total - i);
  });

  // currentPage = number of pages already flipped (0 = book closed).
  let currentPage = 0;

  function render() {
    pages.forEach((page, i) => {
      const flipped = i < currentPage;
      page.classList.toggle("flipped", flipped);
      // Flipped pages move behind the stack; unflipped keep original order.
      page.style.zIndex = String(flipped ? i + 1 : total - i);
    });

    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === total;
    nextBtn.textContent = currentPage === total - 1 ? "The End \u2192" : "Next \u2192";
  }

  function next() {
    if (currentPage < total) {
      currentPage++;
      render();
    }
  }

  function prev() {
    if (currentPage > 0) {
      currentPage--;
      render();
    }
  }

  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);

  // Keyboard navigation for accessibility.
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") next();
    else if (e.key === "ArrowLeft") prev();
  });

  render();
})();
