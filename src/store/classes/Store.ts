import methods, { type IStoreMethods } from '@store/methods';

export interface IStore extends IStoreMethods {
}

export class Store implements IStore {
  private static instance: Store;

  private constructor() {
  }

  public static getInstance(): Store {
    if (!Store.instance) {
      Store.instance = new Store();

      if (!window._domElementStore) {
        window._domElementStore = {
          initialized: false,
          data: {},
          fn: {},
          handlers: {},
          listeners: {},
        };
      }
    }

    return Store.instance;
  }

  public readonly get = methods.get;

  public readonly init = methods.init;

  public readonly set = methods.set;

  public readonly remove = methods.remove;

  public readonly getElementId = methods.getElementId;

  public readonly getData = methods.getData;

  public readonly setData = methods.setData;

  public readonly setupData = methods.setupData;

  public readonly removeData = methods.removeData;

  public readonly getHandlers = methods.getHandlers;

  public readonly getAllHandlers = methods.getAllHandlers;

  public readonly setHandlers = methods.setHandlers;

  public readonly setupHandlers = methods.setupHandlers;

  public readonly removeHandlers = methods.removeHandlers;

  public readonly getListeners = methods.getListeners;

  public readonly getAllListeners = methods.getAllListeners;

  public readonly setListeners = methods.setListeners;

  public readonly setupListeners = methods.setupListeners;

  public readonly removeListeners = methods.removeListeners;
}
