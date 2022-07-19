import { DomElement, type IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';
import { reduce, map } from '@core/hooks';
import { parse } from '@core/helpers/selector';

export type HtmlMethod = (
  value?: string | boolean,
  replace?: boolean
) => DomElement | string;

export default (function (this: IDomElement, value, replace?) {
  if (validate<string>(value, 'string')) {
    const parsed: HTMLElement[] = [];

    this.collection.forEach((el) => {
      if (validate<boolean>(replace, 'truthy')) {
        const content = parse(value);

        el.replaceWith(...content);

        parsed.push(...content);
      } else {
        el.innerHTML = value;
      }
    });

    return map.call(this, () => (validate<boolean>(replace, 'truthy') ? parsed : this));
  }

  return reduce.call(this, (el) => {
    const prop = validate<boolean>(value, 'truthy') ? 'outerHTML' : 'innerHTML';

    return el[prop];
  });
} as HtmlMethod);
