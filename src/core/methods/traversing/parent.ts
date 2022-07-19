import { DomElement, IDomElement } from '@core/classes/DomElement';
import { map } from '@core/hooks';

export type ParentMethod = (selector?: string) => DomElement;

export default (function (this: IDomElement, selector?) {
  return map.call(
    this,
    () => this.collection.reduce((acc, el) => {
      const parent = el.parentElement;

      if (parent) {
        acc.push(parent);
      }

      return acc;
    }, [] as HTMLElement[]),
    selector,
  );
} as ParentMethod);
