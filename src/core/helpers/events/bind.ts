import { validate } from '@src/validator';
import { store } from '@src/store';
import { parse } from '@core/helpers/selector';
import { getStoreId } from '@core/helpers/store';
import { createEventListener } from '@core/helpers/constructors';

export default (
  el: HTMLElement | Window | Document,
  event: string,
  callback: Function,
  selector?: string,
): void => {
  event.split(' ').forEach((event) => {
    const storeId = getStoreId(el);
    const listener = createEventListener(el, callback, selector);
    const target = validate<string>(selector, 'selectorString') ? document : el;

    target.addEventListener(event, listener, false);

    if (validate<string>(selector, 'selectorString')) {
      parse(selector).forEach((el) => store.delegateListener(el, event, listener));
    } else {
      store.setListener(storeId, event, listener);
    }
  });
};
