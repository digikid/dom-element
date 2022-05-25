import { IDomStore } from '@store/classes/DomStore';

import { getListener } from '@store/hooks';

export type DomStoreDelegateListenerMethod = (
  idOrElement: string | HTMLElement,
  name: string,
  listener: EventListener
) => void;

export default (function (this: IDomStore, idOrElement, name, listener) {
  const { delegatedListeners } = getListener.apply(this, [idOrElement, name]);

  if (typeof listener === 'function') {
    delegatedListeners.push(listener);
  }
} as DomStoreDelegateListenerMethod);
