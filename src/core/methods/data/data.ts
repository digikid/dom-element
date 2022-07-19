import { DomElement } from '@core/classes/DomElement';
import { store } from '@src/store';
import { resolve } from '@core/helpers/methods';

export type DataMethod = (
  key?: string | Record<string, any>,
  value?: any
) => DomElement | any;

export default resolve<any>(
  (el, name) => store.getData(el, name),
  (el, name, value) => store.setData(el, name, value),
) as DataMethod;
