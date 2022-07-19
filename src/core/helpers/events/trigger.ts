import { CustomEventTarget, CustomEventData } from '@core/types';
import { some, validate } from '@src/validator';
import { store } from '@src/store';
import { isMatches } from '@core/helpers/element';

export default (
  el: CustomEventTarget,
  event: string,
  data?: CustomEventData,
  handlersOnly = false,
): void => {
  const storeId = store.getElementId(el);

  const params = {
    bubbles: true,
    cancelable: true,
  } as const;

  event.split(' ').forEach((event) => {
    let e: Event | CustomEvent;

    if (
      some<CustomEventData>(
        data,
        'object',
        'array',
        'string',
        'number',
        'boolean',
      )
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
      const storeHandlers = store.getAllHandlers(event);

      const handlers = Object.keys(storeHandlers)
        .filter((id) => {
          const check = storeId === id;

          return some<Window | Document>(el, 'window', 'documentElement')
            ? check
            : check || isMatches(el, id);
        })
        .reduce((acc, id) => [...acc, ...storeHandlers[id]], [] as Function[]);

      handlers.forEach((handler) => handler.call(el, e));
    } else {
      el.dispatchEvent(e);
    }
  });
};
