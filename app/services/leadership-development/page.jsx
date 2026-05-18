import { client } from "@/sanity/lib/client";
import LeadershipDevelopmentPage from "./LeadershipDevelopmentPage";

export const metadata = {
  title: "Leadership Development & Consulting Services",
  description:
    "66 Training Services partners with organizations to design and deliver leadership development, coaching, organizational assessment, and management training services for public agencies, colleges, and workforce partners.",
  openGraph: {
    url: "https://66training.com/services/leadership-development",
  },
};

export default async function Page() {
  const data = await client.fetch(`*[_type == "leadershipPage"][0]`);
  return <LeadershipDevelopmentPage data={data} />;
}
