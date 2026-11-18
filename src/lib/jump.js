/* Tiny event bus shared by the nav and the transition overlays. */
const JUMP = 'portfolio:jump';

/* Set while a page transition plays, so the nav stays visible on arrival. */
export const quiet = { until: 0 };

/* Nav link clicked: <PageTransition /> covers the page and swaps to the section. */
export function jumpTo(id, label) {
  window.dispatchEvent(new CustomEvent(JUMP, { detail: { id, label } }));
}

export function onJump(handler) {
  const listener = (e) => handler(e.detail);
  window.addEventListener(JUMP, listener);
  return () => window.removeEventListener(JUMP, listener);
}
