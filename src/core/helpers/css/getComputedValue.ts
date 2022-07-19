import { toDashCase } from '@utils/string';

const getValue = (el: HTMLElement, prop: string) => getComputedStyle(el, null).getPropertyValue(toDashCase(prop));

export default (
  el: HTMLElement,
  prop: string,
  ignoreInline = false,
): string => {
  if (el.getAttribute('style') && ignoreInline) {
    const inlineStyle = el.getAttribute('style') || '';

    el.removeAttribute('style');

    const value = getValue(el, prop);

    el.setAttribute('style', inlineStyle);

    return value;
  }

  return getValue(el, prop);
};
