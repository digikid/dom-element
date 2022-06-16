import { IDomElement } from '@core/classes/DomElement';
import { createMethods } from '@core/helpers/constructors';
import { getIndex } from '@core/helpers/element';

export interface IDomOrderingMethods {
  readonly even: DomOrderingMethod;
  readonly first: DomOrderingMethod;
  readonly last: DomOrderingMethod;
  readonly odd: DomOrderingMethod;
}

export type DomOrderingMethod = () => IDomElement;

export default createMethods<DomOrderingMethod, keyof IDomOrderingMethods>(
  {
    even: [],
    first: [],
    last: [],
    odd: [],
  },
  (name) => function (this: IDomElement) {
    return this.filter((el) => {
      const index = getIndex(el);

      if (name === 'even') {
        return index % 2;
      }

      if (name === 'odd') {
        return !(index % 2);
      }

      if (name === 'first') {
        return !index;
      }

      if (name === 'last') {
        const parent = el.parentElement;

        if (parent) {
          const total = Array.from(parent.children).length;

          return index === total - 1;
        }
      }

      return false;
    });
  },
);
