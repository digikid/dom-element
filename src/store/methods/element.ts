import getElementId, {
  type StoreGetElementIdMethod,
} from '@store/methods/element/getId';

export interface IStoreElementMethods {
  getElementId: StoreGetElementIdMethod;
}

export default {
  getElementId,
} as IStoreElementMethods;
