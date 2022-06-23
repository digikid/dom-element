import { DomElement, IDomElement } from '@core/classes/DomElement';
import { create } from '@core/helpers/methods';
import { some, validate } from '@src/validator';
import { isMatches } from '@core/helpers/element';
import { map } from '@core/hooks';

export interface IDomFilterMethods {
  readonly filter: DomFilterMethod;
  readonly not: DomFilterMethod;
}

export type DomFilterCallback = (el: HTMLElement, i: number) => any;

export type DomFilterMethod = (
  selector: DomFilterCallback | string | undefined,
  inverse?: boolean
) => DomElement;

export default create<DomFilterMethod, keyof IDomFilterMethods, [boolean]>(
  {
    filter: [false],
    not: [true],
  },
  (name, inverse = false) => function (this: IDomElement, selector) {
    return map.call(this, () => {
      if (some<string | Function>(selector, 'function', 'selectorString')) {
        return this.collection.filter((el, i) => {
          let check = true;

          if (validate<Function>(selector, 'function')) {
            check = selector.apply(el, [el, i]);
          }

          if (validate<string>(selector, 'selectorString')) {
            check = isMatches(el, selector);
          }

          return inverse ? !check : check;
        });
      }

      return inverse ? this : [];
    });
  },
) as IDomFilterMethods;
