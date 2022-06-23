import { DomElement, IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';
import { map } from '@core/hooks';

export type DomFindMethod = (selector: string) => DomElement;

export default (function (this: IDomElement, selector) {
  return map.call(this, () => (validate<string>(selector, 'selectorString')
    ? this.collection.reduce((acc, el) => {
      acc.push(
        ...(<HTMLElement[]>Array.from(el.querySelectorAll(selector))),
      );

      return acc;
    }, [] as HTMLElement[])
    : []));
} as DomFindMethod);
