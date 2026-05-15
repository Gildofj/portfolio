"use client";

import {
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react";
import { useTranslations } from "next-intl";
import { SOCIALS } from "@/shared/constants";

import { useCopyright } from "./useCopyright";

export function Footer() {
  const t = useTranslations("footer");
  const { startYear, currentYear } = useCopyright();

  const getIcon = (id: string, size: number) => {
    switch (id) {
      case "github":
        return <GithubLogoIcon size={size} />;
      case "linkedin":
        return <LinkedinLogoIcon size={size} />;
      case "instagram":
        return <InstagramLogoIcon size={size} />;
      case "twitter":
        return <XLogoIcon size={size} />;
    }
  };

  return (
    <footer className="flex w-full flex-col items-center snap-end">
      <div className="flex flex-col items-center py-8 pb-24">
        <span className="px-8 text-center text-zinc-500">
          &copy; {startYear}-{currentYear} Gildo Junior. {t("copyright")}
        </span>
        <ul className="my-4 mb-8 flex items-center gap-4">
          {SOCIALS.map(({ id, urlRedirect }, i) => (
            <li key={i}>
              <a
                href={urlRedirect}
                title={`Go to my ${id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-zinc-900 transition-[0.5s] dark:text-zinc-300 [&_span_svg]:text-zinc-900 [&_span_svg]:fill-zinc-900 [&_span_svg]:transition-[0.5s] dark:[&_span_svg]:text-zinc-300 dark:[&_span_svg]:fill-zinc-300"
              >
                {getIcon(id, 32)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
