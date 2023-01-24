export const getNavigation = (urlPath: string) => [
  {
    id: 1,
    href: "#",
    text: "Home",
    active: ["", "#"].includes(urlPath)
  },
  {
    id: 2,
    href: "#about",
    text: "Sobre",
    active: urlPath === "#about"
  },
  {
    id: 3,
    href: "#skills",
    text: "Skills",
    active: urlPath === "#skills"
  },
  {
    id: 4,
    href: "#qualification",
    text: "Qualificação",
    active: urlPath === "#qualification"
  },
  {
    id: 5,
    href: "#contact",
    text: "Contato",
    active: urlPath === "#contact"
  },
]