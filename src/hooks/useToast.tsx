import { useMemo } from "react";
import { toast, Theme } from "react-toastify";

import { useTheme } from "../contexts/ThemeContext";

export function useToast() {
  const { theme } = useTheme();

  const toastConfig = useMemo(
    () => ({
      position: toast.POSITION.TOP_RIGHT,
      style: {
        backgroundColor:
          theme !== "light" ? "#18181b !important" : "#faf5ff !important",
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.32) !important",
        border: "1px solid #A855F7",
        borderRadius: "0.75rem !important",
        color: theme !== "light" ? "#d6d6d8 !important" : "#18181b !important",
        padding: "1rem",
      },
      progress: undefined,
      hideProgressBar: true,
      autoClose: 3000,
      theme: theme as Theme,
    }),
    [theme],
  );

  const showToast = (text: string) => {
    toast(text, { ...toastConfig, toastId: text });
  };

  return { showToast };
}
