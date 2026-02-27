"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Zap, BookOpen, Briefcase } from "lucide-react";
import styles from "./page.module.css";

const stats = [
  { value: "12", label: "California Community Colleges Supported" },
  { value: "8", label: "Regional BACCC Initiatives Led" },
  { value: "1", label: "Statewide Pilot Project Managed" },
  { value: "100s", label: "Employers Engaged Statewide" },
];

const initiatives = [
  {
    icon: Zap,
    tag: "2022–2026",
    title: "Regional AI & Emerging Technology Initiatives",
    org: "Bay Area Community College Consortium",
    description:
      "Led multi-college implementation efforts advancing AI, data analytics, and GenAI programming through the Bay Area Community College Consortium.",
    services: ["Program Management", "Regional Coordination", "Employer Engagement"],
  },
  {
    icon: BookOpen,
    tag: "CAI-Funded",
    title: "Apprenticeship Program Development",
    org: "Mission College, Diablo Valley College, Evergreen Valley College",
    description:
      "Supported design and launch of registered apprenticeship programs through California Apprenticeship Initiative funding, aligned to employer workforce demand.",
    bullets: [
      "Mechatronics Apprenticeship – Mission College",
      "Creative Technology Apprenticeship – Diablo Valley College",
      "Green Cleaning Specialist & Supervisor Apprenticeships – Evergreen Valley College",
    ],
    services: ["Curriculum Development", "Compliance & Reporting", "Employer Engagement"],
  },
  {
    icon: Briefcase,
    tag: "Industry-Engaged",
    title: "Industry-Engaged Program Development",
    org: "Multiple California Community Colleges",
    description:
      "Through college partnerships, supported workforce initiatives that strengthened employer-aligned training pathways within the community college system.",
    bullets: [
      "Tesla START – Evergreen Valley College",
      "PG&E PowerPathway – San Jose City College",
      "AWS Internet Infrastructure 10-Day Career Exploration Pilot",
      "Hardware Technician Program with Applied Materials",
    ],
    services: ["Project Management", "Employer Engagement", "Workforce Development"],
  },
];

const contracts = [
  {
    tag: "Direct Contract",
    title: "California State Water Resources Control Board",
    description: "Direct contract supporting state-level workforce and training initiatives.",
  },
  {
    tag: "Subcontract",
    title: "California Department of Motor Vehicles",
    description: "Subcontract support for a statewide L&D initiative.",
  },
];

function useVisible(threshold = 0.12) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}

export default function ProjectsPage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [statsRef, statsVisible] = useVisible(0.1);
  const [initiativesRef, initiativesVisible] = useVisible(0.05);
  const [contractsRef, contractsVisible] = useVisible(0.1);
  const [ctaRef, ctaVisible] = useVisible(0.15);

  useEffect(() => { setHeroVisible(true); }, []);

  return (
    <main className={styles.projectsPage}>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className={`${styles.hero} ${heroVisible ? styles.heroVisible : ""}`}>
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>Projects & Impact</span>
          <h1 className={styles.heroTitle}>Our Work in the Field</h1>
          <p className={styles.heroDescription}>
            Delivering results for California community colleges, state agencies,
            and industry partners across workforce development, apprenticeship
            design, and regional collaboration.
          </p>
        </div>
      </section>

      {/* ── Impact Stats ─────────────────────────────────────────────────── */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div ref={statsRef} className={`${styles.statsGrid} ${statsVisible ? styles.statsVisible : ""}`}>
            {stats.map((s, i) => (
              <div key={s.label} className={styles.statBox} style={{ animationDelay: `${i * 0.1}s` }}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Selected Initiatives ─────────────────────────────────────────── */}
      <section className={styles.projectsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Selected Workforce Initiatives</span>
            <h2 className={styles.sectionTitle}>Where We've Made an Impact</h2>
          </div>
          <div ref={initiativesRef} className={styles.projectsList}>
            {initiatives.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className={`${styles.projectCard} ${initiativesVisible ? styles.cardVisible : ""}`}
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  <div className={styles.projectLeft}>
                    <div className={styles.projectIconWrap}>
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <div className={styles.projectMeta}>
                      <span className={styles.projectTag}>{project.tag}</span>
                    </div>
                    <div className={styles.projectServices}>
                      {project.services.map((s) => (
                        <span key={s} className={styles.serviceTag}>{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className={styles.projectRight}>
                    <h2 className={styles.projectTitle}>{project.title}</h2>
                    <p className={styles.projectOrg}>{project.org}</p>
                    <p className={styles.projectDescription}>{project.description}</p>
                    {project.bullets && (
                      <ul className={styles.projectBullets}>
                        {project.bullets.map((b) => (
                          <li key={b}>
                            <span className={styles.bulletArrow}>→</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Government Contracts ─────────────────────────────────────────── */}
      <section className={styles.contractsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Government Partnerships</span>
            <h2 className={styles.sectionTitle}>State Agency Work</h2>
          </div>
          <div ref={contractsRef} className={`${styles.contractsGrid} ${contractsVisible ? styles.contractsVisible : ""}`}>
            {contracts.map((c, i) => (
              <div key={c.title} className={styles.contractCard} style={{ animationDelay: `${i * 0.12}s` }}>
                <span className={styles.contractTag}>{c.tag}</span>
                <h3 className={styles.contractTitle}>{c.title}</h3>
                <p className={styles.contractDesc}>{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section ref={ctaRef} className={`${styles.ctaSection} ${ctaVisible ? styles.ctaVisible : ""}`}>
        <div className={styles.ctaContent}>
          <span className={styles.ctaEyebrow}>Let's Work Together</span>
          <h2>Ready to Start Your Next Project?</h2>
          <p>Let's discuss how we can support your workforce development and training initiatives.</p>
          <Link href="/contact" className={styles.ctaButton}>Get in Touch →</Link>
        </div>
      </section>

    </main>
  );
}