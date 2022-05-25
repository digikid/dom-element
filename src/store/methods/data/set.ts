import { IDomStore } from '@store/classes/DomStore';
import { getData } from '@store/hooks';

export type DomStoreSetDataMethod = (
  idOrElement: string | HTMLElement,
  key: string,
  value: any
) => void;

export default (function (this: IDomStore, idOrElement, key, value) {
  const data = getData(idOrElement);

  data[key] = value;
} as DomStoreSetDataMethod);
