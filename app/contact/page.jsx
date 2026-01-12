"use client";

import { useState } from "react";
import { sendContactEmail } from "./actions";
import styles from "./page.module.css";

export default function ContactPage() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.target);
    const result = await sendContactEmail(formData);

    if (result.success) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <main className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Get in Touch</h1>
          <p className={styles.heroDescription}>
            Ready to partner with us? Let's discuss how our team can support
            your higher education and workforce development initiatives.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* Contact Info */}
            <div className={styles.contactInfo}>
              <h2>Contact Information</h2>

              <div className={styles.infoBlock}>
                <h3>Email</h3>
                <a href="mailto:info@66proservices.com">
                  info@66proservices.com
                </a>
              </div>

              <div className={styles.infoBlock}>
                <h3>Phone</h3>
                <a href="tel:+15555555555">(555) 555-5555</a>
              </div>

              <div className={styles.infoBlock}>
                <h3>Service Area</h3>
                <p>California & Nationwide</p>
              </div>

              <div className={styles.infoBlock}>
                <h3>Certifications</h3>
                <p>DVBE Certified</p>
                <p>8A Program Pathway</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.contactForm}>
              <h2>Send Us a Message</h2>

              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name *</label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="organization">Organization</label>
                  <input type="text" id="organization" name="organization" />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" rows="6" required />
                </div>

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                  <p className={styles.successMessage}>
                    Thank you! Your message has been sent successfully.
                  </p>
                )}

                {status === "error" && (
                  <p className={styles.errorMessage}>
                    Oops! Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
