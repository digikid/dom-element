import getElementId, {
  DomStoreGetElementIdMethod,
} from '@store/methods/element/getId';

export interface IDomStoreElementMethods {
  getElementId: DomStoreGetElementIdMethod;
}

export default {
  getElementId,
} as IDomStoreElementMethods;
