import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { About } from "@/widgets/about";
import { Contact } from "@/widgets/contact";
import { Projects } from "@/widgets/projects";
import { Profile } from "@/widgets/profile";
import { Qualifications } from "@/widgets/qualifications";
import { Skills } from "@/widgets/skills";
import { ToastContainer } from "react-toastify";
import { JsonLd } from "@/shared/ui/JsonLd";
import { Background } from "@/shared/ui/Background";
import { getSkills } from "@/entities/skill/api/getSkills";
import { getProjects } from "@/entities/project/api/getProjects";
import { getQualifications } from "@/entities/qualification/api/getQualifications";
import { ProjectType } from "@/entities/project/model/project";
import { QualificationType } from "@/entities/qualification/model/qualification";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  // Fetch initial data on the server
  const [initialSkills, initialProjects, initialQualifications] =
    await Promise.all([
      getSkills(lang),
      getProjects(lang, ProjectType.Personal),
      getQualifications(lang, QualificationType.Experience),
    ]);

  return (
    <>
      <JsonLd />
      <Background />
      <Header />
      <main className="h-full max-[700px]:pt-12.5">
        <article className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center px-8">
          <Profile />
          <About />
          <Skills initialSkills={initialSkills} />
          <Qualifications initialQualifications={initialQualifications} />
          <Projects initialProjects={initialProjects} />
          <Contact />
        </article>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}
