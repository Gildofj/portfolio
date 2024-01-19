import {
  LogoGithub,
  LogoTwitter,
  LogoInstagram,
  LogoLinkedin,
} from "react-ionicons";

export const getNavigation = (urlPath: string) => [
  {
    id: 1,
    href: "#",
    text: "Home",
    active: ["", "#"].includes(urlPath),
  },
  {
    id: 2,
    href: "#about",
    text: "Sobre",
    active: urlPath === "#about",
  },
  {
    id: 3,
    href: "#skills",
    text: "Skills",
    active: urlPath === "#skills",
  },
  {
    id: 4,
    href: "#qualification",
    text: "Qualificação",
    active: urlPath === "#qualification",
  },
  {
    id: 5,
    href: "#portfolio",
    text: "Portfolio",
    active: urlPath === "#portfolio",
  },
  {
    id: 6,
    href: "#contact",
    text: "Contato",
    active: urlPath === "#contact",
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
