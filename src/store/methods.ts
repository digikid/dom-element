import dataMethods, { IDomStoreDataMethods } from '@store/methods/data';
import elementMethods, {
  IDomStoreElementMethods,
} from '@store/methods/element';
import handlersMethods, {
  IDomStoreHandlersMethods,
} from '@store/methods/handlers';
import rootMethods, { IDomStoreRootMethods } from '@store/methods/root';

export interface IDomStoreMethods
  extends IDomStoreDataMethods,
  IDomStoreElementMethods,
  IDomStoreHandlersMethods,
  IDomStoreRootMethods {}

export default {
  ...dataMethods,
  ...elementMethods,
  ...handlersMethods,
  ...rootMethods,
} as IDomStoreMethods;
