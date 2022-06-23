import { create } from '@core/helpers/methods';
import { DomElement, IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';
import { reduce } from '@core/hooks';
import { toNumber } from '@core/utils/string';
import { getComputedValue } from '@core/helpers/css';

export type DomDimensionMethod = (
  value?: string | number
) => DomElement | number;

export interface IDomDimensionMethods {
  readonly height: DomDimensionMethod;
  readonly width: DomDimensionMethod;
}

export default create<DomDimensionMethod, keyof IDomDimensionMethods>(
  {
    height: [],
    width: [],
  },
  (name) => function (this: IDomElement, value?) {
    if (
      validate<string>(value, 'string', 'truthy')
        || validate<number>(value, 'number')
    ) {
      this.collection.forEach((el) => {
        const currentValue = getComputedValue(el, name);
        const updatedValue = validate<number>(value, 'number')
          ? `${value}px`
          : value;

        if (updatedValue !== currentValue) {
          el.style.setProperty(name, updatedValue);
        }
      });

      return new DomElement(this);
    }

    return reduce.call(this, (el) => toNumber(getComputedValue(el, name)), 0);
  },
);
