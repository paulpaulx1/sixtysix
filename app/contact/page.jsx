"use client";

import { useState, useEffect, useRef } from "react";
import { sendContactEmail } from "./actions";
import { Mail, Phone, MapPin, Award } from "lucide-react";
import styles from "./page.module.css";

function useVisible(threshold = 0.12) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}

const infoItems = [
  {
    icon: Mail,
    label: "Email",
    value: "info@66proservices.com",
    href: "mailto:info@66proservices.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(555) 555-5555",
    href: "tel:+15555555555",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "California & Nationwide",
    href: null,
  },
  {
    icon: Award,
    label: "Certifications",
    value: "DVBE Certified",
    href: null,
  },
];

export default function ContactPage() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [infoRef, infoVisible] = useVisible(0.1);
  const [formRef, formVisible] = useVisible(0.1);

  useEffect(() => { setHeaderVisible(true); }, []);

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

      {/* ── Header ───────────────────────────────────────────────────────── */}
      <section className={`${styles.header} ${headerVisible ? styles.headerVisible : ""}`}>
        <div className={styles.headerContent}>
          <span className={styles.headerEyebrow}>Contact</span>
          <h1 className={styles.headerTitle}>Get in Touch</h1>
          <p className={styles.headerDescription}>
            Ready to partner with us? Let's discuss how our team can support
            your higher education and workforce development initiatives.
          </p>
        </div>
      </section>

      {/* ── Contact Section ──────────────────────────────────────────────── */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>

            {/* Info panel */}
            <div
              ref={infoRef}
              className={`${styles.contactInfo} ${infoVisible ? styles.infoVisible : ""}`}
            >
              <span className={styles.eyebrow}>Reach Us</span>
              <h2 className={styles.panelTitle}>Contact Information</h2>
              <div className={styles.infoList}>
                {infoItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className={styles.infoBlock}>
                      <div className={styles.infoIcon}>
                        <Icon size={16} strokeWidth={1.8} />
                      </div>
                      <div className={styles.infoText}>
                        <span className={styles.infoLabel}>{item.label}</span>
                        {item.href ? (
                          <a href={item.href} className={styles.infoValue}>{item.value}</a>
                        ) : (
                          <span className={styles.infoValue}>{item.value}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Form panel */}
            <div
              ref={formRef}
              className={`${styles.contactForm} ${formVisible ? styles.formVisible : ""}`}
            >
              <span className={styles.eyebrow}>Send a Message</span>
              <h2 className={styles.panelTitle}>Let's Talk</h2>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Name *</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="organization">Organization</label>
                    <input type="text" id="organization" name="organization" />
                  </div>
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
                  {loading ? "Sending..." : "Send Message →"}
                </button>

                {status === "success" && (
                  <p className={styles.successMessage}>
                    ✓ Thank you! Your message has been sent successfully.
                  </p>
                )}
                {status === "error" && (
                  <p className={styles.errorMessage}>
                    Something went wrong. Please try again.
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