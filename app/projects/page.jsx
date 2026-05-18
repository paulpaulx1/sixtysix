import { client } from "@/sanity/lib/client";
import ProjectsPage from "./ProjectsPage";

export const metadata = {
  title: "Projects & Workforce Development Impact",
  description:
    "Explore 66 Training Services' work with California community colleges, state agencies, and industry partners across workforce development, apprenticeship design, and regional initiatives.",
  openGraph: {
    url: "https://66professionalservices.com/projects",
  },
};

export const revalidate = 0

export default async function Page() {
  const data = await client.fetch(`*[_type == "projectsPage"][0]`);
  return <ProjectsPage data={data} />;
}
