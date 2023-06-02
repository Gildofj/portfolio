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
    description: "Inicialmente, comecei a trabalhar no desenvolvimento da parte web de um aplicativo de gestão de PDV. Minhas atividades envolviam a configuração do PDV desktop, utilizando AngularJS 1, e servindo o aplicativo no Azure via Azure Static WebApp. Nesse projeto, utilizei Websocket com SignalR para atualizações em tempo real e atualizações via API.\n\nEm seguida, fui alocado para trabalhar no projeto do PDV móvel que ainda não havia sido lançado.Durante o processo, participei de todas as etapas, desde o planejamento até a manutenção e criação de novas funcionalidades, antes e depois do lançamento do aplicativo.Aprendi a linguagem Kotlin, que foi utilizada no projeto, e tive contato com ferramentas e frameworks como Room Database para persistência no dispositivo, Retrofit para requisições HTTP, Websocket para comunicação em tempo real, além de conceitos como Clean Architecture e Domain-Driven Design(DDD) para a estruturação do projeto, utilizando o padrão CQRS para gerenciar a camada de serviços.\n\nAlém disso, também fui responsável pela implementação da parte de CI/CD do projeto no Github Actions, o que permitiu a publicação do aplicativo na Play Store."
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
    description: "Nessa fase, além do projeto MVC, comecei a trabalhar nos microsserviços da aplicação que tinham responsabilidades específicas e eram desenvolvidos em .NET Core. Na minha equipe, os microsserviços eram voltados para integrações com ferramentas de terceiros, como CRMs, ferramentas de marketing e ferramentas de e-mail, como o Gmail e o Outlook, com a Central de E-mails da ferramenta.\n\nCom o tempo, me tornei o principal responsável e especialista da Central de E-mails e suas integrações, ao mesmo tempo em que cuidava de outras funcionalidades.Durante esse período, minha equipe desenvolveu uma integração com o WhatsApp Business para permitir que o cliente pudesse prospectar via WhatsApp sem precisar sair da ferramenta. Para isso, implementamos um novo microsserviço e começamos a utilizar o Redis como cache e o SignalR para atualizações em tempo real com o Websocket."
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
    description: "Eu migrei da área de suporte para o desenvolvimento, onde passei a dar manutenção e desenvolver novas funcionalidades para o software web da empresa (Spotter). Esse foi o meu primeiro contato com um projeto real, e tive a sorte de trabalhar com um time excelente, tanto tecnicamente quanto em termos de trabalho em equipe.\n\nNo meu time, a responsabilidade principal era a integração do software com plataformas de terceiros.Eu trabalhei principalmente no projeto em MVC, usando C# e.NET Framework no backend. Minhas tarefas envolviam criar e manipular APIs e integrações, além de realizar manutenção e desenvolver novas telas tanto em Razor quanto em ReactJS, que eram os frameworks utilizados no frontend.Também fui responsável pela persistência de dados no banco SQL Server."
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
    description: "Depois de treinar meus colegas para lidar com os apontamentos DNS, fui designado para lidar com chamados mais complexos que exigiam uma análise técnica mais aprofundada. Eu era responsável por solucionar problemas que surgiam durante a realização dos apontamentos de DNS, especialmente em casos mais complexos."
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
    description: "Com o tempo, me tornei o principal responsável pela configuração do DNS dos clientes para envio de e-mails de marketing pelo software. Além disso, comecei a colaborar no treinamento de novos membros da equipe de suporte, ensinando como executar operações mais técnicas, incluindo o uso de scripts em SQL e a realização de apontamentos DNS.\n\nDurante esse período, também assumi a responsabilidade por uma aplicação C# de automação de envio de relatórios personalizados para clientes específicos."
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
    description: "Durante meu trabalho na empresa, fui responsável pelo atendimento ao cliente do aplicativo de sales engagement chamado Spotter, prestando suporte por meio de chat, telefone e e-mail. Além disso, realizei consultas no banco de dados utilizando SQL para análise de chamados e criação de relatórios específicos para os clientes.\n\nCom o tempo, comecei a assumir mais responsabilidades e fui encarregado de realizar apontamentos de DNS para clientes que utilizavam a ferramenta de e-mails marketing do software, antes de responsabilidade exclusiva do cliente. Também passei a treinar novos colaboradores do suporte em operações mais técnicas, como scripts em SQL e apontamentos de DNS."
  },
];

export const EDUCATION: Qualification[] = [
  {
    title: "The Complete Elixir and Phoenix Bootcamp",
    organization: "Udemy",
    country: "Brasil",
    state: "Santa Catarina",
    city: "Florianópolis",
    startDate: "Maio 2023",
    endDate: "Junho 2023",
    workModel: WorkModel.Remote,
    description: "Nesse curso, tive a oportunidade de aprofundar meu conhecimento em Elixir, desde o básico até o desenvolvimento de um aplicativo web utilizando o incrível framework Phoenix. Phoenix, sendo um framework MVC, oferece uma ampla gama de recursos interessantes, tornando o desenvolvimento de aplicativos mais fácil e eficiente. A experiência foi simplesmente incrível e me apaixonei completamente pelo Elixir.",
    certificateId: "UC-1ed88ff3-cb56-4ad0-8ee6-ad0115fddc00",
    certificateUrl: "https://www.udemy.com/certificate/UC-1ed88ff3-cb56-4ad0-8ee6-ad0115fddc00/"
  },
  {
    title: "Kubernetes Bootcamp",
    organization: "KubDev.io",
    country: "Brasil",
    state: "Santa Catarina",
    city: "Florianópolis",
    startDate: "Maio 2021",
    endDate: "Maio 2021",
    workModel: WorkModel.Remote,
    description: "Participei de um bootcamp intensivo de uma semana que teve como foco o aprendizado das tecnologias Docker e Kubernetes. Durante o evento, aprendi a configurar e gerenciar uma aplicação escalável e de alta performance, utilizando as melhores práticas e técnicas disponíveis no mercado. Com isso, pude aprimorar minhas habilidades e conhecimentos na área de desenvolvimento de software, bem como adquirir novas competências relacionadas à arquitetura de sistemas distribuídos e ao uso de ferramentas de orquestração de contêineres.",
    certificateId: "52e6502148c9d92d3e8c078c8983f1c1",
    certificateUrl: "https://drive.google.com/file/d/1dLzzhfYmHRdm0uvCY50t-wlm-Zw2fUG6/view"
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
    description: "Participei de um bootcamp de uma semana com foco em subir aplicações na AWS de forma simples e garantindo alta disponibilidade. Durante o treinamento, aprendi diversas técnicas e práticas recomendadas para garantir que a aplicação pudesse ser escalada e mantida em funcionamento de forma contínua, utilizando recursos como Elastic Load Balancing, Auto Scaling Groups e Amazon RDS. Também tive a oportunidade de aprender sobre monitoramento e logging para manter a saúde da aplicação e garantir sua disponibilidade, além de trabalhar com ferramentas como AWS CloudFormation e AWS Elastic Beanstalk para simplificar a gestão e deployment da aplicação na nuvem.",
    certificateId: "203",
    certificateUrl: "https://drive.google.com/file/d/1grdp_DQ4OEMHePIileG1G53o2SSN7F2n/view?usp=sharing"
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
    description: "Realizei um curso abrangente que cobriu conceitos básicos e avançados da linguagem de programação C#, abordando tópicos como tipos de dados, estruturas de controle de fluxo, funções, orientação a objetos, interfaces, classes genéricas, LINQ, programação assíncrona, entre outros. O curso me proporcionou um conhecimento sólido na linguagem, permitindo-me escrever códigos de qualidade e desenvolver aplicativos robustos e escaláveis em C#.",
    certificateId: "UC-a733211a-550e-4e34-914f-8d0d80fae593",
    certificateUrl: "https://www.udemy.com/certificate/UC-a733211a-550e-4e34-914f-8d0d80fae593/"
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
    description: "Durante o curso, tive a oportunidade de desenvolver uma ferramenta full stack utilizando as tecnologias mais atuais do mercado. No backend, utilizei o framework ExpressJS em conjunto com a linguagem JavaScript para criar uma API RESTful para o meu sistema. Já no frontend, utilizei o ReactJS para criar uma interface responsiva e interativa. Para persistir os dados da aplicação, optei por um banco de dados não relacional MongoDB, que me permitiu criar um sistema escalável e de alta performance.\n\nAlém disso, a aplicação desenvolvida contava com recursos de envio de e-mails utilizando o Sendgrid, o que possibilitou a criação de um sistema de feedbacks com possibilidade de resposta. Durante o curso, apliquei os conhecimentos adquiridos no desenvolvimento do meu TCC, um aplicativo de delivery de produtos de farmácia chamado PharmaGO.",
    certificateId: "UC-BRZJT7IZ",
    certificateUrl: "http://ude.my/UC-BRZJT7IZ"
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
    description: "Participei de um curso introdutório de programação com Java, onde aprendi conceitos fundamentais, tais como estruturas de controle, tipos de dados, orientação a objetos e programação modular. Durante o curso, pratiquei com exercícios e projetos simples para fixação dos conceitos e obtenção de habilidades práticas.",
    certificateId: "A41B7865-AC08-4AD5-8A2B-ABAA3FA473C5",
    certificateUrl: "https://drive.google.com/file/d/1wEaPWzN0kL4L8277n59rk7bNhmyF-nac/view?usp=sharing"
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
    description: "O curso de orientação a objetos foi fundamental para a minha compreensão dos conceitos básicos de programação. Através dele, pude entender os princípios fundamentais de classes, objetos, encapsulamento, herança, polimorfismo e outros conceitos que são essenciais para a construção de programas orientados a objetos.",
    certificateId: "EDF8E9B3-D362-4B5F-8C18-B194E0B20CAB",
    certificateUrl: "https://drive.google.com/file/d/1BIjhvBa_Q8P4cjBWxfjOr_3qJidjRXNK/view?usp=sharing"
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
    description: "Me formei em um Tecnólogo em que tive meu primeiro contato com programação. Durante o curso, participei de todas as atividades extra curriculares relacionadas a programação, onde pude desenvolver minhas habilidades e aprimorar meus conhecimentos, especialmente em Python. Meu TCC foi o desenvolvimento de um aplicativo de delivery de produtos farmacêuticos chamado PharmaGO. Para isso, utilizei o framework ExpressJS no backend, ReactJS no frontend e armazenamento de dados em um banco não relacional MongoDB. Foi uma ótima oportunidade para aplicar tudo o que aprendi no curso e explorar diferentes tecnologias para criar uma aplicação completa.",
    certificateId: "Superior Completo",
    certificateUrl: "https://drive.google.com/file/d/1BkOZE7jd-XmZEezKwA6u8YL1Ov10HuMF/view?usp=sharing"
  },
];

export const WORK_MODEL = {
  [WorkModel.Hybrid]: "Híbrido",
  [WorkModel.Remote]: "Remoto",
  [WorkModel.OnSite]: "Presencial"
}


