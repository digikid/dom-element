import { IDomElement } from '@core/classes/DomElement';
import { map } from '@core/hooks';
import { validate } from '@src/validator';

export type DomAttrValue = string | number | null | undefined;

export type DomAttrMethod = (
  name: string | Record<string, any>,
  value?: any
) => IDomElement | string;

export default (function (this: IDomElement, name, value?) {
  return map.call(
    this,
    name,
    value,
    (el, name) => el.getAttribute(name),
    (el, name, value) => {
      if (validate<string>(name, 'string')) {
        if (validate<null>(value, 'null')) {
          el.removeAttribute(name);
        } else {
          el.setAttribute(name, value ? value.toString() : '');
        }
      }
    },
  );
} as DomAttrMethod);
