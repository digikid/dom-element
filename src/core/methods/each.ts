import { IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type DomEachCallback = (el: HTMLElement, i: number) => void;
export type DomEachMethod = (cb: DomEachCallback) => IDomElement;

export default (function (this: IDomElement, cb) {
  if (validate<DomEachCallback>(cb, 'function')) {
    this.items.forEach((el, i) => cb.apply(el, [el, i]));
  }

  return this;
} as DomEachMethod);
