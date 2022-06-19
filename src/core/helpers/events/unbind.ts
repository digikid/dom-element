import { DomEventTarget } from '@core/types';
import { store } from '@src/store';
import { validate } from '@src/validator';

export default (el: DomEventTarget, event: string): void => {
  event.split(' ').forEach((event) => {
    store.removeHandlers(el, event);

    const handlers = store.getAllHandlers(event);
    const listeners = store.getAllListeners(event);

    if (!handlers.length) {
      const target = validate<Window>(el, 'window') ? window : document;

      listeners.forEach((listener) => {
        target.removeEventListener(event, listener as EventListener);

        store.removeListeners(target, event);
      });
    }
  });
};
