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
    description: "Iniciei cuidando da parte web de um aplicativo de gestão de PDV onde eram feitas as configurações para o uso do PDV desktop utilizando AngularJS 1 e servindo o app no Azure via Azure Static WebApp, onde utilizava o Websocket com SignalR para atualizações em tempo real e atualizações via API, em seguida fui alocado para o projeto do PDV mobile que estava sendo feito e que não havia sido lançado ainda, participei de todas as partes do processo, desde o planejamento até a manutenção e criação de novas features, isso antes e após o lançamento do App, nesse processo além de aprender Kotlin que foi a linguagem utilizada, tive contato com ferramentas e frameworks como Room Database para persistência no device, Retrofit para requisições HTTP, Websocket como mensageria além de conceitos como Clean Architecture e DDD para a estrutura do projeto utilizando CQRS para gerenciar a camada de Service. Fora isso também fui responsável  por implementar a parte de CI/CD do projeto no Github Actions para publicação do app na Play Store"
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
    description: "Nesse ponto além do projeto MVC eu ja havia começado a mexer nos microsserviços da aplicação onde tinham responsabilidades especificas e eram em .NET Core, no caso da minha equipe nossos microsserviços eram focados em integraçõs com ferramentas de terceiros, como CRMs, ferramentas de marketing, além de ferramentas de e- mails como Gmail e Outlook com a Central de E - mails da ferramenta.Com o tempo fiquei como principal responsável e especialista da Central de E - mails e suas integrações, enquanto ainda cuidava das demais funcionalides. Nesse período minha equipe foi responsável por criar e desenvolver uma integração com o WhatsApp Business para que o cliente pudesse prospectar via WhatsApp sem precisar sair da ferramenta, nesse periodos implementamos um novo microsserviço, além de começar a utilizar Redis como chache e SignalR para atualização em tempo real com Websocket."
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
    description: "Migrei da area de suporte para de desenvolvimento para trabalhar dando manutenção e desenvolvendo novas features do software web da empresa(Spotter), foi meu primeiro contato com um projeto real onde tive uma base  forte graças a meu time que era excelente, tanto tecnicamente quanto no dia a dia.Meu time era responsavel principalmente pela parte de integrações com plataformas de terceiros com o software, mexi principalmente no projeto  que era em MVC diretamente com C# e.NET Framework no backend, criando e manipulando API's e integrações, além de dar manutenção e criar novas telas tanto em Razor quanto em ReactJS que eram os frameworks utilizados no frontend.Também  a persistencia com o banco de dados em SQL Server."
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
    description: "Passei a atender chamados mais complexos que envolviam analise mais técnica, após treinar os colaboradores para realizar os apontamentos DNS passei a cuidar de casos mais complexos onde ocorriam problemas ao realizar os apontamentos de DNS."
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
    description: "Me tornei principal responsável por configurar o DNS dos clientes para disparo de e-mails marketing do software. Com o tempo passei a colaborar com o treinamento de novos colaboradores do suporte, ensinando a realizar operações mais técnicas realizadas pelo suporte, seja com scripts em SQL ou com apontamentos DNS.Fiquei responsável também nesse período por uma aplicação C# de automação de envio de relatórios específicos para clientes."
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
    description: "Trabalhei com atendimento ao cliente por chat, telefone e e-mail para dar suporte ao Spotter (App de sales engangement vendido pela empresa), realizava consultas com SQL no banco de dados para analise de chamados e  de relatórios especificos.Também fui responsável por começar a realizar apontamentos de DNS para clientes para utilizar ferramenta de e - mails marketing do software que até então ficava a cargo do cliente."
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
    description: "Bootcamp de uma semana focado em Docker e Kubernetes, onde aprendi a subir uma aplicação escalável e de alta performance"
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
    description: "Bootcamp de uma semana focado em subir uma aplicação de maneira simples na AWS com alta disponibilidade"
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
    description: "Curso onde aprendi conceitos de básicos a avançados com a linguagem C#"
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
    description: "Curso onde criei uma ferramenta full stack com back e front end em javascript, utilizando especificamente ExpressJS no backend e ReactJS no frontend como frameworks, além de persistir os dados da aplicação em um banco não relacional com MongoDB, o sistema era um software de feedback com possibilidade de resposta com envio de e-mails usando Sendgrid, enquanto eu fazia o curso eu utilizava os conhecimentos adquiridos para criar meu TCC que era um app de delivery de produtos de farmácia chamado PharmaGO"
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
    description: "Curso onde aprendi conceitos básico de programação com Java"
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
    description: "Curso onde entendi o conceito de orientação a objeto"
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
    description: "Tecnologo onde me formei e tive o primeiro contato com programação, participei de todas as atividades extra curriculares que podia relacionadas a programação, mexendo bastante com Python nas mesmas, além de fazer meu TCC que foi um delivery de produtos de farmacia chamado PharmaGO, onde utilizei ExpressJS no backend e ReactJS no frontend além de persistir os dados em um banco não relacional utilizando MongoDB"
  },
];

export const WORK_MODEL = {
  [WorkModel.Hybrid]: "Híbrido",
  [WorkModel.Remote]: "Remoto",
  [WorkModel.OnSite]: "Presencial"
}


