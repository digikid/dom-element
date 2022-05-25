import { IDomElement } from '@core/classes/DomElement';
import { store } from '@src/store';
import { validate } from '@src/validator';

export type DomOffMethod = (name: string) => IDomElement;

export default (function (this: IDomElement, name) {
  if (validate<string>(name, 'string', 'truthy')) {
    if (validate<Window>(this.selector, 'window')) {
      const listeners = store.getListener('window', name);

      listeners.forEach((listener) => window.removeEventListener(name, listener));

      store.removeListener('window', name);

      return this;
    }

    return this.each((el) => {
      const listeners = store.getListener(el, name);
      const delegatedListeners = store.getListener(el, name, true);

      listeners.forEach((listener) => el.removeEventListener(name, listener));
      delegatedListeners.forEach((listener) => document.removeEventListener(name, listener));

      store.removeListener(el, name);
      store.removeListener(el, name, true);
    });
  }

  return this;
} as DomOffMethod);
