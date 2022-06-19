import { IDomStore } from '@store/classes/DomStore';

export type DomStoreSetDataMethod = (
  idOrElement: string | HTMLElement,
  key: string,
  value: any
) => void;

export default (function (this: IDomStore, idOrElement, key, value) {
  const data = this.setupData(idOrElement);

  data[key] = value;
} as DomStoreSetDataMethod);
