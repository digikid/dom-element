import { MethodCallback } from '@core/types';
import { IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type ReadyMethod = (callback: MethodCallback) => void;

export default (function (this: IDomElement, callback) {
  if (validate<MethodCallback>(callback, 'function')) {
    if (document.readyState !== 'loading') {
      callback.call(document);
    } else {
      document.addEventListener('DOMContentLoaded', callback as EventListener);
    }
  }
} as ReadyMethod);
