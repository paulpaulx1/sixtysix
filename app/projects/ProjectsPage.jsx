"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  BookOpen,
  Briefcase,
  MapPin,
  Users,
  X,
  ExternalLink,
  Database,
} from "lucide-react";
import styles from "./page.module.css";

const ICON_MAP = {
  Zap,
  BookOpen,
  Briefcase,
  MapPin,
  Users,
};

function useVisible(threshold = 0.12) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

export default function ProjectsPage({ data }) {
  const {
    hero,
    stats,
    contextBlock,
    whySection,
    initiatives,
    contracts,
    modal,
    cta,
  } = data;

  const [heroVisible, setHeroVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [statsRef, statsVisible] = useVisible(0.1);
  const [whyRef, whyVisible] = useVisible(0.08);
  const [initiativesRef, initiativesVisible] = useVisible(0.05);
  const [contractsRef, contractsVisible] = useVisible(0.1);
  const [ctaRef, ctaVisible] = useVisible(0.15);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  useEffect(() => {
    const body = document.body;

    if (modalOpen) {
      body.style.overflow = "hidden";
      body.classList.add("modal-open");
    } else {
      body.style.overflow = "";
      body.classList.remove("modal-open");
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setModalOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      body.style.overflow = "";
      body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalOpen]);

  return (
    <>
      <main className={styles.projectsPage}>
        <section
          className={`${styles.hero} ${heroVisible ? styles.heroVisible : ""}`}
        >
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>{hero.eyebrow}</span>
            <h1 className={styles.heroTitle}>{hero.title}</h1>
            <p className={styles.heroDescription}>{hero.description}</p>
          </div>
        </section>

        <section className={styles.statsSection}>
          <div className={styles.container}>
            <div
              ref={statsRef}
              className={`${styles.statsGrid} ${statsVisible ? styles.statsVisible : ""}`}
            >
              {stats.map((stat, index) => (
                <div
                  key={stat._key}
                  className={styles.statBox}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>

            <div
              className={`${styles.contextBlock} ${statsVisible ? styles.contextVisible : ""}`}
            >
              <div className={styles.contextInner}>
                <div className={styles.contextCopy}>
                  <p className={styles.contextText}>{contextBlock.text}</p>
                  <button
                    type="button"
                    className={styles.contextLink}
                    onClick={() => setModalOpen(true)}
                  >
                    {contextBlock.buttonText}
                  </button>
                </div>
                <div className={styles.contextIconWrap} aria-hidden="true">
                  <Database className={styles.contextIcon} strokeWidth={1.2} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.whySection}>
          <div
            ref={whyRef}
            className={`${styles.container} ${whyVisible ? styles.whyVisible : ""}`}
          >
            <div className={styles.whyPanel}>
              <div className={styles.whyHeader}>
                <span className={styles.eyebrow}>{whySection.eyebrow}</span>
                <h2 className={styles.sectionTitle}>{whySection.title}</h2>
                <p className={styles.whyIntro}>{whySection.intro}</p>
              </div>

              <div className={styles.whyLayout}>
                <div className={styles.whyContent}>
                  <div className={styles.reasonsGrid}>
                    {whySection.reasons.map((reason, index) => {
                      const Icon = ICON_MAP[reason.icon];
                      return (
                        <div
                          key={reason._key}
                          className={`${styles.reasonCard} ${whyVisible ? styles.reasonVisible : ""}`}
                          style={{ animationDelay: `${index * 0.12}s` }}
                        >
                          <div className={styles.reasonIconWrap}>
                            {Icon && <Icon size={18} strokeWidth={1.8} />}
                          </div>
                          <div className={styles.reasonText}>
                            <h3 className={styles.reasonTitle}>
                              {reason.title}
                            </h3>
                            <p className={styles.reasonBody}>{reason.body}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className={styles.whyImageWrap}>
                  <Image
                    src="/images/why/why.jpg"
                    alt={whySection.image?.alt || ""}
                    width={600}
                    height={720}
                    className={styles.whyImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.projectsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>
                Selected Workforce Initiatives
              </span>
              <h2 className={styles.sectionTitle}>
                Where We&apos;ve Made an Impact
              </h2>
            </div>

            <div ref={initiativesRef} className={styles.projectsList}>
              {initiatives.map((project, index) => {
                const Icon = ICON_MAP[project.icon];
                return (
                  <div
                    key={project._key}
                    className={`${styles.projectCard} ${initiativesVisible ? styles.cardVisible : ""}`}
                    style={{ animationDelay: `${index * 0.12}s` }}
                  >
                    <div className={styles.projectLeft}>
                      <div className={styles.projectIconWrap}>
                        {Icon && <Icon size={22} strokeWidth={1.8} />}
                      </div>
                      <div className={styles.projectMeta}>
                        <span className={styles.projectTag}>{project.tag}</span>
                      </div>
                      <div className={styles.projectServices}>
                        {project.services.map((service) => (
                          <span key={service} className={styles.serviceTag}>
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={styles.projectRight}>
                      <h2 className={styles.projectTitle}>{project.title}</h2>
                      <p className={styles.projectOrg}>{project.org}</p>
                      <p className={styles.projectDescription}>
                        {project.description}
                      </p>
                      {project.bullets?.length > 0 && (
                        <ul className={styles.projectBullets}>
                          {project.bullets.map((bullet) => (
                            <li key={bullet}>
                              <span className={styles.bulletArrow}>→</span>
                              {bullet}
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

        <section className={styles.contractsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>Government Partnerships</span>
              <h2 className={styles.sectionTitle}>State Agency Work</h2>
            </div>

            <div
              ref={contractsRef}
              className={`${styles.contractsGrid} ${contractsVisible ? styles.contractsVisible : ""}`}
            >
              {contracts.map((contract, index) => (
                <div
                  key={contract._key}
                  className={styles.contractCard}
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  <span className={styles.contractTag}>{contract.tag}</span>
                  <h3 className={styles.contractTitle}>{contract.title}</h3>
                  <p className={styles.contractDesc}>{contract.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          ref={ctaRef}
          className={`${styles.ctaSection} ${ctaVisible ? styles.ctaVisible : ""}`}
        >
          <div className={styles.ctaContent}>
            <span className={styles.ctaEyebrow}>{cta.eyebrow}</span>
            <h2>{cta.title}</h2>
            <p>{cta.description}</p>
            <Link href={cta.buttonHref} className={styles.ctaButton}>
              {cta.buttonText}
            </Link>
          </div>
        </section>
      </main>

      {modalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setModalOpen(false)}
          role="presentation"
        >
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="data-center-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <div>
                <span className={styles.modalEyebrow}>{modal.eyebrow}</span>
                <h2 id="data-center-modal-title" className={styles.modalTitle}>
                  {modal.title}
                </h2>
              </div>
              <button
                type="button"
                className={styles.modalClose}
                onClick={() => setModalOpen(false)}
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>
            </div>

            <div className={styles.modalBody}>
              <p className={styles.modalIntro}>{modal.intro}</p>
              <p className={styles.modalText}>{modal.bodyText}</p>

              <div className={styles.modalGrid}>
                <div className={styles.modalCard}>
                  <h3 className={styles.modalCardTitle}>Key Focus Areas</h3>
                  <ul className={styles.modalList}>
                    {modal.focusAreas.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.modalCard}>
                  <h3 className={styles.modalCardTitle}>What This Supports</h3>
                  <ul className={styles.modalList}>
                    {modal.whatThisSupports.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles.linkSection}>
                <h3 className={styles.linkSectionTitle}>
                  Primary Initiative Links
                </h3>
                <div className={styles.linkList}>
                  {modal.industryResources.slice(0, 2).map((item) => (
                    <a
                      key={item._key}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.resourceLink}
                    >
                      <span>{item.name}</span>
                      <ExternalLink size={15} />
                    </a>
                  ))}
                </div>
              </div>

              <div className={styles.linkSection}>
                <h3 className={styles.linkSectionTitle}>
                  Example Community College Programs
                </h3>
                <div className={styles.linkList}>
                  {modal.dataCenterPrograms.map((item) => (
                    <a
                      key={item._key}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.resourceLink}
                    >
                      <span>{item.name}</span>
                      <ExternalLink size={15} />
                    </a>
                  ))}
                </div>
              </div>

              <div className={styles.linkSection}>
                <h3 className={styles.linkSectionTitle}>
                  Industry Reports & Resources
                </h3>
                <div className={styles.linkList}>
                  {modal.industryResources.slice(2).map((item) => (
                    <a
                      key={item._key}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.resourceLink}
                    >
                      <span>{item.name}</span>
                      <ExternalLink size={15} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
