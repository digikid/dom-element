export default (selector: string): HTMLElement => document.querySelector(selector) as HTMLElement;

declare global {
  function getElement(selector: string): HTMLElement;
}
