import { IDomStore } from '@store/classes/DomStore';
import { getListener } from '@store/hooks';

export type DomStoreGetListenerMethod = (
  idOrElement: string | HTMLElement,
  name: string,
  delegated?: boolean
) => EventListener[];

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

  return delegated ? delegatedListeners : listeners;
} as DomStoreGetListenerMethod);
