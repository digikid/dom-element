import { IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type DomClosestMethod = (selector: string) => IDomElement;

export default (function (this: IDomElement, selector) {
  if (validate<string>(selector, 'selectorString')) {
    this.items = this.items.reduce((acc: HTMLElement[], el: HTMLElement) => {
      const closest = <HTMLElement>el.closest(selector);

      if (closest) {
        acc.push(closest);
      }

      return acc;
    }, []);
  } else {
    this.items = [];
  }

  return this;
} as DomClosestMethod);
