import { useTranslations } from "next-intl";

export function JsonLd() {
  const t = useTranslations("metadata");

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gildo Junior",
    url: "https://gildofj.dev",
    jobTitle: "Full Stack Developer",
    sameAs: [
      "https://github.com/gildofj",
      "https://linkedin.com/in/gildofj",
    ],
    description: t("description"),
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Gildo Junior Portfolio",
    url: "https://gildofj.dev",
    description: t("description"),
  };

  // Modern best practice: sanitize JSON-LD to prevent XSS
  const sanitize = (json: object) => 
    JSON.stringify(json).replace(/</g, '\\u003c');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitize(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitize(websiteJsonLd) }}
      />
    </>
  );
}
