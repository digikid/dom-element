import exists, { DomExistsMethod } from '@core/methods/getters/exists';
import get, { DomGetMethod } from '@core/methods/getters/get';
import hasClass, { DomHasClassMethod } from '@core/methods/getters/hasClass';
import index, { DomIndexMethod } from '@core/methods/getters/index';
import is, { DomIsMethod } from '@core/methods/getters/is';
import map, { DomMapMethod } from '@core/methods/getters/map';
import raw, { DomRawMethod } from '@core/methods/getters/raw';

export interface IDomGettersMethods {
  readonly exists: DomExistsMethod;
  readonly get: DomGetMethod;
  readonly hasClass: DomHasClassMethod;
  readonly index: DomIndexMethod;
  readonly is: DomIsMethod;
  readonly map: DomMapMethod;
  readonly raw: DomRawMethod;
}

export default {
  exists,
  get,
  hasClass,
  index,
  is,
  map,
  raw,
} as IDomGettersMethods;
