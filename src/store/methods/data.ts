import getData, { DomStoreGetDataMethod } from '@store/methods/data/get';
import setData, { DomStoreSetDataMethod } from '@store/methods/data/set';
import setupData, { DomStoreSetupDataMethod } from '@store/methods/data/setup';
import removeData, {
  DomStoreRemoveDataMethod,
} from '@store/methods/data/remove';

export interface IDomStoreDataMethods {
  readonly getData: DomStoreGetDataMethod;
  readonly setData: DomStoreSetDataMethod;
  readonly setupData: DomStoreSetupDataMethod;
  readonly removeData: DomStoreRemoveDataMethod;
}

export default {
  getData,
  setData,
  setupData,
  removeData,
} as IDomStoreDataMethods;
