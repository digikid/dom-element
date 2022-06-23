import { DomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';
import { resolve } from '@core/helpers/methods';

export type DomPropMethod = (
  name: string | Record<string, any>,
  value?: any
) => DomElement | any;

export default resolve<any>(
  (el, name) => {
    if (name) {
      return name in el ? (el as any)[name] : null;
    }

    return new DomElement(this);
  },
  (el, name, value) => {
    const attributes = Array.from(el.attributes).map((attr) => attr.nodeName);

    if (attributes.includes(name) && validate<null>(value, 'null')) {
      el.removeAttribute(name);
    } else {
      (el as any)[name] = value;
    }
  },
) as DomPropMethod;
