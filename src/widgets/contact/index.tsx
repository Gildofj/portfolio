"use client";

import { Section } from "@/shared/ui/Section";
import { Title } from "@/shared/ui/Title";
import { TitleContainer } from "@/shared/ui/TitleContainer";
import { useToast } from "@/shared/hooks/useToast";
import {
  ArrowRightIcon,
  WhatsappLogoIcon,
  EnvelopeIcon,
  PaperPlaneTiltIcon,
} from "@phosphor-icons/react";
import { m, MotionConfig } from "motion/react";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

import { CONTACT_TYPES } from "./constants";
import { devLogger } from "@/shared/utils/log";

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
        const response = await fetch("/api/send-contact-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: target.name.value,
            email: target.email.value,
            message: target.message.value,
          }),
        });

        if (!response.ok) {
          throw new Error(`Failed to send email: ${response.body}`);
        }

        setNameError(false);
        setEmailError(false);
        setMessageError(false);

        showToast("Email enviado com sucesso!");
        form.current.reset();
      } catch (error) {
        devLogger.error(error);
        showToast("Erro ao tentar enviar o e-mail");
      }
    }
  };

  return (
    <Section id="contact" className="w-full gap-12 sm:gap-16">
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

        <div className="grid w-full gap-12 lg:gap-20 grid-cols-1 lg:grid-cols-[auto_1fr] items-start">
          <div className="flex flex-col items-center lg:items-start gap-8">
            <m.h3
              initial={
                isMobile ? { y: "-10%", opacity: 0 } : { x: "-10%", opacity: 0 }
              }
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              className="text-xl font-bold leading-8 text-zinc-900 dark:text-zinc-100"
            >
              {t("talkMeTitle")}
            </m.h3>
            <div className="flex flex-col gap-6 w-full sm:w-80">
              {CONTACT_TYPES.map((c, i) => (
                <m.div
                  key={i}
                  initial={
                    isMobile
                      ? { y: "-10%", opacity: 0 }
                      : { x: "-10%", opacity: 0 }
                  }
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i + 2) * 0.06 }}
                  className="group relative flex w-full flex-col items-center gap-2 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 p-6 shadow-neu-flat hover:shadow-neu-hover transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    {c.type === "Email" && <EnvelopeIcon size={28} weight="bold" />}
                    {c.type === "Whatsapp" && <WhatsappLogoIcon size={28} weight="bold" />}
                  </div>
                  <span className="mt-2 text-sm font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500">{c.type}</span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">{c.contactId}</span>
                  <a
                    href={c.redirectUrl}
                    title={`Send me a ${c.type}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center gap-2 text-sm font-bold text-primary transition-all hover:gap-3"
                  >
                    Falar
                    <ArrowRightIcon size={18} weight="bold" />
                  </a>
                </m.div>
              ))}
            </div>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex w-full flex-col items-center lg:items-stretch gap-6"
          >
            <m.h3
              initial={
                isMobile ? { y: "10%", opacity: 0 } : { x: "10%", opacity: 0 }
              }
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              className="text-xl font-bold leading-8 lg:text-start text-center"
            >
              {t("sendProjectTitle")}
            </m.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <m.div
                initial={isMobile ? { y: "10%", opacity: 0 } : { x: "10%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2 * 0.06 }}
                className="relative h-16 w-full"
              >
                <label className="absolute left-5 -top-3 z-10 bg-[#faf5ff] px-2 py-0.5 text-xs font-black uppercase tracking-widest text-primary dark:bg-zinc-900">
                  {t("form.name.title")}
                </label>
                <input
                  name="name"
                  placeholder={t("form.name.placeholder")}
                  className="h-full w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 p-5 text-zinc-900 dark:text-zinc-100 shadow-neu-pressed focus:border-primary focus:outline-none transition-all"
                />
                {nameError && (
                  <span className="absolute -bottom-6 left-2 text-[10px] font-bold uppercase tracking-wider text-alert">
                    {t("form.name.errorMessage")}
                  </span>
                )}
              </m.div>

              <m.div
                initial={isMobile ? { y: "10%", opacity: 0 } : { x: "10%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 3 * 0.06 }}
                className="relative h-16 w-full"
              >
                <label className="absolute left-5 -top-3 z-10 bg-[#faf5ff] px-2 py-0.5 text-xs font-black uppercase tracking-widest text-primary dark:bg-zinc-900">
                  {t("form.email.title")}
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder={t("form.email.placeholder")}
                  className="h-full w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 p-5 text-zinc-900 dark:text-zinc-100 shadow-neu-pressed focus:border-primary focus:outline-none transition-all"
                />
                {emailError && (
                  <span className="absolute -bottom-6 left-2 text-[10px] font-bold uppercase tracking-wider text-alert">
                    {t("form.email.errorMessage")}
                  </span>
                )}
              </m.div>
            </div>

            <m.div
              initial={isMobile ? { y: "10%", opacity: 0 } : { x: "10%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 4 * 0.06 }}
              className="relative mt-4 w-full"
            >
              <label className="absolute left-5 -top-3 z-10 bg-[#faf5ff] px-2 py-0.5 text-xs font-black uppercase tracking-widest text-primary dark:bg-zinc-900">
                {t("form.project.title")}
              </label>
              <textarea
                name="message"
                placeholder={t("form.project.placeholder")}
                className="min-h-48 w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 p-5 text-zinc-900 dark:text-zinc-100 shadow-neu-pressed focus:border-primary focus:outline-none transition-all"
              />
              {messageError && (
                <span className="absolute -bottom-6 left-2 text-[10px] font-bold uppercase tracking-wider text-alert">
                  {t("form.project.errorMessage")}
                </span>
              )}
            </m.div>

            <m.div
              initial={isMobile ? { y: "-10%", opacity: 0 } : { x: "10%", opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 5 * 0.06 }}
              className="mt-6 flex justify-center lg:justify-end"
            >
              <button
                type="submit"
                className="inline-flex cursor-pointer items-center justify-center gap-3 rounded-2xl bg-zinc-900 dark:bg-zinc-100 px-10 py-4 text-sm font-black uppercase tracking-widest text-white dark:text-zinc-900 shadow-neu-flat transition-all hover:scale-105 hover:bg-primary dark:hover:bg-primary active:scale-95 group"
              >
                {t("form.sendButton")}
                <PaperPlaneTiltIcon size={20} weight="bold" className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </button>
            </m.div>
          </form>
        </div>
      </MotionConfig>
    </Section>
  );
}
