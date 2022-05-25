import { IDomElement } from '@core/classes/DomElement';
import { some, validate } from '@src/validator';

const triggerEvent = (
  el: HTMLElement | Window | Document,
  eventName: string,
  eventData?: any,
): void => {
  let e;

  if (validate<Object>(eventData, 'object')) {
    if (
      validate(window.CustomEvent)
      && validate<Function>(window.CustomEvent, 'function')
    ) {
      e = new CustomEvent(eventName, { detail: eventData });
    } else {
      e = document.createEvent('CustomEvent');

      e.initCustomEvent(eventName, true, true, eventData);
    }
  } else {
    e = document.createEvent('HTMLEvents');

    e.initEvent(eventName, true, false);
  }

  el.dispatchEvent(e);
};

export type DomTriggerHook = (
  eventName: string,
  callback?: Function,
  eventData?: any
) => IDomElement;

export default (function (this: IDomElement, eventName, callback?, eventData?) {
  if (validate<string>(eventName, 'string', 'truthy')) {
    if (validate<Function>(callback, 'function')) {
      return this.on(eventName, callback);
    }

    if (some<Window | Document>(this.selector, 'window', 'document')) {
      triggerEvent(this.selector, eventName, eventData);

      return this;
    }

    return this.each((el) => triggerEvent(el, eventName, eventData));
  }

  return this;
} as DomTriggerHook);
