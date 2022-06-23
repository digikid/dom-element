import { DomElement, IDomElement } from '@core/classes/DomElement';
import { create } from '@core/helpers/methods';
import { getIndex } from '@core/helpers/element';
import { map } from '@core/hooks';

export interface IDomOrderingMethods {
  readonly even: DomOrderingMethod;
  readonly first: DomOrderingMethod;
  readonly last: DomOrderingMethod;
  readonly odd: DomOrderingMethod;
}

export type DomOrderingMethod = () => DomElement;

export default create<DomOrderingMethod, keyof IDomOrderingMethods>(
  {
    even: [],
    first: [],
    last: [],
    odd: [],
  },
  (name) => function (this: IDomElement) {
    return map.call(this, () => this.collection.filter((el) => {
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
    }));
  },
);
