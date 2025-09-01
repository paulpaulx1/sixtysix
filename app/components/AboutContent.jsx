import styles from './AboutSection.module.css';
import Image from 'next/image';
import AboutImage from './AboutImage';

import StatCard from './StatCard';

const AboutContent = () => {
  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '15+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Project Support' },
  ];

  return (
    <div className={styles.container}>
      {/* About Content Grid - Reversed Layout */}
      <div className={styles.aboutContent}>
        {/* Image Section - Now First */}
        <div className={styles.imageSection} data-element='image'>
          <AboutImage />
        </div>

        {/* Content Section - Now Second */}
        <div className={styles.content} data-element='content'>
          <h1 className={styles.title}>About 66 Professional Training Services</h1>

          <div className={styles.contentBlock}>
            <p>
              66 Professional Training Services, LLC is a higher education services
              organization working with colleges in the area of training &
              workforce development. We are results orientated and believe in
              delivering creative, effective, and practical solutions for both
              our college customers and their business partners.
            </p>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className={styles.sectionDivider}></div>

      {/* Stats Section */}
      <div className={styles.statsSection} data-element='stats'>
        <div className={styles.statsHeader}>
          <div className={styles.statsTitle}>Our Track Record</div>
        </div>

        <div className={styles.statsGrid}>
          {stats.map((statObj, i) => (
            <StatCard
              key={i}
              number={statObj.number}
              label={statObj.label}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
