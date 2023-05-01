import { Qualification, WorkModel } from "./types";

export const EXPERIENCE: Qualification[] = [
  {
    title: "Desenvolvedor Full Stack Pleno",
    organization: "Omie",
    country: "Brasil",
    state: "São Paulo",
    city: "São Paulo",
    startDate: "Agosto 2022",
    endDate: "Presente",
    workModel: WorkModel.Remote,
    description: ""
  },
  {
    title: "Desenvolvedor Full Stack Pleno",
    organization: "Exact Sales",
    country: "Brasil",
    state: "Santa Catarina",
    city: "Florianópolis",
    startDate: "Janeiro 2021",
    endDate: "Agosto 2022",
    workModel: WorkModel.Remote,
    description: ""
  },
  {
    title: "Desenvolvedor Full Stack Junior",
    organization: "Exact Sales",
    country: "Brasil",
    state: "Santa Catarina",
    city: "Florianópolis",
    startDate: "Fevereiro 2020",
    endDate: "Janeiro 2021",
    workModel: WorkModel.Hybrid,
    description: ""
  },
  {
    title: "Analista de Suporte Técnico",
    organization: "Exact Sales",
    country: "Brasil",
    state: "Santa Catarina",
    city: "Florianópolis",
    startDate: "Dezembro 2019",
    endDate: "Fevereiro 2020",
    workModel: WorkModel.OnSite,
    description: ""
  },
  {
    title: "Assistente de Suporte Técnico",
    organization: "Exact Sales",
    country: "Brasil",
    state: "Santa Catarina",
    city: "Florianópolis",
    startDate: "Agosto 2019",
    endDate: "Dezembro 2019",
    workModel: WorkModel.OnSite,
    description: ""
  },
  {
    title: "Estagiário de Suporte Técnico",
    organization: "Exact Sales",
    country: "Brasil",
    state: "Santa Catarina",
    city: "Florianópolis",
    startDate: "Janeiro 2019",
    endDate: "Agosto 2019",
    workModel: WorkModel.OnSite,
    description: ""
  },
];

export const EDUCATION: Qualification[] = [
  {
    title: "Kubernetes Bootcamp",
    organization: "KubDev.io",
    country: "Brasil",
    state: "Santa Catarina",
    city: "Florianópolis",
    startDate: "Maio 2021",
    endDate: "Maio 2021",
    workModel: WorkModel.Remote,
    description: ""
  },
  {
    title: "Bootcamp Alta Disponibilidade em Cloud",
    organization: "Cloud Treinamentos",
    country: "Brasil",
    state: "Santa Catarina",
    city: "Florianópolis",
    startDate: "Outubro 2020",
    endDate: "Outubro 2020",
    workModel: WorkModel.Remote,
    description: ""
  },
  {
    title: "C# Completo",
    organization: "Udemy",
    country: "Brasil",
    state: "Santa Catarina",
    city: "Florianópolis",
    startDate: "Fevereiro 2020",
    endDate: "Fevereiro 2020",
    workModel: WorkModel.Remote,
    description: ""
  },
  {
    title: "Node with React: Fullstack Web Development",
    organization: "Udemy",
    country: "Brasil",
    state: "Santa Catarina",
    city: "Florianópolis",
    startDate: "Outubro 2019",
    endDate: "Outubro 2019",
    workModel: WorkModel.Remote,
    description: ""
  },
  {
    title: "Linguagem de Programação Java - Básico",
    organization: "Fundação Bradesco",
    country: "Brasil",
    state: "Santa Catarina",
    city: "Florianópolis",
    startDate: "Janeiro 2019",
    endDate: "Janeiro 2019",
    workModel: WorkModel.Remote,
    description: ""
  },
  {
    title: "Introdução à Programação Orientada a Objetos (POO)",
    organization: "Fundação Bradesco",
    country: "Brasil",
    state: "Santa Catarina",
    city: "Florianópolis",
    startDate: "Dezembro 2018",
    endDate: "Dezembro 2018",
    workModel: WorkModel.Remote,
    description: ""
  },
  {
    title: "Análise e Desenvolvimento de Sistemas",
    organization: "Faculdade Cesusc",
    country: "Brasil",
    state: "Santa Catarina",
    city: "Florianópolis",
    startDate: "Fevereiro 2017",
    endDate: "Dezembro 2019",
    workModel: WorkModel.OnSite,
    description: ""
  },
];

export const WORK_MODEL = {
  [WorkModel.Hybrid]: "Híbrido",
  [WorkModel.Remote]: "Remoto",
  [WorkModel.OnSite]: "Presencial"
}


