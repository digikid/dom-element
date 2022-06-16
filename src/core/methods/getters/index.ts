import { IDomElement } from '@core/classes/DomElement';
import { reduce } from '@core/hooks';
import { getIndex } from '@core/helpers/element';

export type DomIndexMethod = () => number;

export default (function (this: IDomElement) {
  return reduce.call(this, (el) => getIndex(el), -1);
} as DomIndexMethod);
