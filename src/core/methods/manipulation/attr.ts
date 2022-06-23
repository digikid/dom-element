import { DomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';
import { resolve } from '@core/helpers/methods';

export type DomAttrValue = string | number | null | undefined;

export type DomAttrMethod = (
  name: string | Record<string, DomAttrValue>,
  value?: DomAttrValue
) => DomElement | string;

export default resolve<DomAttrValue>(
  (el, name) => (name ? el.getAttribute(name) : null),
  (el, name, value) => {
    if (validate<null>(value, 'null')) {
      el.removeAttribute(name);
    } else {
      el.setAttribute(name, value ? value.toString() : '');
    }
  },
) as DomAttrMethod;
