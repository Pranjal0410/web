import './style.css'

document.querySelector('#app').innerHTML = `
  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <a href="#hero" class="nav-logo">Pratham<span>Grover</span></a>
      <ul class="nav-links" id="navLinks">
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#focus">Focus</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <section id="hero" class="hero">
    <div class="hero-bg-grid" aria-hidden="true"></div>
    <div class="hero-content">
      <p class="hero-greeting">Hello, I'm</p>
      <h1 class="hero-name">Pratham Grover</h1>
      <h2 class="hero-title">BBA Student &nbsp;|&nbsp; Finance, Economics &amp; Digital Business</h2>
      <p class="hero-bio">
        Exploring financial markets, business strategy and data-driven decision making
        at the intersection of finance, entrepreneurship and digital business.
      </p>
      <div class="hero-actions">
        <a href="#education" class="btn btn-primary">View My Journey</a>
        <a href="#contact" class="btn btn-outline">Let's Connect</a>
      </div>
    </div>
    <div class="hero-visual" aria-hidden="true">
      <div class="visual-ring visual-ring--outer"></div>
      <div class="visual-ring visual-ring--middle"></div>
      <div class="visual-ring visual-ring--inner"></div>
      <svg class="visual-chart" viewBox="0 0 300 300" fill="none" preserveAspectRatio="xMidYMid meet">
        <polyline points="40,210 80,190 120,200 160,150 200,165 240,110 270,130"
          stroke="var(--primary-400)" stroke-width="1.5" opacity="0.35" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="40" cy="210" r="3" fill="var(--primary-400)" opacity="0.4" />
        <circle cx="80" cy="190" r="3" fill="var(--primary-400)" opacity="0.4" />
        <circle cx="120" cy="200" r="3" fill="var(--primary-400)" opacity="0.4" />
        <circle cx="160" cy="150" r="3" fill="var(--primary-400)" opacity="0.4" />
        <circle cx="200" cy="165" r="3" fill="var(--primary-400)" opacity="0.4" />
        <circle cx="240" cy="110" r="3" fill="var(--primary-400)" opacity="0.4" />
        <circle cx="270" cy="130" r="3" fill="var(--primary-400)" opacity="0.4" />
        <polyline points="40,250 80,240 120,245 160,220 200,225 240,200 270,210"
          stroke="var(--accent-400)" stroke-width="1" opacity="0.2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <div class="visual-monogram">PG</div>
      <div class="visual-dot visual-dot--1"></div>
      <div class="visual-dot visual-dot--2"></div>
      <div class="visual-dot visual-dot--3"></div>
    </div>
  </section>

  <section id="about" class="section">
    <div class="section-header">
      <span class="section-tag">01</span>
      <h2 class="section-title">About Me</h2>
    </div>
    <div class="about-grid">
      <div class="about-text">
        <p>
          I'm a BBA student pursuing Digital Business &amp; Entrepreneurship at
          IIM Bangalore alongside Finance &amp; Economics at Christ University.
          I'm particularly interested in understanding how financial markets,
          business strategy, economics and data come together to shape better decisions.
        </p>
        <p>
          I enjoy breaking down complex business problems, exploring how markets
          and businesses work, and approaching decisions through a combination of
          analytical thinking and creative problem solving.
        </p>
      </div>
      <div class="focus-cards">
        <div class="focus-card">
          <div class="focus-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/></svg>
          </div>
          <h3 class="focus-card-title">Finance</h3>
          <p class="focus-card-desc">Financial markets, financial modelling and economic analysis</p>
        </div>
        <div class="focus-card">
          <div class="focus-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 3v9l6 3"/></svg>
          </div>
          <h3 class="focus-card-title">Business Strategy</h3>
          <p class="focus-card-desc">Understanding businesses, markets and strategic decisions</p>
        </div>
        <div class="focus-card">
          <div class="focus-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M3 9h18"/></svg>
          </div>
          <h3 class="focus-card-title">Digital Business</h3>
          <p class="focus-card-desc">Exploring entrepreneurship, technology and digital business models</p>
        </div>
        <div class="focus-card">
          <div class="focus-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-8M22 20v-4"/></svg>
          </div>
          <h3 class="focus-card-title">Data &amp; Analysis</h3>
          <p class="focus-card-desc">Using data and structured thinking to understand problems and make decisions</p>
        </div>
      </div>
    </div>
  </section>

  <section id="education" class="section section-alt">
    <div class="section-header">
      <span class="section-tag">02</span>
      <h2 class="section-title">Education</h2>
    </div>
    <div class="timeline">
      <div class="timeline-item timeline-item--featured">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <span class="timeline-date">September 2025 — October 2028</span>
          <h3 class="timeline-role">Indian Institute of Management Bangalore</h3>
          <p class="timeline-company">Bachelor of Business Administration — BBA DBE</p>
          <div class="timeline-tags">
            <span class="timeline-tag">Digital Business</span>
            <span class="timeline-tag">Entrepreneurship</span>
          </div>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <span class="timeline-date">June 2025 — March 2028</span>
          <h3 class="timeline-role">Christ University, Bangalore</h3>
          <p class="timeline-company">Bachelor of Business Administration — BBA</p>
          <div class="timeline-tags">
            <span class="timeline-tag">Finance</span>
            <span class="timeline-tag">Economics</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="focus" class="section">
    <div class="section-header">
      <span class="section-tag">03</span>
      <h2 class="section-title">Areas of Interest</h2>
    </div>
    <div class="interest-grid">
      <article class="interest-card">
        <div class="interest-number">01</div>
        <h3 class="interest-title">Financial Markets</h3>
        <p class="interest-desc">Understanding market behaviour, financial instruments and the factors influencing investment decisions.</p>
        <div class="interest-tags">
          <span class="interest-tag">Financial Analysis</span>
          <span class="interest-tag">Economic Analysis</span>
        </div>
      </article>
      <article class="interest-card">
        <div class="interest-number">02</div>
        <h3 class="interest-title">Finance &amp; Financial Modelling</h3>
        <p class="interest-desc">Developing a stronger foundation in financial analysis, modelling and business valuation.</p>
        <div class="interest-tags">
          <span class="interest-tag">Financial Modelling</span>
          <span class="interest-tag">Financial Accounting</span>
        </div>
      </article>
      <article class="interest-card">
        <div class="interest-number">03</div>
        <h3 class="interest-title">Business Strategy</h3>
        <p class="interest-desc">Exploring how businesses create value, compete, grow and make strategic decisions.</p>
        <div class="interest-tags">
          <span class="interest-tag">Business Strategy</span>
          <span class="interest-tag">Creative Problem Solving</span>
        </div>
      </article>
      <article class="interest-card">
        <div class="interest-number">04</div>
        <h3 class="interest-title">Digital Business &amp; Entrepreneurship</h3>
        <p class="interest-desc">Understanding digital business models, entrepreneurship and how technology changes the way businesses operate.</p>
        <div class="interest-tags">
          <span class="interest-tag">Digital Business</span>
          <span class="interest-tag">Entrepreneurship</span>
        </div>
      </article>
    </div>

    <div class="skills-block">
      <h3 class="skills-block-title">Core Skills</h3>
      <div class="skills-columns">
        <div class="skills-col">
          <h4 class="skills-col-title">Finance &amp; Analysis</h4>
          <div class="skill-tags">
            <span class="skill-tag">Financial Modelling</span>
            <span class="skill-tag">Financial Accounting</span>
            <span class="skill-tag">Economic Analysis</span>
            <span class="skill-tag">Data Analysis</span>
          </div>
        </div>
        <div class="skills-col">
          <h4 class="skills-col-title">Business</h4>
          <div class="skill-tags">
            <span class="skill-tag">Business Strategy</span>
            <span class="skill-tag">Creative Problem Solving</span>
            <span class="skill-tag">Digital Business</span>
            <span class="skill-tag">Entrepreneurship</span>
          </div>
        </div>
        <div class="skills-col">
          <h4 class="skills-col-title">Tools</h4>
          <div class="skill-tags">
            <span class="skill-tag">Microsoft Excel</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="projects" class="section section-alt">
    <div class="section-header">
      <span class="section-tag">04</span>
      <h2 class="section-title">Projects &amp; Work</h2>
    </div>
    <p class="projects-intro">
      Business, finance and data-driven projects will be showcased here.
    </p>
    <div class="projects-grid">
      <article class="project-card project-card--placeholder">
        <div class="project-category">Finance &amp; Markets</div>
        <div class="project-placeholder-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/></svg>
        </div>
        <h3 class="project-title">Case study coming soon</h3>
        <p class="project-desc">This card will feature a finance or markets-related project once completed.</p>
      </article>
      <article class="project-card project-card--placeholder">
        <div class="project-category">Business Analysis</div>
        <div class="project-placeholder-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 3v9l6 3"/></svg>
        </div>
        <h3 class="project-title">Case study coming soon</h3>
        <p class="project-desc">This card will feature a business analysis or strategy project once completed.</p>
      </article>
      <article class="project-card project-card--placeholder">
        <div class="project-category">Data &amp; Strategy</div>
        <div class="project-placeholder-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M3 9h18"/></svg>
        </div>
        <h3 class="project-title">Case study coming soon</h3>
        <p class="project-desc">This card will feature a data-driven strategy project once completed.</p>
      </article>
    </div>
  </section>

  <section id="contact" class="section">
    <div class="section-header">
      <span class="section-tag">05</span>
      <h2 class="section-title">Let's Connect</h2>
    </div>
    <p class="contact-intro">
      Interested in finance, business strategy, entrepreneurship and the opportunities
      where they intersect. I'm open to connecting with people working on interesting
      problems and exploring internship opportunities.
    </p>
    <div class="contact-grid">
      <a href="https://www.linkedin.com/in/pratham-grover-/" target="_blank" rel="noopener noreferrer" class="contact-card contact-card--primary">
        <div class="contact-icon">
          <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
        </div>
        <span class="contact-label">LinkedIn</span>
        <span class="contact-value">linkedin.com/in/pratham-grover-</span>
      </a>
      <div class="contact-card">
        <div class="contact-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="28" height="28"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <span class="contact-label">Location</span>
        <span class="contact-value">Bengaluru, Karnataka, India</span>
      </div>
    </div>
    <div class="contact-cta">
      <a href="https://www.linkedin.com/in/pratham-grover-/" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Connect on LinkedIn</a>
    </div>
  </section>

  <footer class="footer">
    <p class="footer-name">Pratham Grover &copy; <span id="year"></span></p>
    <p class="footer-sub">Finance &nbsp;&bull;&nbsp; Business &nbsp;&bull;&nbsp; Digital Strategy</p>
  </footer>
`

document.getElementById('year').textContent = new Date().getFullYear()

const navToggle = document.getElementById('navToggle')
const navLinks = document.getElementById('navLinks')

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active')
  navToggle.classList.toggle('active')
})

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active')
    navToggle.classList.remove('active')
  })
})

const navbar = document.getElementById('navbar')
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
})

const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal')
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

document.querySelectorAll('.section, .hero-content, .hero-visual').forEach((el) => {
  el.classList.add('fade-in')
  observer.observe(el)
})
