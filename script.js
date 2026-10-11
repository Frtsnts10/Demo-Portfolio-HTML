// DOM Elements
const rootElement = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

// Theme: saved choice wins, otherwise follow the OS preference
const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

const getSavedTheme = () => {
  try { return localStorage.getItem('theme'); } catch (e) { return null; }
};

const applyTheme = (theme) => {
  if (theme === 'dark') {
    rootElement.setAttribute('data-theme', 'dark');
  } else {
    rootElement.removeAttribute('data-theme');
  }
  if (themeToggle) themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
};

const initTheme = () => {
  applyTheme(getSavedTheme() || (darkQuery.matches ? 'dark' : 'light'));
};

// Toggle Theme
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const next = rootElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
}

// Follow OS changes until the user picks a theme manually
darkQuery.addEventListener('change', (e) => {
  if (!getSavedTheme()) applyTheme(e.matches ? 'dark' : 'light');
});

// Render Data
const renderData = () => {
  // Hero Data
  document.getElementById('profile-status').textContent = portfolioData.profile.status;
  document.getElementById('profile-title').innerHTML = portfolioData.profile.title.replace('DIGITAL', '<br>DIGITAL');
  document.getElementById('profile-desc').textContent = portfolioData.profile.description;
  
  // About Data
  document.getElementById('about-content').textContent = portfolioData.about.content;

  // Skills Data
  const skillsContainer = document.getElementById('skills-container');
  if (skillsContainer) {
    skillsContainer.innerHTML = portfolioData.skills.map(skill => 
      `<span class="skill-pill">${skill}</span>`
    ).join('');
  }

  // Experience Data
  const experienceContainer = document.getElementById('experience-container');
  if (experienceContainer) {
    experienceContainer.innerHTML = portfolioData.experience.map(exp => `
      <div class="timeline-item">
        <div class="timeline-year">${exp.year}</div>
        <div class="timeline-role">${exp.role}</div>
        <div class="timeline-company">${exp.company}</div>
        <p>${exp.desc}</p>
      </div>
    `).join('');
  }

  // Projects Data
  const projectsContainer = document.getElementById('projects-container');
  if (projectsContainer) {
    projectsContainer.innerHTML = portfolioData.projects.map(project => {
      // Determine CSS class based on size mapping
      let sizeClass = 'project-small';
      if (project.size === 'large') sizeClass = 'project-large';
      if (project.size === 'medium') sizeClass = 'project-medium';

      return `
        <a href="${project.link}" class="bento-box project-card ${sizeClass}" target="_blank" rel="noopener noreferrer">
          <div class="project-info">
            <span class="project-type">${project.type}</span>
            <h3 class="giant-text" style="font-size: clamp(1.5rem, 3vw, 2.5rem); margin-top: 1rem;">${project.title}</h3>
            <p>${project.desc}</p>
          </div>
          <div class="project-link-icon">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </a>
      `;
    }).join('');
  }

  // Contact Data
  const emailLink = document.getElementById('email-link');
  if (emailLink) emailLink.href = `mailto:${portfolioData.profile.email}`;
  
  const githubLink = document.getElementById('github-link');
  if (githubLink) githubLink.href = portfolioData.profile.github;

  // Set Current Year
  const yearElement = document.getElementById('year');
  if (yearElement) yearElement.textContent = new Date().getFullYear();
};

// Intersection Observer for Scroll Animations (Fade-up effect)
const setupScrollAnimations = () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Trigger when 15% of element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: stop observing once it has appeared
        // observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  const elementsToAnimate = document.querySelectorAll('.fade-up');
  elementsToAnimate.forEach(el => observer.observe(el));
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderData();
  
  // Need a small timeout to allow DOM to render before observing
  setTimeout(setupScrollAnimations, 100);
});
