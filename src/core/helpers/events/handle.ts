import { DomEventTarget, DomCallback } from '@core/types';
import { validate } from '@src/validator';
import { bind, trigger } from '@core/helpers/events';

export default (
  el: DomEventTarget,
  name: string,
  callback?: DomCallback,
): void => {
  if (validate<DomCallback>(callback, 'function')) {
    bind(el, name, callback);
  } else {
    trigger(el, name);
  }
};
