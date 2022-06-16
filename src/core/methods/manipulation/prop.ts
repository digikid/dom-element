import { IDomElement } from '@core/classes/DomElement';
import { map } from '@core/hooks';
import { validate } from '@src/validator';

export type DomPropMethod = (
  name: string | Record<string, any>,
  value?: any
) => IDomElement | any;

export default (function (this: IDomElement, name, value?) {
  return map.call(
    this,
    name,
    value,
    (el, name) => {
      if (name in el) {
        return (el as any)[name];
      }

      return null;
    },
    (el, name, value) => {
      if (validate<string>(name, 'string')) {
        if (validate<null>(value, 'null')) {
          el.removeAttribute(name);
        } else if (name in el) {
          (el as any)[name] = value;
        }
      }
    },
  );
} as DomPropMethod);
