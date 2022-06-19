import { DomCallback } from '@core/types';
import { IDomElement } from '@core/classes/DomElement';
import { createMethods } from '@core/helpers/constructors';
import { validate } from '@src/validator';
import { bind } from '@core/helpers/events';
import { fromCamelCaseToArray } from '@core/utils/string';
import { debounce, throttle } from '@core/utils/performance';

export interface IDomEventDeferMethods {
  readonly resizeDebounce: DomEventDeferMethod;
  readonly scrollDebounce: DomEventDeferMethod;
  readonly resizeThrottle: DomEventDeferMethod;
  readonly scrollThrottle: DomEventDeferMethod;
}

export type DomEventDeferMethod = (
  callback: DomCallback,
  delay?: number
) => IDomElement;

export default createMethods<DomEventDeferMethod, keyof IDomEventDeferMethods>(
  {
    resizeDebounce: [debounce, 200],
    scrollDebounce: [debounce, 200],
    resizeThrottle: [throttle, 66],
    scrollThrottle: [throttle, 66],
  },
  (name, wrapper, defaultDelay) => {
    const [eventName] = fromCamelCaseToArray(name);

    return function (this: IDomElement, callback, delay = defaultDelay) {
      const cb = <DomCallback>wrapper(callback, delay);

      if (validate(eventName, 'windowEvent')) {
        bind(window, eventName, cb);

        return this;
      }

      return this.each((el) => bind(el, eventName, cb));
    };
  },
) as IDomEventDeferMethods;
