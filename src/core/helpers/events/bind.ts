import { type CustomEventTarget, type MethodCallback } from '@core/types';
import { store } from '@src/store';
import { validate } from '@src/validator';
import { isMatches } from '@core/helpers/element';

export default (
  el: CustomEventTarget,
  event: string,
  callback: MethodCallback,
  selector?: string,
): void => {
  const storeId = validate<string>(selector, 'selectorString') ? selector : el;

  event.split(' ').forEach((event) => {
    let listener: EventListener;

    if (
      validate<Document>(el, 'document')
      && validate<string>(selector, 'selectorString')
    ) {
      listener = function (this: HTMLElement, e) {
        for (
          let target = e.target as HTMLElement;
          target && target !== this;
          target = target.parentNode as HTMLElement
        ) {
          if (isMatches(target, selector)) {
            callback.call(target, e);

            break;
          }
        }
      };
    } else {
      listener = callback.bind(el);
    }

    el.addEventListener(event, listener);

    store.setHandlers(storeId, event, callback);
    store.setListeners(storeId, event, listener);
  });
};
