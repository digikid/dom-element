import { DomElement, IDomElement } from '@core/classes/DomElement';
import { map } from '@core/hooks';

export type DomSiblingsMethod = (selector?: string) => DomElement;

export default (function (this: IDomElement, selector?) {
  return map.call(
    this,
    () => this.collection.reduce((acc, el) => {
      const parent = el.parentElement;

      if (parent) {
        const nodes = <HTMLElement[]>(
            Array.from(parent.children).filter((child) => child !== el)
          );

        acc.push(...nodes);
      }

      return acc;
    }, [] as HTMLElement[]),
    selector,
  );
} as DomSiblingsMethod);
