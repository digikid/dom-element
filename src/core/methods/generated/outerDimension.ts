import { createMethods } from '@core/helpers/constructors';
import { IDomElement } from '@core/classes/DomElement';
import { reduce } from '@core/hooks';
import { toNumber } from '@core/utils/string';
import { getComputedValue } from '@core/helpers/css';

export type DomOuterDimensionMethod = (includeMargin?: boolean) => number;

export interface IDomOuterDimensionMethods {
  readonly outerHeight: DomOuterDimensionMethod;
  readonly outerWidth: DomOuterDimensionMethod;
}

export default createMethods<
DomOuterDimensionMethod,
keyof IDomOuterDimensionMethods
>(
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
