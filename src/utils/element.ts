import { toCamelCase } from '@utils/string';

export const getComputedValue = (el: HTMLElement, prop: string): string => {
  const inlineStyle = el.getAttribute('style') || '';

  el.removeAttribute('style');

  const value = getComputedStyle(el)[toCamelCase(prop) as any];

  el.setAttribute('style', inlineStyle);

  return value;
};
