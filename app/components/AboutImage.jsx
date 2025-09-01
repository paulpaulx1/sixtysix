// components/AboutImage.jsx
import Image from 'next/image';
import styles from './AboutImage.module.css';

const AboutImage = () => {
  return (
    <div className={styles.imageContainer}>
      <Image
        src='/images/66collage.jpeg'
        alt='66 Training Team Collage'
        className={styles.image}
        width={600}
        height={500}
        priority
      />
    </div>
  );
};

export default AboutImage;
