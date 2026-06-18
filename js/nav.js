function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const header = document.getElementById("site-header");
  const headerHeight = header ? header.offsetHeight : 0;
  const top = element.getBoundingClientRect().top + window.scrollY - headerHeight - 8;

  window.scrollTo({ top, behavior: "smooth" });
}

function initNavigation() {
  const header = document.getElementById("site-header");
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const sectionIds = portfolio.nav.map((item) => item.href.replace("#", ""));

  const updateScrolled = () => {
    if (header) {
      header.classList.toggle("site-header--scrolled", window.scrollY > 20);
    }
  };

  const setActiveSection = (id) => {
    document.querySelectorAll(".site-nav__link").forEach((link) => {
      const isActive = link.dataset.section === id;
      link.classList.toggle("site-nav__link--active", isActive);
      link.setAttribute("aria-current", isActive ? "true" : "false");
    });
  };

  const closeMobileMenu = () => {
    if (!menuToggle || !mobileNav) return;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
    mobileNav.classList.remove("mobile-nav--open");
  };

  const openMobileMenu = () => {
    if (!menuToggle || !mobileNav) return;
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close menu");
    mobileNav.classList.add("mobile-nav--open");
  };

  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-section]");
    if (!target) return;

    const sectionId = target.dataset.section;
    if (!sectionId) return;

    event.preventDefault();
    scrollToSection(sectionId);
    closeMobileMenu();
  });

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMobileMenu();
    });
  }

  window.addEventListener("scroll", updateScrolled, { passive: true });
  updateScrolled();

  const observers = sectionIds.map((id) => {
    const element = document.getElementById(id);
    if (!element) return null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveSection(id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    observer.observe(element);
    return observer;
  });

  return () => observers.forEach((observer) => observer?.disconnect());
}

document.addEventListener("portfolio:rendered", initNavigation);
