import { createMethods } from '@core/helpers/constructors';
import { IDomElement } from '@core/classes/DomElement';
import { some, validate } from '@src/validator';
import { isMatches } from '@core/helpers/element';

export interface IDomFilterMethods {
  readonly filter: DomFilterMethod;
  readonly not: DomFilterMethod;
}

export type DomFilterCallback = (el: HTMLElement, i: number) => any;

export type DomFilterMethod = (
  selector: DomFilterCallback | string | undefined,
  inverse?: boolean
) => IDomElement;

export default createMethods<DomFilterMethod, keyof IDomFilterMethods>(
  {
    filter: [],
    not: [true],
  },
  (name, inverse = false) => function (this: IDomElement, selector) {
    if (some<string | Function>(selector, 'function', 'selectorString')) {
      this.items = this.items.filter((el, i) => {
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

    return this;
  },
) as IDomFilterMethods;
