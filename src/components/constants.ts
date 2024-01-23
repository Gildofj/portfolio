export const getNavigation = (urlPath: string) => [
  {
    id: 1,
    href: "#",
    textId: "header.home",
    active: ["", "#"].includes(urlPath),
  },
  {
    id: 2,
    href: "#about",
    textId: "header.about",
    active: urlPath === "#about",
  },
  {
    id: 3,
    href: "#skills",
    textId: "header.skills",
    active: urlPath === "#skills",
  },
  {
    id: 4,
    href: "#qualification",
    textId: "header.qualification",
    active: urlPath === "#qualification",
  },
  {
    id: 5,
    href: "#portfolio",
    textId: "header.portfolio",
    active: urlPath === "#portfolio",
  },
  {
    id: 6,
    href: "#contact",
    textId: "header.contact",
    active: urlPath === "#contact",
  },
  {
    id: 7,
    href: "https://gildofj.github.io/uses/",
    textId: "header.uses",
    active: false,
  },
];

export const SOCIALS = [
  {
    id: "github",
    urlRedirect: "https://github.com/gildofj/",
    sr: "Go to my Github",
  },
  {
    id: "linkedin",
    urlRedirect: "https://www.linkedin.com/in/gildofj/",
    sr: "Go to my Linkedin",
  },
  {
    id: "instagram",
    urlRedirect: "https://www.instagram.com/tao_gildao/",
    sr: "Follow me on Instagram",
  },
  {
    id: "twitter",
    urlRedirect: "https://www.twitter.com/tao_gildao/",
    sr: "Follow me on Twitter",
  },
];
