import { toast } from 'react-toastify'


export const DEFAULT_TOAST_STYLE = {
  position: toast.POSITION.TOP_RIGHT,
  style: {
    background: "linear-gradient(150deg, rgba(114, 14, 158, 1) 0%, rgba(128, 0, 128, 1) 100%)",
    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.32) !important",
    borderRadius: "0.625 !important",
    color: "#E6E6FA !important",
    padding: "1rem",
  },
  progress: undefined,
  hideProgressBar: true,
  autoClose: 3000,
};

export function doToast(text: string) {
  toast(text, { ...DEFAULT_TOAST_STYLE, toastId: text });
}
