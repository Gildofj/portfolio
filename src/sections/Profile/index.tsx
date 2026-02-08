"use client";

import { Section } from "@/components/_UI/Section";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export function Profile() {
  const t = useTranslations("profile");

  return (
    <Section>
      <div className="mb-12 flex flex-col items-center justify-center gap-4">
        <motion.a
          href="https://github.com/Gildofj"
          target="_blank"
          rel="noopener noreferrer"
          title="Go to my github"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="flex h-[320px] items-end"
        >
          <div
            className="h-[300px] w-[300px] justify-self-center bg-cover bg-center bg-no-repeat shadow-[inset_0_0_0_9px_rgb(255_255_255/30%)] transition-[0.2s] hover:scale-110 focus:scale-110 active:scale-90 animate-profile-image"
            style={{ backgroundImage: "url('/images/me.jpg')" }}
          />
        </motion.a>
        <motion.h1
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-5xl font-bold text-primary"
        >
          Gildo Junior
        </motion.h1>
        <motion.span
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-xl"
        >
          {t("subtitle")}
        </motion.span>
        <div className="flex gap-8 max-[576px]:gap-6 max-[400px]:gap-2">
          <motion.a
            href="/resume-gildo.pdf"
            title="Download my resume"
            download
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex min-w-44 cursor-pointer items-center justify-center rounded-xl border border-zinc-700 bg-transparent px-4 py-4 font-semibold transition-[0.2s] hover:text-primary"
          >
            {t("cvButton")}
          </motion.a>
          <motion.a
            href="#contact"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex min-w-44 cursor-pointer items-center justify-center rounded-xl border border-zinc-700 bg-transparent px-4 py-4 font-semibold transition-[0.2s] hover:text-primary"
          >
            {t("contactMeButton")}
          </motion.a>
        </div>
      </div>

      <motion.h3
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center text-4xl font-medium leading-10"
      >
        {t("welcome")}{" "}
        <span className="text-primary">{t("welcomeHighlight")}</span>
      </motion.h3>
    </Section>
  );
}
