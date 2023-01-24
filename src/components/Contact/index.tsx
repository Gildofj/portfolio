import { FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Title } from "../_UI/Title";
import { CONTACT_TYPES } from "./constants";
import {
  CardContact,
  CardContactIcon,
  ContactContainer,
  ContactTypes,
  Container,
  Form,
  Input,
  Message,
  SendButton,
  Subtitle,
  WriteMeButton,
  ButtonIcon,
  Type,
  FormTag,
  FieldGroup,
  FieldGroupArea
} from "./styles";

export function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ).then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    }
  };

  return (
    <Container id="contact">
      <Title>Entre em contato</Title>

      <ContactContainer>
        <ContactTypes>
          <Subtitle>Fale comigo</Subtitle>
          {CONTACT_TYPES.map((c, i) => (
            <CardContact key={i}>
              {c.type === "Email" && <CardContactIcon className="bx bx-mail-send"></CardContactIcon>}
              {c.type === "Whatsapp" && <CardContactIcon className="bx bxl-whatsapp"></CardContactIcon>}
              <Type>{c.type}</Type>
              <span>{c.contactId}</span>
              <WriteMeButton href={c.redirectUrl}>
                <CardContactIcon className="bx bxs-send"></CardContactIcon>
              </WriteMeButton>
            </CardContact>
          ))}
        </ContactTypes>
        <Form ref={form} onSubmit={sendEmail}>
          <Subtitle>Me mande seu projeto</Subtitle>
          <FieldGroup>
            <FormTag>Nome</FormTag>
            <Input name="name" placeholder="Insira seu nome"></Input>
          </FieldGroup>

          <FieldGroup>
            <FormTag>E-mail</FormTag>
            <Input type="email" name="email" placeholder="Insira seu email"></Input>
          </FieldGroup>

          <FieldGroupArea>
            <FormTag>Projeto</FormTag>
            <Message name="message" placeholder="Insira seu projeto"></Message>
          </FieldGroupArea>
          <SendButton type="submit">
            Enviar <ButtonIcon className='bx bx-send' ></ButtonIcon>
          </SendButton>
        </Form>
      </ContactContainer>
    </Container>
  );
}