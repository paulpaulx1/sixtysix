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
