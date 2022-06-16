import { IDomElement } from '@core/classes/DomElement';
import { isMatches } from '@core/helpers/element';
import { validate } from '@src/validator';

export type DomSiblingsMethod = (selector?: string) => IDomElement;

export default (function (this: IDomElement, selector?) {
  this.items = this.items.reduce((acc: HTMLElement[], el: HTMLElement) => {
    const parent = el.parentElement;

    if (parent) {
      const nodes = <HTMLElement[]>(
        Array.from(parent.children).filter((child) => child !== el)
      );

      acc.push(...nodes);
    }

    return acc;
  }, []);

  if (validate<string>(selector, 'selectorString')) {
    this.items = this.items.filter((el) => isMatches(el, selector));
  }

  return this;
} as DomSiblingsMethod);
