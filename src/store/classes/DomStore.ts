import methods, { IDomStoreMethods } from '@store/methods';

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
          handlers: {},
          listeners: {},
        };
      }
    }

    return DomStore.instance;
  }

  public readonly get = methods.get;

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
