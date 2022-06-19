import { DomEventTarget, DomCallback } from '@core/types';
import { store } from '@src/store';
import { validate } from '@src/validator';
import { parse } from '@core/helpers/selector';
import { listener } from '@core/helpers/events';

export default (
  el: DomEventTarget,
  event: string,
  callback: DomCallback,
  selector?: string,
): void => {
  const target = validate<Window>(el, 'window') ? window : document;

  event.split(' ').forEach((event) => {
    if (!(event in store.get('handlers')) || validate<Window>(el, 'window')) {
      target.addEventListener(event, listener, false);

      store.setListeners(target, event, listener);
    }

    if (validate<string>(selector, 'selectorString')) {
      parse(selector).forEach((el) => store.setHandlers(el, event, callback));
    } else {
      store.setHandlers(el, event, callback);
    }
  });
};
