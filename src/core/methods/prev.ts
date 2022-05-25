import { IDomElement } from '@core/classes/DomElement';
import { filter } from '@core/hooks';

export type DomPrevMethod = (selector?: string) => IDomElement;

export default (function (this: IDomElement, selector?) {
  this.items = this.items.reduce((acc: HTMLElement[], el: HTMLElement) => {
    const previousSibling = <HTMLElement>el.previousElementSibling;

    if (previousSibling) {
      acc.push(previousSibling);
    }

    return acc;
  }, []);

  return filter.call(this, selector);
} as DomPrevMethod);
