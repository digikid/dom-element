import { IDomElement } from '@core/classes/DomElement';
import { some, validate } from '@src/validator';

export type DomTriggerAction = (
  el: HTMLElement | Window | Document,
  names: string,
  data?: any
) => void;

const triggerEvent: DomTriggerAction = (el, names, data?) => {
  names.split(' ').forEach((name) => {
    let e;

    if (validate<Object>(data, 'object')) {
      if (
        validate(window.CustomEvent)
        && validate<Function>(window.CustomEvent, 'function')
      ) {
        e = new CustomEvent(name, { detail: data });
      } else {
        e = document.createEvent('CustomEvent');

        e.initCustomEvent(name, true, true, data);
      }
    } else {
      e = document.createEvent('HTMLEvents');

      e.initEvent(name, true, false);
    }

    el.dispatchEvent(e);
  });
};

export type DomTriggerHook = (
  name: string,
  callback?: Function,
  data?: any
) => IDomElement;

export default (function (this: IDomElement, name, callback?, data?) {
  if (validate<string>(name, 'string', 'truthy')) {
    if (validate<Function>(callback, 'function')) {
      return this.on(name, callback);
    }

    if (some<Window | Document>(this.selector, 'window', 'document')) {
      triggerEvent(this.selector, name, data);
    } else {
      this.each((el) => triggerEvent(el, name, data));
    }
  }

  return this;
} as DomTriggerHook);
