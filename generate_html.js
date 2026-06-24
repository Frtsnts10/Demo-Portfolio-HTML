const fs = require('fs');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Modern Minimalist Portfolio Template" />

    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="mediaqueries.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/3.5.0/remixicon.css" />
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

    <title>Alex Doe | Minimalist Portfolio</title>
  </head>

  <body>
    <header>
      <nav class="desktop-nav">
        <a class="logo-title" href="#hero">AD.</a>
        <div class="nav-links">
          <a href="#about" class="link">About</a>
          <a href="#experience" class="link">Experience</a>
          <a href="#projects" class="link">Projects</a>
          <a href="#contact" class="link">Contact</a>
          <i class="btn ri-contrast-2-fill" id="toggleThemeButton"></i>
        </div>
      </nav>

      <nav class="mobile-nav">
        <a class="logo-title" href="#">AD.</a>
        <div class="hamburger-menu">
          <div class="hamburger-icon" onclick="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul class="menu-links">
            <li><a href="#about" class="link">About</a></li>
            <li><a href="#experience" class="link">Experience</a></li>
            <li><a href="#projects" class="link">Projects</a></li>
            <li><a href="#contact" class="link">Contact</a></li>
          </ul>
          <i class="btn ri-contrast-2-fill" id="toggleThemeButton"></i>
        </div>
      </nav>

      <script>
        window.addEventListener("scroll", function () {
          var header = document.querySelector("header");
          header.classList.toggle("sticky", window.scrollY > 0);
        });
      </script>
    </header>

    <section id="hero">
      <div class="hero-container">
        <div class="hero-section">
          <h1 class="welcome-text">HELLO THERE</h1>
          <h2 class="header-title">I'M ALEX DOE</h2>
          <h3 class="header-jobs">Creative Developer & UI/UX Designer</h3>
        </div>

        <div class="hero-description">
          <p>
            Welcome to my minimalist portfolio template. I focus on creating clean, 
            elegant, and user-friendly digital experiences. Passionate about modern web 
            technologies and minimalist design principles.
          </p>
          <button class="dw-btn" onclick="window.open('#', '_blank')">
            Download My CV
          </button>
        </div>
      </div>

      <div class="hero-image">
        <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80" alt="Alex Doe" loading="lazy" style="border-radius: 50%; object-fit: cover; width: 400px; height: 400px;" />
      </div>
    </section>

    <section id="about">
      <div class="title-container">
        <h4 class="tags">Get To Know More</h4>
        <h1 class="title">About Me</h1>
      </div>

      <div class="about-container">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80"
          alt="Profile picture"
          class="about-pic"
          style="border-radius: 2rem; object-fit: cover; width: 400px; height: 400px;"
          loading="lazy" />

        <div class="about-content">
          <div class="container">
            <div class="container-card">
              <i class="fa-solid fa-briefcase icon" style="font-size: 2rem; margin-bottom: 1rem;"></i>
              <h2 class="card-title">Experience</h2>
              <p class="card-description">
                3+ Years <br />Frontend Development <br />UI/UX Design
              </p>
            </div>

            <div class="container-card">
              <i class="fa-solid fa-graduation-cap icon" style="font-size: 2rem; margin-bottom: 1rem;"></i>
              <h2 class="card-title">Education</h2>
              <p class="card-description">
                B.Sc. Computer Science <br />University of Design<br />2018 - 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="experience">
      <div class="title-container">
        <h4 class="tags">Explore My</h4>
        <h1 class="title">Skills</h1>
      </div>

      <div class="experience-container">
        <div class="experience-card">
          <h2 class="dev-title">Frontend</h2>
          <div class="list-experience">
            <article>
              <i class="fa-brands fa-html5" style="font-size: 1.5rem; color: var(--text-color); margin-right: 0.5rem;"></i>
              <div class="name-Program">
                <h3 class="program">HTML/CSS</h3>
                <p class="ability">Experienced</p>
              </div>
            </article>
            <article>
              <i class="fa-brands fa-js" style="font-size: 1.5rem; color: var(--text-color); margin-right: 0.5rem;"></i>
              <div class="name-Program">
                <h3 class="program">JavaScript</h3>
                <p class="ability">Experienced</p>
              </div>
            </article>
            <article>
              <i class="fa-brands fa-react" style="font-size: 1.5rem; color: var(--text-color); margin-right: 0.5rem;"></i>
              <div class="name-Program">
                <h3 class="program">React</h3>
                <p class="ability">Intermediate</p>
              </div>
            </article>
          </div>
        </div>

        <div class="experience-card">
          <h2 class="dev-title">Design</h2>
          <div class="list-experience">
            <article>
              <i class="fa-solid fa-pen-nib" style="font-size: 1.5rem; color: var(--text-color); margin-right: 0.5rem;"></i>
              <div class="name-Program">
                <h3 class="program">Figma</h3>
                <p class="ability">Experienced</p>
              </div>
            </article>
            <article>
              <i class="fa-solid fa-wand-magic-sparkles" style="font-size: 1.5rem; color: var(--text-color); margin-right: 0.5rem;"></i>
              <div class="name-Program">
                <h3 class="program">UI/UX</h3>
                <p class="ability">Intermediate</p>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div id="working" style="margin-top: 5rem;">
        <div class="title-container">
          <h4 class="tags">Working</h4>
          <h1 class="title">Experience</h1>
        </div>

        <div class="working-container">
          <div class="skills-grid">
            <div class="working">
              <div class="line"><div></div></div>
              <div class="working-info">
                <h4 class="working-title">Creative Studio</h4>
                <div class="job">
                  <p>Frontend Developer <i style="font-size: 1.2rem">(Jan 2023 - Present)</i></p>
                  <h4 class="working-job">
                    <ul>
                      <li>Building modern, scalable web applications with clean UI/UX.</li>
                      <li>Collaborating with designers to implement minimalist design systems.</li>
                    </ul>
                  </h4>
                </div>
              </div>
            </div>

            <div class="working">
              <div class="line"><div></div></div>
              <div class="working-info">
                <h4 class="working-title">Tech Innovators</h4>
                <div class="job">
                  <p>UI/UX Intern <i style="font-size: 1.2rem">(Jun 2022 - Dec 2022)</i></p>
                  <h4 class="working-job">
                    <ul>
                      <li>Assisted in designing user interfaces for internal dashboard tools.</li>
                      <li>Created wireframes and interactive prototypes.</li>
                    </ul>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="projects">
      <div class="title-container">
        <h4 class="tags">Browse My Recent</h4>
        <h1 class="title">Projects</h1>
      </div>

      <div class="project-container">
        <div class="card-container">
          <div class="swiper mySwiper">
            <div class="swiper-wrapper">
              
              <div class="swiper-slide">
                <div class="card-top">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80" alt="Project 1" class="project-img" style="object-fit: cover;" />
                  <h2 class="project-title">Analytics Dashboard</h2>
                  <div class="badge">
                    <badge class="badge-icon html">HTML</badge>
                    <badge class="badge-icon css">CSS</badge>
                  </div>
                </div>
                <div class="card-button">
                  <button class="btn-color-2 project-btn" onclick="window.open('#', '_blank')">Github</button>
                  <button class="btn-color-2 project-btn">Live Demo</button>
                </div>
              </div>

              <div class="swiper-slide">
                <div class="card-top">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80" alt="Project 2" class="project-img" style="object-fit: cover;" />
                  <h2 class="project-title">Minimalist E-Commerce</h2>
                  <div class="badge">
                    <badge class="badge-icon react">React</badge>
                    <badge class="badge-icon nextjs">Next.js</badge>
                  </div>
                </div>
                <div class="card-button">
                  <button class="btn-color-2 project-btn" onclick="window.open('#', '_blank')">Github</button>
                  <button class="btn-color-2 project-btn">Live Demo</button>
                </div>
              </div>

              <div class="swiper-slide">
                <div class="card-top">
                  <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=400&q=80" alt="Project 3" class="project-img" style="object-fit: cover;" />
                  <h2 class="project-title">Design System</h2>
                  <div class="badge">
                    <badge class="badge-icon flutter">Figma</badge>
                  </div>
                </div>
                <div class="card-button">
                  <button class="btn-color-2 project-btn" onclick="window.open('#', '_blank')">Github</button>
                  <button class="btn-color-2 project-btn">Live Demo</button>
                </div>
              </div>

            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact">
      <div class="title-container">
        <h4 class="tags">Let's Connect</h4>
        <h1 class="title">Contact Me</h1>
      </div>

      <div class="contact-container">
        <form action="#" method="post">
          <div class="profile">
            <div class="input-name">
              <h2 class="contact-input">Name</h2>
              <input type="text" name="name" placeholder="Enter Your Name" />
            </div>
            <div class="input-email">
              <h2 class="contact-input">Email</h2>
              <input type="email" name="email" placeholder="Enter Your Email" />
            </div>
          </div>
          <div class="message">
            <h2 class="contact-input">Message:</h2>
            <textarea name="message" placeholder="Your Message"></textarea>
          </div>
        </form>
        <button type="submit" class="btn">
          Send <i class="fas fa-paper-plane"></i>
        </button>
      </div>
    </section>

    <footer id="footer">
      <h2 class="copyright">2024 Alex Doe Portfolio Template. Open Source MIT License.</h2>
    </footer>

    <script src="script.js"></script>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script>
      var swiper = new Swiper(".mySwiper", {
        loop: true,
        pagination: { el: ".swiper-pagination", clickable: true },
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        breakpoints: {
          0: { slidesPerView: 1, slidesPerGroup: 1 },
          768: { slidesPerView: 2, spaceBetween: 10, slidesPerGroup: 2 },
          1100: { slidesPerView: 3, spaceBetween: 10, slidesPerGroup: 3 }
        }
      });
    </script>
  </body>
</html>`;

fs.writeFileSync('index.html', htmlContent);
console.log('index.html successfully updated to modern minimalist template.');