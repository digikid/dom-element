import { IDomElement } from '@core/classes/DomElement';
import { attach } from '@core/hooks';
import { validate } from '@src/validator';

export type DomOnMethodObject = Record<string, Function>;

export type DomOnMethod = (
  eventName: string | DomOnMethodObject,
  selector?: string | Function,
  callback?: Function
) => IDomElement;

export default (function (this: IDomElement, eventName, selector?, callback?) {
  if (validate<DomOnMethodObject>(eventName, 'object')) {
    Object.entries(eventName).forEach(([name, callback]) => attach.apply(this, [name, callback]));
  }

  if (validate<string>(eventName, 'string')) {
    if (validate<Function>(selector, 'function')) {
      return attach.apply(this, [eventName, selector]);
    }

    if (
      validate<string>(selector, 'selectorString')
      && validate<Function>(callback, 'function')
    ) {
      return attach.apply(this, [eventName, callback, selector]);
    }
  }

  return this;
} as DomOnMethod);
