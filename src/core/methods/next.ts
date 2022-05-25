import { IDomElement } from '@core/classes/DomElement';
import { filter } from '@core/hooks';

export type DomNextMethod = (selector?: string) => IDomElement;

export default (function (this: IDomElement, selector?) {
  this.items = this.items.reduce((acc: HTMLElement[], el: HTMLElement) => {
    const nextSibling = <HTMLElement>el.nextElementSibling;

    if (nextSibling) {
      acc.push(nextSibling);
    }

    return acc;
  }, []);

  return filter.call(this, selector);
} as DomNextMethod);
