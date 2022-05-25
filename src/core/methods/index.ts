import { IDomElement } from '@core/classes/DomElement';
import { reduce } from '@core/hooks';
import { validate } from '@src/validator';

export type DomIndexMethod = () => number;

export default (function (this: IDomElement) {
  return reduce.call(
    this,
    (el) => {
      const parent = el.parentElement;

      if (validate<HTMLElement>(parent, 'htmlElement')) {
        return Array.from(parent.children).indexOf(el);
      }

      return 0;
    },
    -1,
  );
} as DomIndexMethod);
