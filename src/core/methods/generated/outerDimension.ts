import { type IDomElement } from '@core/classes/DomElement';
import { create } from '@core/helpers/methods';
import { reduce } from '@core/hooks';
import { toNumber } from '@utils/string';
import { getComputedValue } from '@core/helpers/css';

export type OuterDimensionMethod = (includeMargin?: boolean) => number;

export interface IOuterDimensionMethods {
  readonly outerHeight: OuterDimensionMethod;
  readonly outerWidth: OuterDimensionMethod;
}

export default create<OuterDimensionMethod, keyof IOuterDimensionMethods>(
  {
    outerHeight: [],
    outerWidth: [],
  },
  (name) => function (this: IDomElement, includeMargin = false) {
    return reduce.call(this, (el) => {
      const value = el[name === 'outerWidth' ? 'offsetWidth' : 'offsetHeight'];

      if (includeMargin) {
        const offsets = name === 'outerWidth' ? ['left', 'right'] : ['top', 'bottom'];
        const margin = offsets.reduce(
          (acc, position) => acc + toNumber(getComputedValue(el, `margin-${position}`)),
          0,
        );

        return value + margin;
      }

      return value;
    });
  },
);
