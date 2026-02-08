"use client";

import { Section } from "@/components/_UI/Section";
import { Title } from "@/components/_UI/Title";
import { TitleContainer } from "@/components/_UI/TitleContainer";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/useToast";
import {
  ArrowRightIcon,
  WhatsappLogoIcon,
  EnvelopeIcon,
  PaperPlaneTiltIcon,
} from "@phosphor-icons/react";
import { motion, MotionConfig } from "motion/react";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

import { CONTACT_TYPES } from "./constants";

export function Contact() {
  const t = useTranslations("contact");
  const [isMobile, setIsMobile] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 500px)").matches);
    };

    checkMobile();

    const mediaQuery = window.matchMedia("(max-width: 500px)");
    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

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
          process.env.VITE_EMAILJS_SERVICE_ID!,
          process.env.VITE_EMAILJS_TEMPLATE_ID!,
          form.current,
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
    <Section id="contact" className="w-full gap-16">
      <MotionConfig transition={{ duration: 0.3 }}>
        <TitleContainer
          initial={
            isMobile ? { y: "-10%", opacity: 0 } : { x: "-10%", opacity: 0 }
          }
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <Title>{t("title")}</Title>
        </TitleContainer>

        <div className="flex w-full justify-center gap-16 max-md:flex-col max-md:items-center">
          <div className="flex flex-col items-center gap-8">
            <motion.h3
              initial={
                isMobile ? { y: "-10%", opacity: 0 } : { x: "-10%", opacity: 0 }
              }
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              className="text-xl font-medium leading-8"
            >
              {t("talkMeTitle")}
            </motion.h3>
            {CONTACT_TYPES.map((c, i) => (
              <motion.div
                key={i}
                initial={
                  isMobile
                    ? { y: "-10%", opacity: 0 }
                    : { x: "-10%", opacity: 0 }
                }
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 2) * 0.06 }}
                className="flex w-80 flex-col items-center gap-2 rounded-xl border border-primary bg-transparent px-12 py-5 [&_span_svg]:fill-zinc-900 [&_span_svg]:text-zinc-900 dark:[&_span_svg]:fill-zinc-300 dark:[&_span_svg]:text-zinc-300"
              >
                {c.type === "Email" && <EnvelopeIcon size={32} />}
                {c.type === "Whatsapp" && <WhatsappLogoIcon size={32} />}
                <span className="font-bold">{c.type}</span>
                <span>{c.contactId}</span>
                <a
                  href={c.redirectUrl}
                  title={`Send me a ${c.type}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center gap-1 leading-none transition-[0.2s] hover:text-primary [&_svg]:transition-[0.2s] hover:[&_svg]:translate-x-0.5 hover:[&_svg]:text-primary hover:[&_svg]:fill-primary"
                >
                  Falar
                  <ArrowRightIcon size={23} />
                </a>
              </motion.div>
            ))}
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex w-full flex-col items-center max-md:px-8 max-sm:max-w-[20rem] max-sm:p-0"
          >
            <motion.h3
              initial={
                isMobile ? { y: "10%", opacity: 0 } : { x: "10%", opacity: 0 }
              }
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              className="text-xl font-medium leading-8"
            >
              {t("sendProjectTitle")}
            </motion.h3>
            <motion.div
              initial={
                isMobile ? { y: "10%", opacity: 0 } : { x: "10%", opacity: 0 }
              }
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 2 * 0.06 }}
              className="relative my-8 h-8 w-full"
            >
              <label className="absolute left-5 -top-3 z-10 bg-purple-50 p-1 text-sm text-primary transition-colors duration-500 dark:bg-zinc-900">
                {t("form.name.title")}
              </label>
              <input
                name="name"
                placeholder={t("form.name.placeholder")}
                className="p-5 w-full absolute left-0 top-0 z-[1] rounded-xl border border-primary bg-purple-50 text-zinc-900 transition-colors duration-500 ease-in-out dark:bg-zinc-900 dark:text-zinc-300"
              />
            </motion.div>
            {nameError && (
              <div className="mt-2 w-full text-start">
                <span className="text-alert">
                  {t("form.name.errorMessage")}
                </span>
              </div>
            )}

            <motion.div
              initial={
                isMobile ? { y: "10%", opacity: 0 } : { x: "10%", opacity: 0 }
              }
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 3 * 0.06 }}
              className="relative my-8 h-8 w-full"
            >
              <label className="absolute left-5 -top-3 z-10 bg-purple-50 p-1 text-sm text-primary transition-colors duration-500 dark:bg-zinc-900">
                {t("form.email.title")}
              </label>
              <input
                type="email"
                name="email"
                placeholder={t("form.email.placeholder")}
                className="p-5 w-full absolute left-0 top-0 z-[1] rounded-xl border border-primary bg-purple-50 text-zinc-900 transition-colors duration-500 ease-in-out dark:bg-zinc-900 dark:text-zinc-300"
              />
            </motion.div>
            {emailError && (
              <div className="mt-2 w-full text-start">
                <span className="text-alert">
                  {t("form.email.errorMessage")}
                </span>
              </div>
            )}

            <motion.div
              initial={
                isMobile ? { y: "10%", opacity: 0 } : { x: "10%", opacity: 0 }
              }
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 4 * 0.06 }}
              className="relative my-8 min-h-40 w-full"
            >
              <label className="absolute left-5 -top-3 z-10 bg-purple-50 p-1 text-sm text-primary transition-colors duration-500 dark:bg-zinc-900">
                {t("form.project.title")}
              </label>
              <motion.textarea
                name="message"
                placeholder={t("form.project.placeholder")}
                className="p-5 w-[31.25rem] min-h-[13rem] rounded-xl border border-primary bg-purple-50 text-zinc-900 transition-colors duration-500 ease-in-out max-[900px]:w-full dark:bg-zinc-900 dark:text-zinc-300"
              />
              {messageError && (
                <div className="mt-2 w-full text-start">
                  <span className="text-alert">
                    {t("form.project.errorMessage")}
                  </span>
                </div>
              )}
            </motion.div>
            <MotionConfig>
              <motion.button
                type="submit"
                initial={
                  isMobile
                    ? { y: "-10%", opacity: 0 }
                    : { x: "10%", opacity: 0 }
                }
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 5 * 0.06, duration: 0.1 }}
                className="inline-flex cursor-pointer items-center justify-center gap-4 rounded-xl border border-primary bg-transparent px-8 py-3 font-bold text-zinc-900 transition-[0.2s] hover:scale-110 hover:text-primary active:scale-[0.99] dark:text-zinc-300 [&_span_svg]:text-zinc-900 [&_span_svg]:fill-zinc-900 [&_span_svg]:transition-[0.2s] hover:[&_span_svg]:text-primary hover:[&_span_svg]:fill-primary dark:[&_span_svg]:text-zinc-300 dark:[&_span_svg]:fill-zinc-300"
              >
                {t("form.sendButton")} <PaperPlaneTiltIcon size={20} />
              </motion.button>
            </MotionConfig>
          </form>
        </div>
      </MotionConfig>
    </Section>
  );
}
