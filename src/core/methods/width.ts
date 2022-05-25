import { IDomElement } from '@core/classes/DomElement';
import { reduce } from '@core/hooks';
import { validate } from '@src/validator';
import { toNumber } from '@utils/string';

export type DomWidthMethod = (value?: string | number) => IDomElement | number;

export default (function (this: IDomElement, value?) {
  if (
    validate<string>(value, 'string', 'truthy')
    || validate<number>(value, 'number')
  ) {
    return this.each((el) => {
      el.style.width = validate<number>(value, 'number') ? `${value}px` : value;
    });
  }

  return reduce.call(
    this,
    (el) => {
      const style = getComputedStyle(el, null);
      const value = style.getPropertyValue('width');

      return toNumber(value);
    },
    0,
  );
} as DomWidthMethod);
