import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiCheck,
  FiMonitor,
  FiSmartphone,
  FiCode,
} from "react-icons/fi";

function Home() {
  return (
    <main className="home-page">

      {/* HERO — CENTERED LAYOUT */}
      <section className="home-hero">
        <div className="home-hero-glow home-hero-glow-one"></div>
        <div className="home-hero-glow home-hero-glow-two"></div>

        <div className="container home-hero-center">

          {/* BADGE */}
          <div className="home-hero-badge">
            <span className="home-hero-badge-dot"></span>
            Build Your Online Identity Today
          </div>

          {/* HEADLINE */}
          <h1 className="home-hero-title">
            Websites built for businesses.
            <span className="home-hero-title-italic">
              We build your presence.
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="home-hero-subtext">
            We don't just build websites — we create modern, responsive
            and professional experiences that help your business grow
            online with confidence.
          </p>

          {/* ACTIONS */}
          <div className="home-hero-actions">
            <Link to="/contact" className="btn btn-primary">
              Start a Project
              <FiArrowUpRight />
            </Link>

            <Link to="/portfolio" className="btn btn-secondary">
              View Our Work
            </Link>
          </div>

          {/* TRUST STRIP */}
          <div className="home-hero-trust">

            <span className="home-hero-trust-label">
              BUILT WITH
            </span>

            <div className="home-hero-trust-logos">
              <span>React</span>
              <span>Vite</span>
              <span>CSS</span>
              <span>Vercel</span>
              <span>Figma</span>
            </div>

          </div>

        </div>
      </section>


      {/* INTRODUCTION */}
      <section className="section home-intro-section">
        <div className="container">

          <div className="home-intro">

            {/* LEFT COLUMN — LABEL + STATS */}
            <div className="home-intro-label">

              <span className="eyebrow">YOUR DIGITAL PRESENCE</span>

              <div className="home-intro-mark">
                <span className="home-intro-mark-line"></span>
                <span className="home-intro-mark-dot"></span>
              </div>

              <div className="home-intro-stats">

                <div className="home-intro-stat">
                  <strong>100%</strong>
                  <span>Responsive builds</span>
                </div>

                <div className="home-intro-stat">
                  <strong>1:1</strong>
                  <span>Direct collaboration</span>
                </div>

              </div>

            </div>


            {/* RIGHT COLUMN — CONTENT */}
            <div className="home-intro-content">

              <h2>
                Your website is often the
                <span> first impression.</span>
              </h2>

              <p className="home-intro-lede">
                Bunnie Digitals helps businesses turn their ideas into
                professional digital experiences. We focus on creating
                websites that are visually strong, easy to use and built
                around what your business actually needs.
              </p>

              <Link to="/about" className="home-intro-cta">

                <span className="home-intro-cta-text">
                  <small>Get to know the studio</small>
                  Meet the person behind Bunnie Digitals
                </span>

                <span className="home-intro-cta-icon">
                  <FiArrowUpRight />
                </span>

              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* WHAT WE DO */}
      <section className="section home-services-preview">
        <div className="container">

          <div className="section-heading">

            <div>
              <span className="eyebrow">WHAT WE DO</span>

              <h2>
                Websites that look good.
                <span> Websites that work.</span>
              </h2>
            </div>

            <p>
              From a simple business website to a more advanced digital
              experience, we build with your goals and customers in mind.
            </p>

          </div>


          <div className="home-feature-grid">

            <article className="home-feature-card">

              <div className="home-feature-icon">
                <FiMonitor />
              </div>

              <span>01</span>

              <h3>Professional Design</h3>

              <p>
                Clean, modern layouts designed to give your business a
                professional online presence.
              </p>

            </article>


            <article className="home-feature-card">

              <div className="home-feature-icon">
                <FiSmartphone />
              </div>

              <span>02</span>

              <h3>Responsive Development</h3>

              <p>
                Websites designed to provide a smooth experience across
                desktops, tablets and mobile devices.
              </p>

            </article>


            <article className="home-feature-card">

              <div className="home-feature-icon">
                <FiCode />
              </div>

              <span>03</span>

              <h3>Practical Functionality</h3>

              <p>
                We focus on useful functionality that makes your website
                work for both you and your customers.
              </p>

            </article>

          </div>


          <div className="home-services-link">

            <Link to="/services" className="text-link">
              Explore our services
              <FiArrowUpRight />
            </Link>

          </div>

        </div>
      </section>


      {/* WHY BUNNIE DIGITALS */}
      <section className="section home-why-section">
        <div className="container">

          <div className="home-why-grid">

            <div className="home-why-heading">

              <span className="eyebrow">
                WHY BUNNIE DIGITALS
              </span>

              <h2>
                More than just
                <span> a website.</span>
              </h2>

              <p>
                Every project should have a clear purpose. We take the time
                to understand what you're trying to achieve before building
                the experience around it.
              </p>

            </div>


            <div className="home-why-cards">

              <div className="home-why-card">
                <div className="home-why-card-top">
                  <span className="home-why-card-number">01</span>
                  <div className="home-why-card-icon">
                    <FiCheck />
                  </div>
                </div>

                <h3>Built around your business</h3>

                <p>
                  Your website should reflect what makes your business
                  different.
                </p>
              </div>


              <div className="home-why-card">
                <div className="home-why-card-top">
                  <span className="home-why-card-number">02</span>
                  <div className="home-why-card-icon">
                    <FiCheck />
                  </div>
                </div>

                <h3>Designed for your customers</h3>

                <p>
                  Clear navigation and thoughtful layouts make it easier
                  for visitors to take action.
                </p>
              </div>


              <div className="home-why-card">
                <div className="home-why-card-top">
                  <span className="home-why-card-number">03</span>
                  <div className="home-why-card-icon">
                    <FiCheck />
                  </div>
                </div>

                <h3>Focused on quality</h3>

                <p>
                  Responsive layouts, testing and attention to detail are
                  part of the process.
                </p>
              </div>


              <div className="home-why-card">
                <div className="home-why-card-top">
                  <span className="home-why-card-number">04</span>
                  <div className="home-why-card-icon">
                    <FiCheck />
                  </div>
                </div>

                <h3>Built to grow with you</h3>

                <p>
                  Your website can evolve as your business and digital
                  needs change.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* FINAL CTA */}
      <section className="section home-final-section">
        <div className="container">

          <div className="home-final-cta">

            <div className="home-final-content">

              <span className="eyebrow">
                START YOUR PROJECT
              </span>

              <h2>
                Ready to build your
                <span> online presence?</span>
              </h2>

              <p>
                Let's talk about your business, your goals and the website
                you need.
              </p>

            </div>


            <Link to="/contact" className="btn btn-primary">
              Let's Work Together
              <FiArrowUpRight />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Home;