import { IDomStore } from '@store/classes/DomStore';
import { getListener } from '@store/hooks';

export type DomStoreRemoveListenerMethod = (
  idOrElement: string | HTMLElement,
  name: string,
  delegated?: boolean
) => void;

export default (function (
  this: IDomStore,
  idOrElement,
  name,
  delegated = false,
) {
  const { listeners, delegatedListeners } = getListener.apply(this, [
    idOrElement,
    name,
  ]);

  if (delegated) {
    delegatedListeners.length = 0;
  } else {
    listeners.length = 0;
  }
} as DomStoreRemoveListenerMethod);
