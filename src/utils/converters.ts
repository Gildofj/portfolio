/**
 * Converts pixels to rem based on a root font size.
 * @param px - The pixel value (e.g., 16, 24, 32)
 * @param base - The base font size (default is 16px)
 * @returns The equivalent rem value as a string (e.g., "1.5rem")
 */
export function pxToRem(px: number, base = 16): string {
  if (base === 0) throw new Error("Base font size cannot be zero.");
  const rem = px / base;
  return `${rem}rem`;
}

/**
 * Converts pixels to rem based on a root font size.
 * @param px - The pixel value (e.g., 16, 24, 32)
 * @param base - The base font size (default is 16px)
 * @returns The equivalent rem value as a string (e.g., "1.5rem")
 */
export function remToPx(rem: number, base = 16): string {
  if (base === 0) throw new Error("Base font size cannot be zero.");
  return `${rem * base}px`;
}
