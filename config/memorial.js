/* Memorial-only muted autoplay; the original OC toggle remains available. */
document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
  const play = document.querySelector('.memorial-page .oc-flip-front .y1-animation-toggle');
  if (play && play.getAttribute('aria-pressed') === 'false') play.click();
});
