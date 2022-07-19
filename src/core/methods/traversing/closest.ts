import { DomElement, IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';
import { map } from '@core/hooks';

export type ClosestMethod = (selector: string) => DomElement;

export default (function (this: IDomElement, selector: string): DomElement {
  return map.call(this, () => (validate<string>(selector, 'selectorString')
    ? this.collection.reduce((acc, el) => {
      const closest = <HTMLElement>el.closest(selector);

      if (closest) {
        acc.push(closest);
      }

      return acc;
    }, [] as HTMLElement[])
    : []));
} as ClosestMethod);
