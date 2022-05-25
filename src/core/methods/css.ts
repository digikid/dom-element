import { IDomElement } from '@core/classes/DomElement';
import { map } from '@core/hooks';
import { validate } from '@src/validator';
import { toCamelCase, toDashCase } from '@utils/string';

export type DomCssMethod = (
  name: string | Record<string, string> | null,
  value?: string
) => IDomElement | string;

export default (function (this: IDomElement, name, value?) {
  return map.call(
    this,
    name,
    value,
    (el, name) => {
      const style = getComputedStyle(el, null);
      const prop = toDashCase(name);

      return style.getPropertyValue(prop);
    },
    (el, name, value) => {
      const prop = toCamelCase(name);

      (el.style as { [index: string]: any })[prop] = value;
    },
    undefined,
    (el, name) => {
      if (validate<null>(name, 'null')) {
        el.removeAttribute('style');
      }
    },
  );
} as DomCssMethod);
