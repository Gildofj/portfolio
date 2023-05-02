export function handleScrollWhenModalIsOpen(open: boolean) {
  if (open) {
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
  } else {
    document.body.style.overflow = 'auto';
    document.body.style.touchAction = 'auto';
  }
}
