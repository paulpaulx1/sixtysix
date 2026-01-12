import styles from "./Hero.module.css";
import SocialIcons from "./SocialIcons";
import VideoBackground from "./VideoBackground";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <VideoBackground />

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1>
            66 <span className={styles.heroAccent}>Professional</span> Services
          </h1>
          <p className={styles.heroSubtitle}>
            Higher Education Services • Workforce Development • Curriculum
            Design
          </p>
        </div>

        <div className={styles.heroActions}>
          <div className={styles.socialSection}>
            <SocialIcons isHomepage={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
