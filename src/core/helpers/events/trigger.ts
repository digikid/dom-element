import { some, validate } from '@src/validator';
import { store } from '@src/store';
import { getStoreId } from '@core/helpers/store';
import { DomEventData } from '@core/types';

export default (
  el: HTMLElement | Window | Document,
  event: string,
  data?: DomEventData,
  handlersOnly = false,
): void => {
  event.split(' ').forEach((event) => {
    let e: Event | CustomEvent;

    if (
      some<DomEventData>(data, 'object', 'array', 'string', 'number', 'boolean')
    ) {
      if (
        validate(window.CustomEvent)
        && validate<Function>(window.CustomEvent, 'function')
      ) {
        e = new CustomEvent(event, { detail: data });
      } else {
        e = document.createEvent('CustomEvent');

        (e as CustomEvent).initCustomEvent(event, true, true, data);
      }
    } else {
      e = document.createEvent('HTMLEvents');

      e.initEvent(event, true, false);
    }

    if (handlersOnly) {
      const storeId = getStoreId(el);
      const listeners = store.getListener(storeId, event);
      const delegatedListeners = store.getListener(storeId, event, true);

      [...listeners, ...delegatedListeners].forEach((listener) => listener.call(el, e));
    } else {
      el.dispatchEvent(e);
    }
  });
};
