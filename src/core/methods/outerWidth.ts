import { IDomElement } from '@core/classes/DomElement';
import { reduce } from '@core/hooks';
import { toNumber } from '@utils/string';

export type DomOuterWidthMethod = (includeMargin?: boolean) => number;

export default (function (this: IDomElement, includeMargin = false) {
  return reduce.call(this, (el) => {
    const width = el.offsetWidth;
    const style = getComputedStyle(el, null);

    const margin = ['left', 'right'].reduce((acc, position) => {
      const rawValue = style.getPropertyValue(`margin-${position}`);
      const value = toNumber(rawValue) || 0;

      return acc + value;
    }, 0);

    return includeMargin ? width + margin : width;
  });
} as DomOuterWidthMethod);
