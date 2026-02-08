import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Portfólio | Gildo Junior - Desenvolvedor Full-Stack",
    short_name: "gildofj.dev",
    description:
      "Portfólio profissional de Gildo Junior, desenvolvedor full stack (C#, ReactJS, TypeScript, Kotlin). Projetos, skills e experiência. Aberto a feedbacks!",
    start_url: "/",
  };
}
