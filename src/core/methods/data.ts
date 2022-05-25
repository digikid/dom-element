import { IDomElement } from '@core/classes/DomElement';
import { store } from '@src/store';
import { map } from '@core/hooks';

export type DomDataMethod = (
  key?: string | Record<string, any>,
  value?: any
) => any;

export default (function (this: IDomElement, key?, value?) {
  return map.call(
    this,
    key,
    value,
    (el, key) => store.getData(el, key),
    (el, key, value) => store.setData(el, key, value),
    (el) => store.getData(el),
  );
} as DomDataMethod);
