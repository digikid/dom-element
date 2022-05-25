import { IDomElement } from '@core/classes/DomElement';

import { validate } from '@src/validator';

export type DomReduceCallback = (el: HTMLElement) => any;

export type DomReduceHook = (
  cb?: DomReduceCallback | undefined,
  defaultValue?: any
) => ReturnType<DomReduceCallback> | typeof defaultValue;

export default (function (this: IDomElement, cb?, defaultValue = null) {
  if (!this.length) {
    return defaultValue;
  }

  const el = this.items[0];

  return validate<DomReduceCallback>(cb, 'function') ? cb(el) : defaultValue;
} as DomReduceHook);
