import { type IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type ReduceHookCallback = (el: HTMLElement) => any;

export type ReduceHook = (
  callback?: ReduceHookCallback,
  defaultValue?: any
) => ReturnType<ReduceHookCallback> | typeof defaultValue;

export default (function (this: IDomElement, callback?, defaultValue = null) {
  if (!this.length) {
    return defaultValue;
  }

  return validate<ReduceHookCallback>(callback, 'function')
    ? callback(this.collection[0])
    : defaultValue;
} as ReduceHook);
