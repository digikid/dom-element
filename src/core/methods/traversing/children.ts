import { DomElement, IDomElement } from '@core/classes/DomElement';
import { map } from '@core/hooks';

export type ChildrenMethod = (selector?: string) => DomElement;

export default (function (this: IDomElement, selector?) {
  return map.call(
    this,
    () => this.collection.reduce((acc, el) => {
      const { children } = el;

      if (children.length) {
        const nodes = <HTMLElement[]>Array.from(el.children);

        acc.push(...nodes);
      }

      return acc;
    }, [] as HTMLElement[]),
    selector,
  );
} as ChildrenMethod);
