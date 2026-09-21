import { useEffect, useState } from "react";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiMail,
  FiMessageCircle,
} from "react-icons/fi";

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (window.location.hash === "#project-enquiry") {
      setTimeout(() => {
        const enquirySection = document.getElementById("project-enquiry");

        if (enquirySection) {
          enquirySection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSending(true);
    setFormError("");

    const form = event.target;

    try {
      const response = await fetch("https://formspree.io/f/xnpnnopq", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormSubmitted(true);
        form.reset();
      } else {
        setFormError(
          "Something went wrong while sending your enquiry. Please try again."
        );
      }
    } catch (error) {
      setFormError(
        "We couldn't send your enquiry. Please check your connection and try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="inner-page">
      {/* ==================== PAGE HERO ==================== */}
      <section className="page-hero contact-page-hero">
        <div className="page-hero-glow"></div>

        <div className="container">
          <span className="eyebrow">GET IN TOUCH</span>

          <h1>
            Let's talk about
            <span> your website.</span>
          </h1>

          <p>
            Have a business idea, need a new website or want to improve an
            existing one? Tell me what you're looking for and let's discuss
            how I can help.
          </p>
        </div>
      </section>

      {/* ==================== CONTACT CONTENT ==================== */}
      <section className="section contact-page-section">
        <div className="container contact-page-grid">
          {/* ==================== CONTACT INFO ==================== */}
          <div className="contact-info">
            <span className="eyebrow">START A CONVERSATION</span>

            <h2>
              Tell me what
              <span> you're building.</span>
            </h2>

            <p>
              Whether you need a brand-new business website, an online store,
              a redesign or help with an existing website, I'd love to hear
              about your project.
            </p>

            <div className="contact-options">
              <a
                href="https://wa.me/27664297801"
                target="_blank"
                rel="noreferrer"
                className="contact-option"
              >
                <div className="contact-option-icon">
                  <FiMessageCircle />
                </div>

                <div className="contact-option-content">
                  <span>WHATSAPP</span>

                  <strong>Chat with Bunnie Digitals</strong>

                  <small>
                    Send a message and tell me about your project
                  </small>
                </div>

                <FiArrowUpRight className="contact-option-arrow" />
              </a>

              <a
                href="mailto:lethabomash0731@icloud.com"
                className="contact-option"
              >
                <div className="contact-option-icon">
                  <FiMail />
                </div>

                <div className="contact-option-content">
                  <span>EMAIL</span>

                  <strong>lethabomash0731@icloud.com</strong>

                  <small>
                    Send your project details directly to my inbox
                  </small>
                </div>

                <FiArrowUpRight className="contact-option-arrow" />
              </a>
            </div>

            <div className="contact-note">
              <FiCheckCircle />

              <div>
                <strong>Not sure what you need yet?</strong>

                <p>
                  That's completely okay. Tell me about your business or idea
                  and I'll help you work out what type of website would make
                  sense for you.
                </p>
              </div>
            </div>
          </div>

          {/* ==================== PROJECT ENQUIRY FORM ==================== */}
          <div
            className="contact-form-card"
            id="project-enquiry"
          >
            {formSubmitted ? (
              <div className="form-success">
                <div className="form-success-icon">
                  <FiCheckCircle />
                </div>

                <span className="eyebrow">ENQUIRY SENT</span>

                <h2>Thank you!</h2>

                <p>
                  Your enquiry has been received successfully. I'll review
                  your project details and get back to you as soon as
                  possible.
                </p>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormError("");
                  }}
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <>
                <div className="form-heading">
                  <span className="eyebrow">PROJECT ENQUIRY</span>

                  <h2>Let's start with the basics.</h2>

                  <p>
                    Fill in the form below with a few details about your
                    project. You don't need to have everything figured out
                    before getting in touch.
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* NAME + EMAIL */}
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        autoComplete="name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                      />
                    </div>
                  </div>

                  {/* BUSINESS */}
                  <div className="form-group">
                    <label htmlFor="business">Business / Brand</label>

                    <input
                      id="business"
                      name="business"
                      type="text"
                      placeholder="Your business or brand name"
                      autoComplete="organization"
                    />
                  </div>

                  {/* SERVICE + BUDGET */}
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="service">What do you need?</label>

                      <select id="service" name="service" required>
                        <option value="">Select a service</option>

                        <option value="Starter Website">
                          Starter Website
                        </option>

                        <option value="Business Website">
                          Business Website
                        </option>

                        <option value="E-commerce Website">
                          E-commerce Website
                        </option>

                        <option value="Website Redesign">
                          Website Redesign
                        </option>

                        <option value="Bug Fixes & QA">
                          Bug Fixes & QA
                        </option>

                        <option value="Deployment & Setup">
                          Deployment & Setup
                        </option>

                        <option value="Custom Web Solution">
                          Custom Web Solution
                        </option>

                        <option value="Not Sure">
                          I'm not sure yet
                        </option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="budget">Budget Range</label>

                      <select id="budget" name="budget">
                        <option value="">Select a range</option>

                        <option value="Under R3,500">
                          Under R3,500
                        </option>

                        <option value="R3,500 - R5,500">
                          R3,500 - R5,500
                        </option>

                        <option value="R5,500 - R7,500">
                          R5,500 - R7,500
                        </option>

                        <option value="R7,500+">R7,500+</option>

                        <option value="Not sure">
                          I'm not sure yet
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <div className="form-group">
                    <label htmlFor="message">
                      Tell me about your project
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="7"
                      placeholder="Tell me about your business, what you need and what you would like your website to do..."
                      required
                    ></textarea>
                  </div>

                  {/* ERROR */}
                  {formError && (
                    <div className="form-error" role="alert">
                      {formError}
                    </div>
                  )}

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="btn btn-primary form-submit"
                    disabled={isSending}
                  >
                    {isSending ? "Sending Enquiry..." : "Send Enquiry"}

                    {!isSending && <FiArrowUpRight />}
                  </button>

                  <p className="form-disclaimer">
                    Your information is only used to respond to your project
                    enquiry.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ==================== WHATSAPP CTA ==================== */}
      <section className="section final-cta-section">
        <div className="container">
          <div className="final-cta">
            <div>
              <span className="eyebrow">PREFER A QUICK CHAT?</span>

              <h2>
                Let's talk
                <span> on WhatsApp.</span>
              </h2>

              <p>
                If you'd rather chat directly, send me a WhatsApp message and
                tell me what you're looking for.
              </p>
            </div>

            <a
              href="https://wa.me/27664297801"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              WhatsApp Me
              <FiArrowUpRight />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;