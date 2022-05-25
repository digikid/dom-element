import { IDomElement } from '@core/classes/DomElement';
import { reduce } from '@core/hooks';

export type DomRawMethod = () => HTMLElement | null;

export default (function (this: IDomElement) {
  return reduce.call(this, (el) => el);
} as DomRawMethod);
