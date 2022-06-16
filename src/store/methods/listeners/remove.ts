import { IDomStore } from '@store/classes/DomStore';
import { getListeners } from '@store/helpers';

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
  const { listeners, delegatedListeners } = getListeners(idOrElement, name);

  const target = delegated ? delegatedListeners : listeners;

  target.length = 0;
} as DomStoreRemoveListenerMethod);
