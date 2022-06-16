import { IDomElement } from '@core/classes/DomElement';
import { isMatches } from '@core/helpers/element';
import { validate } from '@src/validator';

export type DomUnwrapMethod = (selector?: string) => IDomElement;

export default (function (this: IDomElement, selector?) {
  this.items = this.items.reduce((acc: HTMLElement[], el: HTMLElement) => {
    const parent = el.parentElement;

    if (parent) {
      const children = <HTMLElement[]>Array.from(parent.children);
      const childNodes = Array.from(parent.childNodes);

      if (
        !validate(selector)
        || (validate<string>(selector, 'selectorString')
          && isMatches(parent, selector))
      ) {
        parent.replaceWith(...childNodes);

        acc.push(...children);
      } else {
        acc.push(el);
      }
    } else {
      acc.push(el);
    }

    return acc;
  }, []);

  return this;
} as DomUnwrapMethod);
