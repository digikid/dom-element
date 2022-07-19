import { IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type MapCallback = (el: HTMLElement, i: number) => any;
export type MapMethod = (callback: MapCallback) => any[];

export default (function (this: IDomElement, callback) {
  if (validate<MapCallback>(callback, 'function')) {
    return this.collection.map((el, i) => callback.apply(el, [el, i]));
  }

  return [];
} as MapMethod);
