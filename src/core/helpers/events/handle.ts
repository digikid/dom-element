import { validate } from '@src/validator';
import { bind, trigger } from '@core/helpers/events';

export default (
  el: HTMLElement | Window | Document,
  name: string,
  callback?: Function,
) => {
  if (validate<Function>(callback, 'function')) {
    bind(el, name, callback);
  } else {
    trigger(el, name);
  }
};
