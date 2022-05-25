import { IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';
import { reduce } from '@core/hooks';

export type DomHtmlMethod = (
  value?: string | boolean,
  replace?: boolean
) => IDomElement | string;

export default (function (this: IDomElement, value, replace?) {
  if (validate<string>(value, 'string')) {
    return this.each((el) => {
      if (validate<boolean>(replace, 'truthy')) {
        const parent = el.parentNode;

        if (validate<HTMLElement>(parent, 'htmlElement')) {
          el.insertAdjacentHTML('afterend', value);
          parent.removeChild(el);
        }
      } else {
        el.innerHTML = value;
      }
    });
  }

  return reduce.call(this, (el) => {
    const prop = validate<boolean>(value, 'truthy') ? 'outerHTML' : 'innerHTML';

    return el[prop];
  });
} as DomHtmlMethod);
