import { DomStore } from '@store/classes/DomStore';

export type DomListeners = Record<string, Record<string, EventListener[]>>;

export interface IDomStorage {
  initialized: boolean;
  data: Record<string, any>;
  listeners: DomListeners;
  delegatedListeners: DomListeners;
  fn: Record<string, Function>;
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
