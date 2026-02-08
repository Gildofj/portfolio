"use client";

import { contentfulClient } from "@/config/Contentful";
import moment from "moment";
import { useEffect, useState } from "react";

import {
  isValidSkillCategory,
  isValidSkillType,
  Skill,
  SkillSkeleton,
} from "./types";
import { useLocale } from "next-intl";

async function getSkills(
  active: boolean,
  locale: string,
  setSkills: (lista: Skill[]) => void,
) {
  if (!active) return;

  const data = await contentfulClient.getEntries<SkillSkeleton>({
    content_type: "skills",
    locale: locale,
  });

  const qualificationData = data.items
    .sort((a, b) =>
      moment(moment(a.sys.createdAt)).diff(moment(b.sys.createdAt)),
    )
    .flatMap(({ fields }) => ({
      title: fields.title,
      icon: fields.icon,
      types: (fields.types as string[]).filter(isValidSkillType),
      categories: (fields.categories as string[]).filter(isValidSkillCategory),
    }));

  setSkills(qualificationData as Skill[]);
}

export const useSkills = () => {
  const [skills, setSkills] = useState<Skill[]>();
  const locale = useLocale();

  useEffect(() => {
    let active = true;
    getSkills(active, locale, setSkills);
    return () => {
      active = false;
    };
  }, [locale]);

  return { skills };
};
