import { type MethodCallback } from '@core/types';
import { DomElement, type IDomElement } from '@core/classes/DomElement';
import { create } from '@core/helpers/methods';
import { validate } from '@src/validator';
import { bind } from '@core/helpers/events';
import { fromCamelCaseToArray } from '@utils/string';
import { debounce, throttle } from '@utils/performance';

import defaults from '@core/defaults';

export type EventDeferMethod = (
  callback: MethodCallback,
  delay?: number
) => DomElement;

export interface IEventDeferMethods {
  readonly resizeDebounce: EventDeferMethod;
  readonly scrollDebounce: EventDeferMethod;
  readonly resizeThrottle: EventDeferMethod;
  readonly scrollThrottle: EventDeferMethod;
}

export default create<
EventDeferMethod,
keyof IEventDeferMethods,
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
      const cb = <MethodCallback>wrapper(callback, delay);

      if (validate(eventName, 'windowEvent')) {
        bind(window, eventName, cb);
      } else {
        this.collection.forEach((el) => bind(el, eventName, cb));
      }

      return new DomElement(this);
    };
  },
) as IEventDeferMethods;
