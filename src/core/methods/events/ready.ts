import { IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type DomReadyMethod = (callback: Function) => void;

export default (function (this: IDomElement, callback) {
  if (validate<Function>(callback, 'function')) {
    if (document.readyState !== 'loading') {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', () => callback());
    }
  }
} as DomReadyMethod);
