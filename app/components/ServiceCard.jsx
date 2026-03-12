// ServiceCard.js
import Link from 'next/link';
import ServiceIcon from './ServiceIcon';
import { CheckCircle2 } from 'lucide-react';
import styles from './ServiceCard.module.css';

/* ── Previous version (no bullets) ──────────────────────────────────────────
const ServiceCard = ({ iconType, blueprint, title, description, linkUrl, linkText }) => {
  return (
    <div className={styles.serviceCard} data-blueprint={blueprint}>
      <div className={styles.serviceIcon}>
        <ServiceIcon type={iconType} size={32} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {linkUrl && linkText && (
        <div className={styles.cardLink}>
          <Link href={linkUrl} className={styles.readMoreLink}>
            {linkText}
            <i className='ph ph-arrow-right'></i>
          </Link>
        </div>
      )}
    </div>
  );
};
──────────────────────────────────────────────────────────────────────────── */

const ServiceCard = ({
  iconType,
  blueprint,
  title,
  description,
  bullets,
  linkUrl,
  linkText,
}) => {
  return (
    <div className={styles.serviceCard} data-blueprint={blueprint}>
      <div className={styles.serviceIcon}>
        <ServiceIcon type={iconType} size={32} />
      </div>

      <h3>{title}</h3>
      <p>{description}</p>

      {bullets && (
        <ul className={styles.bullets}>
          {bullets.map((b) => (
            <li key={b}>
              <CheckCircle2 size={12} strokeWidth={2.2} className={styles.bulletIcon} />
              {b}
            </li>
          ))}
        </ul>
      )}

      {linkUrl && linkText && (
        <div className={styles.cardLink}>
          <Link href={linkUrl} className={styles.readMoreLink}>
            {linkText}
            <i className='ph ph-arrow-right'></i>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;