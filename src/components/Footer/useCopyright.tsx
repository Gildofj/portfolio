export const useCopyright = () => {
  const startYear = 2023;
  const currentYear = new Date().getFullYear();
  return {
    startYear,
    currentYear,
  };
};
