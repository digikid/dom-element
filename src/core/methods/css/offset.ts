import { IDomElement } from '@core/classes/DomElement';
import { reduce } from '@core/hooks';

export type OffsetKeys = 'top' | 'left';
export type OffsetMethod = () => Record<OffsetKeys, number>;

export default (function (this: IDomElement) {
  return reduce.call(
    this,
    (el) => {
      const rect = el.getBoundingClientRect();

      return {
        top: rect.top + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft,
      };
    },
    {
      top: null,
      left: null,
    },
  );
} as OffsetMethod);
