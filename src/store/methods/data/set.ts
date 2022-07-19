import { type IStore } from '@store/classes/Store';

export type StoreSetDataMethod = (
  idOrElement: string | HTMLElement,
  key: string,
  value: any
) => void;

export default (function (this: IStore, idOrElement, key, value) {
  const data = this.setupData(idOrElement);

  data[key] = value;
} as StoreSetDataMethod);
