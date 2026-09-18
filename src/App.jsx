import { useState } from "react";
import {
  FiArrowUpRight,
  FiCheck,
  FiCode,
  FiDatabase,
  FiGithub,
  FiGlobe,
  FiMail,
  FiMenu,
  FiMonitor,
  FiSend,
  FiSmartphone,
  FiActivity,
  FiX,
} from "react-icons/fi";
import profileImage from "./assets/Lethabo.jpeg";
import "./App.css";

const projects = [
  {
    number: "01",
    title: "Lexora Attorneys",
    category: "Professional Services",
    description:
      "A sophisticated responsive website concept for a modern law firm, designed to communicate trust, professionalism and premium legal services.",
    technologies: ["React", "Vite", "CSS"],
    liveUrl: "https://lexora-attorneys.vercel.app/",
    previewUrl: "https://lexora-attorneys.vercel.app/",
  },
  {
    number: "02",
    title: "Ironstone Construction",
    category: "Construction",
    description:
      "A professional construction company website focused on strong visual presentation, clear services and an easy path for potential clients to enquire.",
    technologies: ["React", "Vite", "CSS"],
    liveUrl: "https://ironstone-construction.vercel.app/",
    previewUrl: "https://ironstone-construction.vercel.app/",
  },
  {
    number: "03",
    title: "Lumière Beauty Studio",
    category: "Beauty & Wellness",
    description:
      "A modern beauty studio website designed around elegant visuals, service presentation and a polished customer experience.",
    technologies: ["React", "Vite", "CSS"],
    liveUrl: "https://lumiere-beauty-studio-tau.vercel.app/",
    previewUrl: "https://lumiere-beauty-studio-tau.vercel.app/",
  },
  {
    number: "04",
    title: "Restaurant Website",
    category: "Hospitality",
    description:
      "A modern restaurant website with a premium visual identity, menu presentation and responsive layouts for customers browsing on any device.",
    technologies: ["React", "Vite", "CSS"],
    liveUrl: "https://restaurant-website-nu.vercel.app/",
    previewUrl: "https://restaurant-website-nu.vercel.app/",
  },
  {
    number: "05",
    title: "RecipeHub",
    category: "Web Application",
    description:
      "A recipe-sharing application where users can explore recipes and manage recipe content through an interactive React interface.",
    technologies: ["React", "Vite", "Local Storage"],
    liveUrl: "https://recipe-sharing-website-six.vercel.app/",
    previewUrl: "https://recipe-sharing-website-six.vercel.app/",
  },
];

const services = [
  {
    number: "01",
    icon: <FiMonitor />,
    title: "Business Websites",
    price: "R3,500",
    description:
      "Professional responsive websites for small businesses, entrepreneurs and growing brands.",
    features: [
      "Responsive design",
      "Multiple website sections",
      "Contact form",
      "Mobile optimisation",
      "Deployment",
    ],
  },
  {
    number: "02",
    icon: <FiGlobe />,
    title: "Landing Pages",
    price: "R1,500",
    description:
      "Focused landing pages designed to present a product, service, campaign or personal brand.",
    features: [
      "Single-page design",
      "Call-to-action sections",
      "Mobile responsive",
      "Modern UI",
      "Deployment",
    ],
  },
  {
    number: "03",
    icon: <FiSmartphone />,
    title: "E-commerce Websites",
    price: "R5,500",
    description:
      "Online stores designed to showcase products and provide customers with a smooth shopping experience.",
    features: [
      "Product presentation",
      "Responsive design",
      "Shopping experience",
      "Basic integrations",
      "Deployment",
    ],
  },
  {
    number: "04",
    icon: <FiCode />,
    title: "Website Redesign",
    price: "R2,000",
    description:
      "Modernise an existing website with a cleaner interface, improved responsiveness and better user experience.",
    features: [
      "UI improvements",
      "Responsive fixes",
      "Frontend updates",
      "Performance improvements",
      "Deployment support",
    ],
  },
  {
    number: "05",
    icon: <FiActivity />,
    title: "Bug Fixes & QA",
    price: "R500",
    description:
      "Frontend troubleshooting, functional testing and assistance with identifying and fixing website issues.",
    features: [
      "Bug investigation",
      "Frontend fixes",
      "Functional testing",
      "Responsive testing",
      "Basic QA support",
    ],
  },
  {
    number: "06",
    icon: <FiSend />,
    title: "Deployment & Setup",
    price: "R750",
    description:
      "Get an existing website published online and properly connected to its hosting environment.",
    features: [
      "Vercel deployment",
      "GitHub setup",
      "Domain connection",
      "Production build",
      "Deployment support",
    ],
  },
];

const skills = [
  { name: "React", icon: <FiCode /> },
  { name: "JavaScript", icon: <FiCode /> },
  { name: "HTML & CSS", icon: <FiMonitor /> },
  { name: "Java", icon: <FiCode /> },
  { name: "C#", icon: <FiCode /> },
  { name: ".NET", icon: <FiCode /> },
  { name: "PHP", icon: <FiCode /> },
  { name: "MySQL", icon: <FiDatabase /> },
  { name: "Node.js", icon: <FiCode /> },
  { name: "Python", icon: <FiCode /> },
  { name: "REST APIs", icon: <FiGlobe /> },
  { name: "QA & Testing", icon: <FiActivity /> },
  { name: "Git & GitHub", icon: <FiGithub /> },
  { name: "Responsive Design", icon: <FiSmartphone /> },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    setIsSending(true);
    setFormError(false);

    try {
      const response = await fetch(
        "https://formspree.io/f/xnpnnopq",
        {
          method: "POST",
          body: new FormData(form),
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        form.reset();
        setFormSubmitted(true);
      } else {
        setFormError(true);
      }
    } catch (error) {
      setFormError(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="site">
      {/* NAVIGATION */}
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#home" className="logo" onClick={closeMenu}>
            <span className="logo-mark">B</span>

            <span>
              <strong>Bunnie</strong>
              <small> DIGITALS</small>
            </span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#services" onClick={closeMenu}>
              Services
            </a>

            <a href="#work" onClick={closeMenu}>
              Work
            </a>

            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="nav-cta"
            >
              Let's Work Together
              <FiArrowUpRight />
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-glow hero-glow-one"></div>
          <div className="hero-glow hero-glow-two"></div>

          <div className="container hero-grid">
            <div className="hero-content">
              <div className="eyebrow">
                <span></span>
                SOFTWARE DEVELOPER
              </div>

              <h1>
                I build digital
                <span> experiences </span>
                that work.
              </h1>

              <p className="hero-description">
                I'm Lethabo Mashimbye, a software developer specialising
                in modern websites, frontend development, web applications
                and QA-focused testing.
              </p>

              <div className="hero-actions">
                <a href="#work" className="button button-primary">
                  View My Work
                  <FiArrowUpRight />
                </a>

                <a href="#contact" className="button button-secondary">
                  Hire Me
                  <FiSend />
                </a>
              </div>

              <div className="hero-meta">
                <span>Based in South Africa</span>
                <span className="meta-line"></span>
                <span>Available for projects</span>
              </div>
            </div>

            <div className="hero-photo">
              <div className="photo-frame">
                <div className="photo-placeholder">
                  <img
                    src={profileImage}
                    alt="Lethabo Mashimbye - Software Developer"
                  />
                </div>
              </div>

              <div className="photo-label">
                <span>LETHABO</span>
                <span>MASHIMBYE</span>
              </div>

              <div className="hero-card">
                <FiCode />

                <div>
                  <strong>Software Developer</strong>
                  <span>Websites · Apps · QA</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO STRIP */}
        <section className="intro-strip">
          <div className="container intro-strip-inner">
            <p>
              Websites &nbsp;•&nbsp; Web Applications &nbsp;•&nbsp;
              Frontend Development &nbsp;•&nbsp; QA & Testing
            </p>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div className="section-label">
              <span>01</span>
              ABOUT ME
            </div>

            <div className="about-content">
              <h2>
                Technology should make
                <em> things easier.</em>
              </h2>

              <div className="about-text">
                <p>
                  I'm a software developer who enjoys turning ideas into
                  functional, responsive and visually polished digital
                  experiences.
                </p>

                <p>
                  My work combines frontend development with software
                  testing and problem-solving. I work with technologies
                  including React, JavaScript, Java, C#, .NET, PHP, MySQL,
                  Node.js and Python.
                </p>
              </div>

              <div className="about-highlights">
                <div>
                  <strong>01</strong>
                  <span>Development</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>Testing</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>Problem Solving</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="section-label">
                  <span>02</span>
                  SERVICES
                </div>

                <h2>
                  What I can
                  <em> build for you.</em>
                </h2>
              </div>

              <p>
                Starting prices are shown below. Every project is
                different, so a final quote can be provided after
                understanding your requirements.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article
                  className="service-card"
                  key={service.number}
                >
                  <div className="service-number-large">
                    {service.number}
                  </div>

                  <div className="service-top">
                    <span className="service-icon">
                      {service.icon}
                    </span>

                    <span className="service-arrow">
                      <FiArrowUpRight />
                    </span>
                  </div>

                  <div className="service-main">
                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <div className="service-price">
                      <span>Starting from</span>
                      <strong>{service.price}</strong>
                    </div>
                  </div>

                  <div className="service-divider"></div>

                  <ul className="service-features">
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <FiCheck />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="#contact" className="service-link">
                    Enquire about this service
                    <FiArrowUpRight />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section className="section work-section" id="work">
          <div className="container">
            <div className="section-heading work-heading">
              <div>
                <div className="section-label">
                  <span>03</span>
                  SELECTED WORK
                </div>

                <h2>
                  Projects that are
                  <em> live.</em>
                </h2>
              </div>

              <p>
                Explore websites and applications I've built and
                deployed online.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article
                  className="project-card"
                  key={project.number}
                >
                  {/* WEBSITE COVER PREVIEW */}
                  <div className="project-visual project-preview">
                    <span className="project-number">
                      {project.number}
                    </span>

                    <div className="preview-browser-bar">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="preview-window">
                      <iframe
                        src={project.previewUrl}
                        title={`${project.title} website preview`}
                        loading="lazy"
                      />
                    </div>

                    <div className="preview-fade"></div>
                  </div>

                  {/* PROJECT INFORMATION */}
                  <div className="project-content">
                    <div className="project-category">
                      {project.category}
                    </div>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="project-tech">
                      {project.technologies.map((technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="project-actions">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link primary-link"
                      >
                        View Live Website
                        <FiArrowUpRight />
                      </a>

                      <span className="project-live">
                        <span></span>
                        LIVE
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section skills-section" id="skills">
          <div className="container skills-grid">
            <div>
              <div className="section-label">
                <span>04</span>
                SKILLS
              </div>

              <h2>
                Tools I use to turn
                <em> ideas into reality.</em>
              </h2>

              <p className="skills-description">
                My technical toolkit covers frontend development,
                backend fundamentals, databases, APIs and software
                quality assurance.
              </p>
            </div>

            <div className="skills-list">
              {skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <span className="skill-icon">
                    {skill.icon}
                  </span>

                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY WORK WITH ME */}
        <section className="why-section">
          <div className="container why-container">
            <div className="why-header">
              <div className="section-label light-label">
                <span>05</span>
                WHY WORK WITH ME
              </div>

              <div className="why-heading">
                <h2>
                  You bring the idea.
                  <em> I turn it into something real.</em>
                </h2>

                <p>
                  Building a website is more than writing code. I focus on
                  creating digital experiences that are useful, responsive,
                  tested and ready to be used by real people.
                </p>
              </div>
            </div>

            <div className="why-cards">
              <article className="why-card">
                <div className="why-card-top">
                  <span>01</span>
                  <div className="why-card-line"></div>
                </div>

                <div className="why-card-icon">
                  <FiMonitor />
                </div>

                <h3>User-focused</h3>

                <p>
                  I build responsive websites with the people using them
                  in mind, keeping navigation clear and experiences easy
                  across desktop, tablet and mobile.
                </p>
              </article>

              <article className="why-card">
                <div className="why-card-top">
                  <span>02</span>
                  <div className="why-card-line"></div>
                </div>

                <div className="why-card-icon">
                  <FiActivity />
                </div>

                <h3>Quality-first</h3>

                <p>
                  I don't stop at making something look good. I test
                  functionality, interactions, responsiveness and common
                  user flows to catch issues before launch.
                </p>
              </article>

              <article className="why-card">
                <div className="why-card-top">
                  <span>03</span>
                  <div className="why-card-line"></div>
                </div>

                <div className="why-card-icon">
                  <FiCode />
                </div>

                <h3>Clear process</h3>

                <p>
                  From understanding the requirements to building and
                  refining the project, I keep the development process
                  focused and practical.
                </p>
              </article>

              <article className="why-card">
                <div className="why-card-top">
                  <span>04</span>
                  <div className="why-card-line"></div>
                </div>

                <div className="why-card-icon">
                  <FiGlobe />
                </div>

                <h3>Ready to launch</h3>

                <p>
                  I can take a project beyond development by preparing
                  the production build, connecting GitHub and deploying
                  the finished website online.
                </p>
              </article>
            </div>

            <div className="why-process">
              <div className="process-label">
                MY APPROACH
              </div>

              <div className="process-flow">
                <div className="process-step">
                  <span>01</span>
                  <strong>IDEA</strong>
                </div>

                <div className="process-arrow">
                  →
                </div>

                <div className="process-step">
                  <span>02</span>
                  <strong>BUILD</strong>
                </div>

                <div className="process-arrow">
                  →
                </div>

                <div className="process-step">
                  <span>03</span>
                  <strong>TEST</strong>
                </div>

                <div className="process-arrow">
                  →
                </div>

                <div className="process-step">
                  <span>04</span>
                  <strong>LAUNCH</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact-section" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <div className="section-label">
                <span>06</span>
                LET'S WORK TOGETHER
              </div>

              <h2>
                Have a project
                <em> in mind?</em>
              </h2>

              <p>
                Tell me what you would like to build, improve or fix.
                I'll review your requirements and get back to you.
              </p>

              <div className="contact-info">
                <div>
                  <FiMail />

                  <div>
                    <span>EMAIL</span>
                    <strong>
                      lethabomash0731@icloud.com
                    </strong>
                  </div>
                </div>

                <div>
                  <FiGithub />

                  <div>
                    <span>GITHUB</span>
                    <strong>www.github.com/Lethabo0731</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrap">
              {formSubmitted ? (
                <div className="form-success">
                  <div className="success-icon">
                    <FiCheck />
                  </div>

                  <h3>Thanks for getting in touch.</h3>

                  <p>
                    Your enquiry has been received. I'll get back to
                    you as soon as possible.
                  </p>

                  <button
                    className="button button-primary"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormError(false);
                    }}
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <label>
                      Your name

                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                      />
                    </label>

                    <label>
                      Email address

                      <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        required
                      />
                    </label>
                  </div>

                  <div className="form-row">
                    <label>
                      Service

                      <select
                        name="service"
                        required
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a service
                        </option>

                        <option>Business Website</option>
                        <option>Landing Page</option>
                        <option>E-commerce Website</option>
                        <option>Website Redesign</option>
                        <option>Bug Fixes & QA</option>
                        <option>Deployment & Setup</option>
                        <option>Other</option>
                      </select>
                    </label>

                    <label>
                      Budget

                      <select
                        name="budget"
                        required
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a budget
                        </option>

                        <option>Under R2,000</option>
                        <option>R2,000 – R5,000</option>
                        <option>R5,000 – R10,000</option>
                        <option>R10,000+</option>
                        <option>I'm not sure yet</option>
                      </select>
                    </label>
                  </div>

                  <label>
                    Tell me about your project

                    <textarea
                      name="message"
                      rows="6"
                      placeholder="What would you like to build?"
                      required
                    ></textarea>
                  </label>

                  {formError && (
                    <p className="form-error">
                      Something went wrong while sending your enquiry.
                      Please try again.
                    </p>
                  )}

                  <button
                    type="submit"
                    className="button button-primary"
                    disabled={isSending}
                  >
                    {isSending ? "Sending..." : "Send Enquiry"}
                    {!isSending && <FiSend />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-top">
          <div>
            <a href="#home" className="logo footer-logo">
              <span className="logo-mark">B</span>

              <span>
                <strong>Bunnie</strong>
                <small> DIGITALS</small>
              </span>
            </a>

            <p>
              Websites, applications and digital solutions
              <br />
              built with purpose.
            </p>
          </div>

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>
            © 2026 Bunnie Digitals. All rights reserved.
          </span>

          <span>
            Built by <strong>Lethabo Mashimbye</strong>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;