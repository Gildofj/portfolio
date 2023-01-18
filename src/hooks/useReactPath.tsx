import { useEffect, useState } from "react";

export default function useReactPath() {
  const [path, setPath] = useState(() => {
    const href = window.location.href.split('/')
    return href[href.length - 1]
  });
  const listenToPopstate = () => {
    const winPath = window.location.href.split('/');
    console.log(winPath[winPath.length - 1]);
    setPath(winPath[winPath.length - 1]);
  };
  useEffect(() => {
    window.addEventListener("popstate", listenToPopstate);
    return () => {
      window.removeEventListener("popstate", listenToPopstate);
    };
  }, []);
  return path;
};
