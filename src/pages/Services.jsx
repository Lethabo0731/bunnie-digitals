import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiCheck,
  FiCode,
  FiEdit3,
  FiMonitor,
  FiSettings,
  FiShoppingBag,
  FiTool,
  FiZap,
} from "react-icons/fi";

const packages = [
  {
    number: "01",
    icon: <FiMonitor />,
    name: "Starter Website",
    price: "From R3,500",
    description:
      "A clean and professional website for individuals, small businesses and new brands that need a strong online presence.",
    features: [
      "Responsive website design",
      "Professional page layout",
      "Mobile optimisation",
      "Contact section",
      "Social media links",
      "Basic deployment support",
    ],
  },
  {
    number: "02",
    icon: <FiZap />,
    name: "Business Website",
    price: "From R5,500",
    description:
      "A complete business website designed to establish credibility, showcase your services and help customers take action.",
    features: [
      "Multiple website pages",
      "Custom website design",
      "Responsive development",
      "Contact form",
      "Service or product sections",
      "Mobile optimisation",
      "Deployment support",
    ],
  },
  {
    number: "03",
    icon: <FiShoppingBag />,
    name: "E-commerce Website",
    price: "From R7,500",
    description:
      "An online store designed to help businesses showcase products and create a smooth shopping experience.",
    features: [
      "Product pages",
      "Product categories",
      "Shopping experience",
      "Mobile responsive design",
      "Store setup support",
      "Payment integration support",
      "Deployment assistance",
    ],
  },
];

const additionalServices = [
  {
    icon: <FiEdit3 />,
    name: "Website Redesign",
    price: "From R2,000",
    description:
      "Give an existing website a cleaner, more modern and professional look.",
  },
  {
    icon: <FiTool />,
    name: "Bug Fixes & QA",
    price: "From R500",
    description:
      "Fix website issues, test functionality and identify problems affecting the user experience.",
  },
  {
    icon: <FiSettings />,
    name: "Deployment & Setup",
    price: "From R750",
    description:
      "Get your finished website prepared and deployed so customers can access it online.",
  },
  {
    icon: <FiCode />,
    name: "Custom Web Solutions",
    price: "Let's discuss",
    description:
      "Have a specific website or web application idea? Let's discuss what you need.",
  },
];

function Services() {
  return (
    <main className="inner-page">
      {/* ==================== PAGE HERO ==================== */}
      <section className="page-hero services-page-hero">
        <div className="page-hero-glow"></div>

        <div className="container">
          <span className="eyebrow">SERVICES & PACKAGES</span>

          <h1>
            Websites built
            <span> around your needs.</span>
          </h1>

          <p>
            From professional business websites to online stores and website
            improvements, Bunnie Digitals helps turn your ideas into a digital
            presence you can be proud of.
          </p>
        </div>
      </section>

      {/* ==================== MAIN PACKAGES ==================== */}
      <section className="section services-packages-section">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">WEBSITE PACKAGES</span>

            <h2>
              Choose the website
              <span> you need.</span>
            </h2>

            <p>
              These packages provide a starting point for different types of
              projects. Every website can be discussed and tailored around
              your business.
            </p>
          </div>

          <div className="services-packages-grid">
            {packages.map((pkg) => (
              <article className="service-package-card" key={pkg.name}>
                <div className="service-package-top">
                  <span className="service-number">{pkg.number}</span>

                  <div className="service-package-icon">{pkg.icon}</div>
                </div>

                <h3>{pkg.name}</h3>

                <div className="service-price">{pkg.price}</div>

                <p>{pkg.description}</p>

                <div className="service-divider"></div>

                <h4>What's included</h4>

                <ul>
                  {pkg.features.map((feature) => (
                    <li key={feature}>
                      <FiCheck />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="service-package-button">
                  Ask About This Package
                  <FiArrowUpRight />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ADDITIONAL SERVICES ==================== */}
      <section className="section additional-services-section">
        <div className="container">
          <div className="section-heading additional-services-heading">
            <div>
              <span className="eyebrow">ADDITIONAL SERVICES</span>

              <h2>
                Need something
                <span> specific?</span>
              </h2>
            </div>

            <p>
              Not every project fits neatly into a package. These services can
              be booked separately or added to an existing website project.
            </p>
          </div>

          <div className="additional-services-grid">
            {additionalServices.map((service) => (
              <article
                className="additional-service-card"
                key={service.name}
              >
                <div className="additional-service-icon">
                  {service.icon}
                </div>

                <div className="additional-service-content">
                  <div className="additional-service-heading">
                    <h3>{service.name}</h3>

                    <span>{service.price}</span>
                  </div>

                  <p>{service.description}</p>

                  <Link to="/contact">
                    Enquire
                    <FiArrowUpRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== MAINTENANCE ==================== */}
      <section className="section maintenance-section">
        <div className="container">
          <div className="maintenance-card">
            <div className="maintenance-content">
              <span className="eyebrow">AFTER LAUNCH</span>

              <h2>
                Your website is live.
                <span> Now keep it running.</span>
              </h2>

              <p>
                Websites sometimes need updates, content changes, fixes and
                ongoing support after launch. Maintenance options can be
                discussed based on what your business needs.
              </p>

              <Link to="/contact" className="btn btn-primary">
                Ask About Maintenance
                <FiArrowUpRight />
              </Link>
            </div>

            <div className="maintenance-list">
              <div>
                <FiCheck />
                <span>Content updates</span>
              </div>

              <div>
                <FiCheck />
                <span>Website checks</span>
              </div>

              <div>
                <FiCheck />
                <span>Bug fixes</span>
              </div>

              <div>
                <FiCheck />
                <span>General website support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOSTING ==================== */}
      <section className="section hosting-section">
        <div className="container hosting-container">
          <div className="hosting-intro">
            <span className="eyebrow">HOSTING & LAUNCH</span>

            <h2>
              From development
              <span> to going live.</span>
            </h2>

            <p>
              Once your website is ready, Bunnie Digitals can help you get it
              connected to your domain and published online. If you already
              have hosting, I can work with your existing provider. If you are
              starting from scratch, I can guide you through the setup
              process.
            </p>
          </div>

          <div className="hosting-points">
            <div className="hosting-point">
              <span>01</span>

              <div>
                <strong>Have your own hosting?</strong>

                <p>
                  No problem. I can work with your existing hosting provider
                  and help connect your website to your domain.
                </p>
              </div>
            </div>

            <div className="hosting-point">
              <span>02</span>

              <div>
                <strong>Need help choosing hosting?</strong>

                <p>
                  I can guide you through the basic hosting requirements and
                  help you understand what your website needs.
                </p>
              </div>
            </div>

            <div className="hosting-point">
              <span>03</span>

              <div>
                <strong>Ready to go live?</strong>

                <p>
                  Once everything is set up, I'll help make sure your website
                  is properly prepared for launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="section final-cta-section">
        <div className="container">
          <div className="final-cta">
            <div>
              <span className="eyebrow">HAVE A PROJECT IN MIND?</span>

              <h2>
                Let's build something
                <span> that works for you.</span>
              </h2>

              <p>
                Tell me about your business, your idea and the website you
                have in mind.
              </p>
            </div>

            <Link to="/contact" className="btn btn-primary">
              Get a Quote
              <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;