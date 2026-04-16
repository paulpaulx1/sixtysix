"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [dropdownForceClose, setDropdownForceClose] = useState(false);
  const pathname = usePathname();
  const forceDark = ["/projects"].includes(pathname);

  useEffect(() => {
    setDropdownForceClose(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? "hidden" : "unset";
      if (!next) setIsMobileServicesOpen(false);
      return next;
    });
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleDropdownLinkClick = () => {
    setDropdownForceClose(true);

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <nav
      className={`${styles.nav} ${
        isScrolled || forceDark ? styles.navScrolled : ""
      }`}
    >
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <Image
            className={styles.logoImage}
            width={180}
            height={60}
            src="/66_logo-1.png"
            alt="66 Professional Services Logo"
          />
        </Link>

        <div className={styles.navRight}>
          <ul className={styles.navLinks}>
            <li className={styles.navItem}>
              <Link href="/#about">About</Link>
            </li>

            <li
              className={`${styles.navItem} ${styles.navItemServices}`}
              onMouseEnter={() => setDropdownForceClose(false)}
            >
              <button
                type="button"
                className={styles.navDropdownTrigger}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown size={16} className={styles.navCaret} />
              </button>

              <div
                className={`${styles.dropdown} ${
                  dropdownForceClose ? styles.dropdownHidden : ""
                }`}
              >
                <Link
                  href="/services/leadership-development"
                  className={styles.dropdownLink}
                  onClick={handleDropdownLinkClick}
                >
                  Leadership Development &amp; Consulting
                </Link>

                <Link
                  href="/services/workforce-education"
                  className={styles.dropdownLink}
                  onClick={handleDropdownLinkClick}
                >
                  Workforce &amp; Education Services
                </Link>
              </div>
            </li>

            <li className={styles.navItem}>
              <Link href="/projects">Projects</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/team">Team</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <button
          type="button"
          className={`${styles.hamburger} ${
            isMobileMenuOpen ? styles.hamburgerOpen : ""
          }`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          className={`${styles.mobileMenu} ${
            isMobileMenuOpen ? styles.mobileMenuOpen : ""
          }`}
        >
          <ul className={styles.mobileNavLinks}>
            <li className={styles.mobileNavItem}>
              <Link href="/#about" onClick={closeMobileMenu}>
                About
              </Link>
            </li>

            <li
              className={`${styles.mobileNavItem} ${styles.mobileAccordionItem} ${
                isMobileServicesOpen ? styles.mobileAccordionOpen : ""
              }`}
            >
              <button
                type="button"
                className={styles.mobileServicesTrigger}
                onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                aria-expanded={isMobileServicesOpen}
              >
                <span>Services</span>
                <ChevronDown size={18} className={styles.mobileCaret} />
              </button>

              <div className={styles.mobileSubmenu}>
                <div className={styles.mobileSubmenuInner}>
                  <Link
                    href="/services/workforce-education"
                    onClick={closeMobileMenu}
                    className={styles.mobileSubmenuLink}
                  >
                    Workforce &amp; Education Services
                  </Link>
                  <Link
                    href="/services/leadership-development"
                    onClick={closeMobileMenu}
                    className={styles.mobileSubmenuLink}
                  >
                    Leadership Development &amp; Consulting
                  </Link>
                </div>
              </div>
            </li>

            <li className={styles.mobileNavItem}>
              <Link href="/projects" onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link href="/team" onClick={closeMobileMenu}>
                Team
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link href="/contact" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className={styles.mobileMenuOverlay}
          onClick={closeMobileMenu}
        ></div>
      )}
    </nav>
  );
}
