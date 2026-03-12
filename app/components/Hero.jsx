import styles from "./Hero.module.css";
import SocialIcons from "./SocialIcons";
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
              66 <span className={styles.heroAccent}>Training</span> Services
            </h1>
            <p className={styles.heroSubtitle}>
              Higher Education Services • Workforce Development • Curriculum
              Design
            </p>
          </div>

          <div className={styles.heroActions}>
            <div className={styles.socialSection}>
              {/* <SocialIcons isHomepage={true} /> */}
            </div>
          </div>
        </div>

        {/* Swoop */}
      </section>

      {/* Cards overlap the swoop */}
    </div>
  );
}
