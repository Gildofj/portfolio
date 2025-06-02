import { useEffect } from "react";

export function useScrollSnapSpy(sectionIds: string[]) {
  const handleHeaderItemClick = (id: string) => {
    if (sectionIds.includes(id)) {
      document
        .getElementById(id.replace("#", ""))
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.find(
          entry => entry.isIntersecting && entry.intersectionRatio >= 0.7,
        );

        if (visible) {
          const id = visible.target.id;
          history.replaceState(null, "", `#${id}`);
        }
      },
      {
        threshold: [0.7],
      },
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id.replace("#", ""));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return { handleHeaderItemClick };
}
