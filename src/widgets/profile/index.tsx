"use client";

import { Section } from "@/shared/ui/Section";
import { m } from "motion/react";
import { useTranslations } from "next-intl";

export function Profile() {
  const t = useTranslations("profile");

  return (
    <Section>
      <div className="mb-12 flex flex-col items-center justify-center gap-4">
        <m.a
          href="https://github.com/Gildofj"
          target="_blank"
          rel="noopener noreferrer"
          title="Go to my github"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex h-64 sm:h-80 items-end will-change-transform"
        >
          <div
            data-testid="profile-image"
            className="h-60 w-60 sm:h-75 sm:w-75 justify-self-center bg-cover bg-center bg-no-repeat shadow-neu-flat hover:shadow-neu-hover animate-profile-image transition-shadow duration-500 ring-[9px] ring-white/30 ring-inset transform-gpu"
            style={{ backgroundImage: "url('/images/me.jpg')" }}
          />
        </m.a>
        <m.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="text-5xl font-bold text-primary tracking-tight text-center"
        >
          Gildo Junior
        </m.h1>
        <m.span
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          className="text-xl font-medium text-zinc-600 dark:text-zinc-400 text-center"
        >
          {t("subtitle")}
        </m.span>
        <div className="flex gap-8 mt-4 max-[576px]:gap-6 max-[400px]:gap-2">
          <m.a
            href="/resume-gildo.pdf"
            title="Download my resume"
            download
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex min-w-44 cursor-pointer items-center justify-center rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 shadow-neu-flat hover:shadow-neu-hover active:shadow-neu-pressed px-6 py-4 font-bold transition-all duration-200 hover:text-primary text-zinc-800 dark:text-zinc-200"
          >
            {t("cvButton")}
          </m.a>
          <m.a
            href="#contact"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex min-w-44 cursor-pointer items-center justify-center rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 shadow-neu-flat hover:shadow-neu-hover active:shadow-neu-pressed px-6 py-4 font-bold transition-all duration-200 hover:text-primary text-zinc-800 dark:text-zinc-200"
          >
            {t("contactMeButton")}
          </m.a>
        </div>
      </div>

      <m.h3
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        className="text-center text-4xl font-medium leading-tight max-w-2xl px-4 sm:px-0"
      >
        {t("welcome")}{" "}
        <span className="text-primary font-bold">{t("welcomeHighlight")}</span>
      </m.h3>
    </Section>
  );
}
