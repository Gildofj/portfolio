import { useEffect, useState } from "react"
import moment from "moment";
import { Skill, SkillSkeleton } from "./types";
import { contentfulClient } from "../../config/Contentful";

async function getSkills(active: boolean, setSkills: (lista: Skill[]) => void) {
  if (!active) return;

  const data = await contentfulClient.getEntries<SkillSkeleton>({ content_type: "skills" });

  const qualificationData = data.items
    .sort((a, b) => moment(moment(a.sys.createdAt)).diff(moment(b.sys.createdAt)))
    .flatMap(({ fields }) => ({
      title: fields.title,
      expertise: fields.expertise,
      type: fields.type,
    }))

  setSkills(qualificationData as Skill[]);
}

export const useSkills = () => {
  const [skills, setSkills] = useState<Skill[]>()

  useEffect(() => {
    var active = true;
    getSkills(active, setSkills)
    return () => { active = false };
  })

  return { skills }
}
