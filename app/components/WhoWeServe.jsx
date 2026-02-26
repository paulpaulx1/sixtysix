"use client";

import { useEffect, useRef, useState } from "react";
import {
  GraduationCap,
  Building2,
  Briefcase,
  CheckCircle2,
  MapPin,
  Zap,
  Users,
  Award,
} from "lucide-react";
import styles from "./WhoWeServe.module.css";

/* ── Data ─────────────────────────────────────────────────────────────────── */

const audiences = [
  {
    icon: GraduationCap,
    title: "Community College Workforce Leaders",
    body: "We work with deans, directors, and workforce development teams to launch and sustain new programs, coordinate regional initiatives, navigate curriculum approval and registered apprenticeship processes, and manage Strong Workforce and CAI-funded projects.",
    note: "When internal bandwidth is limited and execution matters most, 66Training brings disciplined leadership and aligned delivery.",
    bullets: [
      "Launch and sustain new programs",
      "Coordinate regional and cross-college initiatives",
      "Navigate curriculum approval and registered apprenticeship processes",
      "Manage Strong Workforce and CAI-funded projects",
    ],
  },
  {
    icon: Building2,
    title: "Government Workforce & L&D Teams",
    body: "As a certified Disabled Veteran Business Enterprise, we support state agencies and public workforce entities in advancing training initiatives that align with regional economic priorities and funding requirements.",
    bullets: null,
    note: null,
  },
  {
    icon: Briefcase,
    title: "Industry & Corporate Partners",
    body: "We help employers engage with colleges, align workforce skill needs to program design, and strengthen talent pipelines through meaningful collaboration — all within structured, college-led implementation frameworks.",
    bullets: null,
    note: null,
  },
];

const reasons = [
  {
    icon: Zap,
    title: "Implementation Expertise Within Education Systems",
    body: "Few firms understand California's community college system like we do — from Strong Workforce funding and CAI requirements to curriculum pathways and apprenticeship registration. We accelerate progress while minimizing delays and compliance risks.",
  },
  {
    icon: MapPin,
    title: "Proven Track Record in Regional Collaboration",
    body: "Our team has supported 12 California community colleges, led 8 regional initiatives through the Bay Area Community College Consortium, managed statewide pilot projects, and engaged hundreds of employers statewide in workforce alignment efforts.",
  },
  {
    icon: Users,
    title: "Industry-Aligned Execution Support",
    body: "Through college partnerships, we have supported workforce programs that align with hiring demand from major employers, including collaborations involving Tesla, PG&E, AWS, Google, and Applied Materials — ensuring programs reflect real workforce needs.",
  },
];

/* ── Hook ─────────────────────────────────────────────────────────────────── */

function useVisible(threshold = 0.12) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

/* ── Component ────────────────────────────────────────────────────────────── */

export default function WhoWeServe() {
  const [serveRef, serveVisible] = useVisible();
  const [whyRef, whyVisible] = useVisible();

  return (
    <>
      {/* ── WHY 66TRAINING ────────────────────────────────────────────────── */}

      {/* ── WHO WE SERVE ──────────────────────────────────────────────────── */}
      <section
        ref={serveRef}
        id="who-we-serve"
        className={`${styles.serveSection} ${serveVisible ? styles.visible : ""}`}
      >
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Who We Serve</h2>
          </div>

          <div className={styles.audienceGrid}>
            {audiences.map((a, i) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.title}
                  className={styles.audienceCard}
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <div className={styles.cardIconWrap}>
                    <Icon
                      size={22}
                      strokeWidth={1.8}
                      className={styles.cardIcon}
                    />
                  </div>
                  <div className={styles.cardText}>
                    <h3 className={styles.cardTitle}>{a.title}</h3>
                    <p className={styles.cardBody}>{a.body}</p>

                    {a.bullets && (
                      <ul className={styles.bullets}>
                        {a.bullets.map((b) => (
                          <li key={b}>
                            <CheckCircle2
                              size={13}
                              strokeWidth={2.2}
                              className={styles.bulletIcon}
                            />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}

                    {a.note && <p className={styles.cardNote}>{a.note}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

/*
<section
        ref={whyRef}
        id="why-66training"
        className={`${styles.whySection} ${whyVisible ? styles.whyVisible : ""}`}
      >
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2
              className={`${styles.sectionTitle} ${styles.sectionTitleLight}`}
            >
              Why 66Training
            </h2>
          </div>

          <div className={styles.reasonsGrid}>
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  className={styles.reasonCard}
                  style={{ animationDelay: `${i * 0.14}s` }}
                >
                  <div className={styles.reasonIconWrap}>
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <h3 className={styles.reasonTitle}>{r.title}</h3>
                  <p className={styles.reasonBody}>{r.body}</p>
                </div>
              );
            })}
          </div>


          <div className={styles.badgeRow}>
            <div className={styles.awardBadge}>
              <Award size={16} strokeWidth={2} />
              DVBE Certified
            </div>
            <div className={styles.awardBadge}>
              <Award size={16} strokeWidth={2} />
              8(a) Program Pathway
            </div>
            <div className={styles.awardBadge}>
              <MapPin size={16} strokeWidth={2} />
              12 California Colleges Supported
            </div>
            <div className={styles.awardBadge}>
              <Users size={16} strokeWidth={2} />8 Regional Initiatives Led
            </div>
          </div>
        </div>
      </section>

      */
