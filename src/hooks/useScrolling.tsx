import { useEffect, useRef } from "react";

export function useScrolling() {
  const scrollRef = useRef(null);
  const isHeaderClickRef = useRef(false);

  const handleHeaderItemClick = () => {
    isHeaderClickRef.current = true;

    setTimeout(() => {
      isHeaderClickRef.current = false;
    }, 1000);
  };

  const onUpdateCallback = (id: string) => {
    if (isHeaderClickRef.current) {
      return;
    }

    window.location.href = `#${id}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) window.location.href = "#";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    scrollRef,
    onUpdateCallback,
    handleHeaderItemClick,
  };
}
