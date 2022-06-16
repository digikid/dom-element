import get, { DomStoreGetMethod } from '@store/methods/get';
import set, { DomStoreSetMethod } from '@store/methods/set';
import remove, { DomStoreRemoveMethod } from '@store/methods/remove';
import getData, { DomStoreGetDataMethod } from '@store/methods/data/get';
import setData, { DomStoreSetDataMethod } from '@store/methods/data/set';
import removeData, {
  DomStoreRemoveDataMethod,
} from '@store/methods/data/remove';
import getListener, {
  DomStoreGetListenerMethod,
} from '@store/methods/listeners/get';
import setListener, {
  DomStoreSetListenerMethod,
} from '@store/methods/listeners/set';
import delegateListener, {
  DomStoreDelegateListenerMethod,
} from '@store/methods/listeners/delegate';
import removeListener, {
  DomStoreRemoveListenerMethod,
} from '@store/methods/listeners/remove';

export interface IDomStoreMethods {
  get: DomStoreGetMethod;
  set: DomStoreSetMethod;
  remove: DomStoreRemoveMethod;
  getData: DomStoreGetDataMethod;
  setData: DomStoreSetDataMethod;
  removeData: DomStoreRemoveDataMethod;
  getListener: DomStoreGetListenerMethod;
  setListener: DomStoreSetListenerMethod;
  delegateListener: DomStoreDelegateListenerMethod;
  removeListener: DomStoreRemoveListenerMethod;
}

export {
  get,
  set,
  remove,
  getData,
  setData,
  removeData,
  getListener,
  setListener,
  delegateListener,
  removeListener,
};
