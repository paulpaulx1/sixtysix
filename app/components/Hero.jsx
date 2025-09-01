import styles from './Hero.module.css';
// import CTAButtons from './CTAButtons';
import SocialIcons from './SocialIcons';
import VideoBackground from './VideoBackground';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <VideoBackground />

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1>
            66 <span className={styles.heroAccent}>Professional </span> <br />
            <span className={styles.heroAccent}>Training </span>
            Services
          </h1>
        </div>

        <div className={styles.heroActions}>
          {/* <div className={styles.ctaSection}>
            <CTAButtons isHomepage={true} />
          </div> */}
          <div className={styles.socialSection}>
            <SocialIcons isHomepage={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
