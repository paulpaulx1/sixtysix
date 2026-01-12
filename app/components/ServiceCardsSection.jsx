import styles from "./ServiceCardsSection.module.css";
import ServiceCard from "./ServiceCard";

const ServiceCardsSection = () => {
  const services = [
    {
      iconType: "house",
      blueprint: "WFD_001",
      title: "Workforce Development",
      description:
        "Comprehensive workforce training programs connecting education and industry. We design and implement job readiness initiatives that prepare students for careers with employers like Tesla, PG&E, and NextFlex.",
      linkUrl: "/services/workforce-development",
      linkText: "Learn More About Workforce Development",
    },
    {
      iconType: "buildings",
      blueprint: "PGM_001",
      title: "Program Management",
      description:
        "Strategic oversight and execution of large-scale higher education initiatives. Our team manages multi-year programs ensuring on-time delivery and measurable outcomes for community colleges and state agencies.",
      linkUrl: "/services/program-management",
      linkText: "Explore Program Management Services",
    },
    {
      iconType: "hammer",
      blueprint: "PRJ_001",
      title: "Project Management",
      description:
        "Expert project coordination for higher education and workforce training initiatives. We deliver results-driven solutions managing timelines, budgets, and stakeholder relationships across complex educational projects.",
      linkUrl: "/services/project-management",
      linkText: "View Project Management Expertise",
    },
    {
      iconType: "ruler",
      blueprint: "CUR_001",
      title: "Curriculum Development",
      description:
        "Professional curriculum design services creating industry-aligned training programs. Our curriculum designers develop comprehensive course materials that meet both academic standards and employer workforce needs.",
      linkUrl: "/services/curriculum-development",
      linkText: "See Curriculum Design Services",
    },
    {
      iconType: "toolbox",
      blueprint: "TRN_001",
      title: "Training Delivery",
      description:
        "Implementation and facilitation of workforce training programs. We deliver engaging, effective instruction that bridges the gap between classroom learning and real-world job requirements.",
      linkUrl: "/services/training-delivery",
      linkText: "Learn About Training Delivery",
    },
    {
      iconType: "wrench",
      blueprint: "EMP_001",
      title: "Employer Engagement",
      description:
        "Strategic partnerships connecting education institutions with industry leaders. We facilitate employer relationships that create meaningful workforce pathways and sustainable talent pipelines.",
      linkUrl: "/services/employer-engagement",
      linkText: "Explore Employer Engagement",
    },
  ];

  return (
    <section className={styles.servicesSection} data-element="services">
      <div className={styles.container}>
        <div className={styles.servicesHeader}>
          <h2 className={styles.servicesTitle}>Our Services</h2>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              iconType={service.iconType}
              blueprint={service.blueprint}
              title={service.title}
              description={service.description}
              linkUrl={service.linkUrl}
              linkText={service.linkText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCardsSection;
