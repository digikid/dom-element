import { IDomStore } from '@store/classes/DomStore';

import { getListeners } from '@store/helpers';

export type DomStoreDelegateListenerMethod = (
  idOrElement: string | HTMLElement,
  name: string,
  listener: EventListener
) => void;

export default (function (this: IDomStore, idOrElement, name, listener) {
  const { delegatedListeners } = getListeners(idOrElement, name);

  if (typeof listener === 'function') {
    delegatedListeners.push(listener);
  }
} as DomStoreDelegateListenerMethod);
