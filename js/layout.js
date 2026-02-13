function initMobileMenu() {
  const btn = document.querySelector(".menu-btn");
  const menu = document.querySelector("#mobile-menu");

  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";

    btn.setAttribute("aria-expanded", String(!isOpen));
    btn.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");

    menu.hidden = isOpen;
  });
}

fetch("/components/header.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("site-header").innerHTML = html;
    initMobileMenu();
  });

fetch("/components/footer.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("site-footer").innerHTML = html;
  });
