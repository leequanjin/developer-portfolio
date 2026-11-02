function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function renderSectionHeader({ eyebrow, title, subtitle, center = false }) {
  const centerClass = center ? " section-header--center" : "";
  return `
    <div class="section-header${centerClass}">
      <p class="section-header__eyebrow">${escapeHtml(eyebrow)}</p>
      <h2 class="section-header__title">${escapeHtml(title)}</h2>
      ${subtitle ? `<p class="section-header__subtitle">${escapeHtml(subtitle)}</p>` : ""}
    </div>
  `;
}

function renderNav() {
  const navLinks = portfolio.nav
    .map(
      (item) =>
        `<button type="button" class="site-nav__link" data-section="${item.href.replace("#", "")}">${escapeHtml(item.label)}</button>`,
    )
    .join("");

  const mobileLinks = portfolio.nav
    .map(
      (item) =>
        `<button type="button" class="mobile-nav__link" data-section="${item.href.replace("#", "")}">${escapeHtml(item.label)}</button>`,
    )
    .join("");

  const footerLinks = portfolio.nav
    .map(
      (item) =>
        `<a class="site-footer__link" href="${item.href}">${escapeHtml(item.label)}</a>`,
    )
    .join("");

  const projectLinks = portfolio.projects.items
    .map(
      (project) =>
        `<a class="site-footer__link" href="#projects">${escapeHtml(project.title)}</a>`,
    )
    .join("");

  return { navLinks, mobileLinks, footerLinks, projectLinks };
}

function renderHero() {
  return `
    <section id="hero" class="section hero" aria-labelledby="hero-title">
      <div class="section-container">
        <div class="hero__grid">
          <div class="hero__avatar-col reveal">
            <div class="hero__avatar avatar-breathe" aria-hidden="true">
              <div class="hero__avatar-ring"></div>
              <div class="hero__avatar-inner">${escapeHtml(portfolio.initials)}</div>
            </div>
          </div>
          <div class="hero__content-col">
            <p class="hero__eyebrow reveal">${escapeHtml(portfolio.title)}</p>
            <h1 id="hero-title" class="hero__title reveal reveal--delay-1">
              Hi, I'm <span class="text-gradient">${escapeHtml(portfolio.name)}</span>
            </h1>
            <p class="hero__tagline reveal reveal--delay-1">${escapeHtml(portfolio.hero.tagline)}</p>
            <p class="hero__subtitle reveal reveal--delay-2">${escapeHtml(portfolio.hero.subtitle)}</p>
            <p class="hero__availability reveal reveal--delay-2">${escapeHtml(portfolio.hero.availability)}</p>
            <div class="hero__actions reveal reveal--delay-3">
              <button type="button" class="btn btn--primary" data-section="projects">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                View Projects
              </button>
              <a class="btn btn--secondary" href="${portfolio.resume.downloadPath}" download>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderProjects() {
  const cards = portfolio.projects.items
    .map((project, index) => {
      const featuredClass = index === 0 ? " project-card--featured" : "";
      const tech = project.tech.map((t) => `<span class="badge">${escapeHtml(t)}</span>`).join("");
      const challenges = project.challenges
        .map(
          (c) =>
            `<li class="project-card__challenge"><span class="project-card__challenge-dot" aria-hidden="true"></span><span>${escapeHtml(c)}</span></li>`,
        )
        .join("");

      return `
        <article class="glass-card glass-card--hover project-card${featuredClass} reveal">
          <div class="project-card__image-wrap">
            <img
              class="project-card__image"
              src="${escapeHtml(project.image)}"
              alt="${escapeHtml(project.title)} project screenshot"
              loading="lazy"
              width="800"
              height="450"
            />
            <div class="project-card__image-overlay" aria-hidden="true"></div>
          </div>
          <div class="project-card__body">
            <h3 class="project-card__title">${escapeHtml(project.title)}</h3>
            <p class="project-card__description">${escapeHtml(project.description)}</p>
            <div class="project-card__tech">${tech}</div>
            <div class="project-card__actions">
              ${
                project.github
                  ? `<a class="btn btn--secondary" href="${escapeHtml(project.github)}" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                GitHub
                <span class="sr-only">(opens in new tab)</span>
              </a>`
                  : ""
              }
              ${
                project.demo
                  ? `<a class="btn btn--ghost" href="${escapeHtml(project.demo)}" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                Live Demo
                <span class="sr-only">(opens in new tab)</span>
              </a>`
                  : ""
              }
            </div>
            <div class="project-card__challenges">
              <p class="project-card__challenges-title">Challenges solved</p>
              <ul class="project-card__challenges-list">${challenges}</ul>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  return `
    <section id="projects" class="section" aria-labelledby="projects-title">
      <div class="section-container">
        <div class="reveal">
          ${renderSectionHeader({
    eyebrow: portfolio.projects.eyebrow,
    title: portfolio.projects.title,
    subtitle: portfolio.projects.subtitle,
  })}
        </div>
        <div class="projects__grid">${cards}</div>
      </div>
    </section>
  `;
}

function renderExperience() {
  const items = portfolio.experience.items
    .map(
      (item) => {
        const bullets = item.bullets
          .map(
            (b) =>
              `<li class="experience__bullet"><span class="experience__bullet-dot" aria-hidden="true"></span><span>${escapeHtml(b)}</span></li>`,
          )
          .join("");

        return `
          <div class="experience__item reveal">
            <span class="experience__dot" aria-hidden="true"></span>
            <div class="glass-card experience__card">
              <div class="experience__header">
                <div>
                  <h3 class="experience__role">${escapeHtml(item.role)}</h3>
                  <p class="experience__company">${escapeHtml(item.company)}</p>
                </div>
                <p class="experience__period">${escapeHtml(item.period)}</p>
              </div>
              <ul class="experience__bullets">${bullets}</ul>
            </div>
          </div>
        `;
      },
    )
    .join("");

  return `
    <section id="experience" class="section" aria-labelledby="experience-title">
      <div class="section-container">
        <div class="reveal">
          ${renderSectionHeader({
    eyebrow: portfolio.experience.eyebrow,
    title: portfolio.experience.title,
    subtitle: portfolio.experience.subtitle,
  })}
        </div>
        <div class="experience__timeline">${items}</div>
      </div>
    </section>
  `;
}

function renderSkills() {
  const cards = portfolio.skills.groups
    .map(
      (group) => {
        const badges = group.items.map((s) => `<span class="badge">${escapeHtml(s)}</span>`).join("");
        return `
          <div class="glass-card skills__card reveal">
            <h3 class="skills__card-title">${escapeHtml(group.label)}</h3>
            <div class="skills__badges">${badges}</div>
          </div>
        `;
      },
    )
    .join("");

  return `
    <section id="skills" class="section" aria-labelledby="skills-title">
      <div class="section-container">
        <div class="reveal">
          ${renderSectionHeader({
    eyebrow: portfolio.skills.eyebrow,
    title: portfolio.skills.title,
    subtitle: portfolio.skills.subtitle,
  })}
        </div>
        <div class="skills__grid">${cards}</div>
      </div>
    </section>
  `;
}

function renderResume() {
  const highlights = portfolio.education.highlights
    .map(
      (h) =>
        `<li class="resume__highlight"><span class="resume__highlight-dot" aria-hidden="true"></span><span>${escapeHtml(h)}</span></li>`,
    )
    .join("");

  return `
    <section id="resume" class="section" aria-labelledby="resume-title">
      <div class="section-container">
        <div class="reveal">
          ${renderSectionHeader({
    eyebrow: portfolio.resume.eyebrow,
    title: portfolio.resume.title,
    subtitle: portfolio.resume.subtitle,
    center: true,
  })}
        </div>
        <div class="glass-card resume__card reveal reveal--delay-1">
          <p class="resume__summary">${escapeHtml(portfolio.resume.summary)}</p>
          <div class="resume__actions">
            <a class="btn btn--primary" href="${portfolio.resume.downloadPath}" download>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              Download Resume
            </a>
          </div>
          <div class="resume__education">
            <p class="resume__education-degree">${escapeHtml(portfolio.education.degree)}</p>
            <p class="resume__education-school">${escapeHtml(portfolio.education.school)}</p>
            <p class="resume__education-year">Class of ${escapeHtml(portfolio.education.year)}</p>
            <ul class="resume__highlights">${highlights}</ul>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderContact() {
  return `
    <section id="contact" class="section" aria-labelledby="contact-title">
      <div class="section-container">
        <div class="reveal">
          ${renderSectionHeader({
    eyebrow: portfolio.contact.eyebrow,
    title: portfolio.contact.headline,
    subtitle: portfolio.contact.message,
    center: true,
  })}
        </div>
        <div class="glass-card contact__card reveal reveal--delay-1">
          <p class="contact__label">Best way to reach me</p>
          <a class="contact__email" href="mailto:${escapeHtml(portfolio.email)}">${escapeHtml(portfolio.email)}</a>
          <div class="contact__actions">
            <a class="btn btn--primary" href="mailto:${escapeHtml(portfolio.email)}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
              Send Email
            </a>
            <a class="btn btn--secondary" href="${escapeHtml(portfolio.socials.github)}" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
              GitHub
              <span class="sr-only">(opens in new tab)</span>
            </a>
            <a class="btn btn--secondary" href="${escapeHtml(portfolio.socials.linkedin)}" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
              <span class="sr-only">(opens in new tab)</span>
            </a>
          </div>
          <p class="contact__availability">${escapeHtml(portfolio.contact.availability)}</p>
        </div>
      </div>
    </section>
  `;
}

function renderPage() {
  const { navLinks, mobileLinks, footerLinks, projectLinks } = renderNav();
  const year = new Date().getFullYear();

  document.title = `${portfolio.name} · ${portfolio.title}`;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", portfolio.hero.subtitle);
  }

  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="bg-glow" aria-hidden="true"></div>

    <header class="site-header" id="site-header">
      <div class="section-container site-header__inner">
        <button type="button" class="site-header__logo" data-section="hero" aria-label="Scroll to top">
          <span class="site-header__logo-initials">${escapeHtml(portfolio.initials)}</span>
          <span class="site-header__logo-name">${escapeHtml(portfolio.name)}</span>
        </button>

        <nav class="site-nav" aria-label="Main navigation">
          ${navLinks}
        </nav>

        <button
          type="button"
          class="menu-toggle"
          id="menu-toggle"
          aria-expanded="false"
          aria-controls="mobile-nav"
          aria-label="Open menu"
        >
          <svg class="menu-toggle__icon menu-toggle__icon--open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
          <svg class="menu-toggle__icon menu-toggle__icon--close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>

      <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">
        ${mobileLinks}
      </nav>
    </header>

    <main id="main-content">
      ${renderHero()}
      ${renderProjects()}
      ${renderExperience()}
      ${renderSkills()}
      ${renderResume()}
      ${renderContact()}
    </main>

    <footer class="site-footer">
      <div class="section-container site-footer__inner">
        <div>
          <p class="site-footer__brand">${escapeHtml(portfolio.name)}</p>
          <p class="site-footer__copyright">© ${year} · All rights reserved.</p>
        </div>
        <div>
          <p class="site-footer__nav-title">Navigate</p>
          <div class="site-footer__links">${footerLinks}</div>
        </div>
        <div>
          <p class="site-footer__nav-title">Projects</p>
          <div class="site-footer__links">${projectLinks}</div>
        </div>
        <div>
          <p class="site-footer__nav-title">Connect</p>
          <div class="site-footer__socials">
            <a class="site-footer__link" href="${escapeHtml(portfolio.socials.github)}" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a class="site-footer__link" href="${escapeHtml(portfolio.socials.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderPage();
  document.dispatchEvent(new CustomEvent("portfolio:rendered"));
});
