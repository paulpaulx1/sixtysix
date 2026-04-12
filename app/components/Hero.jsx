import Link from "next/link";
import { ArrowRight, Briefcase, Mail } from "lucide-react";
import styles from "./Hero.module.css";
import VideoBackground from "./VideoBackground";
import HeroCards from "./HeroCards";

export default function Hero() {
  return (
    <div className={styles.heroWrap}>
      <section className={styles.hero}>
        <VideoBackground />

        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroHeading}>
              <span className={styles.heroLine1}>
                <span className={styles.wordWhere}>where</span>
                <span className={styles.wordPotential}>potential</span>
              </span>

              <span className={styles.heroLine2}>
                <span className={styles.wordBecomes}>becomes</span>
                <span className={styles.heroAccent}>Performance.</span>
              </span>
            </h1>

            <p className={styles.heroSubtitle}>
              Higher Education Services • Workforce Development • Curriculum
              Design
            </p>
          </div>

          <div className={styles.heroActions}>
            <div className={styles.ctaSection}>
              <Link href="/projects" className={styles.ctaButtonPrimary}>
                <span className={styles.ctaIconWrap}>
                  <Briefcase
                    size={18}
                    strokeWidth={2}
                    className={styles.ctaIcon}
                  />
                </span>
                <span className={styles.ctaText}>View Proof</span>
                <ArrowRight
                  size={16}
                  strokeWidth={2.2}
                  className={styles.ctaArrow}
                />
              </Link>

              <Link href="/contact" className={styles.ctaButtonSecondary}>
                <span className={styles.ctaIconWrap}>
                  <Mail size={18} strokeWidth={2} className={styles.ctaIcon} />
                </span>
                <span className={styles.ctaText}>Get in Touch</span>
                <ArrowRight
                  size={16}
                  strokeWidth={2.2}
                  className={styles.ctaArrow}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <HeroCards /> */}
    </div>
  );
}
