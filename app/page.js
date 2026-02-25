// src/app/page.jsx

import styles from "./page.module.css";
import Hero from "./components/Hero";
import ServiceCardsSection from "./components/ServiceCardsSection";
import AboutContent from "./components/AboutContent";
import WhoWeServe from "./components/WhoWeServe";

export default async function Home() {
  return (
    <>
      <main className={styles.main} role="main">
        <Hero />
        <AboutContent />
        <WhoWeServe />
        <ServiceCardsSection />
      </main>
    </>
  );
}
