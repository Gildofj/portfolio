import { Title } from "../_UI/Title";
import { TitleContainer } from "../_UI/TitleContainer";
import { ScrollAnimatedProps } from "../types";
import {
  AboutText,
  Container,
} from "./styles";

interface AboutProps extends ScrollAnimatedProps { }

export function About({ }: AboutProps) {
  return (
    <Container id="about">
      <TitleContainer>
        <Title>Sobre mim</Title>
      </TitleContainer>
      <AboutText>
        Eu sou natural de Florianópolis, Santa Catarina, e tenho formação em Análise e Desenvolvimento de Sistemas. Atuo na área de desenvolvimento desde o início de 2020, mas tenho estudado programação desde 2017. Atualmente, meu trabalho envolve principalmente a utilização de C# com .NET Core, além de Javascript e Typescript para o desenvolvimento de aplicações web e móveis. Eu sou experiente em frameworks como AngularJS, ReactJS e NextJS, e também tenho conhecimentos em Kotlin para o desenvolvimento de aplicativos móveis e SQL Server como banco de dados. Além disso, possuo habilidades em ExpressJS como backend em node e React Native como mobile.
      </AboutText>
      <AboutText>
        Durante o processo de estudo, tenho explorado o uso de Docker, bem como conceitos importantes em arquitetura de projetos, como Clean Architecture e Domain-Driven Design (DDD).
      </AboutText>
    </Container>
  );
}
