"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./ServiceCardsSection.module.css";
import ServiceCard from "./ServiceCard";

const ServiceCardsSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  /* ── Previous 6-service array ────────────────────────────────────────────
  const services = [
    {
      iconType: "house",
      blueprint: "WFD_001",
      title: "Workforce Development",
      description:
        "We design and implement comprehensive workforce development programs that connect community college students to employers like Tesla, PG&E, and NextFlex, creating clear pathways from classroom to career with measurable employment outcomes.",
      linkUrl: "/services#workforce-development",
      linkText: "Learn More About Workforce Development",
    },
    {
      iconType: "buildings",
      blueprint: "PGM_001",
      title: "Program Management",
      description:
        "Our team creates industry-aligned curricula that meet academic standards while directly reflecting employer workforce needs. We develop complete course frameworks, instructional materials, assessments, and learning resources for technical and professional programs.",
      linkUrl: "/services#program-management",
      linkText: "Explore Program Management Services",
    },
    {
      iconType: "hammer",
      blueprint: "PRJ_001",
      title: "Project Management",
      description:
        "Our project managers coordinate workforce and education initiatives from planning through implementation—handling timelines, stakeholder communication, risk management, and deliverables to ensure successful program launches.",
      linkUrl: "/services#project-management",
      linkText: "View Project Management Expertise",
    },
    {
      iconType: "ruler",
      blueprint: "CUR_001",
      title: "Curriculum Development",
      description:
        "Professional curriculum design services creating industry-aligned training programs. Our curriculum designers develop comprehensive course materials that meet both academic standards and employer workforce needs.",
      linkUrl: "/services#curriculum-development",
      linkText: "See Curriculum Design Services",
    },
    {
      iconType: "toolbox",
      blueprint: "TRN_001",
      title: "Training Facilitation",
      description:
        "We deliver engaging, industry-relevant training that bridges classroom learning and workplace expectations, preparing students for immediate job placement and long-term career growth",
      linkUrl: "/services#training-delivery",
      linkText: "Learn About Training Facilitation",
    },
    {
      iconType: "wrench",
      blueprint: "EMP_001",
      title: "Employer Engagement",
      description:
        "We build strategic partnerships between educational institutions and employers, facilitating apprenticeships, internships, and hiring pipelines while ensuring programs stay aligned with evolving workforce demands.",
      linkUrl: "/services#employer-engagement",
      linkText: "Explore Employer Engagement",
    },
  ];
  ──────────────────────────────────────────────────────────────────────── */

  const services = [
    {
      iconType: "house",
      blueprint: "WFD_001",
      title: "Strong Workforce & CAI Initiative Support",
      description:
        "Full lifecycle implementation support — moving initiatives from proposal to operational success.",
      bullets: [
        "Program concept development",
        "Industry validation",
        "Employer advisory board formation",
        "Curriculum alignment",
        "Apprenticeship design and documentation",
        "Reporting and compliance oversight",
        "Cross-college coordination",
      ],
      linkUrl: "/services#workforce",
      linkText: "Learn More",
    },
    {
      iconType: "buildings",
      blueprint: "PGM_001",
      title: "Regional & Statewide Project Management",
      description:
        "Complex initiatives coordinated across multiple colleges and stakeholders — deliverables met, funding requirements satisfied.",
      bullets: [
        "Multi-partner governance facilitation",
        "Budget and milestone tracking",
        "Performance reporting",
        "Risk mitigation",
        "Stakeholder communication",
      ],
      linkUrl: "/services#project-management",
      linkText: "Learn More",
    },
    {
      iconType: "toolbox",
      blueprint: "EMP_001",
      title: "Employer Engagement & Industry Alignment",
      description:
        "A bridge between institutional priorities and employer expectations.",
      bullets: [
        "Targeted outreach",
        "Advisory board facilitation",
        "Curriculum alignment to workforce needs",
        "Apprenticeship pathway design",
        "Talent pipeline development",
      ],
      linkUrl: "/services#employer-engagement",
      linkText: "Learn More",
    },
    {
      iconType: "ruler",
      blueprint: "CUR_001",
      title: "Curriculum Development",
      description:
        "Industry-aligned curriculum that meets academic standards and reflects real workforce needs.",
      bullets: [
        "Course framework and instructional design",
        "Technical and professional program development",
        "Competency mapping to employer skill requirements",
        "Assessment and learning resource creation",
        "Articulation and transfer pathway alignment",
      ],
      linkUrl: "/services#curriculum-development",
      linkText: "Learn More",
    },
    {
      iconType: "hammer",
      blueprint: "TRN_001",
      title: "Training Facilitation",
      description:
        "Engaging, industry-relevant training that bridges classroom learning and workplace expectations.",
      bullets: [
        "Contextualized instruction for technical programs",
        "Workforce readiness and professional skills",
        "Coordination with employer partners",
        "Immediate job placement preparation",
        "Long-term career pathway development",
      ],
      linkUrl: "/services#training-facilitation",
      linkText: "Learn More",
    },
    {
      iconType: "wrench",
      blueprint: "CPL_001",
      title: "Compliance & Reporting",
      description:
        "Rigorous oversight that keeps funded programs on track and audit-ready.",
      bullets: [
        "Strong Workforce and CAI reporting requirements",
        "Launchboard and outcomes data management",
        "Fiscal accountability and budget documentation",
        "Registered apprenticeship compliance",
        "Program review and continuous improvement",
      ],
      linkUrl: "/services#compliance",
      linkText: "Learn More",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={styles.servicesSection}
      data-element="services"
    >
      <div className={styles.container}>
        <div
          className={`${styles.servicesHeader} ${hasAnimated ? styles.headerVisible : styles.headerHidden}`}
        >
          <p className={styles.servicesEyebrow}>What We Do</p>
          <h2 className={styles.servicesTitle}>Our Services</h2>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles.cardWrapper} ${hasAnimated ? styles.cardVisible : styles.cardHidden}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard
                iconType={service.iconType}
                blueprint={service.blueprint}
                title={service.title}
                description={service.description}
                bullets={service.bullets}
                linkUrl={service.linkUrl}
                linkText={service.linkText}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCardsSection;