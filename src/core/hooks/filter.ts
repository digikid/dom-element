import { IDomElement } from '@core/classes/DomElement';
import { some, validate } from '@src/validator';

import match from '@core/hooks/match';

export type DomFilterHook = (
  selector: Function | string | undefined,
  inverse?: boolean
) => IDomElement;

export default (function (this: IDomElement, selector, inverse = false) {
  if (some<string | Function>(selector, 'function', 'selectorString')) {
    this.items = this.items.filter((el, i) => {
      let check = true;

      if (validate<Function>(selector, 'function')) {
        check = selector.apply(el, [el, i]);
      }

      if (validate<string>(selector, 'selectorString')) {
        check = match(el, selector);
      }

      return inverse ? !check : check;
    });
  }

  return this;
} as DomFilterHook);
