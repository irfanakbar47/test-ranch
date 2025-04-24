export const scrollToPosition = (top: number, behavior: ScrollBehavior = 'smooth') => {
  window.scrollTo({ top, behavior });
};