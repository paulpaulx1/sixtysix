'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Navigation.module.css';
import Image from 'next/image';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === '/') {
        setIsScrolled(window.scrollY > 100);
      } else {
        setIsScrolled(true);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);

    // Prevent body scrolling when menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Clean up body overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.navScrolled : ''}`}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <Link href='/' className={styles.logo}>
          <div className={styles.logoIcon}>
            <Image
              className={styles.logoImage}
              width='70'
              height='70'
              src='/images/logoOriginal.jpeg'
              alt='66 Training Logo'
            />
          </div>
          <span className={styles.logoText}>66 Professional Training Services</span>
        </Link>

        {/* Phone Number and Navigation Container */}
        <div className={styles.navRight}>
          {/* Desktop Navigation */}
          <ul className={styles.navLinks}>
            <li>
              <Link href='/'>About</Link>
            </li>
            <li>
              <Link href='/services'>Services</Link>
            </li>
            <li>
              <Link href='/projects'>Projects</Link>
            </li>
            <li>
              <Link href='/team'>Team</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div
          className={`${styles.hamburger} ${
            isMobileMenuOpen ? styles.hamburgerOpen : ''
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
            isMobileMenuOpen ? styles.mobileMenuOpen : ''
          }`}
        >
          <ul className={styles.mobileNavLinks}>
            <li>
              <Link href='/' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li>
              <Link
                href='/services'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link href='/projects' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link href='/Team' onClick={closeMobileMenu}>
                Team
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                onClick={closeMobileMenu}
              >
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
