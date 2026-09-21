import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    name: "Medicare Hospital",
    category: "Healthcare",
    description:
      "A modern hospital website concept designed around trust, accessibility and clear information for patients, services and medical departments.",
    technologies: "React • Vite • CSS",
    link: "https://medicare-hospital-mauve.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Lexora Attorneys",
    category: "Professional Services",
    description:
      "A professional website concept for a legal practice, focused on credibility, clear information and making it easy for potential clients to get in touch.",
    technologies: "React • Vite • CSS",
    link: "https://lexora-attorneys.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Ironstone Construction",
    category: "Construction",
    description:
      "A modern construction business website designed to showcase services, communicate professionalism and create a strong online presence.",
    technologies: "React • Vite • CSS",
    link: "https://ironstone-construction.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Lumière Beauty Studio",
    category: "Beauty & Wellness",
    description:
      "A stylish beauty studio website concept designed around visual appeal, services and an engaging customer experience.",
    technologies: "React • Vite • CSS",
    link: "https://lumiere-beauty-studio-tau.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Restaurant Website",
    category: "Hospitality",
    description:
      "A modern restaurant website concept featuring menu presentation, restaurant information and a polished hospitality-focused design.",
    technologies: "React • Vite • CSS",
    link: "https://restaurant-website-nu.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85",
  },
];

function Portfolio() {
  return (
    <main className="inner-page">

      {/* PAGE HERO */}
      <section className="page-hero portfolio-page-hero">
        <div className="page-hero-glow"></div>

        <div className="container">

          <div className="portfolio-hero-badge">
            <span className="portfolio-hero-badge-dot"></span>
            OUR PORTFOLIO
          </div>

          <h1 className="portfolio-hero-title">
            Work that brings
            <span className="portfolio-hero-title-italic">
              ideas online.
            </span>
          </h1>

          <p className="portfolio-hero-subtext">
            Explore a selection of websites created by Bunnie Digitals across
            different industries and business types.
          </p>

          <div className="portfolio-hero-meta">
            <div className="portfolio-hero-meta-item">
              <strong>{String(projects.length).padStart(2, "0")}</strong>
              <span>Projects</span>
            </div>

            <span className="portfolio-hero-meta-divider"></span>

            <div className="portfolio-hero-meta-item">
              <strong>07+</strong>
              <span>Industries</span>
            </div>

            <span className="portfolio-hero-meta-divider"></span>

            <div className="portfolio-hero-meta-item">
              <strong>100%</strong>
              <span>Live Sites</span>
            </div>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section className="section portfolio-section">
        <div className="container">

          <div className="portfolio-intro">

            <div className="portfolio-intro-left">
              <span className="eyebrow">SELECTED PROJECTS</span>

              <h2>
                Websites designed
                <span> for different ideas.</span>
              </h2>

              <div className="portfolio-intro-mark">
                <span className="portfolio-intro-mark-line"></span>
                <span className="portfolio-intro-mark-dot"></span>
              </div>
            </div>

            <div className="portfolio-intro-right">
              <p>
                Each project is designed around the business, its audience and
                the experience it needs to create online.
              </p>

              <div className="portfolio-intro-tags">
                <span>Websites</span>
                <span>Responsive</span>
                <span>Custom Built</span>
              </div>
            </div>

          </div>

          <div className="portfolio-grid">

            {projects.map((project, index) => (
              <article className="portfolio-card" key={project.name}>

                {/* WEBSITE PREVIEW */}
                <div className="portfolio-preview">

                  <div className="portfolio-browser">

                    <div className="portfolio-browser-bar">

                      <div className="browser-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>

                      <span className="browser-address">
                        {project.link
                          .replace("https://", "")
                          .replace("www.", "")
                          .replace("/", "")}
                      </span>

                    </div>

                    <div className="portfolio-cover">

                      <img
                        src={project.image}
                        alt={`${project.name} website preview`}
                        loading="lazy"
                      />

                      <div className="portfolio-cover-overlay"></div>

                      {/* ONLY THE LABEL — PROJECT NAME IS SHOWN BELOW */}
                      <div className="portfolio-cover-label">
                        <span>WEBSITE PROJECT</span>
                      </div>

                    </div>

                  </div>

                  <div className="portfolio-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                </div>

                {/* PROJECT INFORMATION */}
                <div className="portfolio-card-content">

                  <div className="portfolio-card-heading">

                    <div>
                      <span className="portfolio-category">
                        {project.category}
                      </span>

                      <h3>{project.name}</h3>
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="portfolio-external-link"
                      aria-label={`Open ${project.name} website`}
                    >
                      <FiExternalLink />
                    </a>

                  </div>

                  <p>{project.description}</p>

                  <div className="portfolio-card-footer">

                    <span>{project.technologies}</span>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="portfolio-view-link"
                    >
                      View Live Website
                      <FiArrowUpRight />
                    </a>

                  </div>

                </div>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section final-cta-section">
        <div className="container">

          <div className="final-cta">

            <div>
              <span className="eyebrow">YOUR PROJECT COULD BE NEXT</span>

              <h2>
                Have an idea?
                <span> Let's build it.</span>
              </h2>

              <p>
                Tell me what you have in mind and let's discuss the right
                website for your business.
              </p>
            </div>

            <a href="/contact" className="btn btn-primary">
              Start Your Project
              <FiArrowUpRight />
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Portfolio;