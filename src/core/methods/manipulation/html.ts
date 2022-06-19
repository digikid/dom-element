import { IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';
import { reduce } from '@core/hooks';
import { parse } from '@core/helpers/selector';

export type DomHtmlMethod = (
  value?: string | boolean,
  replace?: boolean
) => IDomElement | string;

export default (function (this: IDomElement, value, replace?) {
  if (validate<string>(value, 'string')) {
    const parsed: HTMLElement[] = [];

    this.each((el) => {
      if (validate<boolean>(replace, 'truthy')) {
        const content = parse(value);

        el.replaceWith(...content);

        parsed.push(...content);
      } else {
        el.innerHTML = value;
      }
    });

    if (validate<boolean>(replace, 'truthy')) {
      this.items = parsed;
    }

    return this;
  }

  return reduce.call(this, (el) => {
    const prop = validate<boolean>(value, 'truthy') ? 'outerHTML' : 'innerHTML';

    return el[prop];
  });
} as DomHtmlMethod);
