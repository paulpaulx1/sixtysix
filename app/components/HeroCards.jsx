import Link from "next/link";
import { GraduationCap, GitBranch, Users } from "lucide-react";
import styles from "./HeroCards.module.css";

const cards = [
  {
    icon: GraduationCap,
    title: "Strong Workforce & CAI Initiative Support",
    body: "Full lifecycle implementation — from proposal to operational success.",
    href: "/services#workforce",
  },
  {
    icon: GitBranch,
    title: "Regional & Statewide Project Management",
    body: "Complex multi-college initiatives coordinated and delivered.",
    href: "/services#project-management",
  },
  {
    icon: Users,
    title: "Employer Engagement & Industry Alignment",
    body: "Bridging institutional priorities and employer expectations.",
    href: "/services#employer-engagement",
  },
];

export default function HeroCards() {
  return (
    <div className={styles.wrap}>
      <div className={styles.grid}>
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.title} className={styles.card}>
              <div className={styles.cardContent}>
                <div className={styles.iconWrap}>
                  <Icon size={36} strokeWidth={1.6} />
                </div>
                <h3 className={styles.title}>{card.title}</h3>
                <div className={styles.cardLine} />
                <p className={styles.body}>{card.body}</p>
                <Link href={card.href} className={styles.explore}>
                  Explore <span className={styles.arrow}>→</span>
                </Link>
              </div>
              <div aria-hidden="true" className={styles.clipBottom} />
            </div>
          );
        })}
      </div>
    </div>
  );
}