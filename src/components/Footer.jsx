import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiGithub,
  FiMail,
  FiMessageCircle,
} from "react-icons/fi";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              Bunnie<span>Digitals</span>
            </Link>

            <p>
              Modern websites for businesses, entrepreneurs and brands ready
              to build their digital presence.
            </p>

            <div className="footer-socials">
              <a
                href="https://wa.me/27664297801"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <FiMessageCircle />
              </a>

              <a
                href="mailto:lethabomash0731@icloud.com"
                aria-label="Email"
              >
                <FiMail />
              </a>

              <a
                href="https://github.com/Lethabo0731"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
            </div>
          </div>

          <div className="footer-links-column">
            <span>EXPLORE</span>

            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-links-column">
            <span>START A PROJECT</span>

            <p>
              Need a website for your business? Let's talk about what you need.
            </p>

            <Link to="/contact" className="footer-cta">
              Get a Quote
              <FiArrowUpRight />
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Bunnie Digitals. All rights reserved.
          </span>

          <span>Websites • Development • Digital Presence</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;