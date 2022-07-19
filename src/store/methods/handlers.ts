import getEventMethod, {
  type StoreGetHandlersMethod,
} from '@store/methods/handlers/get';
import getAllEventMethod, {
  type StoreGetAllHandlersMethod,
} from '@store/methods/handlers/getAll';
import setupEventMethod, {
  type StoreSetupHandlersMethod,
} from '@store/methods/handlers/setup';
import setEventMethod, {
  type StoreSetHandlersMethod,
} from '@store/methods/handlers/set';
import removeEventMethod, {
  type StoreRemoveHandlersMethod,
} from '@store/methods/handlers/remove';

export interface IStoreHandlersMethods {
  readonly getHandlers: StoreGetHandlersMethod;
  readonly getAllHandlers: StoreGetAllHandlersMethod;
  readonly setHandlers: StoreSetHandlersMethod;
  readonly setupHandlers: StoreSetupHandlersMethod;
  readonly removeHandlers: StoreRemoveHandlersMethod;
  readonly getListeners: StoreGetHandlersMethod;
  readonly getAllListeners: StoreGetAllHandlersMethod;
  readonly setListeners: StoreSetHandlersMethod;
  readonly setupListeners: StoreSetupHandlersMethod;
  readonly removeListeners: StoreRemoveHandlersMethod;
}

export default {
  getHandlers: getEventMethod('handlers'),
  getAllHandlers: getAllEventMethod('handlers'),
  setHandlers: setEventMethod('handlers'),
  setupHandlers: setupEventMethod('handlers'),
  removeHandlers: removeEventMethod('handlers'),
  getListeners: getEventMethod('listeners'),
  getAllListeners: getAllEventMethod('listeners'),
  setListeners: setEventMethod('listeners'),
  setupListeners: setupEventMethod('listeners'),
  removeListeners: removeEventMethod('listeners'),
} as IStoreHandlersMethods;
