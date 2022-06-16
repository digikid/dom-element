import { IDomStore } from '@store/classes/DomStore';

import { getListeners } from '@store/helpers';

export type DomStoreSetListenerMethod = (
  idOrElement: string | HTMLElement,
  name: string,
  listener: EventListener
) => void;

export default (function (this: IDomStore, idOrElement, name, listener) {
  const { listeners } = getListeners(idOrElement, name);

  if (typeof listener === 'function') {
    listeners.push(listener);
  }
} as DomStoreSetListenerMethod);
