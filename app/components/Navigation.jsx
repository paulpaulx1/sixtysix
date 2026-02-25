"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Navigation.module.css";
import Image from "next/image";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);

    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.navScrolled : ""}`}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image
            className={styles.logoImage}
            width={180}
            height={60}
            src="/66-training-logo.png"
            alt="66 Professional Services Logo"
          />
        </Link>

        {/* Navigation Container */}
        <div className={styles.navRight}>
          {/* Desktop Navigation */}
          <ul className={styles.navLinks}>
            <li className={styles.navItem}>
              <Link href="/#about">About</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/services">Services</Link>
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

        {/* Mobile Menu Button */}
        <div
          className={`${styles.hamburger} ${
            isMobileMenuOpen ? styles.hamburgerOpen : ""
          }`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${styles.mobileMenu} ${
            isMobileMenuOpen ? styles.mobileMenuOpen : ""
          }`}
        >
          <ul className={styles.mobileNavLinks}>
            <li className={styles.mobileNavItem}>
              <Link href="/" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link href="/services" onClick={closeMobileMenu}>
                Services
              </Link>
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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className={styles.mobileMenuOverlay}
          onClick={closeMobileMenu}
        ></div>
      )}
    </nav>
  );
}