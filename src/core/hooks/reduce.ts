import { IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type DomReduceHookCallback = (el: HTMLElement) => any;

export type DomReduceHook = (
  callback?: DomReduceHookCallback,
  defaultValue?: any
) => ReturnType<DomReduceHookCallback> | typeof defaultValue;

export default (function (this: IDomElement, callback?, defaultValue = null) {
  if (!this.length) {
    return defaultValue;
  }

  return validate<DomReduceHookCallback>(callback, 'function')
    ? callback(this.collection[0])
    : defaultValue;
} as DomReduceHook);
