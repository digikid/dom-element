import { Store } from '@store/classes/Store';

export type StoreId = string | HTMLElement | Window | Document | EventTarget;
export type StoreHandlers = 'handlers' | 'listeners';
export type StoreHandlersSetup = 'setupHandlers' | 'setupListeners';

export type StoreDataObject = Record<string, any>;
export type StoreFnObject = Record<string, any>;
export type StoreHandlersObject<T> = Record<string, Record<string, T[]>>;

export interface IStorage {
  initialized: boolean;
  data: StoreDataObject;
  handlers: StoreHandlersObject<Function>;
  listeners: StoreHandlersObject<EventListener>;
  fn: StoreFnObject;
}

declare global {
  interface Window {
    _domElementStore: IStorage;
  }

  interface HTMLElement {
    _domElementId: string;
  }
}

export const store = Store.getInstance();
