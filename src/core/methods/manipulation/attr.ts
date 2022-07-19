import { type DomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';
import { resolve } from '@core/helpers/methods';

export type AttrValue = string | number | null | undefined;

export type AttrMethod = (
  name: string | Record<string, AttrValue>,
  value?: AttrValue
) => DomElement | string;

export default resolve<AttrValue>(
  (el, name) => (name ? el.getAttribute(name) : null),
  (el, name, value) => {
    if (validate<null>(value, 'null')) {
      el.removeAttribute(name);
    } else {
      el.setAttribute(name, value ? value.toString() : '');
    }
  },
) as AttrMethod;
