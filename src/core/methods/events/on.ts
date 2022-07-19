import { MethodCallback } from '@core/types';
import { DomElement, IDomElement } from '@core/classes/DomElement';
import { bind } from '@core/helpers/events';
import { validate } from '@src/validator';

export type OnMethodObject = Record<string, MethodCallback>;

export type OnMethod = (
  eventName: string | OnMethodObject,
  selector?: string | Function,
  callback?: MethodCallback
) => DomElement;

export default (function (this: IDomElement, eventName, selector?, callback?) {
  const cb = [selector, callback].find((param): param is MethodCallback => validate<MethodCallback>(param, 'function'));

  if (cb) {
    const events = validate<OnMethodObject>(eventName, 'object')
      ? eventName
      : {
        [eventName]: cb,
      };

    Object.entries(events).forEach(([event, callback]) => {
      if (validate<string>(selector, 'selectorString')) {
        bind(document, event, callback, selector);
      } else if (validate(event, 'windowEvent')) {
        bind(window, event, callback);
      } else if (
        !this.length
        && validate<string>(this.selector, 'selectorString')
      ) {
        bind(document, event, callback, this.selector);
      } else {
        this.collection.forEach((el) => bind(el, event, callback));
      }
    });
  }

  return new DomElement(this);
} as OnMethod);
