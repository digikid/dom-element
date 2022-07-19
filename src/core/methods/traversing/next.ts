import { DomElement, IDomElement } from '@core/classes/DomElement';
import { map } from '@core/hooks';

export type NextMethod = (selector?: string) => DomElement;

export default (function (this: IDomElement, selector?) {
  return map.call(
    this,
    () => this.collection.reduce((acc, el) => {
      const nextSibling = <HTMLElement>el.nextElementSibling;

      if (nextSibling) {
        acc.push(nextSibling);
      }

      return acc;
    }, [] as HTMLElement[]),
    selector,
  );
} as NextMethod);
