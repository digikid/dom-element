import * as methods from '@store/methods';

import { IDomStoreMethods } from '@store/methods';

export interface IDomStore extends IDomStoreMethods {}

export class DomStore implements IDomStore {
  private static instance: DomStore;

  private constructor() {}

  public static getInstance(): DomStore {
    if (!DomStore.instance) {
      DomStore.instance = new DomStore();

      if (!window._domElementStore) {
        window._domElementStore = {
          initialized: false,
          data: {},
          fn: {},
          listeners: {},
          delegatedListeners: {},
        };
      }
    }

    return DomStore.instance;
  }

  public readonly get = methods.get;

  public readonly set = methods.set;

  public readonly remove = methods.remove;

  public readonly getData = methods.getData;

  public readonly setData = methods.setData;

  public readonly removeData = methods.removeData;

  public readonly getFn = methods.getFn;

  public readonly setFn = methods.setFn;

  public readonly removeFn = methods.removeFn;

  public readonly getListener = methods.getListener;

  public readonly setListener = methods.setListener;

  public readonly delegateListener = methods.delegateListener;

  public readonly removeListener = methods.removeListener;
}
