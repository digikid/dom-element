import getEventMethod, {
  DomStoreGetHandlersMethod,
} from '@store/methods/handlers/get';
import getAllEventMethod, {
  DomStoreGetAllHandlersMethod,
} from '@store/methods/handlers/getAll';
import setupEventMethod, {
  DomStoreSetupHandlersMethod,
} from '@store/methods/handlers/setup';
import setEventMethod, {
  DomStoreSetHandlersMethod,
} from '@store/methods/handlers/set';
import removeEventMethod, {
  DomStoreRemoveHandlersMethod,
} from '@store/methods/handlers/remove';

export interface IDomStoreHandlersMethods {
  readonly getHandlers: DomStoreGetHandlersMethod;
  readonly getAllHandlers: DomStoreGetAllHandlersMethod;
  readonly setHandlers: DomStoreSetHandlersMethod;
  readonly setupHandlers: DomStoreSetupHandlersMethod;
  readonly removeHandlers: DomStoreRemoveHandlersMethod;
  readonly getListeners: DomStoreGetHandlersMethod;
  readonly getAllListeners: DomStoreGetAllHandlersMethod;
  readonly setListeners: DomStoreSetHandlersMethod;
  readonly setupListeners: DomStoreSetupHandlersMethod;
  readonly removeListeners: DomStoreRemoveHandlersMethod;
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
} as IDomStoreHandlersMethods;
