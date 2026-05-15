"use client";

import { useEffect, useState } from "react";

export default function useUrlHash(): string {
  const [hash, setHash] = useState(() => {
    if (typeof window === "undefined") return "";

    return window.location.hash;
  });

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);

    window.addEventListener("hashchange", onHashChange);

    const interval = setInterval(() => {
      if (window.location.hash !== hash) setHash(window.location.hash);
    }, 100);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      clearInterval(interval);
    };
  }, [hash]);

  return hash;
}
