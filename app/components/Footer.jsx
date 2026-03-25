import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main content */}
        <div className={styles.mainContent}>
          {/* Left side - Company info */}
          <div className={styles.companySection}>
            <div className={styles.logoWrapper}>
              <Image
                className={styles.logoImage}
                width={500}
                height={200}
                src="/66-training-logo-orange.png"
                alt="66 Professional Services Logo"
              />
            </div>
            {/* <h3 className={styles.companyName}>66 Professional Services</h3> */}
            <p className={styles.tagline}>
              California's Leading Higher Education & Workforce Development
              Partner
            </p>
            <div className={styles.certifications}>
              <span>DVBE Certified</span>
            </div>
          </div>

          {/* Services */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Services</h4>
            <ul className={styles.linksList}>
              <li>
                <Link href="/services#workforce-development">
                  Strong Workforce & CAI Support
                </Link>
              </li>
              <li>
                <Link href="/services#project-management">
                  Regional Project Management
                </Link>
              </li>
              <li>
                <Link href="/services#employer-engagement">
                  Employer Engagement
                </Link>
              </li>
              <li>
                <Link href="/services#curriculum-development">
                  Curriculum Development
                </Link>
              </li>
              <li>
                <Link href="/services#training-delivery">
                  Training Facilitation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Company</h4>
            <ul className={styles.linksList}>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/team">Team</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li>
                <a href="mailto:info@66proservices.com">
                  info@66proservices.com
                </a>
              </li>
              <li>
                <a href="tel:+15555555555">(555) 555-5555</a>
              </li>
              <li>
                <span>California & Nationwide</span>
              </li>
            </ul>

            {/* VIB Network logo */}
            <div className={styles.vibLogoWrapper}>
              <Image
                src="/vib.png"
                alt="VIB Network"
                width={160}
                height={80}
                className={styles.vibLogo}
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © 2025 66 Professional Services, LLC
          </p>
          <p className={styles.designedBy}>
            Designed by{" "}
            <a
              href="https://paxmedia.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pax Media
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
