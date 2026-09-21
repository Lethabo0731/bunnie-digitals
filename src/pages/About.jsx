import { Link } from "react-router-dom";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import profileImage from "../assets/Lethabo.jpeg";

function About() {
  return (
    <main className="inner-page">
      {/* PAGE HERO */}
      <section className="page-hero about-page-hero">
        <div className="page-hero-glow"></div>

        <div className="container">
          <span className="eyebrow">ABOUT BUNNIE DIGITALS</span>

          <h1>
            Building websites with
            <span> purpose.</span>
          </h1>

          <p>
            Bunnie Digitals is a web development brand focused on creating
            modern, responsive and practical websites for businesses,
            entrepreneurs and brands.
          </p>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="section about-intro-section">
        <div className="container about-intro-grid">
          <div className="about-image-column">
            <div className="about-image-frame">
              <img
                src={profileImage}
                alt="Lethabo Mashimbye - Founder of Bunnie Digitals"
              />

              <div className="about-image-label">
                <span>THE PERSON</span>
                <strong>BEHIND THE BRAND</strong>
              </div>
            </div>
          </div>

          <div className="about-copy">
            <span className="eyebrow">THE STORY</span>

            <h2>
              Meet the person
              <span> behind Bunnie Digitals.</span>
            </h2>

            <p>
              I'm Lethabo Mashimbye, the developer behind Bunnie Digitals.
              I created Bunnie Digitals to help businesses and individuals
              turn their ideas into professional websites.
            </p>

            <p>
              My approach combines modern web development with a strong focus
              on usability, responsive design and the overall experience a
              customer has when they visit a website.
            </p>

            <p>
              Whether you're starting a new business, refreshing an existing
              brand or simply need a website that represents your business
              properly, the goal is to create something that works for you.
            </p>

            <Link to="/contact" className="btn btn-primary">
              Work With Me
              <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section className="section about-values-section">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">OUR APPROACH</span>

            <h2>
              Simple websites.
              <span> Clear purpose.</span>
            </h2>

            <p>
              A website shouldn't just look good. It should make it easier for
              people to understand your business and take the next step.
            </p>
          </div>

          <div className="about-values-grid">
            <article className="about-value-card">
              <span>01</span>

              <h3>Clarity</h3>

              <p>
                Visitors should quickly understand who you are, what you offer
                and how they can work with you.
              </p>
            </article>

            <article className="about-value-card">
              <span>02</span>

              <h3>Design</h3>

              <p>
                Your website should reflect your brand and create a strong
                first impression.
              </p>
            </article>

            <article className="about-value-card">
              <span>03</span>

              <h3>Functionality</h3>

              <p>
                A beautiful website still needs to work properly. We focus on
                responsive layouts and useful functionality.
              </p>
            </article>

            <article className="about-value-card">
              <span>04</span>

              <h3>Quality</h3>

              <p>
                Testing and attention to detail help create a smoother
                experience for your customers.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section about-process-section">
        <div className="container">
          <div className="about-process-card">
            <div className="about-process-intro">
              <span className="eyebrow">HOW WE WORK</span>

              <h2>
                From your idea
                <span> to your website.</span>
              </h2>

              <p>
                We keep communication simple and work through each stage of
                the project so you know what is happening.
              </p>

              <Link to="/services" className="text-link">
                Explore our services
                <FiArrowUpRight />
              </Link>
            </div>

            <div className="about-process-list">
              <div className="about-process-item">
                <span>01</span>

                <div>
                  <h3>DISCOVER</h3>
                  <p>
                    We discuss your business, audience, goals and website
                    requirements.
                  </p>
                </div>

                <FiCheck />
              </div>

              <div className="about-process-item">
                <span>02</span>

                <div>
                  <h3>DESIGN</h3>
                  <p>
                    We shape the structure, content and visual direction of
                    your website.
                  </p>
                </div>

                <FiCheck />
              </div>

              <div className="about-process-item">
                <span>03</span>

                <div>
                  <h3>DEVELOP</h3>
                  <p>
                    We turn the approved direction into a responsive,
                    functional website.
                  </p>
                </div>

                <FiCheck />
              </div>

              <div className="about-process-item">
                <span>04</span>

                <div>
                  <h3>LAUNCH</h3>
                  <p>
                    We prepare the website for deployment and help get it
                    online.
                  </p>
                </div>

                <FiCheck />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section final-cta-section">
        <div className="container">
          <div className="final-cta">
            <div>
              <span className="eyebrow">LET'S WORK TOGETHER</span>

              <h2>
                Your business deserves
                <span> a website that works.</span>
              </h2>

              <p>
                Ready to bring your idea online? Let's talk about your
                project.
              </p>
            </div>

            <Link to="/contact" className="btn btn-primary">
              Start Your Project
              <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;