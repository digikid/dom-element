import getData, { type StoreGetDataMethod } from '@store/methods/data/get';
import setData, { type StoreSetDataMethod } from '@store/methods/data/set';
import setupData, {
  type StoreSetupDataMethod,
} from '@store/methods/data/setup';
import removeData, {
  type StoreRemoveDataMethod,
} from '@store/methods/data/remove';

export interface IStoreDataMethods {
  readonly getData: StoreGetDataMethod;
  readonly setData: StoreSetDataMethod;
  readonly setupData: StoreSetupDataMethod;
  readonly removeData: StoreRemoveDataMethod;
}

export default {
  getData,
  setData,
  setupData,
  removeData,
} as IStoreDataMethods;
