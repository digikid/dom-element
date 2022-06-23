import { DomCallback } from '@core/types';
import { DomElement, IDomElement } from '@core/classes/DomElement';
import { bind } from '@core/helpers/events';
import { validate } from '@src/validator';

export type DomOnMethodObject = Record<string, DomCallback>;

export type DomOnMethod = (
  eventName: string | DomOnMethodObject,
  selector?: string | Function,
  callback?: DomCallback
) => DomElement;

export default (function (this: IDomElement, eventName, selector?, callback?) {
  const cb = [selector, callback].find((param): param is DomCallback => validate<DomCallback>(param, 'function'));

  if (cb) {
    const events = validate<DomOnMethodObject>(eventName, 'object')
      ? eventName
      : {
        [eventName]: cb,
      };

    Object.entries(events).forEach(([event, callback]) => {
      if (validate<string>(selector, 'selectorString')) {
        bind(document, event, callback, selector);
      } else if (validate(event, 'windowEvent')) {
        bind(window, event, callback);
      } else {
        this.collection.forEach((el) => bind(el, event, callback));
      }
    });
  }

  return new DomElement(this);
} as DomOnMethod);
