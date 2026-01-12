import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: "Team | 66 Professional Services",
  description:
    "Meet our team of 10+ specialists delivering higher education services, workforce development, and curriculum design solutions nationwide.",
};

export default function TeamPage() {
  const team = [
    {
      name: "Dan Montoya",
      role: "Founder | Principal Consultant",
      image: "/images/team/Dan Montoya.avif",
      bio: "Dan is an experienced Program/Project Manager in education, workforce development, and training. Dan is a former U.S. Army paratrooper, reliable performer, intuitive and creative problem solver who seeks to find practical solutions. Top skills include leadership, organizing, and budget management.",
    },
    {
      name: "Renee Albrecht",
      role: "Educational Consultant",
      image: "/images/team/Renee Albrecht.avif",
      bio: "Renee is a skilled Educational Consultant specializing in instructional design and curriculum development. She excels in enhancing digital learning environments through expertise in learning technologies, accessibility, AI tools, and project management. Renee holds a master's in education, bachelor's degrees in finance and management, and a graduate certificate in the neuroscience of teaching and learning.",
    },
    {
      name: "Dann Bergman",
      role: "Training Development Specialist",
      image: "/images/team/Dann Bergman.avif",
      bio: "With over fifty years of experience, Mr. Bergman has developed training for IBM's PC launch, F-16 pilots, UCSD healthcare, Unisys customer service, and IBM and Marriott sales. As a project director, he created K-12 curriculum programs, engineering exam prep, and a banking program funded by Unidos US and Bank of America. Recently, he served as acting Dean at San Jose Evergreen Community College, improving worker skills for better job opportunities.",
    },
    {
      name: "Carl Cimino",
      role: "Workforce Development Director",
      image: "/images/team/Carl Cimino.avif",
      bio: "Carl started his career in building trades, then worked as an administrator in a large school district, managing facilities. For the last 20 years, he has served as Director of Training at one of the largest Joint Apprenticeship Training Centers in the region. Carl's focus is on improving relations among colleges, apprenticeships, and employers.",
    },
    {
      name: "Donna Gilmour",
      role: "HR & Workforce Development Specialist",
      image: "/images/team/Donna Gilmour.avif",
      bio: "Donna is an HR professional with expertise in creating hiring pipelines and workforce development solutions. She has managed high-tech internship programs and integrated them into workforces. Recently, Donna created paid internships for high school students with the San Jose Chamber of Commerce and launched an apprenticeship program at Evergreen Valley College.",
    },
    {
      name: "Olivia Herriford",
      role: "Technology Leadership Consultant",
      image: "/images/team/Olivia Herriford.avif",
      bio: "Olivia is a respected and visionary servant leader dedicated to promoting diversity and inclusivity in the tech industry. She has been a trailblazer since starting her career as one of the first Black women in tech. Dr. Herriford has held technology leadership positions in large companies, startups, and nonprofits, contributing significantly to their success.",
    },
    {
      name: "Sam Hopstone",
      role: "Project Management Consultant",
      image: "/images/team/Samuel Hopstone.avif",
      bio: "Founder of Elderflower, Samuel simplifies environmental permitting with technical support, field oversight, and project management services. His passion for environmental stewardship is backed by a background in civil engineering, environmental consulting, and project management. Samuel's expertise helps individuals and organizations navigate complex regulations and achieve their project goals.",
    },
    {
      name: "Iyuanna Pease",
      role: "SEL & DEI Specialist",
      image: "/images/team/Iyuanna Pease.avif",
      bio: "Dr. Iyuanna Pease specializes in SEL, DEI, and trauma-informed practices, empowering professionals for holistic well-being. With a rich background in counseling and academia, she offers tailored support, fostering resilience and emotional intelligence. Through her sessions, she promotes self-care, enabling confident navigation of professional challenges. Dr. Pease inspires a positive impact in a supportive environment.",
    },
    {
      name: "Janhavi Pendse",
      role: "Workforce Development Consultant",
      image: "/images/team/Janhavi Pendse.avif",
      bio: "Janhavi Pendse is an experienced consultant specializing in workforce development across higher education, private, and non-profit sectors. With extensive expertise in operations, program management, organizational development, and program evaluation, Janhavi has a proven track record of driving organizational success and fostering sustainable growth.",
    },
    {
      name: "Lauren Tabata",
      role: "Graphic & Web Designer",
      image: "/images/team/Lauren Tabata.avif",
      bio: "Lauren is a seasoned graphic and web designer with a strong sales and marketing background. Skilled in Adobe Creative Suite, WordPress, Mailchimp, and marketing strategy, she has excelled in the manufacturing industry and the community college system. Lauren holds a BS in Business and Marketing from California State University-Monterey Bay.",
    },
  ];

  return (
    <main className={styles.teamPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Meet Our Team</h1>
          <p className={styles.heroDescription}>
            A network of 10+ specialists bringing decades of combined experience
            in higher education, workforce development, and training delivery.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <div className={styles.teamGrid}>
            {team.map((member, index) => (
              <div key={index} className={styles.teamCard}>
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
