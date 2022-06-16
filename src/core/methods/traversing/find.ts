import { IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type DomFindMethod = (selector: string) => IDomElement;

export default (function (this: IDomElement, selector) {
  if (validate<string>(selector, 'selectorString')) {
    this.items = this.items.reduce((acc: HTMLElement[], el) => {
      const nodes = <HTMLElement[]>Array.from(el.querySelectorAll(selector));

      acc.push(...nodes);

      return acc;
    }, []);
  } else {
    this.items = [];
  }

  return this;
} as DomFindMethod);
