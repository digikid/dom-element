import { IDomElement } from '@core/classes/DomElement';
import { bind } from '@core/helpers/events';
import { some, validate } from '@src/validator';

export type DomOnMethodObject = Record<string, Function>;

export type DomOnMethod = (
  eventName: string | DomOnMethodObject,
  selector?: string | Function,
  callback?: Function
) => IDomElement;

export default (function (this: IDomElement, eventName, selector?, callback?) {
  const cb = [selector, callback].find((param): param is Function => validate<Function>(param, 'function'));

  if (cb) {
    const events = validate<DomOnMethodObject>(eventName, 'object')
      ? eventName
      : {
        [eventName]: cb,
      };

    Object.entries(events).forEach(([event, callback]) => {
      if (
        validate<HTMLElement>(this.selector, 'document')
        && validate<string>(selector, 'selectorString')
      ) {
        bind(this.selector, event, callback, selector);
      } else if (some<Window | Document>(this.selector, 'window', 'document')) {
        bind(this.selector, event, callback);
      } else {
        this.each((el) => bind(el, event, callback));
      }
    });
  }

  return this;
} as DomOnMethod);
