import { DomEventTarget, DomEventData } from '@core/types';
import { some, validate } from '@src/validator';
import { store } from '@src/store';

export default (
  el: DomEventTarget,
  event: string,
  data?: DomEventData,
  handlersOnly = false,
): void => {
  const params = {
    bubbles: true,
    cancelable: true,
  } as const;

  event.split(' ').forEach((event) => {
    let e: Event | CustomEvent;

    if (
      some<DomEventData>(data, 'object', 'array', 'string', 'number', 'boolean')
    ) {
      if (
        validate(window.CustomEvent)
        && validate<Function>(window.CustomEvent, 'function')
      ) {
        e = new CustomEvent(event, {
          detail: data,
          ...params,
        });
      } else {
        e = document.createEvent('CustomEvent');

        (e as CustomEvent).initCustomEvent(
          event,
          params.bubbles,
          params.cancelable,
          data,
        );
      }
    } else {
      e = document.createEvent('HTMLEvents');

      e.initEvent(event, params.bubbles, params.cancelable);
    }

    if (handlersOnly) {
      store.getHandlers(el, event).forEach((handler) => handler.call(el, e));
    } else {
      el.dispatchEvent(e);
    }
  });
};
