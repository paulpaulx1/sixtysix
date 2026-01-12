import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: "Projects | 66 Professional Services",
  description:
    "Major workforce development projects with Tesla, PG&E, PureStorage, and NextFlex. Proven success in higher education program management and employer engagement.",
};

export default function ProjectsPage() {
  const projects = [
    {
      title: "Tesla START Program",
      organization: "Evergreen Valley College (EVC)",
      services: ["Project Management", "Employer Engagement"],
      description:
        "Managed the implementation of Tesla's START training program, creating pathways for students to enter Tesla's manufacturing workforce.",
      year: "2020-Present",
      client: "Tesla",
    },
    {
      title: "Data Center Technician Program",
      organization: "EVC & PureStorage, Inc.",
      services: ["Project Management", "Employer Engagement"],
      description:
        "Developed and launched a comprehensive data center technician training program in partnership with PureStorage, addressing critical workforce needs in the Bay Area tech sector.",
      year: "2019-Present",
      client: "PureStorage",
    },
    {
      title: "Advanced Manufacturing Program",
      organization: "EVC, NextFlex, and Cobham Inc.",
      services: ["Project Management", "Employer Engagement"],
      description:
        "Created industry-aligned advanced manufacturing curriculum and training programs, connecting students with NextFlex and Cobham employment opportunities.",
      year: "2019-Present",
      client: "NextFlex",
    },
    {
      title: "California Virtual Campus Online Education Initiative",
      organization: "Evergreen Valley College",
      services: [
        "Project Management",
        "Curriculum Support",
        "Employer Engagement",
      ],
      description:
        "Developed 6 fully online certificate programs comprising 29 courses, expanding access to career-focused education across California.",
      year: "2018-2021",
      client: "EVC",
    },
    {
      title: "Cloud Computing Employer Engagement",
      organization: "Bay Area Community College Consortium, ICT",
      services: ["Employer Engagement"],
      description:
        "Facilitated strategic partnerships between Bay Area community colleges and cloud computing employers, creating sustainable talent pipelines.",
      year: "2019-2020",
      client: "BACCC",
    },
    {
      title: "San Jose City College Centennial Celebration",
      organization: "San Jose City College",
      services: ["Project Management"],
      description:
        "Managed comprehensive planning and execution of the college's 100th anniversary celebration events and programming.",
      year: "2021",
      client: "SJCC",
    },
    {
      title: "PG&E PowerPathway 2021",
      organization: "PG&E",
      services: [
        "Program Management",
        "Training Delivery",
        "Employer Engagement",
      ],
      description:
        "Entry to Gas Operations program focused on diversity and inclusion, training cohorts for utility careers with comprehensive support services.",
      year: "2021",
      client: "PG&E",
    },
    {
      title: "PG&E PowerPathway 2020",
      organization: "PG&E",
      services: [
        "Program Management",
        "Training Delivery",
        "Employer Engagement",
      ],
      description:
        "Entry to Gas Operations program emphasizing diversity and inclusion, successfully placing graduates in utility sector careers.",
      year: "2020",
      client: "PG&E",
    },
    {
      title: "PG&E PowerPathway 2019",
      organization: "PG&E",
      services: [
        "Program Management",
        "Training Delivery",
        "Employer Engagement",
      ],
      description:
        "Entry to Electric Operations program with diversity and inclusion focus, preparing diverse candidates for electrical utility positions.",
      year: "2019",
      client: "PG&E",
    },
    {
      title: "PG&E PowerPathway 2018",
      organization: "PG&E",
      services: [
        "Program Management",
        "Training Delivery",
        "Employer Engagement",
      ],
      description:
        "Inaugural Entry to Gas Operations program establishing best practices for diversity-focused utility workforce development.",
      year: "2018",
      client: "PG&E",
    },
  ];

  return (
    <main className={styles.projectsPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Our Projects</h1>
          <p className={styles.heroDescription}>
            Delivering results for industry leaders across higher education,
            workforce development, and training initiatives.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.projectsSection}>
        <div className={styles.container}>
          <div className={styles.projectsList}>
            {projects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.projectHeader}>
                  <div className={styles.projectMeta}>
                    <span className={styles.projectYear}>{project.year}</span>
                    <span className={styles.projectClient}>
                      {project.client}
                    </span>
                  </div>
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <p className={styles.projectOrg}>{project.organization}</p>
                </div>

                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                <div className={styles.projectServices}>
                  {project.services.map((service, idx) => (
                    <span key={idx} className={styles.serviceTag}>
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready to Start Your Next Project?</h2>
          <p>
            Let's discuss how we can support your workforce development and
            training initiatives.
          </p>
          <a href="/contact" className={styles.ctaButton}>
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
