"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { ClipboardList, Palette, Rocket, TrendingUp } from "lucide-react";

export default function LeadershipDevelopmentPage() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [heroVisible, setHeroVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const cardRefs = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(index));
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -50px 0px" },
      );

      observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  useEffect(() => {
    if (!ctaRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCtaVisible(true);
      },
      { threshold: 0.15 },
    );

    observer.observe(ctaRef.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: "coaching-mentoring",
      title: "Coaching & Mentoring",
      subtitle: "Practical Leadership Support for Real Workplace Challenges",
      description:
        "We partner with organizations to design and deliver confidential coaching and mentoring engagements for supervisors, managers, and senior leaders. Our approach is grounded in real workplace dynamics, helping leaders strengthen judgment, communication, and day-to-day effectiveness.",
      features: [
        "Executive & Supervisor Coaching",
        "Confidential One-on-One Sessions",
        "Leadership Goal Setting",
        "Applied Learning Assignments",
      ],
      clients:
        "Public agencies, community college leaders, workforce and institutional partners",
      image: "/leadership-images/coaching.jpg",
    },
    {
      id: "leadership-training",
      title: "Leadership Training Programs",
      subtitle: "Structured Development for Managers, Supervisors, and Teams",
      description:
        "We design and implement leadership development programs that help participants strengthen communication, improve decision-making, and lead teams more effectively. Sessions are tailored to organizational context and focused on practical application rather than abstract theory.",
      features: [
        "Transitioning Into Leadership",
        "Decision-Making & Prioritization",
        "Situational Leadership",
        "Team Leadership & Performance",
      ],
      clients:
        "Leadership training for supervisors, managers, and cross-functional teams",
      image: "/leadership-images/leadership.jpg",
    },
    {
      id: "communication-conflict",
      title: "Communication & Conflict Management",
      subtitle: "Clearer Communication Across Teams and Levels of Leadership",
      description:
        "We lead and deliver training engagements that help leaders navigate difficult conversations, improve alignment, and address conflict constructively. Our work focuses on communication habits that strengthen accountability, trust, and team cohesion.",
      features: [
        "Leadership Communication & Alignment",
        "Conflict Navigation",
        "Difficult Conversations",
        "Cross-Team Collaboration",
      ],
      clients:
        "Supervisor and manager training, team leadership workshops, institutional staff development",
      image: "/leadership-images/conflict.jpg",
    },
    {
      id: "organizational-assessment",
      title: "Organizational Assessment",
      subtitle: "Assessment and Insight to Guide Leadership Strategy",
      description:
        "We assess organizational needs, leadership challenges, and workforce dynamics through structured discovery, facilitated sessions, and evaluation. This work helps organizations identify barriers, clarify priorities, and align leadership development efforts with institutional goals.",
      features: [
        "Organizational Needs Assessment",
        "Leadership Capacity Evaluation",
        "Facilitated Engagement Sessions",
        "Strategic Recommendations",
      ],
      clients:
        "Organizational leadership initiatives, public-sector assessment engagements, institutional effectiveness efforts",
      image: "/leadership-images/assessment.jpg",
    },
    {
      id: "implementation-support",
      title: "Implementation Support",
      subtitle: "From Leadership Strategy to Operational Follow-Through",
      description:
        "We do not stop at recommendations. We partner with organizations to lead and deliver implementation support through planning, facilitation, coaching, and continuous improvement—helping leadership development efforts translate into durable outcomes.",
      features: [
        "Program Design & Rollout",
        "Facilitated Leadership Initiatives",
        "Continuous Improvement Support",
        "Evaluation & Long-Term Sustainment",
      ],
      clients:
        "Leadership initiatives requiring ongoing implementation, facilitation, and operational follow-through",
      image: "/leadership-images/implementation.jpg",
    },
  ];

  const approachSteps = [
    {
      icon: ClipboardList,
      label: "Assess",
      description:
        "Understand organizational needs, workforce gaps, and leadership challenges.",
    },
    {
      icon: Palette,
      label: "Design",
      description:
        "Develop tailored strategies, programs, and implementation frameworks.",
    },
    {
      icon: Rocket,
      label: "Implement",
      description:
        "Lead delivery through training, coaching, and program facilitation.",
    },
    {
      icon: TrendingUp,
      label: "Sustain",
      description:
        "Support long-term success through evaluation, iteration, and continuous improvement.",
    },
  ];

  return (
    <main className={styles.servicesPage}>
      <section
        className={`${styles.hero} ${styles.leadershipHero} ${
          heroVisible ? styles.heroVisible : ""
        }`}
      >
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>
            Leadership Development & Consulting
          </span>

          <h1 className={styles.heroTitle}>
            Stronger leadership for teams, managers, and organizations in motion
          </h1>

          <p className={styles.heroDescription}>
            We partner with organizations to design and deliver leadership
            development, coaching, and consulting engagements that strengthen
            decision-making, communication, and team performance. Our work helps
            leaders navigate complexity and drive measurable outcomes.
          </p>
        </div>
      </section>

      <section className={styles.approachBand}>
        <div className={styles.container}>
          <div className={styles.approachIntro}>
            <span className={styles.approachEyebrow}>Our Approach</span>
            <h2 className={styles.approachTitle}>
              Assess → Design → Implement → Sustain
            </h2>
            <p className={styles.approachDescription}>
              We take a structured approach to every engagement—aligning
              strategy, execution, and outcomes from the start.
            </p>
          </div>

          <div className={styles.approachGrid}>
            {approachSteps.map(({ icon: Icon, label, description }, i) => (
              <div key={label} className={styles.approachCard}>
                <div className={styles.approachIcon}>
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <span className={styles.approachStep}>Step 0{i + 1}</span>
                <h3>{label}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                <p className={styles.serviceSubtitle}>{service.subtitle}</p>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
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
                  <strong>Representative Engagements:</strong> {service.clients}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        ref={ctaRef}
        className={`${styles.ctaSection} ${ctaVisible ? styles.ctaVisible : ""}`}
      >
        <div className={styles.ctaContent}>
          <span className={styles.ctaEyebrow}>Let&apos;s Work Together</span>
          <h2>Ready to strengthen leadership across your organization?</h2>
          <p>
            We partner with public agencies, colleges, and workforce
            organizations to design and deliver leadership development that
            creates lasting impact.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Get in Touch →
          </Link>
        </div>
      </section>
    </main>
  );
}
