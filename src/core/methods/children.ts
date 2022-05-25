import { IDomElement } from '@core/classes/DomElement';
import { filter } from '@core/hooks';

export type DomChildrenMethod = (selector?: string) => IDomElement;

export default (function (this: IDomElement, selector?) {
  this.items = this.items.reduce((acc: HTMLElement[], el: HTMLElement) => {
    const { children } = el;

    if (children.length) {
      const nodes = <HTMLElement[]>Array.from(el.children);

      acc.push(...nodes);
    }

    return acc;
  }, []);

  return filter.call(this, selector);
} as DomChildrenMethod);
