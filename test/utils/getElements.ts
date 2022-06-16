export default (selector: string): HTMLElement[] => Array.from(document.querySelectorAll(selector));

declare global {
  function getElements(selector: string): HTMLElement[];
}
