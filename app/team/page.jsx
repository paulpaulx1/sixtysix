import { client } from "@/sanity/lib/client";
import TeamPage from "./TeamPage";

export const metadata = {
  title: "Our Team",
  description:
    "Meet the 66 Professional Services team — experienced specialists in workforce development, curriculum design, and higher education services for California community colleges and government agencies.",
  openGraph: {
    url: "https://66professionalservices.com/team",
  },
};

export default async function Page() {
  const data = await client.fetch(`*[_type == "teamPage"][0]{
  hero,
  intro,
  "team": team | order(isLeadership asc)
}`);
  return <TeamPage data={data} />;
}
