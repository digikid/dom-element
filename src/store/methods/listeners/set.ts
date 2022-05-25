import { IDomStore } from '@store/classes/DomStore';

import { getListener } from '@store/hooks';

export type DomStoreSetListenerMethod = (
  idOrElement: string | HTMLElement,
  name: string,
  listener: EventListener
) => void;

export default (function (this: IDomStore, idOrElement, name, listener) {
  const { listeners } = getListener.apply(this, [idOrElement, name]);

  if (typeof listener === 'function') {
    listeners.push(listener);
  }
} as DomStoreSetListenerMethod);
