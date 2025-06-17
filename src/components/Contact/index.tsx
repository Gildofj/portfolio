import emailjs from "@emailjs/browser";
import {
  ArrowRightIcon,
  WhatsappLogoIcon,
  EnvelopeIcon,
  PaperPlaneTiltIcon,
} from "@phosphor-icons/react";
import { MotionConfig } from "motion/react";
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
          form.current
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
      <MotionConfig transition={{ duration: 0.3 }}>
        <TitleContainer
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <Title>{intl.formatMessage({ id: "contact.title" })}</Title>
        </TitleContainer>

        <ContactContainer>
          <ContactTypes>
            <Subtitle
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
            >
              {intl.formatMessage({ id: "contact.talkMeTitle" })}
            </Subtitle>
            {CONTACT_TYPES.map((c, i) => (
              <CardContact
                key={i}
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 2) * 0.06 }}
              >
                {c.type === "Email" && <EnvelopeIcon size={32} />}
                {c.type === "Whatsapp" && <WhatsappLogoIcon size={32} />}
                <Type>{c.type}</Type>
                <span>{c.contactId}</span>
                <WriteMeButton
                  href={c.redirectUrl}
                  title={`Send me a ${c.type}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar
                  <ArrowRightIcon size={23} />
                </WriteMeButton>
              </CardContact>
            ))}
          </ContactTypes>
          <Form ref={form} onSubmit={sendEmail}>
            <Subtitle
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
            >
              {intl.formatMessage({ id: "contact.sendProjectTitle" })}
            </Subtitle>
            <FieldGroup
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 2 * 0.06 }}
            >
              <FormTag>
                {intl.formatMessage({ id: "contact.form.name" })}
              </FormTag>
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

            <FieldGroup
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 3 * 0.06 }}
            >
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
                  {intl.formatMessage({
                    id: "contact.form.email.errorMessage",
                  })}
                </FieldError>
              </Error>
            )}

            <FieldGroupArea
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 4 * 0.06 }}
            >
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
            <SendButton
              type="submit"
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 5 * 0.06, duration: 0.1 }}
            >
              {intl.formatMessage({ id: "contact.form.sendButton" })}{" "}
              <PaperPlaneTiltIcon size={20} />
            </SendButton>
          </Form>
        </ContactContainer>
      </MotionConfig>
    </Container>
  );
}
