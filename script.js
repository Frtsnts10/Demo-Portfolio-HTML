import { portfolioData } from './data.js';

// DOM Elements
const bodyElement = document.body;
const themeToggle = document.getElementById('theme-toggle');

// Initialize Theme
const initTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    bodyElement.setAttribute('data-theme', 'dark');
  }
};

// Toggle Theme
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    if (bodyElement.hasAttribute('data-theme')) {
      bodyElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      bodyElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  });
}

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
