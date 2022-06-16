import { IDomElement } from '@core/classes/DomElement';
import { map } from '@core/hooks';
import { validate } from '@src/validator';
import { toCamelCase } from '@core/utils/string';
import { getComputedValue } from '@core/helpers/css';

export type DomCssMethod = (
  name: string | Record<string, string> | null,
  value?: string
) => IDomElement | string;

export default (function (this: IDomElement, name, value?) {
  return map.call(
    this,
    name,
    value,
    (el, name) => getComputedValue(el, name),
    (el, name, value) => {
      const prop = toCamelCase(name);

      el.style[prop as any] = value;
    },
    undefined,
    (el, name) => {
      if (validate<null>(name, 'null')) {
        el.removeAttribute('style');
      }
    },
  );
} as DomCssMethod);
