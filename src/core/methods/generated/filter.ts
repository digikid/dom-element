import { DomElement, type IDomElement } from '@core/classes/DomElement';
import { create } from '@core/helpers/methods';
import { some, validate } from '@src/validator';
import { isMatches } from '@core/helpers/element';
import { map } from '@core/hooks';

export type FilterCallback = (el: HTMLElement, i: number) => any;

export type FilterMethod = (
  selector: FilterCallback | string | undefined,
  inverse?: boolean
) => DomElement;

export interface IFilterMethods {
  readonly filter: FilterMethod;
  readonly not: FilterMethod;
}

export default create<FilterMethod, keyof IFilterMethods, [boolean]>(
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
) as IFilterMethods;
