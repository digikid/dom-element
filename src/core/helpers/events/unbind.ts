import { store } from '@src/store';
import { getStoreId } from '@core/helpers/store';

export default (el: HTMLElement | Window | Document, event: string) => {
  event.split(' ').forEach((event) => {
    const id = getStoreId(el);
    const listeners = store.getListener(id, event);
    const delegatedListeners = store.getListener(id, event, true);

    listeners.forEach((listener) => el.removeEventListener(event, listener));
    delegatedListeners.forEach((listener) => document.removeEventListener(event, listener));

    store.removeListener(id, event);
    store.removeListener(id, event, true);
  });
};
