import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Services | 66 Professional Services",
  description:
    "Comprehensive higher education services including workforce development, curriculum design, project management, and training delivery for community colleges, state agencies, and federal clients.",
};

export default function ServicesPage() {
  const services = [
    {
      id: "workforce-development",
      title: "Workforce Development",
      subtitle: "Building Tomorrow's Workforce Today",
      description:
        "We design and implement comprehensive workforce training programs that connect education with industry needs. Our job readiness initiatives prepare students for successful careers with leading employers.",
      features: [
        "Industry-aligned training program design",
        "Job readiness and career pathway development",
        "Employer partnership facilitation",
        "Student placement and success tracking",
      ],
      clients: "Tesla START Program, PG&E PowerPathway",
      image: "/images/services/workforce_development.jpg",
    },
    {
      id: "program-management",
      title: "Program Management",
      subtitle: "Strategic Oversight for Complex Initiatives",
      description:
        "Expert management of large-scale higher education programs ensuring on-time delivery, budget adherence, and measurable outcomes for community colleges and state agencies.",
      features: [
        "Multi-year program strategic planning",
        "Stakeholder coordination and communication",
        "Budget management and resource allocation",
        "Performance metrics and outcome reporting",
      ],
      clients: "PG&E PowerPathway (2018-2021)",
      image: "/images/services/program_management.jpg",
    },
    {
      id: "project-management",
      title: "Project Management",
      subtitle: "Delivering Results Through Expert Coordination",
      description:
        "Professional project management for higher education and workforce training initiatives. We manage timelines, budgets, and relationships to ensure successful project completion.",
      features: [
        "Project planning and timeline development",
        "Resource coordination and team leadership",
        "Risk management and mitigation",
        "Quality assurance and deliverable tracking",
      ],
      clients: "NextFlex, PureStorage",
      image: "/images/services/project_management.jpg",
    },
    {
      id: "curriculum-development",
      title: "Curriculum Development",
      subtitle: "Industry-Aligned Learning Solutions",
      description:
        "Our curriculum designers create comprehensive training materials that meet both academic standards and real-world employer workforce needs. We bridge the gap between education and industry.",
      features: [
        "Custom curriculum design and development",
        "Industry competency alignment",
        "Learning outcome assessment tools",
        "Instructor training and support materials",
      ],
      clients: "Tesla, PG&E, NextFlex programs",
      image: "/images/services/curriculum_development.jpg",
    },
    {
      id: "training-delivery",
      title: "Training Delivery",
      subtitle: "Engaging, Effective Instruction",
      description:
        "Implementation and facilitation of workforce training programs that bridge classroom learning and real-world job requirements. Our trainers bring industry expertise and educational best practices.",
      features: [
        "Expert instructor recruitment and training",
        "Hands-on skills development",
        "Hybrid and remote training delivery",
        "Student engagement and retention strategies",
      ],
      clients: "Community colleges, corporate partners",
      image: "/images/services/training_delivery.jpg",
    },
    {
      id: "employer-engagement",
      title: "Employer Engagement",
      subtitle: "Strategic Industry Partnerships",
      description:
        "We facilitate meaningful relationships between education institutions and industry leaders, creating sustainable talent pipelines and workforce pathways that benefit both students and employers.",
      features: [
        "Employer advisory board development",
        "Internship and apprenticeship programs",
        "Industry needs assessment",
        "Job placement support and tracking",
      ],
      clients: "Tesla, PG&E, PureStorage, NextFlex",
      image: "/images/services/employer_engagement.jpg",
    },
  ];

  return (
    <main className={styles.servicesPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>What We Do</h1>
          <p className={styles.heroDescription}>
            Comprehensive higher education services delivering workforce
            development, curriculum design, and project management solutions for
            community colleges, state agencies, and federal clients nationwide.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={styles.serviceCard}
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
      <section className={styles.ctaSection}>
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
