import { DomElement, IDomElement } from '@core/classes/DomElement';
import { map } from '@core/hooks';

export type DomPrevMethod = (selector?: string) => DomElement;

export default (function (this: IDomElement, selector?) {
  return map.call(
    this,
    () => this.collection.reduce((acc, el) => {
      const previousSibling = <HTMLElement>el.previousElementSibling;

      if (previousSibling) {
        acc.push(previousSibling);
      }

      return acc;
    }, [] as HTMLElement[]),
    selector,
  );
} as DomPrevMethod);
