import { DomCallback } from '@core/types';
import { IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type DomReadyMethod = (callback: DomCallback) => void;

export default (function (this: IDomElement, callback) {
  if (validate<DomCallback>(callback, 'function')) {
    if (document.readyState !== 'loading') {
      callback.call(document);
    } else {
      document.addEventListener('DOMContentLoaded', callback as EventListener);
    }
  }
} as DomReadyMethod);
