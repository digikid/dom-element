import { IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type DomMapCallback = (el: HTMLElement, i: number) => any;
export type DomMapMethod = (callback: DomMapCallback) => any[];

export default (function (this: IDomElement, callback) {
  if (validate<DomMapCallback>(callback, 'function')) {
    return this.collection.map((el, i) => callback.apply(el, [el, i]));
  }

  return [];
} as DomMapMethod);
