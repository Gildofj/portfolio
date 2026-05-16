import { useEffect, useCallback, useRef } from "react";

export function useScrollHandler(sectionIds: string[]) {
  const sectionIdsRef = useRef(sectionIds);

  useEffect(() => {
    sectionIdsRef.current = sectionIds;
  });

  const handleHeaderItemClick = useCallback((id: string) => {
    if (!sectionIdsRef.current.includes(id)) return;

    const normalizedId = id.replace("#", "");
    if (normalizedId) {
      document
        .getElementById(normalizedId)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entering = entries.find((entry) => entry.isIntersecting);
        if (!entering) return;

        const id = entering.target.id;
        const hash = id ? `#${id}` : "#";
        if (window.location.hash === (hash === "#" ? "" : hash)) return;

        const currentPath = window.location.pathname;
        window.history.replaceState(
          null,
          "",
          hash === "#" ? currentPath : currentPath + hash,
        );
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );

    const ids = sectionIdsRef.current;
    ids.forEach((id) => {
      const normalizedId = id.replace("#", "");
      const el = normalizedId
        ? document.getElementById(normalizedId)
        : (document.querySelector("article")
            ?.firstElementChild as HTMLElement | null);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []); // stable — reads from ref

  return { handleHeaderItemClick };
}
