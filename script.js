(function () {
  "use strict";

  const panels = Array.from(document.querySelectorAll(".panel"));
  const byName = {};
  panels.forEach((p) => { byName[p.dataset.panel] = p; });

  let current = document.querySelector(".panel.active") || panels[0];

  function goTo(name) {
    const target = byName[name];
    if (!target || target === current) return;

    const leaving = current;
    leaving.classList.remove("active");
    leaving.classList.add("exit");

    target.classList.add("active");

    // Clear the exit state once the fold-out animation finishes so the
    // panel is ready to fold back in next time.
    window.setTimeout(() => leaving.classList.remove("exit"), 750);

    // Reset scroll position for scrollable panels.
    const inner = target.querySelector(".scroller");
    if (inner) inner.scrollTop = 0;

    current = target;
  }

  document.querySelectorAll("[data-go]").forEach((btn) => {
    btn.addEventListener("click", () => goTo(btn.dataset.go));
  });
})();
