// Mobile navigation toggle
const navToggle = document.querySelector("#nav-toggle");
const navMenu = document.querySelector("#nav-menu");

if (navToggle && navMenu) {
    const setOpen = (open) => {
        navMenu.classList.toggle("open", open);
        navToggle.setAttribute("aria-expanded", String(open));
    };

    navToggle.addEventListener("click", () => {
        setOpen(!navMenu.classList.contains("open"));
    });

    // close the menu after choosing a link
    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => setOpen(false));
    });

    // close with Escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") setOpen(false);
    });

    // reset when returning to desktop width
    window.addEventListener("resize", () => {
        if (window.innerWidth > 800) setOpen(false);
    });
}
