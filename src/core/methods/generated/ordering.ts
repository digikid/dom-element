import { DomElement, type IDomElement } from '@core/classes/DomElement';
import { create } from '@core/helpers/methods';
import { getIndex } from '@core/helpers/element';
import { map } from '@core/hooks';

export type OrderingMethod = () => DomElement;

export interface IOrderingMethods {
  readonly even: OrderingMethod;
  readonly first: OrderingMethod;
  readonly last: OrderingMethod;
  readonly odd: OrderingMethod;
}

export default create<OrderingMethod, keyof IOrderingMethods>(
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
