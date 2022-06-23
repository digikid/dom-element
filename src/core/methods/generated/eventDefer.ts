import { DomCallback } from '@core/types';
import { DomElement, IDomElement } from '@core/classes/DomElement';
import { create } from '@core/helpers/methods';
import { validate } from '@src/validator';
import { bind } from '@core/helpers/events';
import { fromCamelCaseToArray } from '@core/utils/string';
import { debounce, throttle } from '@core/utils/performance';

import defaults from '@core/defaults';

export interface IDomEventDeferMethods {
  readonly resizeDebounce: DomEventDeferMethod;
  readonly scrollDebounce: DomEventDeferMethod;
  readonly resizeThrottle: DomEventDeferMethod;
  readonly scrollThrottle: DomEventDeferMethod;
}

export type DomEventDeferMethod = (
  callback: DomCallback,
  delay?: number
) => DomElement;

export default create<
DomEventDeferMethod,
keyof IDomEventDeferMethods,
[typeof debounce | typeof throttle, number]
>(
  {
    resizeDebounce: [debounce, defaults.delay.debounce],
    scrollDebounce: [debounce, defaults.delay.debounce],
    resizeThrottle: [throttle, defaults.delay.throttle],
    scrollThrottle: [throttle, defaults.delay.throttle],
  },
  (name, wrapper, defaultDelay) => {
    const [eventName] = fromCamelCaseToArray(name);

    return function (this: IDomElement, callback, delay = defaultDelay) {
      const cb = <DomCallback>wrapper(callback, delay);

      if (validate(eventName, 'windowEvent')) {
        bind(window, eventName, cb);
      } else {
        this.collection.forEach((el) => bind(el, eventName, cb));
      }

      return new DomElement(this);
    };
  },
) as IDomEventDeferMethods;
