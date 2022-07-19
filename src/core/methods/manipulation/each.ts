import { DomElement, type IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type EachCallback = (el: HTMLElement, i: number) => void;
export type EachMethod = (callback: EachCallback) => DomElement;

export default (function (this: IDomElement, callback) {
  if (validate<EachCallback>(callback, 'function')) {
    this.collection.forEach((el, i) => callback.apply(el, [el, i]));
  }

  return new DomElement(this);
} as EachMethod);
