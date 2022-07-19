import { CustomEventTarget, MethodCallback } from '@core/types';
import { validate } from '@src/validator';
import { bind, trigger } from '@core/helpers/events';

export default (
  el: CustomEventTarget,
  name: string,
  callback?: MethodCallback,
): void => {
  if (validate<MethodCallback>(callback, 'function')) {
    bind(el, name, callback);
  } else {
    trigger(el, name);
  }
};
