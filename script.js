import { portfolioData } from './data.js';

// DOM Elements
const bodyElement = document.body;
const toggleThemeButton = document.getElementById('toggleThemeButton');
const toggleThemeMobileButton = document.getElementById('toggleThemeMobileButton');
const hamburgerMenu = document.querySelector('.hamburger-icon');
const menuLinks = document.querySelector('.menu-links');

// Init Theme from LocalStorage
const initTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    bodyElement.setAttribute('data-theme', 'dark');
  } else {
    bodyElement.removeAttribute('data-theme');
  }
};

// Toggle Theme
const toggleTheme = () => {
  if (bodyElement.hasAttribute('data-theme')) {
    bodyElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  } else {
    bodyElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
};

if (toggleThemeButton) {
  toggleThemeButton.addEventListener('click', toggleTheme);
}
if (toggleThemeMobileButton) {
  toggleThemeMobileButton.addEventListener('click', toggleTheme);
}

// Toggle Mobile Menu
if (hamburgerMenu) {
  hamburgerMenu.addEventListener('click', () => {
    menuLinks.classList.toggle('open');
    hamburgerMenu.classList.toggle('open');
  });
}

// Render Data
const renderData = () => {
  // Render Profile
  const profileNameElements = document.querySelectorAll('.profile-name');
  const profileRoleElements = document.querySelectorAll('.profile-role');
  const profileDescElement = document.querySelector('.profile-desc');
  const profileAvatarElement = document.querySelector('.profile-avatar');
  
  profileNameElements.forEach(el => {
      if(el) el.textContent = portfolioData.profile.name;
  });
  profileRoleElements.forEach(el => {
      if(el) el.textContent = portfolioData.profile.role;
  });
  
  if (profileDescElement) profileDescElement.textContent = portfolioData.profile.description;
  if (profileAvatarElement) profileAvatarElement.src = portfolioData.profile.avatarUrl;

  // Render Skills
  const frontendContainer = document.getElementById('frontend-skills');
  if (frontendContainer && portfolioData.skills.frontend) {
    frontendContainer.innerHTML = portfolioData.skills.frontend.map(skill => `
      <article class="skill-item">
        <svg class="skill-icon" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
        <div class="name-Program">
          <h3 class="program">${skill.name}</h3>
          <p class="ability">${skill.level}</p>
        </div>
      </article>
    `).join('');
  }

  const designContainer = document.getElementById('design-skills');
  if (designContainer && portfolioData.skills.design) {
    designContainer.innerHTML = portfolioData.skills.design.map(skill => `
      <article class="skill-item">
        <svg class="skill-icon" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
        <div class="name-Program">
          <h3 class="program">${skill.name}</h3>
          <p class="ability">${skill.level}</p>
        </div>
      </article>
    `).join('');
  }

  // Render Work Experience
  const workContainer = document.getElementById('work-experience');
  if (workContainer && portfolioData.workExperience) {
    workContainer.innerHTML = portfolioData.workExperience.map(work => `
      <div class="working">
        <div class="line"><div></div></div>
        <div class="working-info">
          <h4 class="working-title">${work.company}</h4>
          <div class="job">
            <p>${work.role} <i style="font-size: 1rem">(${work.period})</i></p>
            <div class="working-job">
              <ul>
                ${work.tasks.map(task => `<li>${task}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Render Projects
  const projectsContainer = document.getElementById('projects-container');
  if (projectsContainer && portfolioData.projects) {
    projectsContainer.innerHTML = portfolioData.projects.map(project => `
      <div class="project-card">
        <div class="card-top">
          <img src="${project.image}" alt="${project.title}" class="project-img" loading="lazy" />
          <h2 class="project-title">${project.title}</h2>
          <div class="badge">
            ${project.tags.map(tag => `<span class="badge-icon">${tag}</span>`).join('')}
          </div>
        </div>
        <div class="card-button">
          <button class="project-btn" onclick="window.open('${project.githubLink}', '_blank')">Github</button>
          <button class="project-btn" onclick="window.open('${project.demoLink}', '_blank')">Live Demo</button>
        </div>
      </div>
    `).join('');
  }
};

// Sticky Header
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (header) {
    header.classList.toggle("sticky", window.scrollY > 0);
  }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderData();
});
