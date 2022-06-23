import { DomElement, IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';
import { isMatches } from '@core/helpers/element';
import { map } from '@core/hooks';

export type DomUnwrapMethod = (selector?: string) => DomElement;

export default (function (this: IDomElement, selector?) {
  return map.call(this, () => this.collection.reduce((acc, el) => {
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
  }, [] as HTMLElement[]));
} as DomUnwrapMethod);
