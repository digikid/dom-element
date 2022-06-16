import { IDomStore } from '@store/classes/DomStore';
import { getListeners } from '@store/helpers';

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
  const { listeners, delegatedListeners } = getListeners(idOrElement, name);

  return delegated ? delegatedListeners : listeners;
} as DomStoreGetListenerMethod);
