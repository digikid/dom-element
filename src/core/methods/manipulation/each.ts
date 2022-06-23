import { DomElement, IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type DomEachCallback = (el: HTMLElement, i: number) => void;
export type DomEachMethod = (callback: DomEachCallback) => DomElement;

export default (function (this: IDomElement, callback) {
  if (validate<DomEachCallback>(callback, 'function')) {
    this.collection.forEach((el, i) => callback.apply(el, [el, i]));
  }

  return new DomElement(this);
} as DomEachMethod);
