import { IDomElement } from '@core/classes/DomElement';
import { filter } from '@core/hooks';

export type DomParentMethod = (selector?: string) => IDomElement;

export default (function (this: IDomElement, selector?) {
  this.items = this.items.reduce((acc: HTMLElement[], el) => {
    const parent = el.parentElement;

    if (parent) {
      acc.push(parent);
    }

    return acc;
  }, []);

  return filter.call(this, selector);
} as DomParentMethod);
