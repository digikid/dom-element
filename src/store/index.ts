import { DomStore } from '@store/classes/DomStore';

export type DomStoreId = string | HTMLElement | Window | Document | EventTarget;
export type DomStoreHandlers = 'handlers' | 'listeners';
export type DomStoreHandlersSetup = 'setupHandlers' | 'setupListeners';

export type DomStoreDataObject = Record<string, any>;
export type DomStoreFnObject = Record<string, any>;
export type DomStoreHandlersObject<T> = Record<string, Record<string, T[]>>;

export interface IDomStorage {
  initialized: boolean;
  data: DomStoreDataObject;
  handlers: DomStoreHandlersObject<Function>;
  listeners: DomStoreHandlersObject<EventListener>;
  fn: DomStoreFnObject;
}

declare global {
  interface Window {
    _domElementStore: IDomStorage;
  }

  interface HTMLElement {
    _domElementId: string;
  }
}

export const store = DomStore.getInstance();
