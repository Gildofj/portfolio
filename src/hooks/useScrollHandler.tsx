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
        const visible = entries.find(
          (entry) => entry.isIntersecting && entry.intersectionRatio >= 0.7,
        );
        if (visible) {
          const id = visible.target.id;
          const hash = id ? `#${id}` : "#";
          // update the URL hash without pushing to history
          window.history.replaceState(null, "", hash === "#" ? "/" : hash);
          // dispatch so useUrlHash hook picks up the change
          window.dispatchEvent(new HashChangeEvent("hashchange"));
        }
      },
      { threshold: [0.7] },
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
