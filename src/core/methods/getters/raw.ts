import { type IDomElement } from '@core/classes/DomElement';
import { reduce } from '@core/hooks';

export type RawMethod = () => HTMLElement | null;

export default (function (this: IDomElement) {
  return reduce.call(this, (el) => el);
} as RawMethod);
