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

const stats = [
  { value: "12", label: "California Community Colleges Supported" },
  { value: "8", label: "Regional BACCC Initiatives Led" },
  { value: "1", label: "Statewide Pilot Project Managed" },
  { value: "100s", label: "Employers Engaged Statewide" },
];

const reasons = [
  {
    icon: Zap,
    title: "Implementation Expertise",
    body: "From Strong Workforce funding to apprenticeship registration, we understand the California community college system and help institutions move faster while minimizing compliance risk.",
  },
  {
    icon: MapPin,
    title: "Regional Track Record",
    body: "We have supported 12 California community colleges, led 8 regional initiatives through BACCC, and coordinated workforce efforts across multiple institutions and partners.",
  },
  {
    icon: Users,
    title: "Industry-Aligned Execution",
    body: "Our work has supported employer-connected programs aligned with real hiring demand, including initiatives involving Tesla, PG&E, AWS, Google, and Applied Materials.",
  },
];

const initiatives = [
  {
    icon: Zap,
    tag: "2022–2026",
    title: "Regional AI & Emerging Technology Initiatives",
    org: "Bay Area Community College Consortium",
    description:
      "Led multi-college implementation efforts advancing AI, data analytics, and GenAI programming through the Bay Area Community College Consortium.",
    services: [
      "Program Management",
      "Regional Coordination",
      "Employer Engagement",
    ],
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
    services: [
      "Curriculum Development",
      "Compliance & Reporting",
      "Employer Engagement",
    ],
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
    services: [
      "Project Management",
      "Employer Engagement",
      "Workforce Development",
    ],
  },
];

const contracts = [
  {
    tag: "Direct Contract",
    title: "California State Water Resources Control Board",
    description:
      "Direct contract supporting state-level workforce and training initiatives.",
  },
  {
    tag: "Subcontract",
    title: "California Department of Motor Vehicles",
    description: "Subcontract support for a statewide L&D initiative.",
  },
];

const dataCenterPrograms = [
  {
    name: "NOVA Community College",
    href: "https://www.nvcc.edu/academics/programs/data-center-operations.html",
  },
  {
    name: "Mesa Community College",
    href: "https://www.mesacc.edu/programs/map/data-center-operations-ccl",
  },
  {
    name: "Estrella Mountain Community College",
    href: "https://www.estrellamountain.edu/microsoft-datacenter-academy",
  },
  {
    name: "Cleveland Community College",
    href: "https://clevelandcc.edu/program-finder/mission-critical-operations-operations-technology-foundations-certificate-c40430o/",
  },
  {
    name: "Texas State Technical College",
    href: "https://www.tstc.edu/workforcetraining/datacenters/",
  },
];

const industryResources = [
  {
    name: "NIICA Data Center Workforce",
    href: "https://niica.org/data-center-workforce",
  },
  {
    name: "Education Community of Practice Sign Up",
    href: "https://form.jotform.com/novasystemic/dco-consortia-interest",
  },
  {
    name: "Data Center Coalition",
    href: "https://www.datacentercoalition.org/reports-and-publications",
  },
  {
    name: "AFCOM Resources",
    href: "https://afcom.com/page/Resources",
  },
  {
    name: "Infrastructure Masons Publications",
    href: "https://imasons.org/publications/",
  },
  {
    name: "International Data Center Day",
    href: "https://www.internationaldatacenterday.org",
  },
  {
    name: "CBRE Data Center Insights",
    href: "https://www.cbre.com/insights/data-center",
  },
  {
    name: "JLL Data Centers",
    href: "https://www.jll.com/en-us/industries/data-centers",
  },
];

function useVisible(threshold = 0.12) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

export default function ProjectsPage() {
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
      if (event.key === "Escape") {
        setModalOpen(false);
      }
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
            <span className={styles.heroEyebrow}>Projects & Impact</span>
            <h1 className={styles.heroTitle}>Our Work in the Field</h1>
            <p className={styles.heroDescription}>
              Delivering results for California community colleges, state
              agencies, and industry partners across workforce development,
              apprenticeship design, and regional collaboration.
            </p>
          </div>
        </section>

        <section className={styles.statsSection}>
          <div className={styles.container}>
            <div
              ref={statsRef}
              className={`${styles.statsGrid} ${
                statsVisible ? styles.statsVisible : ""
              }`}
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={styles.statBox}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>

            <div
              className={`${styles.contextBlock} ${
                statsVisible ? styles.contextVisible : ""
              }`}
            >
              <div className={styles.contextInner}>
                <div className={styles.contextCopy}>
                  <p className={styles.contextText}>
                    The rapid expansion of data centers is creating a new
                    category of workforce demand. Through collaboration with
                    NIICA
                    <span className={styles.contextParen}>
                      {" "}
                      (National Infrastructure & Industry Collaborative
                      Alliance)
                    </span>
                    , 66 Training supports efforts to prepare that talent
                    pipeline—aligning employers, education systems, and
                    apprenticeship pathways around the needs of modern
                    infrastructure.
                  </p>

                  <button
                    type="button"
                    className={styles.contextLink}
                    onClick={() => setModalOpen(true)}
                  >
                    View initiative details →
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
            className={`${styles.container} ${
              whyVisible ? styles.whyVisible : ""
            }`}
          >
            <div className={styles.whyPanel}>
              <div className={styles.whyHeader}>
                <span className={styles.eyebrow}>
                  Why Institutions Partner With 66Training
                </span>
                <h2 className={styles.sectionTitle}>
                  Strategy, execution, and system knowledge in one partner
                </h2>
                <p className={styles.whyIntro}>
                  We help institutions move complex initiatives from concept to
                  execution with the structure and support needed to make them
                  work.
                </p>
              </div>

              <div className={styles.whyLayout}>
                <div className={styles.whyContent}>
                  <div className={styles.reasonsGrid}>
                    {reasons.map((reason, index) => {
                      const Icon = reason.icon;

                      return (
                        <div
                          key={reason.title}
                          className={`${styles.reasonCard} ${
                            whyVisible ? styles.reasonVisible : ""
                          }`}
                          style={{ animationDelay: `${index * 0.12}s` }}
                        >
                          <div className={styles.reasonIconWrap}>
                            <Icon size={18} strokeWidth={1.8} />
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
                    alt="Community college students collaborating on a workforce training initiative"
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
                const Icon = project.icon;

                return (
                  <div
                    key={project.title}
                    className={`${styles.projectCard} ${
                      initiativesVisible ? styles.cardVisible : ""
                    }`}
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

                      {project.bullets && (
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
              className={`${styles.contractsGrid} ${
                contractsVisible ? styles.contractsVisible : ""
              }`}
            >
              {contracts.map((contract, index) => (
                <div
                  key={contract.title}
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
            <span className={styles.ctaEyebrow}>Let&apos;s Work Together</span>
            <h2>Ready to Start Your Next Project?</h2>
            <p>
              Let&apos;s discuss how we can support your workforce development
              and training initiatives.
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              Get in Touch →
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
                <span className={styles.modalEyebrow}>Initiative Details</span>
                <h2 id="data-center-modal-title" className={styles.modalTitle}>
                  Data Center Workforce Preparedness
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
              <p className={styles.modalIntro}>
                As data centers expand across the U.S., employers need a larger,
                better-prepared technical workforce to support operations,
                uptime, safety, and long-term growth.
              </p>

              <p className={styles.modalText}>
                Through collaboration with NIICA and related education partners,
                this work supports a broader effort to align employers,
                community colleges, and workforce systems around the training
                needs of the data center sector.
              </p>

              <div className={styles.modalGrid}>
                <div className={styles.modalCard}>
                  <h3 className={styles.modalCardTitle}>Key Focus Areas</h3>
                  <ul className={styles.modalList}>
                    <li>Curriculum development and alignment</li>
                    <li>Career pathways for data center roles</li>
                    <li>Employer-informed training design</li>
                    <li>Apprenticeship and workforce pipeline development</li>
                    <li>Resource sharing across institutions</li>
                  </ul>
                </div>

                <div className={styles.modalCard}>
                  <h3 className={styles.modalCardTitle}>What This Supports</h3>
                  <ul className={styles.modalList}>
                    <li>Preparation for high-growth technical jobs</li>
                    <li>Stronger employer and educator coordination</li>
                    <li>Scalable pathways into modern infrastructure work</li>
                    <li>Regional and national workforce readiness</li>
                  </ul>
                </div>
              </div>

              <div className={styles.linkSection}>
                <h3 className={styles.linkSectionTitle}>
                  Primary Initiative Links
                </h3>
                <div className={styles.linkList}>
                  {industryResources.slice(0, 2).map((item) => (
                    <a
                      key={item.name}
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
                  {dataCenterPrograms.map((item) => (
                    <a
                      key={item.name}
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
                  {industryResources.slice(2).map((item) => (
                    <a
                      key={item.name}
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
