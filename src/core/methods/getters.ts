import exists, { type ExistsMethod } from '@core/methods/getters/exists';
import get, { type GetMethod } from '@core/methods/getters/get';
import hasClass, { type HasClassMethod } from '@core/methods/getters/hasClass';
import index, { type IndexMethod } from '@core/methods/getters/index';
import is, { type IsMethod } from '@core/methods/getters/is';
import map, { type MapMethod } from '@core/methods/getters/map';
import raw, { type RawMethod } from '@core/methods/getters/raw';

export interface IGettersMethods {
  readonly exists: ExistsMethod;
  readonly get: GetMethod;
  readonly hasClass: HasClassMethod;
  readonly index: IndexMethod;
  readonly is: IsMethod;
  readonly map: MapMethod;
  readonly raw: RawMethod;
}

export default {
  exists,
  get,
  hasClass,
  index,
  is,
  map,
  raw,
} as IGettersMethods;
