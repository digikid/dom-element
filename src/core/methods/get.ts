import { IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type DomGetMethod = (i?: number) => HTMLElement | HTMLElement[] | null;

export default (function (this: IDomElement, i?) {
  if (validate<number>(i, 'positiveNumber')) {
    return i <= this.length - 1 ? this.items[i] : null;
  }

  return this.items;
} as DomGetMethod);
