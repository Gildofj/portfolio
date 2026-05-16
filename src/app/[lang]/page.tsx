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
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(routing.locales, lang)) {
    notFound();
  }

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
      <main className="relative z-10 h-full max-[700px]:pt-12.5">
        <article className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 sm:px-8">
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
