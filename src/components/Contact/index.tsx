import emailjs from "@emailjs/browser";
import {
  ArrowRight,
  WhatsappLogo,
  Envelope,
  PaperPlaneTilt,
} from "@phosphor-icons/react";
import { SyntheticEvent, useRef, useState } from "react";
import { useIntl } from "react-intl";

import { useToast } from "../../hooks/useToast";
import { Title } from "../_UI/Title";
import { TitleContainer } from "../_UI/TitleContainer";

import { CONTACT_TYPES } from "./constants";
import {
  CardContact,
  ContactContainer,
  ContactTypes,
  Container,
  Error,
  FieldError,
  FieldGroup,
  FieldGroupArea,
  Form,
  FormTag,
  Input,
  Message,
  SendButton,
  Subtitle,
  Type,
  WriteMeButton,
} from "./styles";

export function Contact() {
  const intl = useIntl();
  const form = useRef<HTMLFormElement | null>(null);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const { showToast } = useToast();

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

      if (!target.name.value || !target.email.value || !target.message.value)
        return;

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

        showToast("Email enviado com sucesso!");
        form.current.reset();
      } catch {
        showToast("Erro ao tentar enviar o e-mail");
      }
    }
  };

  return (
    <Container id="contact">
      <TitleContainer>
        <Title>{intl.formatMessage({ id: "contact.title" })}</Title>
      </TitleContainer>

      <ContactContainer>
        <ContactTypes>
          <Subtitle>
            {intl.formatMessage({ id: "contact.talkMeTitle" })}
          </Subtitle>
          {CONTACT_TYPES.map((c, i) => (
            <CardContact key={i}>
              {c.type === "Email" && <Envelope size={32} />}
              {c.type === "Whatsapp" && <WhatsappLogo size={32} />}
              <Type>{c.type}</Type>
              <span>{c.contactId}</span>
              <WriteMeButton
                href={c.redirectUrl}
                title={`Send me a ${c.type}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar
                <ArrowRight size={23} />
              </WriteMeButton>
            </CardContact>
          ))}
        </ContactTypes>
        <Form ref={form} onSubmit={sendEmail}>
          <Subtitle>
            {intl.formatMessage({ id: "contact.sendProjectTitle" })}
          </Subtitle>
          <FieldGroup>
            <FormTag>{intl.formatMessage({ id: "contact.form.name" })}</FormTag>
            <Input
              name="name"
              placeholder={intl.formatMessage({
                id: "contact.form.name.placeholder",
              })}
            ></Input>
          </FieldGroup>
          {nameError && (
            <Error>
              <FieldError>
                {intl.formatMessage({ id: "contact.form.name.errorMessage" })}
              </FieldError>
            </Error>
          )}

          <FieldGroup>
            <FormTag>
              {intl.formatMessage({ id: "contact.form.email" })}
            </FormTag>
            <Input
              type="email"
              name="email"
              placeholder={intl.formatMessage({
                id: "contact.form.email.placeholder",
              })}
            ></Input>
          </FieldGroup>
          {emailError && (
            <Error>
              <FieldError>
                {intl.formatMessage({ id: "contact.form.email.errorMessage" })}
              </FieldError>
            </Error>
          )}

          <FieldGroupArea>
            <FormTag>
              {intl.formatMessage({ id: "contact.form.project" })}
            </FormTag>
            <Message
              name="message"
              placeholder={intl.formatMessage({
                id: "contact.form.project.placeholder",
              })}
            ></Message>
            {messageError && (
              <Error>
                <FieldError>
                  {intl.formatMessage({
                    id: "contact.form.project.errorMessage",
                  })}
                </FieldError>
              </Error>
            )}
          </FieldGroupArea>
          <SendButton type="submit">
            {intl.formatMessage({ id: "contact.form.sendButton" })}{" "}
            <PaperPlaneTilt size={20} />
          </SendButton>
        </Form>
      </ContactContainer>
    </Container>
  );
}
