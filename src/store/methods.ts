import dataMethods, { type IStoreDataMethods } from '@store/methods/data';
import elementMethods, {
  type IStoreElementMethods,
} from '@store/methods/element';
import handlersMethods, {
  type IStoreHandlersMethods,
} from '@store/methods/handlers';
import rootMethods, { type IStoreRootMethods } from '@store/methods/root';

export interface IStoreMethods
  extends IStoreDataMethods,
  IStoreElementMethods,
  IStoreHandlersMethods,
  IStoreRootMethods {}

export default {
  ...dataMethods,
  ...elementMethods,
  ...handlersMethods,
  ...rootMethods,
} as IStoreMethods;
