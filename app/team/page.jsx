"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import styles from "./page.module.css";

const expertise = [
  "Program and project management",
  "Registered apprenticeship design",
  "Curriculum and instructional support",
  "Employer engagement and advisory board facilitation",
  "Grant compliance and reporting",
];

const team = [
  {
    name: "Salam Dosouqi",
    role: "Executive Operations Manager | Associate Consultant",
    image: "/images/team/salam-dosouqi.png",
    bio: "Salam Dosouqi serves as the Executive Operations Manager for 66Training, bringing over a decade of experience in project management, program operations, and cross-sector collaboration. She specializes in leading complex initiatives, streamlining systems, and supporting partnerships between colleges, employers, and workforce programs. Known for her strong problem-solving skills and attention to detail, Salam ensures initiatives are executed efficiently while driving measurable impact for clients and partners.",
  },
  {
    name: "Renee Albrecht",
    role: "Senior Consultant",
    image: "/images/team/Renee Albrecht.avif",
    bio: "Renee Albrecht is a specialist in instructional design, curriculum development, and digital learning strategies. She supports 66Training's work by enhancing curriculum alignment, optimizing learning environments, and integrating effective learning technologies. Renee's expertise includes accessibility design, AI tools for education, and project coordination. With a master's in education, dual bachelor's degrees in finance and management, and a graduate certificate in the neuroscience of teaching and learning, she brings both pedagogical insight and practical design expertise to workforce programs.",
  },
  {
    name: "Dann Bergman",
    role: "Senior Consultant",
    image: "/images/team/Dann Bergman.avif",
    bio: "With more than fifty years of training and instructional development experience, Dann Bergman brings deep institutional knowledge to 66Training's projects. His career includes developing training for IBM's PC launch, F-16 pilot training, healthcare education programs, and corporate sales training. He has also served as a project director on large educational programs and as acting Dean at San Jose Evergreen Community College.",
  },
  {
    name: "Carl Cimino",
    role: "Senior Consultant",
    image: "/images/team/Carl Cimino.avif",
    bio: "Carl Cimino brings over two decades of apprenticeship and workforce training leadership to 66Training. He began his career in the building trades and transitioned to education administration, managing training operations within a major Joint Apprenticeship Training Center. His primary focus is building strong relationships among colleges, apprenticeship programs, and employer partners.",
  },
  {
    name: "Donna Gilmour",
    role: "Senior Consultant",
    image: "/images/team/Donna Gilmour.avif",
    bio: "Donna Gilmour is an HR and workforce development professional who specializes in creating talent pipelines and building work-based learning partnerships. She has managed internship programs that connect students with meaningful career opportunities and has led initiatives to develop paid internships and apprenticeships, including partnerships at Evergreen Valley College and with the San Jose Chamber of Commerce.",
  },
  {
    name: "Olivia Herriford, Ph.D.",
    role: "Senior Consultant",
    image: "/images/team/Olivia Herriford.avif",
    bio: "Olivia Herriford is a visionary leader with extensive experience in technology, diversity, and strategic engagement. A trailblazer in the tech industry, she has held leadership roles in both corporate and nonprofit sectors, contributing to major organizational growth and inclusive innovation. Olivia supports 66Training's efforts to embed equity, inclusion, and strategic tech insight into workforce initiatives.",
  },
  {
    name: "Sam Hopstone",
    role: "Project Management Consultant",
    image: "/images/team/Samuel Hopstone.avif",
    bio: "Founder of Elderflower, Samuel simplifies environmental permitting with technical support, field oversight, and project management services. His passion for environmental stewardship is backed by a background in civil engineering, environmental consulting, and project management.",
  },
  {
    name: "Iyuanna Pease",
    role: "SEL & DEI Specialist",
    image: "/images/team/Iyuanna Pease.avif",
    bio: "Dr. Iyuanna Pease specializes in SEL, DEI, and trauma-informed practices, empowering professionals for holistic well-being. With a rich background in counseling and academia, she offers tailored support, fostering resilience and emotional intelligence.",
  },
  {
    name: "Janhavi Pendse",
    role: "Workforce Development Consultant",
    image: "/images/team/Janhavi Pendse.avif",
    bio: "Janhavi Pendse is an experienced consultant specializing in workforce development across higher education, private, and non-profit sectors. With extensive expertise in operations, program management, organizational development, and program evaluation, Janhavi has a proven track record of driving organizational success.",
  },
  {
    name: "Lauren Tabata",
    role: "Associate Consultant",
    image: "/images/team/Lauren Tabata.avif",
    bio: "Lauren Tabata brings creative and strategic design leadership to 66Training, supporting web design, visual branding, marketing strategy, and communications. With a background in graphic design, marketing, WordPress development, and digital engagement, she ensures the firm's visual identity and messaging resonate clearly with clients and partners.",
  },
];

export default function TeamPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.teamPage}>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>Our Team</span>
          <h1 className={styles.heroTitle}>Meet the 66Training Team</h1>
          <p className={styles.heroDescription}>
            A collaborative team of experienced workforce development and
            education implementation professionals bringing strategic
            leadership, subject-matter expertise, and practical execution
            support to complex initiatives.
          </p>
        </div>
      </section>

      {/* ── Intro ────────────────────────────────────────────────────────── */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div className={styles.introLeft}>
              <span className={styles.eyebrow}>What We Bring</span>
              <h2 className={styles.introTitle}>Workforce Implementation Professionals</h2>
              <p className={styles.introBody}>
                Our team blends deep experience in program management,
                curriculum design, employer engagement, apprenticeship
                development, workforce alignment, and instructional strategies
                — all focused on moving workforce initiatives from funded
                vision to operational success.
              </p>
              <p className={styles.introBody}>
                Every engagement is supported by collaborative expertise,
                ensuring dedication, continuity, and capacity — not reliance
                on a single individual.
              </p>
            </div>
            <div className={styles.introRight}>
              <span className={styles.eyebrow}>Areas of Expertise</span>
              <ul className={styles.expertiseList}>
                {expertise.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={14} strokeWidth={2.2} className={styles.checkIcon} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Leadership Spotlight ─────────────────────────────────────────── */}
      <section className={styles.spotlightSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Leadership Spotlight</span>
            <h2 className={styles.sectionTitle}>Principal & Founder</h2>
          </div>
          <div className={styles.spotlightCard}>
            <div className={styles.spotlightImage}>
              <Image
                src="/images/team/Dan Montoya.avif"
                alt="Dan Montoya"
                width={320}
                height={380}
                className={styles.spotlightPhoto}
              />
            </div>
            <div className={styles.spotlightContent}>
              <h3 className={styles.spotlightName}>Dan Montoya</h3>
              <p className={styles.spotlightRole}>Founder & Principal</p>
              <div className={styles.spotlightDivider} />
              <p className={styles.spotlightBio}>
                Dan Montoya is the Founder and Principal at 66Training, a
                workforce program implementation firm specializing in program
                and project execution for California community colleges and
                public workforce initiatives.
              </p>
              <p className={styles.spotlightBio}>
                Under Dan's leadership, 66Training has supported 12 California
                community colleges, led 8 regional initiatives for the Bay Area
                Community College Consortium, and managed statewide pilot
                projects funded through Strong Workforce and the California
                Apprenticeship Initiative (CAI).
              </p>
              <p className={styles.spotlightBio}>
                Dan has guided efforts involving employer engagement,
                apprenticeship program development, curriculum alignment, and
                multi-stakeholder collaboration — helping institutions deliver
                programs that are responsive to real labor market demand.
              </p>
              <div className={styles.dvbeBadge}>
                <span>DVBE Certified</span>
                <span className={styles.badgeDot}>·</span>
                <span>California-Certified Disabled Veteran Business Enterprise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team Grid ────────────────────────────────────────────────────── */}
      <section ref={sectionRef} className={styles.teamSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>The Full Team</span>
            <h2 className={styles.sectionTitle}>10+ Specialists</h2>
          </div>
          <div className={styles.teamGrid}>
            {team.map((member, index) => (
              <div
                key={index}
                className={`${styles.teamCard} ${isVisible ? styles.visible : ""}`}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className={styles.memberImage}
                  />
                </div>
                <div className={styles.memberContent}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role}</p>
                  <p className={styles.memberBio}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}