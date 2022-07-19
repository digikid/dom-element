import { IDomElement } from '@core/classes/DomElement';
import { reduce } from '@core/hooks';
import { toNumber } from '@utils/string';

export type PositionKeys = 'top' | 'left';
export type PositionMethod = () => Record<PositionKeys, number>;

export default (function (this: IDomElement) {
  return reduce.call(
    this,
    (el) => {
      const style = getComputedStyle(el, null);
      const marginTop = toNumber(style.getPropertyValue('margin-top')) || 0;
      const marginLeft = toNumber(style.getPropertyValue('margin-left')) || 0;

      return {
        top: el.offsetTop - marginTop,
        left: el.offsetLeft - marginLeft,
      };
    },
    {
      top: null,
      left: null,
    },
  );
} as PositionMethod);
