import { FormEvent, SyntheticEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { Title } from "../_UI/Title";
import { CONTACT_TYPES } from "./constants";
import {
  CardContact,
  CardContactIcon,
  ContactContainer,
  ContactTypes,
  ContactInfo,
  Container,
  Form,
  Input,
  Message,
  SendButton,
  Subtitle,
  WriteMeButton,
  Type,
  FormTag,
  FieldGroup,
  FieldGroupArea,
  FieldError,
  Error,
  WriteMeIcon,
  SendIcon
} from "./styles";
import { doToast } from '../_UI/Toast';

export function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const sendEmail = async (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };

    if (form.current) {
      if (!target.name.value) setNameError(true);
      if (!target.email.value) setEmailError(true);
      if (!target.message.value) setMessageError(true);

      if (!target.name.value || !target.email.value || !target.message.value) return;

      try {
        await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        setNameError(false);
        setEmailError(false);
        setMessageError(false);

        doToast("Email enviado com sucesso!");
      } catch (err) {
        doToast("Erro ao tentar enviar o e-mail");
      } finally {
        form.current.reset();
      }
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
              <ContactInfo>{c.contactId}</ContactInfo>
              <WriteMeButton href={c.redirectUrl} target="_blank" rel="noopener noreferrer">
                Falar
                <WriteMeIcon className="bx bx-right-arrow-alt"></WriteMeIcon>
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
          {nameError && (
            <Error>
              <FieldError>O campo Nome é obrigatório para prosseguir</FieldError>
            </Error>
          )}

          <FieldGroup>
            <FormTag>E-mail</FormTag>
            <Input type="email" name="email" placeholder="Insira seu email"></Input>
          </FieldGroup>
          {emailError && (
            <Error>
              <FieldError>O campo E-mail é obrigatório para prosseguir</FieldError>
            </Error>
          )}

          <FieldGroupArea>
            <FormTag>Projeto</FormTag>
            <Message name="message" placeholder="Insira seu projeto"></Message>
            {messageError && (
              <Error>
                <FieldError>O campo Projeto é obrigatório para prosseguir</FieldError>
              </Error>
            )}
          </FieldGroupArea>
          <SendButton type="submit">
            Enviar <SendIcon src="/portfolio/assets/images/send.svg" ></SendIcon>
          </SendButton>
        </Form>
      </ContactContainer>
    </Container>
  );
}
