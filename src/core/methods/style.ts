import { IDomElement } from '@core/classes/DomElement';
import { reduce } from '@core/hooks';
import { validate } from '@src/validator';
import { parseToCssObject, toDashCase, toNumber } from '@utils/string';

export type DomStyleMethod = (
  name?: string | boolean,
  parse?: boolean
) => string | number | Record<string, string>;

export default (function (this: IDomElement, name?, parse = false) {
  return reduce.call(
    this,
    (el) => {
      const inlineStyle = el.getAttribute('style');

      if (validate<string>(name, 'string', 'truthy')) {
        const style = getComputedStyle(el, null);
        const prop = toDashCase(name);
        const value = style.getPropertyValue(prop);
        const parsed = toNumber(value);

        if (parse && !validate<null>(parsed, 'null')) {
          return parsed;
        }

        return value;
      }

      if (validate<string>(inlineStyle, 'string', 'truthy')) {
        const cssObject = parseToCssObject(inlineStyle);

        return name
          ? Object.entries(cssObject).reduce(
            (acc: Record<string, string | number>, item) => {
              const [prop, value] = item;
              const parsed = toNumber(value);

              acc[prop] = validate<null>(parsed, 'null') ? value : parsed;

              return acc;
            },
            {},
          )
          : cssObject;
      }

      return {};
    },
    {},
  );
} as DomStyleMethod);
