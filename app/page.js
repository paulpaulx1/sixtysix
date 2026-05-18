import styles from "./page.module.css";
import Hero from "./components/Hero";
import ServiceCardsSection from "./components/ServiceCardsSection";
import AboutContent from "./components/AboutContent";
import WhoWeServe from "./components/WhoWeServe";
import { client } from "@/sanity/lib/client";

export default async function Home() {
  const data = await client.fetch(`*[_type == "homePage"][0]`);

  return (
    <main className={styles.main} role="main">
      <Hero />
      <AboutContent about={data.about} />
      <ServiceCardsSection services={data.services} />
      <WhoWeServe whoWeServe={data.whoWeServe} />
    </main>
  );
}
