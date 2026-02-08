import { useEffect } from "react";

export function useScrollHandler(sectionIds: string[]) {
  const handleHeaderItemClick = (id: string) => {
    if (sectionIds.includes(id)) {
      const normalizedId = id.replace("#", "");
      if (normalizedId) {
        document
          .getElementById(normalizedId)
          ?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find(
          (entry) => entry.isIntersecting && entry.intersectionRatio >= 0.7,
        );
        // Just track the visible section, don't update URL
        if (visible) {
          // URL update removed - the scroll observation still works
        }
      },
      {
        threshold: [0.7],
      },
    );

    sectionIds.forEach((id) => {
      const normalizedId = id.replace("#", "");
      const el =
        normalizedId !== ""
          ? document.getElementById(normalizedId)
          : document.querySelector("article")?.firstElementChild;
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return { handleHeaderItemClick };
}
