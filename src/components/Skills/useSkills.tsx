import { useEffect, useState } from "react";
import moment from "moment";
import { Skill, SkillSkeleton } from "./types";
import { contentfulClient } from "../../config/Contentful";
import { useLocale } from "../../contexts/LocaleContext";

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
      type: fields.type,
    }));

  setSkills(qualificationData as Skill[]);
}

export const useSkills = () => {
  const [skills, setSkills] = useState<Skill[]>();
  const { locale } = useLocale();

  useEffect(() => {
    var active = true;
    getSkills(active, locale, setSkills);
    return () => {
      active = false;
    };
  }, [locale]);

  return { skills };
};
