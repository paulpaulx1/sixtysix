"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function ServicesPage() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [heroVisible, setHeroVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const cardRefs = useRef([]);
  const heroRef = useRef(null);
  const ctaRef = useRef(null);

  // Hero animation on mount
  useEffect(() => {
    setHeroVisible(true);
  }, []);

  // Service cards observer
  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(index));
          }
        },
        { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  // CTA observer
  useEffect(() => {
    if (!ctaRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCtaVisible(true);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(ctaRef.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: "workforce-development",
      title: "Workforce Development",
      subtitle: "Building Tomorrow's Workforce Today",
      description:
        "We design and implement comprehensive workforce development programs that prepare students for high-demand careers while meeting employer talent needs. Our industry-aligned training initiatives create clear pathways from classrooms to successful employment with leading employers like Tesla, PG&E, and NextFlex.",
      features: [
        "Industry-Aligned Program Design",
        "Career Pathway Development",
        "Employer Partnership Facilitation",
        "Student Success Tracking",
      ],
      clients:
        "Tesla START Program, PG&E PowerPathway, NextFlex Manufacturing Workforce Initiative",
      image: "/images/services/workforce_development.jpg",
    },
    {
      id: "program-management",
      title: "Program Management",
      subtitle: "Strategic Oversight for Complex Initiatives",
      description:
        "Expert program management for complex, multi-year higher education services and workforce development initiatives. From grant-funded workforce programs to statewide educational initiatives, we manage all aspects of program execution including stakeholder coordination, budget oversight, compliance reporting, and performance measurement.",
      features: [
        "Strategic Program Planning",
        "Stakeholder Coordination",
        "Budget & Resource Management",
        "Performance Reporting",
      ],
      clients: "PG&E PowerPathway Program Management (2018-2021)",
      image: "/images/services/program_management.jpg",
    },
    {
      id: "project-management",
      title: "Project Management",
      subtitle: "Delivering Results Through Expert Coordination",
      description:
        "Our project management services ensure successful execution of higher education services and workforce development projects from initiation through completion. We coordinate timelines, manage budgets, facilitate stakeholder communication, and deliver results for community colleges, government agencies, and industry partners.",
      features: [
        "Project Planning & Scheduling",
        "Resource Coordination",
        "Risk Management",
        "Quality Assurance",
      ],
      clients:
        "NextFlex Training Facility Setup, PureStorage Technical Program Launch",
      image: "/images/services/project_management.jpg",
    },
    {
      id: "curriculum-development",
      title: "Curriculum Development",
      subtitle: "Industry-Aligned Learning Solutions",
      description:
        "Our curriculum development services create comprehensive, industry-aligned training materials that meet academic standards while preparing students for real-world employment. We work with subject matter experts, industry partners, and educational institutions to bridge the gap between classroom theory and workplace practice.",
      features: [
        "Custom Curriculum Design",
        "Industry Competency Mapping",
        "Learning Outcome Assessment",
        "Instructor Support Materials",
      ],
      clients:
        "Tesla Technician Training Curriculum, PG&E Utility Worker Programs, NextFlex Programs",
      image: "/images/services/curriculum_development.jpg",
    },
    {
      id: "training-delivery",
      title: "Training Delivery",
      subtitle: "Engaging, Effective Instruction",
      description:
        "We deliver engaging, effective workforce training that bridges classroom learning and workplace requirements. Our experienced instructors combine industry expertise with proven teaching methodologies to prepare students for immediate employment success.",
      features: [
        "Expert Instructor Recruitment",
        "Hands-On Skills Training",
        "Hybrid & Remote Delivery",
        "Student Engagement & Retention",
      ],
      clients: "Community college workforce programs, corporate training partnerships",
      image: "/images/services/training_delivery.jpg",
    },
    {
      id: "employer-engagement",
      title: "Employer Engagement",
      subtitle: "Strategic Industry Partnerships",
      description:
        "We build and maintain strategic partnerships between educational institutions and industry leaders, creating sustainable talent pipelines that benefit students, colleges, and employers. Our employer engagement services ensure workforce development programs remain relevant, responsive, and aligned with current labor market demands.",
      features: [
        "Employer advisory boards",
        "Internship and apprenticeship programs",
        "Industry Needs Assessment",
        "Job Placement Support",
      ],
      clients: "Tesla START Employer Partnership, PG&E Utility Workforce Engagement, PureStorage Technology Alliance, NextFlex Programs",
      image: "/images/services/employer_engagement.jpg",
    },
  ];

  return (
    <main className={styles.servicesPage}>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`${styles.hero} ${heroVisible ? styles.heroVisible : ""}`}
      >
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>What We Do</h1>
          <p className={styles.heroDescription}>
            Comprehensive higher education services and workforce development
            solutions for community colleges, state agencies, and industry
            partners. Our DVBE-certified team provides end-to-end support from
            curriculum design to training delivery, ensuring measurable outcomes
            for students, institutions, and employers.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`${styles.serviceCard} ${
                visibleCards.has(index) ? styles.serviceCardVisible : ""
              }`}
              id={service.id}
            >
              <div className={styles.serviceImageWrapper}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className={styles.serviceImage}
                />
                <div className={styles.serviceNumber}>0{index + 1}</div>
              </div>

              <div className={styles.serviceContent}>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceSubtitle}>{service.subtitle}</p>
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>

                <div className={styles.serviceFeatures}>
                  <h3>Key Capabilities</h3>
                  <ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.serviceClients}>
                  <strong>Representative Projects:</strong> {service.clients}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className={`${styles.ctaSection} ${ctaVisible ? styles.ctaVisible : ""}`}
      >
        <div className={styles.ctaContent}>
          <h2>Ready to Partner With Us?</h2>
          <p>
            Let's discuss how our team of 10+ specialists can support your
            higher education and workforce development initiatives.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
